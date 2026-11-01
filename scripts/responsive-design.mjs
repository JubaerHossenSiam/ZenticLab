// Add semantic hooks and proportional artwork to the supplied desktop exports.
// Keep these changes in the importer so regenerating pages retains responsiveness.
export function prepareResponsiveDesign($) {
  const readStyle = (el) =>
    new Map(
      ($(el).attr("style") || "")
        .split(";")
        .filter(Boolean)
        .map((part) => {
          const colon = part.indexOf(":");
          return [part.slice(0, colon).trim(), part.slice(colon + 1).trim()];
        }),
    );
  const setStyle = (el, changes) => {
    const values = readStyle(el);
    for (const [key, value] of Object.entries(changes)) {
      if (value === null) values.delete(key);
      else values.set(key, value);
    }
    $(el).attr(
      "style",
      [...values].map(([key, value]) => `${key}: ${value}`).join("; "),
    );
  };
  const cqw = (value, width) =>
    `${Number(((Number(value) / width) * 100).toFixed(4))}cqw`;
  function scaleArtwork(art, width, removeFloors = false) {
    // Illustration grids must keep their own composition at every breakpoint.
    art
      .find(".zl-content-grid, .zl-card-grid, .zl-callout")
      .removeClass("zl-content-grid zl-card-grid zl-callout");
    art.find("[style]").each((_, el) => {
      let style = $(el).attr("style");
      if (removeFloors)
        style = style.replace(/max\(\s*[\d.]+px\s*,\s*([\d.]+cqw)\s*\)/g, "$1");
      style = style.replace(/(-?[\d.]+)px\b/g, (_, px) => cqw(px, width));
      $(el).attr("style", style);
    });
    // SVG paths scale with their viewBox; scale each SVG's outer box with the composition.
    art.find("svg, img").each((_, el) => {
      const style = readStyle(el);
      for (const dimension of ["width", "height"]) {
        const value = $(el).attr(dimension);
        if (value && /^[\d.]+$/.test(value) && !style.has(dimension)) {
          setStyle(el, { [dimension]: cqw(value, width) });
        }
      }
    });
  }

  const sections = $("body > div").first().children("section");
  sections.addClass("zl-section");
  const hero = sections.first().addClass("zl-hero");
  const heroInner = hero.children("div").first();
  const heroVisual = heroInner
    .children("div")
    .filter(
      (_, el) =>
        !$(el).find("h1, h2, h3, a").length && $(el).find("svg").length,
    )
    .last();
  if (heroVisual.length) {
    heroVisual.addClass("zl-hero-visual").attr("aria-hidden", "true");
    if (heroVisual.is('[style*="container-type"]')) {
      heroVisual.addClass("zl-mockup");
      scaleArtwork(heroVisual, 544, true);
    }
  }

  const ctaSection = sections.last().addClass("zl-cta-section");
  const cta = ctaSection
    .children("div")
    .children("div")
    .first()
    .addClass("zl-cta");
  const art = cta.children("div").first();
  const copy = cta.children("div").last().addClass("zl-cta-copy");
  if (art.length && art[0] !== copy[0]) {
    const style = readStyle(art[0]);
    const width = parseFloat(style.get("width"));
    const height = parseFloat(style.get("height"));
    art.addClass("zl-cta-visual").attr("aria-hidden", "true");
    scaleArtwork(art, width);
    setStyle(art[0], {
      position: "relative",
      right: null,
      top: null,
      transform: null,
      width: "100%",
      height: "auto",
      "aspect-ratio": `${width} / ${height}`,
      "container-type": "inline-size",
      "max-width": `${width}px`,
    });
    // Keep the desktop copy first; CSS places the artwork first in stacked layouts.
    copy.insertBefore(art);
  }
  setStyle(cta[0], { padding: null });

  const inArtwork = (el) =>
    $(el).closest(".zl-hero-visual, .zl-cta-visual").length > 0 ||
    $(el).parents("svg").length > 0;
  // Give card artwork its own responsive scale, separate from page illustrations.
  $("section svg[width][height]").each((_, el) => {
    if (inArtwork(el)) return;
    const width = Number($(el).attr("width"));
    const height = Number($(el).attr("height"));
    if (width >= 90 && width <= 240 && height >= 60 && height <= 180) {
      $(el).addClass("zl-card-illustration");
      $(el).parent().addClass("zl-illustrated-card");
      $(el).parent().children("h3").addClass("zl-illustration-title");
    }
  });
  $("section h3").each((_, el) => {
    if (
      inArtwork(el) ||
      !["E-Commerce Website", "Business Website"].includes($(el).text().trim())
    )
      return;
    const copy = $(el).parent();
    const header = copy.parent();
    const icon = header.children("span").first();
    if (!copy.children("p").length || !icon.find("svg").length) return;
    header.addClass("zl-service-heading");
    header.parent().parent().addClass("zl-services-grid");
    icon.addClass("zl-service-heading-icon");
    copy.addClass("zl-service-heading-copy");
    copy.children("p").addClass("zl-service-heading-description");
  });
  $("section h3").each((_, el) => {
    if (inArtwork(el)) return;
    const copy = $(el).parent();
    const header = copy.parent();
    const icon = header.children("span").first();
    if (
      header.hasClass("zl-service-heading") ||
      !copy.children("p").length ||
      !icon.find("svg").length
    )
      return;
    header.addClass("zl-info-heading");
    icon.addClass("zl-info-heading-icon");
    copy.addClass("zl-info-heading-copy");
    copy.children("p").addClass("zl-info-heading-description");
  });
  $("section img").each((_, el) => {
    if (inArtwork(el)) return;
    const frame = $(el).parent();
    if (
      /aspect-ratio:\s*1\s*\/\s*1/.test(frame.attr("style") || "") &&
      frame.parent().children("h3").length
    ) {
      frame.addClass("zl-team-photo");
      frame.parent().addClass("zl-team-card");
      frame.parent().parent().addClass("zl-team-grid");
    }
  });
  const footer = $("footer");
  const footerGrid = footer.find('div[style*="grid-template-columns"]').first();
  footerGrid.children("div").first().addClass("zl-footer-brand");
  footerGrid.children("div").last().addClass("zl-footer-contact");
  footerGrid.find("ul").addClass("zl-footer-list");
  footerGrid.next("div").addClass("zl-footer-bottom");
  $("section [style]").each((_, el) => {
    if (inArtwork(el)) return;
    const style = readStyle(el);
    const size = parseFloat(style.get("font-size"));
    const margin = parseFloat(style.get("margin-top"));
    if (
      margin >= 48 ||
      /^5[6-9]px auto 0|^64px auto 0/.test(style.get("margin") || "")
    )
      $(el).addClass("zl-section-content");
    if (["p", "li", "span"].includes(el.name) && size >= 17 && size <= 24)
      $(el).addClass("zl-body-copy");
    if (["div", "span"].includes(el.name) && size >= 32)
      $(el).addClass("zl-price");
    if (el.name === "h3") {
      $(el).addClass("zl-card-title");
      setStyle(el, { "--card-title-size": `${Math.min(size || 22, 22)}px` });
      if (style.has("min-height")) $(el).addClass("zl-fixed-height-title");
    }
    if (style.has("grid-template-columns")) {
      const columns = style.get("grid-template-columns");
      if (!columns.startsWith("repeat(")) $(el).addClass("zl-split-grid");
      // A grid of 24px icon squares belongs to an illustration, not to content cards.
      if (/repeat\(4,\s*24px\)/.test(columns))
        $(el)
          .addClass("zl-icon-grid")
          .removeClass("zl-content-grid zl-card-grid");
    }
    if (
      el.name === "div" &&
      parseFloat(style.get("border-radius")) >= 20 &&
      parseFloat(style.get("padding")) >= 24
    )
      $(el).addClass("zl-card-panel");
    if (
      el.name === "div" &&
      (style.has("border-left") || style.has("border-right"))
    )
      $(el).addClass("zl-divided-card");
    if (el.name === "p" && style.has("min-height"))
      $(el).addClass("zl-card-description");
  });
  $(".zl-qa").each((_, el) => {
    const front = $(el)
      .children("div")
      .not(".zl-qa-back")
      .addClass("zl-qa-front");
    front.children("div").last().addClass("zl-qa-action");
  });
  // Identify illustration columns in other split sections as well as heroes/CTAs.
  $(".zl-split-grid").each((_, grid) => {
    $(grid).children("div").filter((_, el) =>
      !$(el).find("h1, h2, h3, a").length && $(el).find("svg, img").length > 0,
    ).addClass("zl-section-visual");
  });
  $('.zl-hero [style*="flex-wrap: wrap"]').addClass("zl-hero-actions");
}
