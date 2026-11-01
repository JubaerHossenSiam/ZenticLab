import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { load } from "cheerio";
import { attributesToProps } from "html-react-parser";
import { format } from "prettier";
import { prepareResponsiveDesign } from "./responsive-design.mjs";

// Convert the supplied exports into editable React source. The HTML designs remain intact.
const root = process.cwd();
const source = path.join(root, "zenticlab-website-design");
const generated = path.join(root, "src/components/designs");
await fs.mkdir(generated, { recursive: true });
await fs.mkdir(path.join(root, "public/images"), { recursive: true });
const pages = {
  index: [
    "HomeDesign",
    "Zentic Lab | Websites for Businesses in Bangladesh",
    "Professional e-commerce and business websites, hosting, and website care in Bangladesh.",
  ],
  services: [
    "ServicesDesign",
    "Website Services",
    "Explore e-commerce and business website services from Zentic Lab in Dhaka, Bangladesh.",
  ],
  ecommerce: [
    "EcommerceDesign",
    "E-Commerce Website Packages",
    "Compare online store packages and launch a professional e-commerce website for your business.",
  ],
  business: [
    "BusinessDesign",
    "Business Website Packages",
    "Build a professional business website that helps new clients find and trust your business.",
  ],
  "hosting-care": [
    "HostingCareDesign",
    "Hosting & Care",
    "Keep your website fast, secure, and up to date with Zentic Lab hosting and website care.",
  ],
  "domain-hosting-plans": [
    "DomainHostingDesign",
    "Domain & Hosting Plans",
    "Compare reliable hosting plans for your website, with help from our team in Dhaka.",
  ],
  "content-update-plans": [
    "ContentUpdateDesign",
    "Content Update Plans",
    "Get expert help updating website text, images, products, and content.",
  ],
  "security-maintenance-plans": [
    "SecurityMaintenanceDesign",
    "Security & Maintenance Plans",
    "Protect your website with regular updates, backups, and security maintenance.",
  ],
  about: [
    "AboutDesign",
    "About Us",
    "Meet the Zentic Lab team, a small and focused website studio in Dhaka built on quality and honesty.",
  ],
  contact: [
    "ContactDesign",
    "Contact Us",
    "Talk to Zentic Lab about your website project through WhatsApp or email. Based in Mirpur, Dhaka.",
  ],
};
const blobs = {
  "/_blob/337c5d55f8af640c708e85793ce390fb": "/images/t-shirt.jpg",
  "/_blob/96e9917786567d6a55f151918b6bcdc7": "/images/shoes.jpg",
  "/_blob/4e94989387f9aa39cd748549f204dde9": "/images/headphones.jpg",
  "/_blob/0a215d6b296086127d1678a07c9aabb0": "/images/bag.jpg",
};
const voids = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function jsx(node) {
  if (node.type === "text")
    return node.data.trim()
      ? `{${JSON.stringify(node.data)}}`
      : node.data.includes("\n")
        ? "\n"
        : " ";
  if (node.type !== "tag") return "";
  const props = attributesToProps(node.attribs, {
    preserveCustomAttributes: true,
  });
  if ("checked" in props) {
    props.defaultChecked = props.checked;
    delete props.checked;
  }
  let tag = node.name;
  if (tag === "a" && props.href?.startsWith("/")) tag = "Link";
  // Object spreads preserve CSS custom properties and every SVG attribute accurately.
  const attrs = Object.keys(props).length
    ? ` {...${JSON.stringify(props)}}`
    : "";
  if (voids.has(node.name)) return `<${tag}${attrs} />`;
  return `<${tag}${attrs}>${(node.children || []).map(jsx).join("")}</${tag}>`;
}
async function writeTsx(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(
    file,
    await format(content, { parser: "typescript", printWidth: 110 }),
  );
}
const styles = new Set();
for (const [slug, [name, title, description]] of Object.entries(pages)) {
  const $ = load(await fs.readFile(path.join(source, slug + ".html"), "utf8"), {
    xml: {
      xmlMode: false,
      decodeEntities: true,
      lowerCaseAttributeNames: false,
      lowerCaseTags: false,
    },
  });
  $("style").each((_, el) => styles.add($(el).text()));
  $('a[href$=".html"]').each((_, el) => {
    const value = $(el).attr("href");
    $(el).attr(
      "href",
      value === "index.html"
        ? "/"
        : value === "ecommerce.html"
          ? "/services/ecommerce"
          : value === "business.html"
            ? "/services/business"
            : "/" + value.replace(".html", ""),
    );
  });
  $('a[href="https://wa.me/8801814090134"]')
    .attr("target", "_blank")
    .attr("rel", "noopener noreferrer");
  $('a[href="#"]').each((_, el) => {
    if (!$(el).hasClass("zl-social")) {
      $(el)
        .attr(
          "href",
          "https://calendly.com/zenticlab/30min",
        )
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer");
      return;
    }
    // The exports contain no social profile URLs. Keep their artwork without a dead anchor.
    el.name = "span";
    $(el)
      .removeAttr("href")
      .attr("role", "img")
      .attr("title", `${$(el).attr("aria-label")} profile coming soon`);
  });
  for (const img of $("img").toArray()) {
    const src = $(img).attr("src");
    if (blobs[src]) $(img).attr("src", blobs[src]);
    else if (src?.startsWith("data:image/")) {
      const [, type, data] = src.match(/^data:image\/(\w+);base64,(.*)$/s);
      const filename =
        crypto.createHash("sha256").update(data).digest("hex").slice(0, 12) +
        "." +
        (type === "jpeg" ? "jpg" : type);
      await fs.writeFile(
        path.join(root, "public/images", filename),
        Buffer.from(data, "base64"),
      );
      $(img).attr("src", "/images/" + filename);
    }
    $(img).attr("loading", "lazy").attr("decoding", "async");
  }
  $('[style*="container-type: inline-size"]')
    .attr("aria-hidden", "true")
    .find("button")
    .each((_, el) => {
      el.name = "span";
      $(el)
        .removeAttr("type")
        .attr(
          "style",
          $(el).attr("style") +
            "; display:flex; align-items:center; justify-content:center",
        );
    });
  $('section > div[style*="max-width"]').addClass("zl-section-inner");
  $('section [style*="grid-template-columns"]').each((_, el) => {
    if (!$(el).parents('[style*="container-type"]').length) {
      $(el).addClass("zl-content-grid");
      if (/grid-template-columns:\s*repeat\([34],/.test($(el).attr("style")))
        $(el).addClass("zl-card-grid");
    }
  });
  $('section div[style*="justify-content: space-between"]').each((_, el) => {
    if (
      $(el).children("a").length &&
      !$(el).parents('[style*="container-type"]').length
    )
      $(el).addClass("zl-callout");
  });
  $(".zl-fq").each((_, el) => {
    const item = $(el),
      input = item.children("input"),
      head = item.children(".zl-fq-head");
    el.name = "details";
    if (input.is("[checked]")) item.attr("open", "");
    input.remove();
    head[0].name = "summary";
    head.find("label").each((_, label) => {
      label.name = "span";
      $(label).removeAttr("for").removeAttr("aria-label");
    });
  });
  $(".zl-qa").each((_, el) => {
    const label = $(el).find("h3").first().text().trim();
    if (label) $(el).children("input").attr("aria-label", label);
  });
  prepareResponsiveDesign($);
  const wrapper = $("body > div").first();
  if (slug === "index") {
    const logo = wrapper
      .find('header a[aria-label="Zentic Lab home"] svg')
      .first();
    await writeTsx(
      path.join(generated, "Logo.tsx"),
      `export default function Logo() {return (${jsx(logo[0])});}`,
    );
    const footer = wrapper.children("footer");
    footer.find('[style*="grid-template-columns"]').addClass("zl-footer-grid");
    await writeTsx(
      path.join(generated, "Footer.tsx"),
      `import Link from 'next/link';\nexport default function Footer(){return (${jsx(footer[0])});}`,
    );
  }
  const content = wrapper
    .children()
    .toArray()
    .filter((el) => !["header", "footer"].includes(el.name))
    .map(jsx)
    .join("\n");
  await writeTsx(
    path.join(generated, name + ".tsx"),
    `import Link from 'next/link';\nexport default function ${name}(){return (<>${content}</>);}`,
  );
  const route =
    slug === "index"
      ? path.join(root, "src/app")
      : path.join(root, "src/app", ...(["ecommerce", "business"].includes(slug) ? ["services", slug] : [slug]));
  await writeTsx(
    path.join(route, "page.tsx"),
    `import type { Metadata } from 'next';\nimport ${name} from '@/components/designs/${name}';\nexport const metadata: Metadata = {title:${JSON.stringify(title)},description:${JSON.stringify(description)}};\nexport default function Page(){return <${name} />;}`,
  );
  console.log("Imported /" + path.relative(path.join(root, "src/app"), route).split(path.sep).join("/"));
}
await fs.writeFile(
  path.join(root, "src/app/designs.css"),
  [...styles].join("\n"),
);
