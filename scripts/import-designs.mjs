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
    "E-Commerce & Business Websites in Bangladesh | Zentic Lab",
    "No online shop or website yet? We build fast, secure websites that help businesses in Bangladesh sell more. Clear plan and price in writing.",
  ],
  services: [
    "ServicesDesign",
    "Website Development Services in Bangladesh | Zentic Lab",
    "See our e-commerce and business website services. Each package includes a logo, custom design, content writing and a fast, secure website. See starting prices.",
  ],
  ecommerce: [
    "EcommerceDesign",
    "E-Commerce Website Development in Bangladesh | Zentic Lab",
    "Sell online to customers all over Bangladesh. We build custom, fast and secure e-commerce websites. You manage products and orders yourself.",
  ],
  business: [
    "BusinessDesign",
    "Business Website Development in Bangladesh | Zentic Lab",
    "Look trusted online and get more leads. We build custom, fast and secure websites for agencies, consultants and professionals.",
  ],
  "hosting-care": [
    "HostingCareDesign",
    "Website Hosting & Care Plans in Bangladesh | Zentic Lab",
    "Keep your website fast, safe and up to date. Choose hosting, content updates or security care. Take only what you need, one plan or all.",
  ],
  "domain-hosting-plans": [
    "DomainHostingDesign",
    "Domain & Hosting Plans in Bangladesh | Zentic Lab",
    "A .com domain, fast hosting and free SSL, all set up by us. The domain is registered in your name, and the price stays the same every year.",
  ],
  "content-update-plans": [
    "ContentUpdateDesign",
    "Website Content Update Plans in Bangladesh | Zentic Lab",
    "Need to change text, photos or products on your website? Our developers make updates within 24 hours. Choose 2 or 4 hours of help per month.",
  ],
  "security-maintenance-plans": [
    "SecurityMaintenanceDesign",
    "Website Security & Maintenance Plans | Zentic Lab",
    "Get monthly software updates, backups and security checks. Choose Essential Care or Complete Care with 24/7 monitoring.",
  ],
  about: [
    "AboutDesign",
    "About Zentic Lab | Website Team in Dhaka, Bangladesh",
    "A small team in Dhaka. You talk directly to the people who build your website. We never sell you more than you need, and put everything in writing.",
  ],
  contact: [
    "ContactDesign",
    "Contact Zentic Lab | Book a Free Project Call",
    "Tell us about your website project on WhatsApp or by email, or book a free project call. We reply within 24 hours. Based in Mirpur, Dhaka.",
  ],
};
const blobs = {
  "/_blob/337c5d55f8af640c708e85793ce390fb": "/images/t-shirt.webp",
  "/_blob/96e9917786567d6a55f151918b6bcdc7": "/images/shoes.webp",
  "/_blob/4e94989387f9aa39cd748549f204dde9": "/images/headphones.webp",
  "/_blob/0a215d6b296086127d1678a07c9aabb0": "/images/bag.webp",
};
const socialProfiles = new Map([
  ["Facebook", "https://www.facebook.com/ZenticLab"],
  ["Instagram", "https://www.instagram.com/zenticlab"],
]);
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
    const profile = socialProfiles.get($(el).attr("aria-label"));
    if (profile) {
      $(el)
        .attr("href", profile)
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer");
      return;
    }
    // Keep artwork for social profiles without a URL.
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
    item.removeAttr("open");
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
    $(el).children("input").removeAttr("checked");
  });
  $("details").removeAttr("open");
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
  const routePath = "/" + path.relative(path.join(root, "src/app"), route).split(path.sep).join("/");
  const canonical = new URL(routePath, "https://zenticlab.com").href;
  await writeTsx(
    path.join(route, "page.tsx"),
    `import type { Metadata } from 'next';\nimport ${name} from '@/components/designs/${name}';\nexport const metadata: Metadata = {title:{absolute:${JSON.stringify(title)}},description:${JSON.stringify(description)},alternates:{canonical:${JSON.stringify(canonical)}}};\nexport default function Page(){return <${name} />;}`,
  );
  console.log("Imported " + routePath);
}
await fs.writeFile(
  path.join(root, "src/app/designs.css"),
  [...styles].join("\n"),
);
