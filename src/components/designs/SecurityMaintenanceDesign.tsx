import Link from "next/link";
export default function SecurityMaintenanceDesign() {
  return (
    <>
      <section
        {...{ id: "top", style: { background: "var(--White, #ffffff)" }, className: "zl-section zl-hero" }}
      >
        <div
          {...{
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "72px 40px 96px",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
              gap: "64px",
              alignItems: "center",
            },
            className: "zl-section-inner zl-content-grid",
          }}
        >
          <div {...{ style: { display: "flex", flexDirection: "column", alignItems: "flex-start" } }}>
            <h1
              {...{
                className: "zl-h1",
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "52px",
                  lineHeight: "1.2",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                  wordSpacing: "0.1em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"Let Our Experts "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Protect"}</span>
              {" Your Website"}
            </h1>
            <p
              {...{
                style: {
                  fontSize: "19px",
                  lineHeight: "1.55",
                  color: "#4a4565",
                  marginTop: "24px",
                  maxWidth: "520px",
                  textWrap: "pretty",
                },
                className: "zl-body-copy",
              }}
            >
              {"Updates, backups and security checks, handled by the people who built your website."}
            </p>
            <div
              {...{
                style: {
                  marginTop: "36px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "16px 28px",
                },
                className: "zl-hero-actions",
              }}
            >
              <a
                {...{
                  className: "zl-btn",
                  href: "https://wa.me/8801814090134",
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "var(--Violet, #7132ff)",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "600",
                    padding: "16px 28px",
                    borderRadius: "12px",
                  },
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
              >
                <svg
                  {...{
                    width: "22",
                    height: "22",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                  }}
                >
                  <path {...{ d: "M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z" }}></path>
                  <path
                    {...{
                      transform: "translate(6.72 6.72) scale(0.44)",
                      fill: "currentColor",
                      stroke: "none",
                      d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
                    }}
                  ></path>
                </svg>
                {"Message Us on WhatsApp"}
              </a>
              <a
                {...{
                  className: "zl-qa-link",
                  href: "#plans",
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#0a003d",
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  },
                }}
              >
                {"See Security Plans\n"}
                <svg
                  {...{
                    width: "22",
                    height: "22",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                  }}
                >
                  <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                  <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                </svg>
              </a>
            </div>
          </div>
          <div {...{ className: "zl-hero-visual", "aria-hidden": "true" }}>
            <svg
              {...{
                viewBox: "0 0 560 420",
                width: "100%",
                fill: "none",
                "aria-hidden": "true",
                style: { display: "block" },
              }}
            >
              <rect {...{ x: "0", y: "40", width: "500", height: "340", rx: "46", fill: "#f3f3f6" }}></rect>
              <rect {...{ x: "300", y: "8", width: "256", height: "360", rx: "46", fill: "#f3f3f6" }}></rect>
              <rect
                {...{
                  x: "40",
                  y: "50",
                  width: "340",
                  height: "290",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <line {...{ x1: "41", y1: "82", x2: "379", y2: "82", stroke: "#ececef" }}></line>
              <circle {...{ cx: "62", cy: "66", r: "4.500", fill: "#ff5f57" }}></circle>
              <circle {...{ cx: "77", cy: "66", r: "4.500", fill: "#febc2e" }}></circle>
              <circle {...{ cx: "92", cy: "66", r: "4.500", fill: "#28c840" }}></circle>
              <rect {...{ x: "108", y: "59", width: "240", height: "14", rx: "7", fill: "#ececef" }}></rect>
              <rect {...{ x: "56", y: "96", width: "120", height: "10", rx: "5", fill: "#200093" }}></rect>
              <rect {...{ x: "56", y: "114", width: "80", height: "7", rx: "3.500", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "56", y: "136", width: "268", height: "44", rx: "12", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "64", y: "142", width: "32", height: "32", rx: "9", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(72 150) scale(0.67)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M3 12a9 9 0 0 1 9-9 9.750 9.750 0 0 1 6.740 2.740L21 8" }}></path>
                <path {...{ d: "M21 3v5h-5" }}></path>
                <path {...{ d: "M21 12a9 9 0 0 1-9 9 9.750 9.750 0 0 1-6.740-2.740L3 16" }}></path>
                <path {...{ d: "M8 16H3v5" }}></path>
              </g>
              <rect {...{ x: "108", y: "148", width: "110", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
              <rect {...{ x: "108", y: "162", width: "70", height: "6", rx: "3", fill: "#e0dbf0" }}></rect>
              <circle {...{ cx: "304", cy: "158", r: "11", fill: "#1f8a5a" }}></circle>
              <path
                {...{
                  d: "M298.500 158.5l4 4 7-8",
                  stroke: "#fff",
                  strokeWidth: "2.400",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect {...{ x: "56", y: "190", width: "268", height: "44", rx: "12", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "64", y: "196", width: "32", height: "32", rx: "9", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(72 204) scale(0.67)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M17.500 19H9a7 7 0 1 1 6.710-9h1.790a4.500 4.500 0 1 1 0 9z" }}></path>
              </g>
              <rect {...{ x: "108", y: "202", width: "92", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
              <rect {...{ x: "108", y: "216", width: "60", height: "6", rx: "3", fill: "#e0dbf0" }}></rect>
              <circle
                {...{ cx: "304", cy: "212", r: "11", fill: "#ffffff", stroke: "#e4dff2", strokeWidth: "3" }}
              ></circle>
              <path
                {...{
                  d: "M304 201a11 11 0 0 1 11 11",
                  stroke: "#200093",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                }}
              ></path>
              <rect {...{ x: "56", y: "244", width: "268", height: "44", rx: "12", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "64", y: "250", width: "32", height: "32", rx: "9", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(72 258) scale(0.67)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
              </g>
              <rect {...{ x: "108", y: "256", width: "120", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
              <rect {...{ x: "108", y: "270", width: "76", height: "6", rx: "3", fill: "#e0dbf0" }}></rect>
              <circle {...{ cx: "304", cy: "266", r: "11", fill: "#1f8a5a" }}></circle>
              <path
                {...{
                  d: "M298.500 266.5l4 4 7-8",
                  stroke: "#fff",
                  strokeWidth: "2.400",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect {...{ x: "56", y: "294", width: "268", height: "44", rx: "12", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "64", y: "300", width: "32", height: "32", rx: "9", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(72 308) scale(0.67)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <rect {...{ x: "4", y: "11", width: "16", height: "10", rx: "2" }}></rect>
                <path {...{ d: "M8 11V7a4 4 0 0 1 8 0v4" }}></path>
              </g>
              <rect {...{ x: "108", y: "306", width: "84", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
              <rect {...{ x: "108", y: "320", width: "56", height: "6", rx: "3", fill: "#e0dbf0" }}></rect>
              <circle
                {...{ cx: "304", cy: "316", r: "11", fill: "#ffffff", stroke: "#e4dff2", strokeWidth: "3" }}
              ></circle>
              <path
                {...{
                  d: "M304 305a11 11 0 0 1 11 11",
                  stroke: "#200093",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                }}
              ></path>
              <rect
                {...{
                  x: "338",
                  y: "100",
                  width: "192",
                  height: "148",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <circle
                {...{ cx: "398", cy: "174", r: "38", fill: "none", stroke: "#e9e6f4", strokeWidth: "12" }}
              ></circle>
              <path
                {...{
                  d: "M398 136a38 38 0 0 1 32.900 19",
                  stroke: "#200093",
                  strokeWidth: "12",
                  strokeLinecap: "round",
                }}
              ></path>
              <g
                {...{
                  transform: "translate(385 161) scale(1.08)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                <path {...{ d: "M12 7v5l3 2" }}></path>
              </g>
              <rect
                {...{ x: "452", y: "146", width: "58", height: "9", rx: "4.500", fill: "#d9d4ec" }}
              ></rect>
              <rect
                {...{ x: "452", y: "164", width: "40", height: "7", rx: "3.500", fill: "#e9e6f4" }}
              ></rect>
              <rect {...{ x: "452", y: "186", width: "58", height: "22", rx: "11", fill: "#e9e6f4" }}></rect>
              <rect {...{ x: "462", y: "193", width: "38", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
              <circle
                {...{ cx: "520", cy: "262", r: "24", fill: "#200093", stroke: "#ffffff", strokeWidth: "4" }}
              ></circle>
              <g
                {...{
                  transform: "translate(508 250) scale(1)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path
                  {...{
                    d: "M14.700 6.300a1 1 0 0 0 0 1.400l1.600 1.600a1 1 0 0 0 1.400 0l3.770-3.770a6 6 0 0 1-7.940 7.940l-6.910 6.910a2.120 2.120 0 0 1-3-3l6.910-6.910a6 6 0 0 1 7.940-7.940l-3.760 3.760z",
                  }}
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section {...{ style: { background: "#faf8ff", padding: "96px 0" }, className: "zl-section" }}>
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div {...{ style: { textAlign: "center", maxWidth: "780px", margin: "0 auto" } }}>
            <h2
              {...{
                className: "zl-h2",
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "40px",
                  lineHeight: "1.3",
                  fontWeight: "800",
                  letterSpacing: "-0.02em",
                  wordSpacing: "0.1em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"Why Your Website Needs Protection"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"A website that is not looked after can lose you customers."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "56px",
              },
              className: "zl-content-grid zl-card-grid zl-section-content",
            }}
          >
            <div
              {...{
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                className: "zl-illustrated-card zl-card-panel",
              }}
            >
              <svg
                {...{
                  width: "160",
                  height: "110",
                  viewBox: "0 0 160 110",
                  fill: "none",
                  "aria-hidden": "true",
                  className: "zl-card-illustration",
                }}
              >
                <rect
                  {...{
                    x: "2",
                    y: "10",
                    width: "106",
                    height: "78",
                    rx: "10",
                    fill: "#fff",
                    stroke: "#d9d4ec",
                    strokeWidth: "2",
                  }}
                ></rect>
                <path {...{ d: "M3 20a9 9 0 0 1 9-9h86a9 9 0 0 1 9 9v6H3z", fill: "#e9e6f4" }}></path>
                <circle {...{ cx: "13", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "22", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "31", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <path
                  {...{
                    d: "M30 62a40 40 0 0 1 50 0M38 70a28 28 0 0 1 34 0",
                    stroke: "#c4bce3",
                    strokeWidth: "4",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
                <circle {...{ cx: "55", cy: "77", r: "3.500", fill: "#a599d3" }}></circle>
                <path
                  {...{ d: "M32 44l46 36", stroke: "#a599d3", strokeWidth: "4", strokeLinecap: "round" }}
                ></path>
                <rect
                  {...{ x: "14", y: "34", width: "34", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <g
                  {...{
                    transform: "translate(112 58)",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "2.1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path
                    {...{
                      d: "M10.300 3.900L1.800 18a2 2 0 0 0 1.700 3h17a2 2 0 0 0 1.700-3L13.700 3.900a2 2 0 0 0-3.400 0z",
                    }}
                  ></path>
                  <path {...{ d: "M12 9v4M12 17h.01" }}></path>
                </g>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "22px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "22px",
                    textWrap: "balance",
                    minHeight: "62px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title zl-fixed-height-title",
                }}
              >
                {"Hacks and Downtime Cost You Customers"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                    textWrap: "pretty",
                  },
                }}
              >
                {
                  "If your website goes down or is hacked, your customers cannot reach you, and your data can reach the wrong hands."
                }
              </p>
            </div>
            <div
              {...{
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                className: "zl-illustrated-card zl-card-panel",
              }}
            >
              <svg
                {...{
                  width: "160",
                  height: "110",
                  viewBox: "0 0 160 110",
                  fill: "none",
                  "aria-hidden": "true",
                  className: "zl-card-illustration",
                }}
              >
                <rect
                  {...{
                    x: "2",
                    y: "10",
                    width: "106",
                    height: "78",
                    rx: "10",
                    fill: "#fff",
                    stroke: "#d9d4ec",
                    strokeWidth: "2",
                  }}
                ></rect>
                <path {...{ d: "M3 20a9 9 0 0 1 9-9h86a9 9 0 0 1 9 9v6H3z", fill: "#e9e6f4" }}></path>
                <circle {...{ cx: "13", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "22", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "31", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <rect {...{ x: "14", y: "34", width: "82", height: "12", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "52", width: "82", height: "12", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "70", width: "82", height: "12", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "70", y: "54", width: "22", height: "8", rx: "4", fill: "#a599d3" }}></rect>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <g
                  {...{
                    transform: "translate(112 58)",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "2.1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path {...{ d: "M3 12a9 9 0 0 1 9-9 9.750 9.750 0 0 1 6.740 2.740L21 8" }}></path>
                  <path {...{ d: "M21 3v5h-5" }}></path>
                  <path {...{ d: "M21 12a9 9 0 0 1-9 9 9.750 9.750 0 0 1-6.740-2.740L3 16" }}></path>
                  <path {...{ d: "M8 16H3v5" }}></path>
                </g>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "22px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "22px",
                    textWrap: "balance",
                    minHeight: "62px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title zl-fixed-height-title",
                }}
              >
                {"Old Software Opens the Door"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                    textWrap: "pretty",
                  },
                }}
              >
                {
                  "Old plugins and software are a common way websites get hacked. Regular updates close those doors."
                }
              </p>
            </div>
            <div
              {...{
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
                className: "zl-illustrated-card zl-card-panel",
              }}
            >
              <svg
                {...{
                  width: "160",
                  height: "110",
                  viewBox: "0 0 160 110",
                  fill: "none",
                  "aria-hidden": "true",
                  className: "zl-card-illustration",
                }}
              >
                <rect
                  {...{
                    x: "2",
                    y: "10",
                    width: "106",
                    height: "78",
                    rx: "10",
                    fill: "#fff",
                    stroke: "#d9d4ec",
                    strokeWidth: "2",
                  }}
                ></rect>
                <path {...{ d: "M3 20a9 9 0 0 1 9-9h86a9 9 0 0 1 9 9v6H3z", fill: "#e9e6f4" }}></path>
                <circle {...{ cx: "13", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "22", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "31", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                <rect {...{ x: "14", y: "34", width: "82", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "50", width: "82", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "66", width: "82", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "10",
                    y: "47",
                    width: "90",
                    height: "16",
                    rx: "8",
                    fill: "#a599d3",
                    fillOpacity: "0.35",
                    stroke: "#a599d3",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <g
                  {...{
                    transform: "translate(112 58)",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "2.1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <circle {...{ cx: "11", cy: "11", r: "7" }}></circle>
                  <path {...{ d: "M21 21l-4.300-4.300" }}></path>
                </g>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "22px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "22px",
                    textWrap: "balance",
                    minHeight: "62px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title zl-fixed-height-title",
                }}
              >
                {"Problems Stopped Early"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                    textWrap: "pretty",
                  },
                }}
              >
                {"We check and back up your website, so serious problems become rare."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{
          id: "plans",
          style: { background: "var(--White, #ffffff)", padding: "96px 0" },
          className: "zl-section",
        }}
      >
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div {...{ style: { textAlign: "center", maxWidth: "780px", margin: "0 auto" } }}>
            <h2
              {...{
                className: "zl-h2",
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "40px",
                  lineHeight: "1.3",
                  fontWeight: "800",
                  letterSpacing: "-0.02em",
                  wordSpacing: "0.1em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"Our Security & Maintenance Plans"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Choose one plan. Both plans are paid once a year."}
            </p>
          </div>
          <div {...{ style: { maxWidth: "960px", margin: "56px auto 0" }, className: "zl-section-content" }}>
            <div
              {...{
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "24px",
                  alignItems: "stretch",
                },
                className: "zl-content-grid",
              }}
            >
              <div
                {...{
                  style: {
                    position: "relative",
                    background: "#ffffff",
                    border: "1.5px solid #e4dbfb",
                    borderRadius: "24px",
                    padding: "36px 24px",
                    display: "flex",
                    flexDirection: "column",
                  },
                  className: "zl-card-panel",
                }}
              >
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "30px",
                      lineHeight: "1.3",
                      fontWeight: "800",
                      letterSpacing: "-0.01em",
                      color: "var(--Dark-Purple, #0a003d)",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Essential Care"}
                </h3>
                <p
                  {...{
                    style: {
                      fontSize: "15px",
                      lineHeight: "1.5",
                      fontStyle: "italic",
                      color: "#4a4565",
                      marginTop: "8px",
                      minHeight: "46px",
                    },
                    className: "zl-card-description",
                  }}
                >
                  {"For websites that need regular upkeep and protection"}
                </p>
                <div {...{ style: { height: "1px", background: "#ece5ff", margin: "18px 0 20px" } }}></div>
                <p
                  {...{
                    style: {
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#200093",
                    },
                  }}
                >
                  {"Included"}
                </p>
                <ul
                  {...{
                    style: {
                      listStyle: "none",
                      padding: "0",
                      marginTop: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "13px",
                    },
                  }}
                >
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"2 hours every month of technical upkeep"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Performance checks"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Software updates"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Basic security"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Regular backups"}
                  </li>
                </ul>
                <div {...{ style: { marginTop: "auto", paddingTop: "32px" } }}>
                  <p
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "44px",
                        lineHeight: "1.15",
                        fontWeight: "800",
                        letterSpacing: "-0.02em",
                        color: "#200093",
                      },
                    }}
                  >
                    {"12,000 "}
                    <span
                      {...{
                        style: { fontSize: "20px", fontWeight: "700", letterSpacing: "0" },
                        className: "zl-body-copy",
                      }}
                    >
                      {"BDT per year"}
                    </span>
                  </p>
                  <a
                    {...{
                      className: "zl-btn-outline",
                      href: "https://wa.me/8801814090134",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "24px",
                        border: "1.5px solid #200093",
                        color: "#200093",
                        background: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "15px 24px",
                        borderRadius: "12px",
                      },
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                  >
                    {"Get Started"}
                  </a>
                </div>
              </div>
              <div
                {...{
                  style: {
                    position: "relative",
                    background: "#ffffff",
                    border: "2px solid #7132ff",
                    borderRadius: "24px",
                    padding: "35.5px 23.5px",
                    display: "flex",
                    flexDirection: "column",
                  },
                  className: "zl-card-panel",
                }}
              >
                <span
                  {...{
                    style: {
                      position: "absolute",
                      top: "-15px",
                      left: "34px",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#ffffff",
                      background: "#7132ff",
                      borderRadius: "999px",
                      padding: "6px 16px",
                      lineHeight: "1.3",
                    },
                  }}
                >
                  {"Recommended"}
                </span>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "30px",
                      lineHeight: "1.3",
                      fontWeight: "800",
                      letterSpacing: "-0.01em",
                      color: "var(--Dark-Purple, #0a003d)",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Complete Care"}
                </h3>
                <p
                  {...{
                    style: {
                      fontSize: "15px",
                      lineHeight: "1.5",
                      fontStyle: "italic",
                      color: "#4a4565",
                      marginTop: "8px",
                      minHeight: "46px",
                    },
                    className: "zl-card-description",
                  }}
                >
                  {"For websites that need full protection, day and night"}
                </p>
                <div {...{ style: { height: "1px", background: "#ece5ff", margin: "18px 0 20px" } }}></div>
                <p
                  {...{
                    style: {
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#200093",
                    },
                  }}
                >
                  {"Included"}
                </p>
                <ul
                  {...{
                    style: {
                      listStyle: "none",
                      padding: "0",
                      marginTop: "18px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "13px",
                    },
                  }}
                >
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Everything in Essential Care"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"24/7 monitoring"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Break-in attempts blocked at once"}
                  </li>
                  <li
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "15px",
                        lineHeight: "1.5",
                        color: "#2c2548",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          flex: "none",
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "14",
                          height: "14",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    {"Instant alerts to our team"}
                  </li>
                </ul>
                <div {...{ style: { marginTop: "auto", paddingTop: "32px" } }}>
                  <p
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "44px",
                        lineHeight: "1.15",
                        fontWeight: "800",
                        letterSpacing: "-0.02em",
                        color: "#200093",
                      },
                    }}
                  >
                    {"24,000 "}
                    <span
                      {...{
                        style: { fontSize: "20px", fontWeight: "700", letterSpacing: "0" },
                        className: "zl-body-copy",
                      }}
                    >
                      {"BDT per year"}
                    </span>
                  </p>
                  <a
                    {...{
                      className: "zl-btn",
                      href: "https://wa.me/8801814090134",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "24px",
                        background: "var(--Violet, #7132ff)",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "16px 24px",
                        borderRadius: "12px",
                      },
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                  >
                    {"Get Started"}
                  </a>
                </div>
              </div>
            </div>
            <div
              {...{
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "24px",
                  marginTop: "24px",
                },
                className: "zl-content-grid",
              }}
            >
              <div
                {...{
                  style: {
                    background: "#ffffff",
                    border: "1.5px solid #e4dbfb",
                    borderRadius: "24px",
                    padding: "28px 24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  },
                  className: "zl-info-heading zl-card-panel",
                }}
              >
                <span
                  {...{
                    style: {
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "#e9e6f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                    className: "zl-info-heading-icon",
                  }}
                >
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "20px", height: "20px" },
                    }}
                  >
                    <path
                      {...{
                        d: "M14.700 6.300a1 1 0 0 0 0 1.400l1.600 1.600a1 1 0 0 0 1.400 0l3.770-3.770a6 6 0 0 1-7.940 7.940l-6.910 6.910a2.120 2.120 0 0 1-3-3l6.910-6.910a6 6 0 0 1 7.940-7.940l-3.760 3.760z",
                      }}
                    ></path>
                  </svg>
                </span>
                <div {...{ className: "zl-info-heading-copy" }}>
                  <h3
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "20px",
                        lineHeight: "1.4",
                        fontWeight: "800",
                        color: "var(--Dark-Purple, #0a003d)",
                        "--card-title-size": "20px",
                      },
                      className: "zl-card-title",
                    }}
                  >
                    {"Fixing a problem"}
                  </h3>
                  <p
                    {...{
                      style: {
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#4a4565",
                        marginTop: "8px",
                        textWrap: "pretty",
                      },
                      className: "zl-info-heading-description",
                    }}
                  >
                    {
                      "Fixing a problem uses your monthly upkeep hours. The 24/7 monitoring in Complete Care does not."
                    }
                  </p>
                </div>
              </div>
              <div
                {...{
                  style: {
                    background: "#ffffff",
                    border: "1.5px solid #e4dbfb",
                    borderRadius: "24px",
                    padding: "28px 24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  },
                  className: "zl-info-heading zl-card-panel",
                }}
              >
                <span
                  {...{
                    style: {
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "#efeff3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                    className: "zl-info-heading-icon",
                  }}
                >
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#5b5b66",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "20px", height: "20px" },
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </span>
                <div {...{ className: "zl-info-heading-copy" }}>
                  <h3
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "20px",
                        lineHeight: "1.4",
                        fontWeight: "800",
                        color: "var(--Dark-Purple, #0a003d)",
                        "--card-title-size": "20px",
                      },
                      className: "zl-card-title",
                    }}
                  >
                    {"Not included"}
                  </h3>
                  <p
                    {...{
                      style: {
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#4a4565",
                        marginTop: "8px",
                        textWrap: "pretty",
                      },
                      className: "zl-info-heading-description",
                    }}
                  >
                    {
                      "Domain and hosting renewal, content changes, new pages or new features, and design changes."
                    }
                  </p>
                </div>
              </div>
            </div>
            <div
              {...{
                style: {
                  marginTop: "24px",
                  background: "#f6f3ff",
                  borderRadius: "24px",
                  padding: "28px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "24px",
                },
                className: "zl-callout zl-card-panel",
              }}
            >
              <div
                {...{
                  style: { display: "flex", alignItems: "center", gap: "16px" },
                  className: "zl-info-heading",
                }}
              >
                <span
                  {...{
                    style: {
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                    className: "zl-info-heading-icon",
                  }}
                >
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "24px", height: "24px" },
                    }}
                  >
                    <path {...{ d: "M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500z" }}></path>
                    <path {...{ d: "M15 5l4 4" }}></path>
                  </svg>
                </span>
                <div {...{ className: "zl-info-heading-copy" }}>
                  <h3
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "20px",
                        lineHeight: "1.4",
                        fontWeight: "800",
                        color: "var(--Dark-Purple, #0a003d)",
                        "--card-title-size": "20px",
                      },
                      className: "zl-card-title",
                    }}
                  >
                    {"Need help with content changes too?"}
                  </h3>
                  <p
                    {...{
                      style: { fontSize: "16px", lineHeight: "1.5", color: "#4a4565", marginTop: "4px" },
                      className: "zl-info-heading-description",
                    }}
                  >
                    {"See our Content Update Plans."}
                  </p>
                </div>
              </div>
              <Link
                {...{
                  className: "zl-btn-outline",
                  href: "/content-update-plans",
                  style: {
                    display: "flex",
                    width: "fit-content",
                    flex: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    border: "1.5px solid #200093",
                    color: "#200093",
                    background: "#ffffff",
                    fontSize: "16px",
                    fontWeight: "600",
                    padding: "15px 24px",
                    borderRadius: "12px",
                  },
                }}
              >
                {"See Content Plans\n"}
                <svg
                  {...{
                    width: "22",
                    height: "22",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                  }}
                >
                  <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                  <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section {...{ style: { background: "#faf8ff", padding: "96px 0" }, className: "zl-section" }}>
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div
            {...{
              style: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "72px", alignItems: "center" },
              className: "zl-content-grid zl-split-grid",
            }}
          >
            <div {...{ style: { display: "flex", flexDirection: "column", alignItems: "flex-start" } }}>
              <h2
                {...{
                  className: "zl-h2",
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "40px",
                    lineHeight: "1.3",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    wordSpacing: "0.1em",
                    color: "var(--Dark-Purple, #0a003d)",
                    textWrap: "balance",
                    textAlign: "left",
                  },
                }}
              >
                {"Not Sure Which Plan Fits Your Website?"}
              </h2>
              <p
                {...{
                  style: {
                    fontSize: "18px",
                    lineHeight: "1.6",
                    marginTop: "16px",
                    maxWidth: "520px",
                    textWrap: "pretty",
                  },
                  className: "zl-body-copy",
                }}
              >
                {"Tell us about your website, and we will suggest the right plan."}
              </p>
              <div {...{ style: { marginTop: "32px" } }}>
                <a
                  {...{
                    className: "zl-btn",
                    href: "https://wa.me/8801814090134",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "var(--Violet, #7132ff)",
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "16px 28px",
                      borderRadius: "12px",
                    },
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <svg
                    {...{
                      width: "22",
                      height: "22",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z" }}></path>
                    <path
                      {...{
                        transform: "translate(6.72 6.72) scale(0.44)",
                        fill: "currentColor",
                        stroke: "none",
                        d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
                      }}
                    ></path>
                  </svg>
                  {"Message Us on WhatsApp"}
                </a>
              </div>
            </div>
            <div>
              <svg
                {...{
                  viewBox: "0 0 480 372",
                  width: "100%",
                  fill: "none",
                  "aria-hidden": "true",
                  style: { display: "block" },
                }}
              >
                <rect {...{ x: "0", y: "36", width: "430", height: "320", rx: "46", fill: "#f3f1fa" }}></rect>
                <rect
                  {...{ x: "250", y: "6", width: "226", height: "330", rx: "46", fill: "#f3f1fa" }}
                ></rect>
                <rect
                  {...{
                    x: "20",
                    y: "46",
                    width: "440",
                    height: "189",
                    rx: "22",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <rect
                  {...{
                    x: "40",
                    y: "70",
                    width: "190",
                    height: "141",
                    rx: "18",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <rect {...{ x: "111", y: "94", width: "48", height: "48", rx: "14", fill: "#e9e6f4" }}></rect>
                <g
                  {...{
                    transform: "translate(123 106) scale(1.0)",
                    fill: "none",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                  <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
                </g>
                <text
                  {...{
                    x: "135",
                    y: "184",
                    textAnchor: "middle",
                    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                    fontSize: "20",
                    fontWeight: "800",
                    fill: "#200093",
                  }}
                >
                  {"Essential"}
                </text>
                <rect
                  {...{
                    x: "250",
                    y: "70",
                    width: "190",
                    height: "141",
                    rx: "18",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <rect {...{ x: "321", y: "94", width: "48", height: "48", rx: "14", fill: "#e9e6f4" }}></rect>
                <g
                  {...{
                    transform: "translate(333 106) scale(1.0)",
                    fill: "none",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                  <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
                </g>
                <text
                  {...{
                    x: "345",
                    y: "184",
                    textAnchor: "middle",
                    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                    fontSize: "20",
                    fontWeight: "800",
                    fill: "#200093",
                  }}
                >
                  {"Complete"}
                </text>
                <circle
                  {...{ cx: "371", cy: "96", r: "13", fill: "#200093", stroke: "#ffffff", strokeWidth: "3" }}
                ></circle>
                <g
                  {...{
                    transform: "translate(363 88) scale(0.67)",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                  <path {...{ d: "M12 7v5l3 2" }}></path>
                </g>
                <rect
                  {...{
                    x: "146",
                    y: "268",
                    width: "196",
                    height: "52",
                    rx: "26",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <circle {...{ cx: "186", cy: "294", r: "6", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "208", cy: "294", r: "6", fill: "#a599d3" }}></circle>
                <circle {...{ cx: "230", cy: "294", r: "6", fill: "#200093" }}></circle>
                <rect {...{ x: "258", y: "290", width: "64", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section {...{ style: { background: "#ffffff", padding: "96px 0" }, className: "zl-section" }}>
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div {...{ style: { textAlign: "center", maxWidth: "780px", margin: "0 auto" } }}>
            <h2
              {...{
                className: "zl-h2",
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "40px",
                  lineHeight: "1.3",
                  fontWeight: "800",
                  letterSpacing: "-0.02em",
                  wordSpacing: "0.1em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"How It Works"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Simple and clear, from start to finish."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
                marginTop: "64px",
              },
              className: "zl-content-grid zl-card-grid zl-section-content",
            }}
          >
            <div
              {...{
                className: "zl-lift zl-card-panel",
                style: {
                  position: "relative",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "76px 24px 36px",
                },
              }}
            >
              <span
                {...{
                  "aria-hidden": "true",
                  className: "zl-corner zl-price",
                  style: {
                    position: "absolute",
                    top: "0px",
                    right: "12px",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "80px",
                    lineHeight: "1",
                    fontWeight: "800",
                    color: "#e9e6f4",
                    userSelect: "none",
                    pointerEvents: "none",
                  },
                }}
              >
                {"1"}
              </span>
              <h3
                {...{
                  style: {
                    position: "relative",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    minHeight: "68px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title zl-fixed-height-title",
                }}
              >
                {"Choose a Plan"}
              </h3>
              <p
                {...{
                  style: {
                    position: "relative",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                  },
                }}
              >
                {"Pick Essential Care or Complete Care. You pay once a year, and the plan runs for one year."}
              </p>
            </div>
            <div
              {...{
                className: "zl-lift zl-card-panel",
                style: {
                  position: "relative",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "76px 24px 36px",
                },
              }}
            >
              <span
                {...{
                  "aria-hidden": "true",
                  className: "zl-corner zl-price",
                  style: {
                    position: "absolute",
                    top: "0px",
                    right: "12px",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "80px",
                    lineHeight: "1",
                    fontWeight: "800",
                    color: "#e9e6f4",
                    userSelect: "none",
                    pointerEvents: "none",
                  },
                }}
              >
                {"2"}
              </span>
              <h3
                {...{
                  style: {
                    position: "relative",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    minHeight: "68px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title zl-fixed-height-title",
                }}
              >
                {"Start When You Want"}
              </h3>
              <p
                {...{
                  style: {
                    position: "relative",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                  },
                }}
              >
                {"Your plan starts from your website launch, or any time after."}
              </p>
            </div>
            <div
              {...{
                className: "zl-lift zl-card-panel",
                style: {
                  position: "relative",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "76px 24px 36px",
                },
              }}
            >
              <span
                {...{
                  "aria-hidden": "true",
                  className: "zl-corner zl-price",
                  style: {
                    position: "absolute",
                    top: "0px",
                    right: "12px",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "80px",
                    lineHeight: "1",
                    fontWeight: "800",
                    color: "#e9e6f4",
                    userSelect: "none",
                    pointerEvents: "none",
                  },
                }}
              >
                {"3"}
              </span>
              <h3
                {...{
                  style: {
                    position: "relative",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    minHeight: "68px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title zl-fixed-height-title",
                }}
              >
                {"We Look After It"}
              </h3>
              <p
                {...{
                  style: {
                    position: "relative",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                  },
                }}
              >
                {
                  "Every month we update, check and back up your website. Upkeep hours are used in full every month."
                }
              </p>
            </div>
            <div
              {...{
                className: "zl-lift zl-card-panel",
                style: {
                  position: "relative",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "76px 24px 36px",
                },
              }}
            >
              <span
                {...{
                  "aria-hidden": "true",
                  className: "zl-corner zl-price",
                  style: {
                    position: "absolute",
                    top: "0px",
                    right: "12px",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "80px",
                    lineHeight: "1",
                    fontWeight: "800",
                    color: "#e9e6f4",
                    userSelect: "none",
                    pointerEvents: "none",
                  },
                }}
              >
                {"4"}
              </span>
              <h3
                {...{
                  style: {
                    position: "relative",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    minHeight: "68px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title zl-fixed-height-title",
                }}
              >
                {"Stop Any Time"}
              </h3>
              <p
                {...{
                  style: {
                    position: "relative",
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                  },
                }}
              >
                {"Your plan is optional. If you stop, it just does not renew for the next year."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section {...{ style: { background: "#faf8ff", padding: "96px 0" }, className: "zl-section" }}>
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div {...{ style: { textAlign: "center", maxWidth: "780px", margin: "0 auto" } }}>
            <h2
              {...{
                className: "zl-h2",
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "40px",
                  lineHeight: "1.3",
                  fontWeight: "800",
                  letterSpacing: "-0.02em",
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              {"Common Questions"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px" },
                className: "zl-body-copy",
              }}
            >
              {"Everything you may want to know before you start."}
            </p>
          </div>
          <div
            {...{
              style: {
                maxWidth: "900px",
                margin: "56px auto 0",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
              className: "zl-section-content",
            }}
          >
            <details {...{ className: "zl-fq", open: true }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Do I need a security plan?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "No, it is optional. But a website needs updates, backups and security checks to stay healthy. You can do this yourself, or we can do it for you."
                  }
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"What is the difference between Essential and Complete Care?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "Essential Care keeps your website updated, checked and backed up. Complete Care adds 24/7 monitoring, blocks break-in attempts at once, and alerts our team right away."
                  }
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Can I take a plan if I use my own hosting?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {"Yes. A plan works with your own hosting too, if the hosting is fast and secure."}
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Does fixing a problem use my hours?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "Yes. When we fix a problem, the time comes from your monthly hours. The 24/7 monitoring in Complete Care is part of the plan and does not use your hours."
                  }
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"What if my website breaks or is hacked?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "With Complete Care, we watch your website all day and block break-in attempts. With either plan, we can restore your website from a backup if something goes wrong."
                  }
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"What happens to my upkeep hours?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {"Upkeep hours are used in full every month, to keep your website healthy."}
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Does this plan include content changes?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "No. Changes to your text, photos and products are in our Content Update Plans. You can take both."
                  }
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"When does my plan start, and how do I pay?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "Your plan can start when your website goes live, or any time after. You pay once a year, by bKash, Nagad or bank."
                  }
                </p>
              </div>
            </details>
            <details {...{ className: "zl-fq" }}>
              <summary {...{ className: "zl-fq-head" }}>
                <h3
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "22px",
                      lineHeight: "1.4",
                      fontWeight: "800",
                      color: "var(--Dark-Purple, #0a003d)",
                      textWrap: "balance",
                      "--card-title-size": "22px",
                    },
                    className: "zl-card-title",
                  }}
                >
                  {"Can I stop my plan?"}
                </h3>
                <span {...{ className: "zl-fq-btn" }}>
                  <span {...{ className: "zl-fq-open" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                  <span {...{ className: "zl-fq-hide" }}>
                    <svg
                      {...{
                        style: { transform: "rotate(-90deg)" },
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                      <path {...{ d: "M7.500 12h9M12.500 8l4 4-4 4" }}></path>
                    </svg>
                  </span>
                </span>
              </summary>
              <div {...{ className: "zl-fq-a" }}>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.6", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {"Yes. You can stop any time. The plan just does not renew for the next year."}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section
        {...{
          style: { background: "linear-gradient(to bottom, #faf8ff 50%, #f3eeff 50%)", padding: "0" },
          className: "zl-section zl-cta-section",
        }}
      >
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div
            {...{
              style: {
                position: "relative",
                overflow: "hidden",
                background: "var(--Violet, #7132ff)",
                borderRadius: "32px",
              },
              className: "zl-cta",
            }}
          >
            <div
              {...{
                style: { position: "relative", maxWidth: "600px", display: "flex", flexDirection: "column" },
                className: "zl-cta-copy",
              }}
            >
              <h2
                {...{
                  className: "zl-h2",
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "44px",
                    lineHeight: "1.25",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    color: "var(--White, #ffffff)",
                    textWrap: "balance",
                  },
                }}
              >
                {"Ready to Keep Your Website Safe?"}
              </h2>
              <p
                {...{
                  style: {
                    fontSize: "19px",
                    lineHeight: "1.55",
                    color: "#f1ebff",
                    marginTop: "20px",
                    textWrap: "pretty",
                  },
                  className: "zl-body-copy",
                }}
              >
                {"Let our experts look after your website, all year long."}
              </p>
              <div {...{ style: { marginTop: "36px" } }}>
                <a
                  {...{
                    className: "zl-btn-light",
                    href: "https://wa.me/8801814090134",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "#ffffff",
                      color: "var(--Dark-Purple, #0a003d)",
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "16px 28px",
                      borderRadius: "12px",
                    },
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  <svg
                    {...{
                      width: "22",
                      height: "22",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      style: { color: "inherit" },
                      stroke: "currentColor",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z" }}></path>
                    <path
                      {...{
                        transform: "translate(6.72 6.72) scale(0.44)",
                        fill: "currentColor",
                        stroke: "none",
                        d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
                      }}
                    ></path>
                  </svg>
                  {"\nMessage Us on WhatsApp"}
                </a>
              </div>
            </div>
            <div
              {...{
                style: {
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "480 / 420",
                  containerType: "inline-size",
                  maxWidth: "480px",
                },
                "aria-hidden": "true",
                className: "zl-cta-visual",
              }}
            >
              <svg
                {...{
                  width: "480",
                  height: "420",
                  viewBox: "0 0 480 420",
                  fill: "none",
                  style: { position: "absolute", inset: "0", width: "100cqw", height: "87.5cqw" },
                }}
              >
                <g {...{ stroke: "#ffffff", fill: "none" }}>
                  <circle
                    {...{ cx: "240", cy: "210", r: "110", strokeOpacity: "0.16", strokeWidth: "1.5" }}
                  ></circle>
                  <circle
                    {...{ cx: "240", cy: "210", r: "165", strokeOpacity: "0.11", strokeWidth: "1.5" }}
                  ></circle>
                  <circle
                    {...{ cx: "240", cy: "210", r: "220", strokeOpacity: "0.07", strokeWidth: "1.5" }}
                  ></circle>
                </g>
              </svg>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "10cqw",
                    top: "15cqw",
                    width: "80cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.1667cqw",
                    boxShadow: "0 3.75cqw 9.1667cqw rgba(10,0,61,.38)",
                    padding: "4.1667cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3.3333cqw",
                  },
                }}
              >
                <div {...{ style: { display: "flex", alignItems: "center", gap: "2.5cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "8.3333cqw",
                        height: "8.3333cqw",
                        borderRadius: "2.5cqw",
                        background: "#e9e6f4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "none",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#200093",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "4.5833cqw", height: "4.5833cqw" },
                      }}
                    >
                      <rect {...{ x: "3", y: "4", width: "18", height: "18", rx: "2" }}></rect>
                      <path {...{ d: "M16 2v4M8 2v4M3 10h18" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{ style: { display: "flex", flexDirection: "column", gap: "1.4583cqw", flex: "1" } }}
                  >
                    <span
                      {...{
                        style: {
                          height: "1.875cqw",
                          width: "22.9167cqw",
                          borderRadius: "1.0417cqw",
                          background: "#d9d4ec",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          height: "1.4583cqw",
                          width: "14.5833cqw",
                          borderRadius: "0.8333cqw",
                          background: "#e9e6f4",
                        },
                      }}
                    ></span>
                  </span>
                  <span
                    {...{
                      style: {
                        padding: "1.0417cqw 2.5cqw",
                        borderRadius: "2.7083cqw",
                        background: "#f3f1fa",
                        fontSize: "2.5cqw",
                        fontWeight: "700",
                        color: "#200093",
                        lineHeight: "1.3",
                        flex: "none",
                      },
                    }}
                  >
                    {"12 months"}
                  </span>
                </div>
                <div
                  {...{
                    style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.6667cqw" },
                    className: "",
                  }}
                >
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "7.0833cqw",
                        borderRadius: "1.875cqw",
                        background: "#e6f4ec",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.9167cqw", height: "2.9167cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                    </svg>
                  </span>
                </div>
                <div {...{ style: { display: "flex", gap: "2.0833cqw" } }}>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        height: "9.1667cqw",
                        borderRadius: "2.5cqw",
                        background: "#f6f3ff",
                        display: "flex",
                        alignItems: "center",
                        gap: "2.0833cqw",
                        padding: "0 2.5cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "5.4167cqw",
                          height: "5.4167cqw",
                          borderRadius: "1.6667cqw",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: "none",
                        },
                      }}
                    >
                      <svg
                        {...{
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.9167cqw", height: "2.9167cqw" },
                        }}
                      >
                        <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                        <path {...{ d: "M12 7v5l3 2" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          height: "1.4583cqw",
                          width: "12.5cqw",
                          borderRadius: "0.8333cqw",
                          background: "#c4bce3",
                        },
                      }}
                    ></span>
                  </span>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        height: "9.1667cqw",
                        borderRadius: "2.5cqw",
                        background: "#f6f3ff",
                        display: "flex",
                        alignItems: "center",
                        gap: "2.0833cqw",
                        padding: "0 2.5cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "5.4167cqw",
                          height: "5.4167cqw",
                          borderRadius: "1.6667cqw",
                          background: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flex: "none",
                        },
                      }}
                    >
                      <svg
                        {...{
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.9167cqw", height: "2.9167cqw" },
                        }}
                      >
                        <path
                          {...{ d: "M17.500 19H9a7 7 0 1 1 6.710-9h1.790a4.500 4.500 0 1 1 0 9z" }}
                        ></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          height: "1.4583cqw",
                          width: "12.5cqw",
                          borderRadius: "0.8333cqw",
                          background: "#c4bce3",
                        },
                      }}
                    ></span>
                  </span>
                </div>
              </div>
              <span
                {...{
                  style: {
                    position: "absolute",
                    left: "81.6667cqw",
                    top: "63.75cqw",
                    width: "13.3333cqw",
                    height: "13.3333cqw",
                    borderRadius: "50%",
                    background: "#200093",
                    border: "1.0417cqw solid #ffffff",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2.0833cqw 5cqw rgba(10,0,61,.4)",
                  },
                }}
              >
                <svg
                  {...{
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2.1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    style: { width: "5.8333cqw", height: "5.8333cqw" },
                  }}
                >
                  <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                  <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
