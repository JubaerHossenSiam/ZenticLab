import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="not-found"
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#7132ff", fontWeight: 700 }}>404</p>
      <h1
        className="zl-h1"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#0a003d",
          fontSize: 48,
          marginTop: 16,
        }}
      >
        This page could not be found
      </h1>
      <p style={{ marginTop: 20, fontSize: 18 }}>
        Explore our services or head back to the homepage.
      </p>
      <Link
        href="/"
        className="zl-btn"
        style={{
          display: "inline-block",
          background: "#7132ff",
          color: "#fff",
          padding: "16px 28px",
          borderRadius: 12,
          marginTop: 32,
        }}
      >
        Back to Home
      </Link>
    </section>
  );
}
