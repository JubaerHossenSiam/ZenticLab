import Link from "next/link";
export default function AboutDesign() {
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
          <div {...{ style: { display: "flex", flexDirection: "column" } }}>
            <h1
              {...{
                className: "zl-h1 ",
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "52px",
                  lineHeight: "1.2",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"Where Quality Meets "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Honesty"}</span>
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
              {
                "We are a small, focused team in Dhaka. You talk directly to the people who build your website."
              }
            </p>
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
                  x: "20",
                  y: "40",
                  width: "280",
                  height: "250",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <line {...{ x1: "21", y1: "72", x2: "299", y2: "72", stroke: "#ececef" }}></line>
              <circle {...{ cx: "42", cy: "56", r: "4.500", fill: "#ff5f57" }}></circle>
              <circle {...{ cx: "57", cy: "56", r: "4.500", fill: "#febc2e" }}></circle>
              <circle {...{ cx: "72", cy: "56", r: "4.500", fill: "#28c840" }}></circle>
              <rect {...{ x: "88", y: "49", width: "190", height: "14", rx: "7", fill: "#ececef" }}></rect>
              <rect {...{ x: "36", y: "84", width: "248", height: "84", rx: "12", fill: "#e9e6f4" }}></rect>
              <rect {...{ x: "52", y: "100", width: "110", height: "10", rx: "5", fill: "#200093" }}></rect>
              <rect
                {...{ x: "52", y: "118", width: "130", height: "7", rx: "3.500", fill: "#c4bce3" }}
              ></rect>
              <rect {...{ x: "52", y: "131", width: "96", height: "7", rx: "3.500", fill: "#c4bce3" }}></rect>
              <rect {...{ x: "52", y: "146", width: "58", height: "14", rx: "7", fill: "#200093" }}></rect>
              <rect {...{ x: "198", y: "96", width: "74", height: "60", rx: "10", fill: "#d9d4ec" }}></rect>
              <circle {...{ cx: "216", cy: "112", r: "6", fill: "#ffffff" }}></circle>
              <path {...{ d: "M198 150l22-24 14 15 9-9 29 18z", fill: "#a599d3" }}></path>
              <rect
                {...{
                  x: "36",
                  y: "180",
                  width: "76",
                  height: "62",
                  rx: "12",
                  fill: "#f6f3ff",
                  stroke: "#ece8f7",
                }}
              ></rect>
              <rect {...{ x: "44", y: "188", width: "60", height: "28", rx: "8", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "44", y: "223", width: "44", height: "6", rx: "3", fill: "#c4bce3" }}></rect>
              <rect {...{ x: "44", y: "233", width: "28", height: "5", rx: "2.500", fill: "#e9e6f4" }}></rect>
              <rect
                {...{
                  x: "122",
                  y: "180",
                  width: "76",
                  height: "62",
                  rx: "12",
                  fill: "#f6f3ff",
                  stroke: "#ece8f7",
                }}
              ></rect>
              <rect {...{ x: "130", y: "188", width: "60", height: "28", rx: "8", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "130", y: "223", width: "44", height: "6", rx: "3", fill: "#c4bce3" }}></rect>
              <rect
                {...{ x: "130", y: "233", width: "28", height: "5", rx: "2.500", fill: "#e9e6f4" }}
              ></rect>
              <rect
                {...{
                  x: "208",
                  y: "180",
                  width: "76",
                  height: "62",
                  rx: "12",
                  fill: "#f6f3ff",
                  stroke: "#ece8f7",
                }}
              ></rect>
              <rect {...{ x: "216", y: "188", width: "60", height: "28", rx: "8", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "216", y: "223", width: "44", height: "6", rx: "3", fill: "#c4bce3" }}></rect>
              <rect
                {...{ x: "216", y: "233", width: "28", height: "5", rx: "2.500", fill: "#e9e6f4" }}
              ></rect>
              <g {...{ transform: "translate(90 259) scale(0.78)", fill: "#a599d3" }}>
                <path
                  {...{
                    d: "M14 2l3.600 7.400 8.100 1.100-5.900 5.700 1.400 8.100L14 20.400 6.800 24.300l1.400-8.100L2.300 10.500l8.100-1.100z",
                  }}
                ></path>
              </g>
              <g {...{ transform: "translate(116 259) scale(0.78)", fill: "#a599d3" }}>
                <path
                  {...{
                    d: "M14 2l3.600 7.400 8.100 1.100-5.900 5.700 1.400 8.100L14 20.400 6.800 24.300l1.400-8.100L2.300 10.500l8.100-1.100z",
                  }}
                ></path>
              </g>
              <g {...{ transform: "translate(142 259) scale(0.78)", fill: "#a599d3" }}>
                <path
                  {...{
                    d: "M14 2l3.600 7.400 8.100 1.100-5.900 5.700 1.400 8.100L14 20.400 6.800 24.300l1.400-8.100L2.300 10.500l8.100-1.100z",
                  }}
                ></path>
              </g>
              <g {...{ transform: "translate(168 259) scale(0.78)", fill: "#a599d3" }}>
                <path
                  {...{
                    d: "M14 2l3.600 7.400 8.100 1.100-5.900 5.700 1.400 8.100L14 20.400 6.800 24.300l1.400-8.100L2.300 10.500l8.100-1.100z",
                  }}
                ></path>
              </g>
              <g {...{ transform: "translate(194 259) scale(0.78)", fill: "#a599d3" }}>
                <path
                  {...{
                    d: "M14 2l3.600 7.400 8.100 1.100-5.900 5.700 1.400 8.100L14 20.400 6.800 24.300l1.400-8.100L2.300 10.500l8.100-1.100z",
                  }}
                ></path>
              </g>
              <path
                {...{
                  d: "M32 310l-6 24 12-6 6 8 4-26z",
                  fill: "#200093",
                  stroke: "#ffffff",
                  strokeWidth: "3",
                  strokeLinejoin: "round",
                }}
              ></path>
              <path
                {...{
                  d: "M60 310l6 24-12-6-6 8-4-26z",
                  fill: "#200093",
                  stroke: "#ffffff",
                  strokeWidth: "3",
                  strokeLinejoin: "round",
                }}
              ></path>
              <circle
                {...{ cx: "46", cy: "292", r: "26", fill: "#200093", stroke: "#ffffff", strokeWidth: "4" }}
              ></circle>
              <g {...{ transform: "translate(32 278) scale(1.0)", fill: "#ffffff" }}>
                <path
                  {...{
                    d: "M14 2l3.600 7.400 8.100 1.100-5.900 5.700 1.400 8.100L14 20.400 6.800 24.300l1.400-8.100L2.300 10.500l8.100-1.100z",
                  }}
                ></path>
              </g>
              <rect
                {...{
                  x: "250",
                  y: "96",
                  width: "290",
                  height: "250",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <circle {...{ cx: "284", cy: "130", r: "17", fill: "#e9e6f4" }}></circle>
              <g
                {...{
                  transform: "translate(272 118)",
                  stroke: "#200093",
                  strokeWidth: "1.800",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path
                  {...{ d: "M1.500 12S5.500 5 12 5s10.500 7 10.500 7-4 7-10.500 7S1.500 12 1.500 12z" }}
                ></path>
                <circle {...{ cx: "12", cy: "12", r: "3" }}></circle>
              </g>
              <rect
                {...{ x: "312", y: "120", width: "104", height: "9", rx: "4.500", fill: "#d9d4ec" }}
              ></rect>
              <rect
                {...{ x: "312", y: "136", width: "66", height: "7", rx: "3.500", fill: "#e9e6f4" }}
              ></rect>
              <circle {...{ cx: "506", cy: "130", r: "18", fill: "#200093" }}></circle>
              <g
                {...{
                  transform: "translate(494 118)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.200",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path
                  {...{
                    d: "M12 1.500l9 3.300v6.700c0 5.600-3.800 9.200-9 10.500-5.200-1.300-9-4.900-9-10.500V4.800z",
                  }}
                ></path>
                <path {...{ d: "M7.800 12l3 3 5-6" }}></path>
              </g>
              <line {...{ x1: "270", y1: "160", x2: "520", y2: "160", stroke: "#ececef" }}></line>
              <circle {...{ cx: "284", cy: "185", r: "10", fill: "#e9e6f4" }}></circle>
              <path
                {...{
                  d: "M279 185.5l3.500 3.500 6-7",
                  stroke: "#200093",
                  strokeWidth: "2.200",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect {...{ x: "304", y: "181", width: "128", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "452", y: "176", width: "66", height: "18", rx: "9", fill: "#e9e6f4" }}></rect>
              <circle {...{ cx: "284", cy: "217", r: "10", fill: "#e9e6f4" }}></circle>
              <path
                {...{
                  d: "M279 217.5l3.500 3.500 6-7",
                  stroke: "#200093",
                  strokeWidth: "2.200",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect {...{ x: "304", y: "213", width: "108", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "452", y: "208", width: "66", height: "18", rx: "9", fill: "#e9e6f4" }}></rect>
              <circle {...{ cx: "284", cy: "249", r: "10", fill: "#e9e6f4" }}></circle>
              <path
                {...{
                  d: "M279 249.5l3.500 3.500 6-7",
                  stroke: "#200093",
                  strokeWidth: "2.200",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect {...{ x: "304", y: "245", width: "118", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "452", y: "240", width: "66", height: "18", rx: "9", fill: "#e9e6f4" }}></rect>
              <line {...{ x1: "270", y1: "272", x2: "520", y2: "272", stroke: "#ececef" }}></line>
              <rect {...{ x: "270", y: "286", width: "250", height: "44", rx: "14", fill: "#200093" }}></rect>
              <rect
                {...{
                  x: "288",
                  y: "302",
                  width: "76",
                  height: "9",
                  rx: "4.500",
                  fill: "#ffffff",
                  opacity: "0.85",
                }}
              ></rect>
              <rect {...{ x: "436", y: "299", width: "68", height: "16", rx: "8", fill: "#c4bce3" }}></rect>
              <circle
                {...{ cx: "250", cy: "206", r: "20", fill: "#200093", stroke: "#ffffff", strokeWidth: "4" }}
              ></circle>
              <g
                {...{
                  transform: "translate(241 197) scale(0.75)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.400",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M10 13a5 5 0 0 0 7.540.540l3-3a5 5 0 0 0-7.070-7.070l-1.720 1.710" }}></path>
                <path {...{ d: "M14 11a5 5 0 0 0-7.540-.540l-3 3a5 5 0 0 0 7.070 7.070l1.710-1.710" }}></path>
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
              {"Our Team"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"The people behind your project."}
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
              className: "zl-content-grid zl-card-grid zl-team-grid zl-section-content",
            }}
          >
            <div
              {...{
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "24px 24px 32px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "zl-team-card zl-card-panel",
              }}
            >
              <div
                {...{
                  style: { width: "100%", aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden" },
                  className: "zl-team-photo",
                }}
              >
                <img
                  {...{
                    src: "/images/c0da61e8827b.jpg",
                    alt: "Jubaer Hossen Siam",
                    style: {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "50% 0%",
                    },
                    loading: "lazy",
                    decoding: "async",
                  }}
                />
              </div>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "22px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "24px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"Jubaer Hossen Siam"}
              </h3>
              <p {...{ style: { fontSize: "16px", lineHeight: "1.5", color: "#4a4565", marginTop: "4px" } }}>
                {"Founder & CEO"}
              </p>
            </div>
            <div
              {...{
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "24px 24px 32px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "zl-team-card zl-card-panel",
              }}
            >
              <div
                {...{
                  style: { width: "100%", aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden" },
                  className: "zl-team-photo",
                }}
              >
                <img
                  {...{
                    src: "/images/085d126af302.jpg",
                    alt: "Zakaria Chaklader",
                    style: {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "50% 0%",
                    },
                    loading: "lazy",
                    decoding: "async",
                  }}
                />
              </div>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "22px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "24px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"Zakaria Chaklader"}
              </h3>
              <p {...{ style: { fontSize: "16px", lineHeight: "1.5", color: "#4a4565", marginTop: "4px" } }}>
                {"Co-Founder"}
              </p>
            </div>
            <div
              {...{
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "24px 24px 32px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "zl-team-card zl-card-panel",
              }}
            >
              <div
                {...{
                  style: { width: "100%", aspectRatio: "1 / 1", borderRadius: "16px", overflow: "hidden" },
                  className: "zl-team-photo",
                }}
              >
                <img
                  {...{
                    src: "/images/eaeae3be569f.jpg",
                    alt: "Ishrat Jahan Usha",
                    style: {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "50% 0%",
                    },
                    loading: "lazy",
                    decoding: "async",
                  }}
                />
              </div>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "22px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "24px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"Ishrat Jahan Usha"}
              </h3>
              <p {...{ style: { fontSize: "16px", lineHeight: "1.5", color: "#4a4565", marginTop: "4px" } }}>
                {"Web Designer"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{ style: { background: "var(--White, #ffffff)", padding: "96px 0" }, className: "zl-section" }}
      >
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
                {"Why We Started Zentic Lab"}
              </h2>
              <p
                {...{
                  style: {
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#4a4565",
                    marginTop: "24px",
                    textWrap: "pretty",
                  },
                  className: "zl-body-copy",
                }}
              >
                {
                  "Most business owners are not technical. Some agencies use this to sell them more than they need, just to earn more money."
                }
              </p>
              <p
                {...{
                  style: {
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#4a4565",
                    marginTop: "20px",
                    textWrap: "pretty",
                  },
                  className: "zl-body-copy",
                }}
              >
                {
                  "Quality is another problem. Many websites are copy-paste templates. They are slow, not secure, and not made for the owner's real customers. Owners lose money, time and customers because of them."
                }
              </p>
              <p
                {...{
                  style: {
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#4a4565",
                    marginTop: "20px",
                    textWrap: "pretty",
                  },
                  className: "zl-body-copy",
                }}
              >
                {
                  "So we started Zentic Lab to build websites for shops and businesses in Bangladesh the right way. We never use what you do not know about websites to sell you more. We listen first, then plan a solution that truly fits your business and your customers."
                }
              </p>
            </div>
            <div {...{ className: "zl-section-visual" }}>
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
                    x: "6",
                    y: "24",
                    width: "190",
                    height: "272",
                    rx: "20",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.5",
                  }}
                ></rect>
                <rect {...{ x: "20", y: "42", width: "84", height: "10", rx: "5", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "20", y: "58", width: "52", height: "7", rx: "3.5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "20", y: "86", width: "16", height: "16", rx: "4", fill: "#a599d3" }}></rect>
                <path
                  {...{
                    d: "M24 94.5l3 3 5-6",
                    stroke: "#fff",
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect
                  {...{ x: "44", y: "90.5", width: "64", height: "7", rx: "3.5", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "128", y: "86", width: "46", height: "16", rx: "8", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "138",
                    y: "91.5",
                    width: "26",
                    height: "5",
                    rx: "2.5",
                    fill: "#ffffff",
                    fillOpacity: "0.85",
                  }}
                ></rect>
                <rect {...{ x: "20", y: "116", width: "16", height: "16", rx: "4", fill: "#a599d3" }}></rect>
                <path
                  {...{
                    d: "M24 124.5l3 3 5-6",
                    stroke: "#fff",
                    strokeWidth: "2",
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect
                  {...{ x: "44", y: "120.5", width: "52", height: "7", rx: "3.5", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "128", y: "116", width: "46", height: "16", rx: "8", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "138",
                    y: "121.5",
                    width: "26",
                    height: "5",
                    rx: "2.5",
                    fill: "#ffffff",
                    fillOpacity: "0.85",
                  }}
                ></rect>
                <rect {...{ x: "20", y: "146", width: "16", height: "16", rx: "4", fill: "#200093" }}></rect>
                <path
                  {...{ d: "M28 150v8M24 154h8", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round" }}
                ></path>
                <rect
                  {...{ x: "44", y: "150.5", width: "70", height: "7", rx: "3.5", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "128", y: "146", width: "46", height: "16", rx: "8", fill: "#c4bce3" }}></rect>
                <rect
                  {...{
                    x: "138",
                    y: "151.5",
                    width: "26",
                    height: "5",
                    rx: "2.5",
                    fill: "#ffffff",
                    fillOpacity: "0.85",
                  }}
                ></rect>
                <rect {...{ x: "20", y: "176", width: "16", height: "16", rx: "4", fill: "#200093" }}></rect>
                <path
                  {...{ d: "M28 180v8M24 184h8", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round" }}
                ></path>
                <rect
                  {...{ x: "44", y: "180.5", width: "58", height: "7", rx: "3.5", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "128", y: "176", width: "46", height: "16", rx: "8", fill: "#c4bce3" }}></rect>
                <rect
                  {...{
                    x: "138",
                    y: "181.5",
                    width: "26",
                    height: "5",
                    rx: "2.5",
                    fill: "#ffffff",
                    fillOpacity: "0.85",
                  }}
                ></rect>
                <rect {...{ x: "20", y: "206", width: "16", height: "16", rx: "4", fill: "#200093" }}></rect>
                <path
                  {...{ d: "M28 210v8M24 214h8", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round" }}
                ></path>
                <rect
                  {...{ x: "44", y: "210.5", width: "46", height: "7", rx: "3.5", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "128", y: "206", width: "46", height: "16", rx: "8", fill: "#c4bce3" }}></rect>
                <rect
                  {...{
                    x: "138",
                    y: "211.5",
                    width: "26",
                    height: "5",
                    rx: "2.5",
                    fill: "#ffffff",
                    fillOpacity: "0.85",
                  }}
                ></rect>
                <line
                  {...{ x1: "20", y1: "244", x2: "182", y2: "244", stroke: "#e4dbfb", strokeWidth: "1.5" }}
                ></line>
                <rect {...{ x: "20", y: "258", width: "46", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "108", y: "250", width: "66", height: "26", rx: "13", fill: "#200093" }}
                ></rect>
                <rect
                  {...{
                    x: "120",
                    y: "260",
                    width: "42",
                    height: "6",
                    rx: "3",
                    fill: "#ffffff",
                    fillOpacity: "0.9",
                  }}
                ></rect>
                <rect
                  {...{
                    x: "200",
                    y: "80",
                    width: "270",
                    height: "210",
                    rx: "22",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.5",
                  }}
                ></rect>
                <path
                  {...{ d: "M201 102a21 21 0 0 1 21-21h226a21 21 0 0 1 21 21v12H201z", fill: "#e9e6f4" }}
                ></path>
                <circle {...{ cx: "222", cy: "98", r: "4.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "237", cy: "98", r: "4.5", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "252", cy: "98", r: "4.5", fill: "#c4bce3" }}></circle>
                <rect {...{ x: "220", y: "126", width: "60", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "340", y: "126", width: "26", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "374", y: "126", width: "26", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "408", y: "126", width: "26", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{ x: "220", y: "148", width: "110", height: "64", rx: "10", fill: "#e9e6f4" }}
                ></rect>
                <rect {...{ x: "344", y: "152", width: "90", height: "10", rx: "5", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "344", y: "170", width: "70", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "344", y: "184", width: "80", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "344", y: "198", width: "46", height: "14", rx: "7", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "220", y: "226", width: "64", height: "48", rx: "8", fill: "#f3f1fa" }}></rect>
                <rect {...{ x: "292", y: "226", width: "64", height: "48", rx: "8", fill: "#f3f1fa" }}></rect>
                <rect {...{ x: "364", y: "226", width: "64", height: "48", rx: "8", fill: "#f3f1fa" }}></rect>
                <rect {...{ x: "228", y: "234", width: "48", height: "18", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "300", y: "234", width: "48", height: "18", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "372", y: "234", width: "48", height: "18", rx: "4", fill: "#e9e6f4" }}></rect>
                <circle
                  {...{
                    cx: "335",
                    cy: "190",
                    r: "34",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.5",
                  }}
                ></circle>
                <circle {...{ cx: "335", cy: "190", r: "20", stroke: "#e9e6f4", strokeWidth: "6" }}></circle>
                <path
                  {...{
                    d: "M335 170a20 20 0 0 1 20 20",
                    stroke: "#200093",
                    strokeWidth: "6",
                    strokeLinecap: "round",
                  }}
                ></path>
                <circle
                  {...{ cx: "450", cy: "86", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <g
                  {...{
                    transform: "translate(438 74)",
                    stroke: "#fff",
                    strokeWidth: "2.100",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                >
                  <rect {...{ x: "3", y: "11", width: "18", height: "11", rx: "2" }}></rect>
                  <path {...{ d: "M7 11V7a5 5 0 0 1 9.900-1" }}></path>
                </g>
                <g>
                  <circle {...{ cx: "232", cy: "330", r: "15", fill: "#d9d4ec" }}></circle>
                  <circle {...{ cx: "232", cy: "325", r: "5.500", fill: "#a599d3" }}></circle>
                  <path {...{ d: "M221 342a11 8 0 0 1 22 0z", fill: "#a599d3" }}></path>
                  <g {...{ opacity: "0.6" }}>
                    <circle {...{ cx: "280", cy: "330", r: "15", fill: "#d9d4ec" }}></circle>
                    <circle {...{ cx: "280", cy: "325", r: "5.500", fill: "#a599d3" }}></circle>
                    <path {...{ d: "M269 342a11 8 0 0 1 22 0z", fill: "#a599d3" }}></path>
                  </g>
                  <g {...{ opacity: "0.3" }}>
                    <circle {...{ cx: "328", cy: "330", r: "15", fill: "#d9d4ec" }}></circle>
                    <circle {...{ cx: "328", cy: "325", r: "5.500", fill: "#a599d3" }}></circle>
                    <path {...{ d: "M317 342a11 8 0 0 1 22 0z", fill: "#a599d3" }}></path>
                  </g>
                  <path
                    {...{
                      d: "M366 330h40M394 318l12 12-12 12",
                      stroke: "#a599d3",
                      strokeWidth: "3.500",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  ></path>
                </g>
              </svg>
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
                  wordSpacing: "0.1em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"What Our Name Means"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Three words, three promises to you."}
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
                    d: "M14 62c10-12 20 12 30 0s20 12 30 0 14 8 22 0",
                    fill: "none",
                    stroke: "#a599d3",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <circle {...{ cx: "82", cy: "42", r: "7", fill: "#e9e6f4" }}></circle>
                <rect
                  {...{ x: "14", y: "74", width: "46", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "14", y: "33", width: "34", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
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
                      d: "M11 20A7 7 0 0 1 9.800 6.100C15.500 5 17 4.480 19 2c1 2 2 4.180 2 8 0 5.500-4.780 10-10 10z",
                    }}
                  ></path>
                  <path {...{ d: "M2 21c0-3 1.850-5.360 5.080-6C9.500 14.520 12 13 13 12" }}></path>
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Zen (Peace)"}
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
                  "Peace of mind for you. A clear process and a stable website, so you can focus on your business without worry."
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
                <circle {...{ cx: "30", cy: "50", r: "11", fill: "#e9e6f4" }}></circle>
                <circle {...{ cx: "30", cy: "47", r: "4", fill: "#c4bce3" }}></circle>
                <path {...{ d: "M22 58a8 5 0 0 1 16 0z", fill: "#c4bce3" }}></path>
                <rect {...{ x: "48", y: "40", width: "46", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "48", y: "51", width: "32", height: "5", rx: "2.500", fill: "#c4bce3" }}
                ></rect>
                <rect
                  {...{ x: "14", y: "68", width: "82", height: "11", rx: "5.500", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "22", y: "72", width: "36", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
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
                  <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                  <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Authentic (Honesty)"}
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
                  "We are real and honest in everything. We tell you the truth, even when it means a smaller project for us."
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
                <rect
                  {...{ x: "14", y: "33", width: "82", height: "9", rx: "4.500", fill: "#e9e6f4" }}
                ></rect>
                <path
                  {...{
                    d: "M20 33v5M30 33v7M40 33v5M50 33v7M60 33v5M70 33v7M80 33v5M90 33v7",
                    stroke: "#a599d3",
                    strokeWidth: "1.500",
                    strokeLinecap: "round",
                  }}
                ></path>
                <rect {...{ x: "14", y: "48", width: "38", height: "30", rx: "6", fill: "#e9e6f4" }}></rect>
                <path
                  {...{
                    d: "M20 70l8-9 6 5 9-11",
                    fill: "none",
                    stroke: "#a599d3",
                    strokeWidth: "2.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect {...{ x: "60", y: "50", width: "36", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "60", y: "61", width: "26", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "60", y: "72", width: "30", height: "6", rx: "3", fill: "#c4bce3" }}></rect>
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
                  <path {...{ d: "M10 2v7.310" }}></path>
                  <path {...{ d: "M14 9.300V1.990" }}></path>
                  <path {...{ d: "M8.500 2h7" }}></path>
                  <path {...{ d: "M14 9.300a6.500 6.500 0 1 1-4 0" }}></path>
                  <path {...{ d: "M5.520 16h12.960" }}></path>
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Lab (Precision)"}
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
                  "We solve problems with care, not in a rush. We study your business, plan carefully and build the right solution for you."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{ style: { background: "var(--White, #ffffff)", padding: "96px 0" }, className: "zl-section" }}
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
              {"What We Believe"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"The rules we follow in every project."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                marginTop: "56px",
              },
              className: "zl-content-grid zl-section-content",
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
                <g {...{ transform: "translate(12 10)" }}>
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
                  <rect
                    {...{ x: "14", y: "34", width: "50", height: "9", rx: "4.500", fill: "#e9e6f4" }}
                  ></rect>
                  <rect {...{ x: "14", y: "48", width: "78", height: "26", rx: "6", fill: "#f3f1fa" }}></rect>
                </g>
                <g {...{ transform: "translate(-2 -2)" }}>
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
                  <rect
                    {...{ x: "14", y: "34", width: "50", height: "9", rx: "4.500", fill: "#d9d4ec" }}
                  ></rect>
                  <rect {...{ x: "14", y: "48", width: "78", height: "26", rx: "6", fill: "#e9e6f4" }}></rect>
                  <path
                    {...{
                      d: "M22 68l16-10 12 6 18-14",
                      fill: "none",
                      stroke: "#a599d3",
                      strokeWidth: "2.500",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  ></path>
                </g>
                <circle
                  {...{ cx: "130", cy: "72", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <g
                  {...{
                    transform: "translate(118 60)",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "2.1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path {...{ d: "M22 7l-8.500 8.500-5-5L2 17" }}></path>
                  <path {...{ d: "M16 7h6v6" }}></path>
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"We Grow Together"}
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
                  "You are a partner, not a money machine. We believe a good team and a good client can grow without limit."
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
                <circle {...{ cx: "32", cy: "52", r: "9", fill: "#d9d4ec" }}></circle>
                <circle {...{ cx: "32", cy: "50", r: "3.500", fill: "#a599d3" }}></circle>
                <path {...{ d: "M26 58a6 4.500 0 0 1 12 0z", fill: "#a599d3" }}></path>
                <circle {...{ cx: "66", cy: "52", r: "9", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "66", cy: "50", r: "3.500", fill: "#200093" }}></circle>
                <path {...{ d: "M60 58a6 4.500 0 0 1 12 0z", fill: "#200093" }}></path>
                <rect
                  {...{ x: "18", y: "68", width: "30", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{ x: "54", y: "68", width: "30", height: "5", rx: "2.500", fill: "#d9d4ec" }}
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
                      d: "M19 14c1.490-1.460 3-3.210 3-5.500A5.500 5.500 0 0 0 16.500 3c-1.760 0-3 .5-4.500 2-1.500-1.500-2.740-2-4.500-2A5.500 5.500 0 0 0 2 8.500c0 2.300 1.500 4.050 3 5.500l7 7z",
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"People Come First"}
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
                  "We treat our team like family and our clients like partners. Respect and open talk come before anything else."
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
                <rect {...{ x: "14", y: "33", width: "9", height: "9", rx: "2.500", fill: "#a599d3" }}></rect>
                <path
                  {...{
                    d: "M16 37.500l2 2 3.500-4",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "1.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect
                  {...{ x: "29", y: "35", width: "56", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "14", y: "48", width: "9", height: "9", rx: "2.500", fill: "#a599d3" }}></rect>
                <path
                  {...{
                    d: "M16 52.500l2 2 3.500-4",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "1.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect
                  {...{ x: "29", y: "50", width: "44", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{
                    x: "14",
                    y: "63",
                    width: "9",
                    height: "9",
                    rx: "2.500",
                    fill: "#e9e6f4",
                    stroke: "#c4bce3",
                  }}
                ></rect>
                <rect
                  {...{ x: "29", y: "65", width: "50", height: "5", rx: "2.500", fill: "#e9e6f4" }}
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Everything in Writing"}
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
                {"Every task, cost and deadline is written down, so there is no confusion later."}
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
                <rect {...{ x: "14", y: "36", width: "38", height: "38", rx: "9", fill: "#d9d4ec" }}></rect>
                <circle {...{ cx: "52", cy: "55", r: "7", fill: "#d9d4ec" }}></circle>
                <rect {...{ x: "58", y: "36", width: "38", height: "38", rx: "9", fill: "#e9e6f4" }}></rect>
                <circle {...{ cx: "58", cy: "55", r: "8.500", fill: "#ffffff" }}></circle>
                <circle {...{ cx: "58", cy: "55", r: "7", fill: "#d9d4ec" }}></circle>
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
                    {...{ d: "M10 13a5 5 0 0 0 7.540.540l3-3a5 5 0 0 0-7.070-7.070l-1.720 1.710" }}
                  ></path>
                  <path
                    {...{ d: "M14 11a5 5 0 0 0-7.540-.540l-3 3a5 5 0 0 0 7.070 7.070l1.710-1.710" }}
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"A Good Fit on Both Sides"}
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
                  "We work best with clients who respect our team and value our work. A good fit helps both sides do their best."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{
          style: { background: "linear-gradient(to bottom, #ffffff 50%, #f3eeff 50%)", padding: "0" },
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
                {"Think We Are a Good Fit?"}
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
                {"Let's talk about your business and how we can help."}
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
                    left: "8.3333cqw",
                    top: "16.25cqw",
                    width: "83.3333cqw",
                    height: "55cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.1667cqw",
                    boxShadow: "0 3.75cqw 9.1667cqw rgba(10,0,61,.38)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      height: "6.6667cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.0417cqw",
                      padding: "0 2.9167cqw",
                      borderBottom: "0.2083cqw solid #ececef",
                      background: "#fafafb",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "1.4583cqw",
                        height: "1.4583cqw",
                        borderRadius: "50%",
                        background: "#ff5f57",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.4583cqw",
                        height: "1.4583cqw",
                        borderRadius: "50%",
                        background: "#febc2e",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.4583cqw",
                        height: "1.4583cqw",
                        borderRadius: "50%",
                        background: "#28c840",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        marginLeft: "auto",
                        width: "11.6667cqw",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#ececef",
                      },
                    }}
                  ></span>
                </div>
                <div
                  {...{
                    style: {
                      flex: "1",
                      display: "flex",
                      gap: "2.9167cqw",
                      padding: "3.3333cqw 3.3333cqw 3.3333cqw",
                    },
                  }}
                >
                  <div
                    {...{
                      style: {
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2.0833cqw",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <div
                      {...{
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "2.0833cqw",
                          height: "10.8333cqw",
                          boxSizing: "border-box",
                          padding: "0 2.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#f6f3ff",
                        },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            width: "6.6667cqw",
                            height: "6.6667cqw",
                            borderRadius: "1.875cqw",
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
                            style: { width: "3.125cqw", height: "3.125cqw" },
                          }}
                        >
                          <path {...{ d: "M4 9l1.5-5h13L20 9" }}></path>
                          <path
                            {...{
                              d: "M4 9a2.7 2.7 0 0 0 5.300 0 2.700 2.700 0 0 0 5.400 0A2.700 2.700 0 0 0 20 9",
                            }}
                          ></path>
                          <path {...{ d: "M5 12v8h14v-8" }}></path>
                        </svg>
                      </span>
                      <span
                        {...{
                          style: { display: "flex", flexDirection: "column", gap: "1.25cqw", flex: "1" },
                        }}
                      >
                        <span
                          {...{
                            style: {
                              height: "1.4583cqw",
                              width: "20cqw",
                              borderRadius: "0.8333cqw",
                              background: "#c4bce3",
                            },
                          }}
                        ></span>
                        <span
                          {...{
                            style: {
                              height: "1.25cqw",
                              width: "14.5833cqw",
                              borderRadius: "0.625cqw",
                              background: "#e0dbf0",
                            },
                          }}
                        ></span>
                      </span>
                      <span
                        {...{
                          style: {
                            width: "4.1667cqw",
                            height: "4.1667cqw",
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
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "3.400",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            style: { width: "2.5cqw", height: "2.5cqw" },
                          }}
                        >
                          <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                        </svg>
                      </span>
                    </div>
                    <div
                      {...{
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "2.0833cqw",
                          height: "10.8333cqw",
                          boxSizing: "border-box",
                          padding: "0 2.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#f6f3ff",
                        },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            width: "6.6667cqw",
                            height: "6.6667cqw",
                            borderRadius: "1.875cqw",
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
                            style: { width: "3.125cqw", height: "3.125cqw" },
                          }}
                        >
                          <path {...{ d: "M12 14l4-4" }}></path>
                          <path {...{ d: "M3.300 19a10 10 0 1 1 17.400 0" }}></path>
                        </svg>
                      </span>
                      <span
                        {...{
                          style: { display: "flex", flexDirection: "column", gap: "1.25cqw", flex: "1" },
                        }}
                      >
                        <span
                          {...{
                            style: {
                              height: "1.4583cqw",
                              width: "15cqw",
                              borderRadius: "0.8333cqw",
                              background: "#c4bce3",
                            },
                          }}
                        ></span>
                        <span
                          {...{
                            style: {
                              height: "1.25cqw",
                              width: "10.4167cqw",
                              borderRadius: "0.625cqw",
                              background: "#e0dbf0",
                            },
                          }}
                        ></span>
                      </span>
                      <span
                        {...{
                          style: {
                            width: "4.1667cqw",
                            height: "4.1667cqw",
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
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "3.400",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            style: { width: "2.5cqw", height: "2.5cqw" },
                          }}
                        >
                          <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                        </svg>
                      </span>
                    </div>
                    <div
                      {...{
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "2.0833cqw",
                          height: "10.8333cqw",
                          boxSizing: "border-box",
                          padding: "0 2.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#f6f3ff",
                        },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            width: "6.6667cqw",
                            height: "6.6667cqw",
                            borderRadius: "1.875cqw",
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
                            style: { width: "3.125cqw", height: "3.125cqw" },
                          }}
                        >
                          <path
                            {...{ d: "M21 12a8 8 0 0 1-11.500 7.200L4 20l1-4.500A8 8 0 1 1 21 12z" }}
                          ></path>
                        </svg>
                      </span>
                      <span
                        {...{
                          style: { display: "flex", flexDirection: "column", gap: "1.25cqw", flex: "1" },
                        }}
                      >
                        <span
                          {...{
                            style: {
                              height: "1.4583cqw",
                              width: "17.5cqw",
                              borderRadius: "0.8333cqw",
                              background: "#c4bce3",
                            },
                          }}
                        ></span>
                        <span
                          {...{
                            style: {
                              height: "1.25cqw",
                              width: "12.5cqw",
                              borderRadius: "0.625cqw",
                              background: "#e0dbf0",
                            },
                          }}
                        ></span>
                      </span>
                      <span
                        {...{
                          style: {
                            width: "4.1667cqw",
                            height: "4.1667cqw",
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
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "3.400",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            style: { width: "2.5cqw", height: "2.5cqw" },
                          }}
                        >
                          <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div
                    {...{
                      style: {
                        width: "26.6667cqw",
                        flex: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2.9167cqw",
                      },
                    }}
                  >
                    <div {...{ style: { position: "relative", width: "23.3333cqw", height: "23.3333cqw" } }}>
                      <svg
                        {...{
                          width: "112",
                          height: "112",
                          viewBox: "0 0 112 112",
                          style: { display: "block", width: "23.3333cqw", height: "23.3333cqw" },
                        }}
                      >
                        <circle
                          {...{
                            cx: "56",
                            cy: "56",
                            r: "46",
                            fill: "none",
                            stroke: "#e9e6f4",
                            strokeWidth: "12",
                          }}
                        ></circle>
                        <circle
                          {...{
                            cx: "56",
                            cy: "56",
                            r: "46",
                            fill: "none",
                            stroke: "#200093",
                            strokeWidth: "12",
                            strokeLinecap: "round",
                            strokeDasharray: "270 289",
                            transform: "rotate(-90 56 56)",
                          }}
                        ></circle>
                      </svg>
                      <span
                        {...{
                          style: {
                            position: "absolute",
                            left: "5.8333cqw",
                            top: "5.8333cqw",
                            width: "11.6667cqw",
                            height: "11.6667cqw",
                            borderRadius: "50%",
                            background: "#1f8a5a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <svg
                          {...{
                            width: "28",
                            height: "28",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#ffffff",
                            strokeWidth: "3.200",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            style: { width: "5.8333cqw", height: "5.8333cqw" },
                          }}
                        >
                          <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                        </svg>
                      </span>
                    </div>
                    <span
                      {...{
                        style: {
                          width: "15cqw",
                          height: "1.6667cqw",
                          borderRadius: "0.8333cqw",
                          background: "#e9e6f4",
                        },
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
