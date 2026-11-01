import Link from "next/link";
export default function ContentUpdateDesign() {
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
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Update"}</span>
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
              {"Send us your changes. Our developers add your text, photos and products, so nothing breaks."}
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
              <rect {...{ x: "56", y: "94", width: "308", height: "84", rx: "12", fill: "#fbf3ea" }}></rect>
              <rect
                {...{ x: "72", y: "112", width: "120", height: "11", rx: "5.500", fill: "#7a5446" }}
              ></rect>
              <rect {...{ x: "72", y: "131", width: "88", height: "7", rx: "3.500", fill: "#e2cbbf" }}></rect>
              <rect {...{ x: "72", y: "150", width: "58", height: "16", rx: "8", fill: "#b9826f" }}></rect>
              <path
                {...{
                  d: "M282.9 140h34.199999999999996l-5.699999999999999 22.799999999999997h-22.799999999999997z",
                  fill: "#b9826f",
                }}
              ></path>
              <circle {...{ cx: "290.5", cy: "136.2", r: "11.399999999999999", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "309.5", cy: "136.2", r: "11.399999999999999", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "300", cy: "126.7", r: "13.299999999999999", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "300", cy: "111.5", r: "4.9399999999999995", fill: "#7a5446" }}></circle>
              <rect {...{ x: "56", y: "190", width: "96", height: "64", rx: "10", fill: "#fbf3ea" }}></rect>
              <path
                {...{
                  d: "M94.1 224h19.8l-3.3000000000000003 13.200000000000001h-13.200000000000001z",
                  fill: "#b9826f",
                }}
              ></path>
              <circle {...{ cx: "98.5", cy: "221.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "109.5", cy: "221.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "104", cy: "216.3", r: "7.700000000000001", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "104", cy: "207.5", r: "2.8600000000000003", fill: "#7a5446" }}></circle>
              <rect {...{ x: "162", y: "190", width: "96", height: "64", rx: "10", fill: "#fbf3ea" }}></rect>
              <path
                {...{
                  d: "M200.1 224h19.8l-3.3000000000000003 13.200000000000001h-13.200000000000001z",
                  fill: "#b9826f",
                }}
              ></path>
              <circle {...{ cx: "204.5", cy: "221.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "215.5", cy: "221.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "210", cy: "216.3", r: "7.700000000000001", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "210", cy: "207.5", r: "2.8600000000000003", fill: "#7a5446" }}></circle>
              <rect {...{ x: "268", y: "190", width: "96", height: "64", rx: "10", fill: "#fbf3ea" }}></rect>
              <path
                {...{
                  d: "M306.1 224h19.8l-3.3000000000000003 13.200000000000001h-13.200000000000001z",
                  fill: "#b9826f",
                }}
              ></path>
              <circle {...{ cx: "310.5", cy: "221.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "321.5", cy: "221.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "316", cy: "216.3", r: "7.700000000000001", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "316", cy: "207.5", r: "2.8600000000000003", fill: "#7a5446" }}></circle>
              <rect
                {...{
                  x: "57",
                  y: "263",
                  width: "94",
                  height: "62",
                  rx: "10",
                  fill: "#ffffff",
                  stroke: "#d6b9ab",
                  strokeWidth: "2",
                  strokeDasharray: "6 5",
                }}
              ></rect>
              <path
                {...{
                  d: "M104 284v20M94 294h20",
                  stroke: "#b9826f",
                  strokeWidth: "2.600",
                  strokeLinecap: "round",
                }}
              ></path>
              <rect {...{ x: "162", y: "262", width: "96", height: "64", rx: "10", fill: "#fbf3ea" }}></rect>
              <path
                {...{
                  d: "M200.1 296h19.8l-3.3000000000000003 13.200000000000001h-13.200000000000001z",
                  fill: "#b9826f",
                }}
              ></path>
              <circle {...{ cx: "204.5", cy: "293.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "215.5", cy: "293.8", r: "6.6000000000000005", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "210", cy: "288.3", r: "7.700000000000001", fill: "#f2c9c2" }}></circle>
              <circle {...{ cx: "210", cy: "279.5", r: "2.8600000000000003", fill: "#7a5446" }}></circle>
              <rect
                {...{
                  x: "330",
                  y: "146",
                  width: "200",
                  height: "174",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <rect {...{ x: "346", y: "164", width: "22", height: "22", rx: "7", fill: "#e9e6f4" }}></rect>
              <g
                {...{
                  transform: "translate(350 168) scale(0.58)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500z" }}></path>
                <path {...{ d: "M15 5l4 4" }}></path>
              </g>
              <rect {...{ x: "376", y: "171", width: "70", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "342", y: "196", width: "176", height: "34", rx: "10", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "348", y: "202", width: "22", height: "22", rx: "7", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(352 206) scale(0.58)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <rect {...{ x: "3", y: "3", width: "18", height: "18", rx: "2" }}></rect>
                <circle {...{ cx: "9", cy: "9", r: "2" }}></circle>
                <path {...{ d: "M21 15l-5-5L5 21" }}></path>
              </g>
              <rect
                {...{ x: "380", y: "210", width: "84", height: "7", rx: "3.500", fill: "#c4bce3" }}
              ></rect>
              <g
                {...{
                  transform: "translate(490 204) scale(0.75)",
                  fill: "none",
                  stroke: "#a599d3",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                <path {...{ d: "M12 7v5l3 2" }}></path>
              </g>
              <rect {...{ x: "342", y: "236", width: "176", height: "34", rx: "10", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "348", y: "242", width: "22", height: "22", rx: "7", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(352 246) scale(0.58)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M4 7V4h16v3M9 20h6M12 4v16" }}></path>
              </g>
              <rect
                {...{ x: "380", y: "250", width: "84", height: "7", rx: "3.500", fill: "#c4bce3" }}
              ></rect>
              <g
                {...{
                  transform: "translate(490 244) scale(0.75)",
                  fill: "none",
                  stroke: "#a599d3",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                <path {...{ d: "M12 7v5l3 2" }}></path>
              </g>
              <rect {...{ x: "342", y: "276", width: "176", height: "34", rx: "10", fill: "#f6f3ff" }}></rect>
              <rect {...{ x: "348", y: "282", width: "22", height: "22", rx: "7", fill: "#ffffff" }}></rect>
              <g
                {...{
                  transform: "translate(352 286) scale(0.58)",
                  fill: "none",
                  stroke: "#200093",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M21 8l-9-5-9 5 9 5 9-5z" }}></path>
                <path {...{ d: "M3 8v8l9 5 9-5V8" }}></path>
                <path {...{ d: "M12 13v8" }}></path>
              </g>
              <rect
                {...{ x: "380", y: "290", width: "84", height: "7", rx: "3.500", fill: "#c4bce3" }}
              ></rect>
              <g
                {...{
                  transform: "translate(490 284) scale(0.75)",
                  fill: "none",
                  stroke: "#a599d3",
                  strokeWidth: "2.2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                <path {...{ d: "M12 7v5l3 2" }}></path>
              </g>
              <circle
                {...{ cx: "520", cy: "322", r: "24", fill: "#200093", stroke: "#ffffff", strokeWidth: "4" }}
              ></circle>
              <g
                {...{
                  transform: "translate(508 310) scale(1)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500z" }}></path>
                <path {...{ d: "M15 5l4 4" }}></path>
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
              {"Why Let Our Experts Update Your Website?"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Small changes can take your time, or break your website."}
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
                <rect {...{ x: "14", y: "34", width: "50", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "14", y: "48", width: "38", height: "28", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "58",
                    y: "52",
                    width: "38",
                    height: "24",
                    rx: "6",
                    fill: "#d9d4ec",
                    transform: "rotate(7 77 64)",
                  }}
                ></rect>
                <rect
                  {...{ x: "58", y: "48", width: "38", height: "5", rx: "2.500", fill: "#e9e6f4" }}
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
                  <path {...{ d: "M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500z" }}></path>
                  <path {...{ d: "M15 5l4 4" }}></path>
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
                {"Changes Can Break Your Website"}
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
                  "Even with an easy panel, one wrong change can break the layout or change things you did not mean to."
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
                <rect {...{ x: "14", y: "34", width: "26", height: "22", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "44", y: "34", width: "26", height: "22", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "74", y: "34", width: "26", height: "22", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "60", width: "26", height: "22", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "44.750",
                    y: "60.750",
                    width: "24.500",
                    height: "20.500",
                    rx: "5",
                    fill: "none",
                    stroke: "#c4bce3",
                    strokeWidth: "1.500",
                    strokeDasharray: "3 3",
                  }}
                ></rect>
                <rect
                  {...{
                    x: "74.750",
                    y: "60.750",
                    width: "24.500",
                    height: "20.500",
                    rx: "5",
                    fill: "none",
                    stroke: "#c4bce3",
                    strokeWidth: "1.500",
                    strokeDasharray: "3 3",
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
                  <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                  <path {...{ d: "M12 7v5l3 2" }}></path>
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
                {"You Have a Business to Run"}
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
                  "Adding products and photos takes time. Send us the changes, and spend your time on your customers."
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
                <rect {...{ x: "14", y: "34", width: "40", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "14", y: "48", width: "82", height: "16", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "70", width: "38", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "58", y: "70", width: "38", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
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
                      d: "M14.700 6.300a1 1 0 0 0 0 1.400l1.600 1.600a1 1 0 0 0 1.400 0l3.770-3.770a6 6 0 0 1-7.940 7.940l-6.910 6.910a2.120 2.120 0 0 1-3-3l6.910-6.910a6 6 0 0 1 7.940-7.940l-3.760 3.760z",
                    }}
                  ></path>
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
                {"Done by the People Who Built It"}
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
                {"Our developers know your website, so changes are done right and done fast."}
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
              {"Our Content Update Plans"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Choose the hours you need each month. Both plans are paid once a year."}
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
                  {"Basic"}
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
                  {"For websites with a few changes each month"}
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
                    {"2 hours every month of expert help"}
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
                    {"Add or change text, photos and products"}
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
                    {"Add new projects, news or blog posts"}
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
                    {"Done by our developers, so nothing breaks"}
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
                    {"Changes done within 24 hours"}
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
                  {"Plus"}
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
                  {"For online stores and websites that change often"}
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
                    {"4 hours every month of expert help"}
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
                    {"Everything in Basic"}
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
                    {"Room for many new products each month"}
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
                    {"Best for online stores"}
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
                    <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                    <path {...{ d: "M12 7v5l3 2" }}></path>
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
                    {"Need more hours?"}
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
                      "Each extra hour costs 500 BDT. For example, 6 hours every month costs 36,000 BDT per year."
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
                      "New pages or new features, design or branding changes, and marketing like ads and Google ranking work."
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
                    <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                    <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
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
                    {"Need security and backups too?"}
                  </h3>
                  <p
                    {...{
                      style: { fontSize: "16px", lineHeight: "1.5", color: "#4a4565", marginTop: "4px" },
                      className: "zl-info-heading-description",
                    }}
                  >
                    {"See our Security & Maintenance Plans."}
                  </p>
                </div>
              </div>
              <Link
                {...{
                  className: "zl-btn-outline",
                  href: "/security-maintenance-plans",
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
                {"How Many Hours Do You Need?"}
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
                {
                  "About 10 text or photo changes, or about 10 new products with photos, take about 2 hours. Not sure? Tell us about your website, and we will suggest the right plan."
                }
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
                <rect {...{ x: "40", y: "70", width: "120", height: "96", rx: "18", fill: "#200093" }}></rect>
                <g
                  {...{
                    transform: "translate(88 84) scale(1.0)",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                  <path {...{ d: "M12 7v5l3 2" }}></path>
                </g>
                <text
                  {...{
                    x: "100",
                    y: "144",
                    textAnchor: "middle",
                    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                    fontSize: "26",
                    fontWeight: "800",
                    fill: "#ffffff",
                  }}
                >
                  {"2h"}
                </text>
                <rect
                  {...{
                    x: "180",
                    y: "70",
                    width: "120",
                    height: "96",
                    rx: "18",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <g
                  {...{
                    transform: "translate(228 84) scale(1.0)",
                    fill: "none",
                    stroke: "#c4bce3",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                  <path {...{ d: "M12 7v5l3 2" }}></path>
                </g>
                <text
                  {...{
                    x: "240",
                    y: "144",
                    textAnchor: "middle",
                    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                    fontSize: "26",
                    fontWeight: "800",
                    fill: "#a599d3",
                  }}
                >
                  {"4h"}
                </text>
                <rect
                  {...{
                    x: "320",
                    y: "70",
                    width: "120",
                    height: "96",
                    rx: "18",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <g
                  {...{
                    transform: "translate(368 84) scale(1.0)",
                    fill: "none",
                    stroke: "#c4bce3",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                  <path {...{ d: "M12 7v5l3 2" }}></path>
                </g>
                <text
                  {...{
                    x: "380",
                    y: "144",
                    textAnchor: "middle",
                    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif",
                    fontSize: "26",
                    fontWeight: "800",
                    fill: "#a599d3",
                  }}
                >
                  {"6h"}
                </text>
                <rect {...{ x: "40", y: "196", width: "400", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "40", y: "196", width: "150", height: "8", rx: "4", fill: "#a599d3" }}></rect>
                <circle
                  {...{ cx: "190", cy: "200", r: "11", fill: "#ffffff", stroke: "#200093", strokeWidth: "3" }}
                ></circle>
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
                {"Pick Basic or Plus. You pay once a year, and the plan runs for one year."}
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
                {"Send Your Changes"}
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
                {"Send your text, photos or product details in our client group."}
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
                {"We Make the Changes"}
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
                  "We make the changes within 24 hours. For bigger jobs, we tell you the hours before we start."
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
                {"Hours Reset Each Month"}
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
                {"Your hours are for each month. Hours you do not use do not move to the next month."}
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
                  {"Do I need a content update plan?"}
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
                    "No, it is optional. You can update simple things yourself. Take a plan when you want our experts to do it, so nothing breaks."
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
                  {"What is the difference between Basic and Plus?"}
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
                    "Basic gives you 2 hours of expert help every month. Plus gives you 4 hours. Plus is best for online stores that add many products."
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
                  {"What can I do in 2 hours?"}
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
                    "For example, about 10 text or photo changes, or about 10 new products with photos and details. Bigger jobs use more hours, and we tell you before we start."
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
                  {"How do I ask for a change?"}
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
                  {"You send your request in our client group. We make the change within 24 hours."}
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
                  {"What if I need more hours?"}
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
                    "You can add more hours. Each extra hour costs 500 BDT. For example, 6 hours every month costs 36,000 BDT per year."
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
                  {"What happens to hours I do not use?"}
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
                  {"Your hours are for each month. Hours you do not use do not move to the next month."}
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
                  {"Can I take this plan if I use my own hosting?"}
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
                  {"Yes. A content update plan works with your own hosting too."}
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
                {"Ready to Let Our Experts Update Your Website?"}
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
                {"Tell us about your website, and we will suggest the right plan."}
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
                        style: { width: "4.1667cqw", height: "4.1667cqw" },
                      }}
                    >
                      <path {...{ d: "M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500z" }}></path>
                      <path {...{ d: "M15 5l4 4" }}></path>
                    </svg>
                  </span>
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
                        marginLeft: "auto",
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
                    {"4 hours"}
                  </span>
                </div>
                <div
                  {...{
                    style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.0833cqw" },
                    className: "",
                  }}
                >
                  <span
                    {...{
                      style: {
                        position: "relative",
                        height: "13.3333cqw",
                        borderRadius: "2.5cqw",
                        background: "#f6f3ff",
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5cqw",
                        padding: "0 2.9167cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "7.0833cqw",
                          height: "7.0833cqw",
                          borderRadius: "2.0833cqw",
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
                          style: { width: "3.75cqw", height: "3.75cqw" },
                        }}
                      >
                        <rect {...{ x: "3", y: "3", width: "18", height: "18", rx: "2" }}></rect>
                        <circle {...{ cx: "9", cy: "9", r: "2" }}></circle>
                        <path {...{ d: "M21 15l-5-5L5 21" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          height: "1.6667cqw",
                          width: "13.3333cqw",
                          borderRadius: "0.8333cqw",
                          background: "#c4bce3",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          marginLeft: "auto",
                          width: "4.5833cqw",
                          height: "4.5833cqw",
                          borderRadius: "50%",
                          background: "#1f8a5a",
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
                          stroke: "#ffffff",
                          strokeWidth: "3.4",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw" },
                        }}
                      >
                        <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                      </svg>
                    </span>
                  </span>
                  <span
                    {...{
                      style: {
                        position: "relative",
                        height: "13.3333cqw",
                        borderRadius: "2.5cqw",
                        background: "#f6f3ff",
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5cqw",
                        padding: "0 2.9167cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "7.0833cqw",
                          height: "7.0833cqw",
                          borderRadius: "2.0833cqw",
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
                          style: { width: "3.75cqw", height: "3.75cqw" },
                        }}
                      >
                        <path {...{ d: "M4 7V4h16v3M9 20h6M12 4v16" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          height: "1.6667cqw",
                          width: "13.3333cqw",
                          borderRadius: "0.8333cqw",
                          background: "#c4bce3",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          marginLeft: "auto",
                          width: "4.5833cqw",
                          height: "4.5833cqw",
                          borderRadius: "50%",
                          background: "#1f8a5a",
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
                          stroke: "#ffffff",
                          strokeWidth: "3.4",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw" },
                        }}
                      >
                        <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                      </svg>
                    </span>
                  </span>
                  <span
                    {...{
                      style: {
                        position: "relative",
                        height: "13.3333cqw",
                        borderRadius: "2.5cqw",
                        background: "#f6f3ff",
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5cqw",
                        padding: "0 2.9167cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "7.0833cqw",
                          height: "7.0833cqw",
                          borderRadius: "2.0833cqw",
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
                          style: { width: "3.75cqw", height: "3.75cqw" },
                        }}
                      >
                        <path {...{ d: "M21 8l-9-5-9 5 9 5 9-5z" }}></path>
                        <path {...{ d: "M3 8v8l9 5 9-5V8" }}></path>
                        <path {...{ d: "M12 13v8" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          height: "1.6667cqw",
                          width: "13.3333cqw",
                          borderRadius: "0.8333cqw",
                          background: "#c4bce3",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          marginLeft: "auto",
                          width: "4.5833cqw",
                          height: "4.5833cqw",
                          borderRadius: "50%",
                          background: "#1f8a5a",
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
                          stroke: "#ffffff",
                          strokeWidth: "3.4",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw" },
                        }}
                      >
                        <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                      </svg>
                    </span>
                  </span>
                  <span
                    {...{
                      style: {
                        position: "relative",
                        height: "13.3333cqw",
                        borderRadius: "2.5cqw",
                        background: "#f6f3ff",
                        display: "flex",
                        alignItems: "center",
                        gap: "2.5cqw",
                        padding: "0 2.9167cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "7.0833cqw",
                          height: "7.0833cqw",
                          borderRadius: "2.0833cqw",
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
                          style: { width: "3.75cqw", height: "3.75cqw" },
                        }}
                      >
                        <path {...{ d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }}></path>
                        <path {...{ d: "M14 2v6h6M8 13h8M8 17h5" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          height: "1.6667cqw",
                          width: "13.3333cqw",
                          borderRadius: "0.8333cqw",
                          background: "#c4bce3",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          marginLeft: "auto",
                          width: "4.5833cqw",
                          height: "4.5833cqw",
                          borderRadius: "50%",
                          background: "#1f8a5a",
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
                          stroke: "#ffffff",
                          strokeWidth: "3.4",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw" },
                        }}
                      >
                        <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div {...{ style: { display: "flex", alignItems: "center", gap: "2.5cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "5.4167cqw",
                        height: "5.4167cqw",
                        borderRadius: "1.6667cqw",
                        background: "#f3f1fa",
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
                        flex: "1",
                        height: "2.0833cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                        overflow: "hidden",
                        display: "flex",
                      },
                    }}
                  >
                    <span
                      {...{ style: { width: "70%", background: "#200093", borderRadius: "1.0417cqw" } }}
                    ></span>
                  </span>
                </div>
              </div>
              <span
                {...{
                  style: {
                    position: "absolute",
                    left: "81.6667cqw",
                    top: "67.5cqw",
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
                    style: { width: "5.4167cqw", height: "5.4167cqw" },
                  }}
                >
                  <path {...{ d: "M17 3a2.850 2.830 0 1 1 4 4L7.500 20.500 2 22l1.500-5.500z" }}></path>
                  <path {...{ d: "M15 5l4 4" }}></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
