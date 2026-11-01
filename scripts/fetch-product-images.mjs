import fs from "node:fs/promises";

// Local replacements for the four unavailable /_blob images in the HTML exports.
const images = {
  "t-shirt":
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=480&q=85",
  shoes:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=480&q=85",
  headphones:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=480&q=85",
  bag: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=480&q=85",
};
await fs.mkdir("public/images", { recursive: true });
await Promise.all(
  Object.entries(images).map(async ([name, url]) => {
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
    if (
      !response.ok ||
      !response.headers.get("content-type")?.startsWith("image/")
    )
      throw new Error(`Image download failed: ${name} (${response.status})`);
    const data = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(`public/images/${name}.jpg`, data);
    console.log(`${name}: ${data.length} bytes`);
  }),
);
