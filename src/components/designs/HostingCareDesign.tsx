import Link from "next/link";
export default function HostingCareDesign() {
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
              {"Keep Your Website "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Safe, Fast"}</span>
              {" and Running Smoothly"}
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
              {"We look after the technical side, so you never have to worry about your website."}
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
                  width: "300",
                  height: "270",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <line {...{ x1: "21", y1: "72", x2: "319", y2: "72", stroke: "#ececef" }}></line>
              <circle {...{ cx: "42", cy: "56", r: "4.500", fill: "#ff5f57" }}></circle>
              <circle {...{ cx: "57", cy: "56", r: "4.500", fill: "#febc2e" }}></circle>
              <circle {...{ cx: "72", cy: "56", r: "4.500", fill: "#28c840" }}></circle>
              <rect {...{ x: "88", y: "49", width: "210", height: "14", rx: "7", fill: "#ececef" }}></rect>
              <circle {...{ cx: "50", cy: "94", r: "9", fill: "#c9a45c" }}></circle>
              <rect {...{ x: "68", y: "90", width: "44", height: "8", rx: "4", fill: "#2f3e5c" }}></rect>
              <rect {...{ x: "200", y: "91", width: "28", height: "6", rx: "3", fill: "#d6dce8" }}></rect>
              <rect {...{ x: "236", y: "91", width: "28", height: "6", rx: "3", fill: "#d6dce8" }}></rect>
              <rect {...{ x: "272", y: "91", width: "28", height: "6", rx: "3", fill: "#d6dce8" }}></rect>
              <rect {...{ x: "36", y: "112", width: "268", height: "100", rx: "12", fill: "#2f3e5c" }}></rect>
              <rect
                {...{ x: "52", y: "130", width: "104", height: "11", rx: "5.500", fill: "#f3ece0" }}
              ></rect>
              <rect {...{ x: "52", y: "149", width: "120", height: "6", rx: "3", fill: "#8b97b3" }}></rect>
              <rect {...{ x: "52", y: "161", width: "90", height: "6", rx: "3", fill: "#8b97b3" }}></rect>
              <rect {...{ x: "52", y: "180", width: "54", height: "16", rx: "8", fill: "#c9a45c" }}></rect>
              <circle {...{ cx: "250", cy: "162", r: "34", fill: "#3e5078" }}></circle>
              <circle {...{ cx: "250", cy: "162", r: "23", fill: "#d6dce8" }}></circle>
              <circle {...{ cx: "250", cy: "162", r: "11", fill: "#2f3e5c" }}></circle>
              <circle {...{ cx: "244", cy: "156", r: "3.500", fill: "#ffffff", opacity: "0.8" }}></circle>
              <rect {...{ x: "36", y: "226", width: "82", height: "66", rx: "10", fill: "#f3ece0" }}></rect>
              <rect {...{ x: "44", y: "234", width: "66", height: "34", rx: "7", fill: "#d6dce8" }}></rect>
              <rect {...{ x: "44", y: "275", width: "40", height: "6", rx: "3", fill: "#c9a45c" }}></rect>
              <rect {...{ x: "128", y: "226", width: "82", height: "66", rx: "10", fill: "#f3ece0" }}></rect>
              <rect {...{ x: "136", y: "234", width: "66", height: "34", rx: "7", fill: "#c4cbdb" }}></rect>
              <rect {...{ x: "136", y: "275", width: "40", height: "6", rx: "3", fill: "#c9a45c" }}></rect>
              <rect {...{ x: "220", y: "226", width: "84", height: "66", rx: "10", fill: "#f3ece0" }}></rect>
              <rect {...{ x: "228", y: "234", width: "68", height: "34", rx: "7", fill: "#d6dce8" }}></rect>
              <rect {...{ x: "228", y: "275", width: "40", height: "6", rx: "3", fill: "#c9a45c" }}></rect>
              <rect
                {...{
                  x: "270",
                  y: "58",
                  width: "270",
                  height: "78",
                  rx: "20",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <circle {...{ cx: "308", cy: "97", r: "21", fill: "#200093" }}></circle>
              <g
                {...{
                  transform: "translate(296 85) scale(1)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
              </g>
              <rect
                {...{ x: "342", y: "84", width: "112", height: "9", rx: "4.500", fill: "#d9d4ec" }}
              ></rect>
              <rect {...{ x: "342", y: "101", width: "72", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
              <circle {...{ cx: "506", cy: "97", r: "12", fill: "#1f8a5a" }}></circle>
              <path
                {...{
                  d: "M500 97.500l4 4 7-8",
                  stroke: "#fff",
                  strokeWidth: "2.400",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect
                {...{
                  x: "270",
                  y: "152",
                  width: "270",
                  height: "78",
                  rx: "20",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <circle {...{ cx: "308", cy: "191", r: "21", fill: "#200093" }}></circle>
              <g
                {...{
                  transform: "translate(296 179) scale(1)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }}></path>
              </g>
              <rect {...{ x: "342", y: "178", width: "170", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
              <rect {...{ x: "342", y: "178", width: "148", height: "10", rx: "5", fill: "#a599d3" }}></rect>
              <rect {...{ x: "342", y: "199", width: "72", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
              <rect
                {...{
                  x: "270",
                  y: "246",
                  width: "270",
                  height: "100",
                  rx: "20",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <circle {...{ cx: "308", cy: "286", r: "21", fill: "#200093" }}></circle>
              <g
                {...{
                  transform: "translate(296 274) scale(1)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <circle {...{ cx: "12", cy: "12", r: "10" }}></circle>
                <path {...{ d: "M2 12h20" }}></path>
                <path
                  {...{
                    d: "M12 2a15.300 15.300 0 0 1 4 10 15.300 15.300 0 0 1-4 10 15.300 15.300 0 0 1-4-10 15.300 15.300 0 0 1 4-10z",
                  }}
                ></path>
              </g>
              <rect {...{ x: "342", y: "264", width: "90", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <circle {...{ cx: "518", cy: "268", r: "5", fill: "#1f8a5a" }}></circle>
              <rect {...{ x: "342", y: "298", width: "4", height: "20", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "349", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "356", y: "296", width: "4", height: "22", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "363", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "370", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "377", y: "296", width: "4", height: "22", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "384", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "391", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "398", y: "298", width: "4", height: "20", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "405", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "412", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "419", y: "296", width: "4", height: "22", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "426", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "433", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "440", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "447", y: "296", width: "4", height: "22", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "454", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "461", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "468", y: "296", width: "4", height: "22", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "475", y: "294", width: "4", height: "24", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "482", y: "292", width: "4", height: "26", rx: "2", fill: "#a599d3" }}></rect>
              <rect {...{ x: "489", y: "294", width: "4", height: "24", rx: "2", fill: "#200093" }}></rect>
              <rect {...{ x: "496", y: "292", width: "4", height: "26", rx: "2", fill: "#200093" }}></rect>
              <rect {...{ x: "503", y: "294", width: "4", height: "24", rx: "2", fill: "#200093" }}></rect>
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
              {"What Does Your Website Need?"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Hosting keeps your website online. Our care plans keep it updated and safe."}
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
                <rect {...{ x: "14", y: "34", width: "82", height: "16", rx: "6", fill: "#e9e6f4" }}></rect>
                <circle {...{ cx: "23", cy: "42", r: "2.500", fill: "#a599d3" }}></circle>
                <rect {...{ x: "32", y: "40", width: "34", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "14", y: "56", width: "82", height: "16", rx: "6", fill: "#f3f1fa" }}></rect>
                <circle {...{ cx: "23", cy: "64", r: "2.500", fill: "#a599d3" }}></circle>
                <rect {...{ x: "32", y: "62", width: "26", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
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
                  <rect {...{ x: "2", y: "3", width: "20", height: "8", rx: "2" }}></rect>
                  <rect {...{ x: "2", y: "13", width: "20", height: "8", rx: "2" }}></rect>
                  <path {...{ d: "M6 7h.01M6 17h.01" }}></path>
                </g>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "26px",
                    lineHeight: "1.3",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "22px",
                    textWrap: "balance",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Domain & Hosting Plans"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "8px",
                    fontStyle: "italic",
                    textWrap: "pretty",
                    minHeight: "52px",
                  },
                  className: "zl-card-description",
                }}
              >
                {"For websites that need to stay online and load fast"}
              </p>
              <p
                {...{
                  style: {
                    fontSize: "14px",
                    lineHeight: "1.4",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#200093",
                    marginTop: "28px",
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
                    marginTop: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  },
                }}
              >
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {".com domain for 1 year"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Fast BDIX hosting"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Free SSL certificate"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Hosting protection"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Website setup by us"}
                </li>
              </ul>
              <div
                {...{
                  style: { marginTop: "auto", width: "100%", paddingTop: "32px", boxSizing: "border-box" },
                }}
              >
                <div {...{ style: { borderTop: "1px solid #e4dbfb", paddingTop: "24px" } }}>
                  <p {...{ style: { fontSize: "15px", color: "#4a4565" } }}>{"Starting from"}</p>
                  <p
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "34px",
                        lineHeight: "1.2",
                        fontWeight: "800",
                        color: "#200093",
                        marginTop: "4px",
                      },
                    }}
                  >
                    {"6,000 BDT "}
                    <span
                      {...{
                        style: { fontSize: "17px", fontWeight: "600", color: "#4a4565" },
                        className: "zl-body-copy",
                      }}
                    >
                      {"per year"}
                    </span>
                  </p>
                  <Link
                    {...{
                      className: "zl-btn-outline",
                      href: "/domain-hosting-plans",
                      style: {
                        display: "flex",
                        width: "fit-content",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        marginTop: "24px",
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
                    {"See Hosting Plans\n"}
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
                <rect {...{ x: "14", y: "34", width: "36", height: "28", rx: "6", fill: "#e9e6f4" }}></rect>
                <path
                  {...{
                    d: "M18 58l9-10 7 7 4-4 8 7",
                    fill: "none",
                    stroke: "#c4bce3",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect {...{ x: "56", y: "36", width: "40", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "56", y: "48", width: "30", height: "5", rx: "2.500", fill: "#e9e6f4" }}
                ></rect>
                <rect {...{ x: "14", y: "70", width: "82", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
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
                    fontSize: "26px",
                    lineHeight: "1.3",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "22px",
                    textWrap: "balance",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Content Update Plans"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "8px",
                    fontStyle: "italic",
                    textWrap: "pretty",
                    minHeight: "52px",
                  },
                  className: "zl-card-description",
                }}
              >
                {"For websites whose content changes often"}
              </p>
              <p
                {...{
                  style: {
                    fontSize: "14px",
                    lineHeight: "1.4",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#200093",
                    marginTop: "28px",
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
                    marginTop: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  },
                }}
              >
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"2 or 4 hours of expert help every month"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Text, photo and product changes"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Done by our developers"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
              <div
                {...{
                  style: { marginTop: "auto", width: "100%", paddingTop: "32px", boxSizing: "border-box" },
                }}
              >
                <div {...{ style: { borderTop: "1px solid #e4dbfb", paddingTop: "24px" } }}>
                  <p {...{ style: { fontSize: "15px", color: "#4a4565" } }}>{"Starting from"}</p>
                  <p
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "34px",
                        lineHeight: "1.2",
                        fontWeight: "800",
                        color: "#200093",
                        marginTop: "4px",
                      },
                    }}
                  >
                    {"12,000 BDT "}
                    <span
                      {...{
                        style: { fontSize: "17px", fontWeight: "600", color: "#4a4565" },
                        className: "zl-body-copy",
                      }}
                    >
                      {"per year"}
                    </span>
                  </p>
                  <Link
                    {...{
                      className: "zl-btn-outline",
                      href: "/content-update-plans",
                      style: {
                        display: "flex",
                        width: "fit-content",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        marginTop: "24px",
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
                <rect {...{ x: "14", y: "63", width: "9", height: "9", rx: "2.500", fill: "#a599d3" }}></rect>
                <path
                  {...{
                    d: "M16 67.500l2 2 3.500-4",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "1.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect
                  {...{ x: "29", y: "65", width: "50", height: "5", rx: "2.500", fill: "#d9d4ec" }}
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
                    fontSize: "26px",
                    lineHeight: "1.3",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "22px",
                    textWrap: "balance",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Security Plans"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "8px",
                    fontStyle: "italic",
                    textWrap: "pretty",
                    minHeight: "52px",
                  },
                  className: "zl-card-description",
                }}
              >
                {"For websites that need upkeep and protection"}
              </p>
              <p
                {...{
                  style: {
                    fontSize: "14px",
                    lineHeight: "1.4",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#200093",
                    marginTop: "28px",
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
                    marginTop: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  },
                }}
              >
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Software updates and backups"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"Website security checks"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#0a003d",
                    },
                  }}
                >
                  <span {...{ style: { flex: "none", marginTop: "3px", display: "flex" } }}>
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
                  {"24/7 monitoring in Complete Care"}
                </li>
              </ul>
              <div
                {...{
                  style: { marginTop: "auto", width: "100%", paddingTop: "32px", boxSizing: "border-box" },
                }}
              >
                <div {...{ style: { borderTop: "1px solid #e4dbfb", paddingTop: "24px" } }}>
                  <p {...{ style: { fontSize: "15px", color: "#4a4565" } }}>{"Starting from"}</p>
                  <p
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "34px",
                        lineHeight: "1.2",
                        fontWeight: "800",
                        color: "#200093",
                        marginTop: "4px",
                      },
                    }}
                  >
                    {"12,000 BDT "}
                    <span
                      {...{
                        style: { fontSize: "17px", fontWeight: "600", color: "#4a4565" },
                        className: "zl-body-copy",
                      }}
                    >
                      {"per year"}
                    </span>
                  </p>
                  <Link
                    {...{
                      className: "zl-btn-outline",
                      href: "/security-maintenance-plans",
                      style: {
                        display: "flex",
                        width: "fit-content",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        marginTop: "24px",
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
              {"Why Buy Hosting & Care From Us?"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"A good website can still fail without the right hosting and regular care."}
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
                <rect {...{ x: "14", y: "62", width: "14", height: "16", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "34", y: "52", width: "14", height: "26", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "54", y: "42", width: "14", height: "36", rx: "3", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "74", y: "34", width: "14", height: "44", rx: "3", fill: "#e9e6f4" }}></rect>
                <path
                  {...{ d: "M12 56h80", stroke: "#a599d3", strokeWidth: "1.500", strokeDasharray: "3 3" }}
                ></path>
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
                  <path {...{ d: "M12 14l4-4" }}></path>
                  <path {...{ d: "M3.300 19a10 10 0 1 1 17.400 0" }}></path>
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
                {"Hosting That Fits Your Website"}
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
                  "We know how much power your website needs to stay fast and secure. You never get hosting that is too weak or too big."
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
                <rect {...{ x: "14", y: "34", width: "82", height: "12", rx: "6", fill: "#e9e6f4" }}></rect>
                <circle {...{ cx: "22", cy: "40", r: "3", fill: "#a599d3" }}></circle>
                <rect {...{ x: "30", y: "38", width: "38", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "14", y: "51", width: "82", height: "12", rx: "6", fill: "#f3f1fa" }}></rect>
                <circle {...{ cx: "22", cy: "57", r: "3", fill: "#c4bce3" }}></circle>
                <rect {...{ x: "30", y: "55", width: "30", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "14", y: "68", width: "82", height: "12", rx: "6", fill: "#f3f1fa" }}></rect>
                <circle {...{ cx: "22", cy: "74", r: "3", fill: "#c4bce3" }}></circle>
                <rect {...{ x: "30", y: "72", width: "44", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Hosting Problems Fixed Faster"}
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
                  "Some problems come from the hosting, not the website. When your hosting is with us, we can fix them ourselves."
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
                <path
                  {...{
                    d: "M30 70h46a10 10 0 0 0 1-20 14 14 0 0 0-27-3 12 12 0 0 0-20 7 8 8 0 0 0 0 16z",
                    fill: "#e9e6f4",
                    stroke: "#c4bce3",
                    strokeWidth: "2",
                  }}
                ></path>
                <path
                  {...{
                    d: "M53 64V52M47 57l6-6 6 6",
                    fill: "none",
                    stroke: "#a599d3",
                    strokeWidth: "2.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
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
                {"Protected and Backed Up"}
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
                  "We keep your website protected and backed up. A hack or a failed update does not cost you customers or your data."
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
                <rect {...{ x: "14", y: "34", width: "50", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "14", y: "48", width: "82", height: "9", rx: "4.500", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "14", y: "62", width: "60", height: "9", rx: "4.500", fill: "#e9e6f4" }}
                ></rect>
                <rect {...{ x: "76", y: "62", width: "2", height: "9", rx: "1", fill: "#a599d3" }}></rect>
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
                  <path {...{ d: "M16 18l6-6-6-6" }}></path>
                  <path {...{ d: "M8 6l-6 6 6 6" }}></path>
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
                {"Updates Done Safely by Experts"}
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
                  "Even with an easy panel, a content change can break a website. Our developers make the changes, so your website stays up."
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
                <path
                  {...{
                    d: "M12 62h18l6-16 8 28 8-22 6 10h28",
                    fill: "none",
                    stroke: "#a599d3",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
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
                  <path {...{ d: "M22 12h-4l-3 9L9 3l-3 9H2" }}></path>
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
                {"We prevent issues before they happen, so serious problems become rare."}
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
                <rect {...{ x: "14", y: "34", width: "38", height: "14", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "58", y: "34", width: "38", height: "14", rx: "6", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "14", y: "54", width: "38", height: "14", rx: "6", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "58", y: "54", width: "38", height: "14", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "72", width: "82", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
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
                  <path {...{ d: "M12 2l10 5-10 5L2 7z" }}></path>
                  <path {...{ d: "M2 17l10 5 10-5" }}></path>
                  <path {...{ d: "M2 12l10 5 10-5" }}></path>
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
                {"One Team for Everything"}
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
                  "With both, one team looks after your hosting, updates and security. You never chase different companies."
                }
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
              {"Everything you may want to know before you choose."}
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
                  {"Do I need hosting and care from you?"}
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
                    "No, they are optional. We recommend them because we know the website we build, and we choose hosting that keeps it fast and safe."
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
                  {"Can I use my own hosting?"}
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
                    "Yes. You can use your own hosting if it loads fast for your visitors and is secure. We check it before we start."
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
                  {"Can I take a care plan if I use my own hosting?"}
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
                  {"Yes. A care plan works with your own hosting too, if the hosting is fast and secure."}
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
                  {"Can I take only one of them?"}
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
                  {"Yes. Hosting and care plans are separate. You can take hosting, a care plan, or both."}
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
                  {"Who owns my domain?"}
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
                  {"You do. We register your domain with your information."}
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
                  {"What happens after the first year?"}
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
                    "Your hosting and domain renew every year at the same price. We tell you before the date, so your website does not go offline."
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
                  {"How do I pay?"}
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
                    "Hosting is paid at the start of your project. A care plan can start when your website goes live, or any time after, whenever you want. Both are paid once a year, by bKash, Nagad or bank."
                  }
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
                {"Want Us to Look After Your Website?"}
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
                {"Let's plan it together with your website project."}
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
                    left: "12.5cqw",
                    top: "11.4583cqw",
                    width: "75cqw",
                    height: "64.5833cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.1667cqw",
                    boxShadow: "0 3.75cqw 9.1667cqw rgba(10,0,61,.38)",
                    padding: "4.1667cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.9167cqw",
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
                        background: "#200093",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "none",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "2.100",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { width: "4.5833cqw", height: "4.5833cqw" },
                      }}
                    >
                      <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                      <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
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
                        display: "flex",
                        alignItems: "center",
                        gap: "1.25cqw",
                        height: "5.4167cqw",
                        padding: "0 2.0833cqw",
                        borderRadius: "2.7083cqw",
                        background: "#e6f4ec",
                        flex: "none",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "1.6667cqw",
                          height: "1.6667cqw",
                          borderRadius: "50%",
                          background: "#1f8a5a",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          width: "5.8333cqw",
                          height: "1.25cqw",
                          borderRadius: "0.625cqw",
                          background: "#9fd3b6",
                        },
                      }}
                    ></span>
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "11.25cqw",
                      boxSizing: "border-box",
                      padding: "0 2.5cqw",
                      borderRadius: "2.5cqw",
                      background: "#f6f3ff",
                      overflow: "hidden",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.4167cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.4167cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.4167cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.4167cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.4167cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "6.25cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.0417cqw",
                        height: "5.8333cqw",
                        borderRadius: "0.625cqw",
                        background: "#a599d3",
                        flex: "none",
                      },
                    }}
                  ></span>
                </div>
                <div {...{ style: { display: "flex", flexDirection: "column", gap: "1.6667cqw" } }}>
                  <div
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "2.0833cqw",
                        height: "9.1667cqw",
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
                          width: "5.8333cqw",
                          height: "5.8333cqw",
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
                          style: { width: "3.125cqw", height: "3.125cqw" },
                        }}
                      >
                        <path
                          {...{ d: "M17.500 19H9a7 7 0 1 1 6.710-9h1.790a4.500 4.500 0 1 1 0 9z" }}
                        ></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: { display: "flex", flexDirection: "column", gap: "1.0417cqw", flex: "1" },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            height: "1.4583cqw",
                            width: "18.3333cqw",
                            borderRadius: "0.8333cqw",
                            background: "#c4bce3",
                          },
                        }}
                      ></span>
                      <span
                        {...{
                          style: {
                            height: "1.0417cqw",
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
                  <div
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "2.0833cqw",
                        height: "9.1667cqw",
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
                          width: "5.8333cqw",
                          height: "5.8333cqw",
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
                          style: { width: "3.125cqw", height: "3.125cqw" },
                        }}
                      >
                        <path {...{ d: "M3 12a9 9 0 0 1 9-9 9.750 9.750 0 0 1 6.740 2.740L21 8" }}></path>
                        <path {...{ d: "M21 3v5h-5" }}></path>
                        <path {...{ d: "M21 12a9 9 0 0 1-9 9 9.750 9.750 0 0 1-6.740-2.740L3 16" }}></path>
                        <path {...{ d: "M8 16H3v5" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: { display: "flex", flexDirection: "column", gap: "1.0417cqw", flex: "1" },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            height: "1.4583cqw",
                            width: "14.5833cqw",
                            borderRadius: "0.8333cqw",
                            background: "#c4bce3",
                          },
                        }}
                      ></span>
                      <span
                        {...{
                          style: {
                            height: "1.0417cqw",
                            width: "10cqw",
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
                        height: "9.1667cqw",
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
                          width: "5.8333cqw",
                          height: "5.8333cqw",
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
                          style: { width: "3.125cqw", height: "3.125cqw" },
                        }}
                      >
                        <path {...{ d: "M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" }}></path>
                        <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: { display: "flex", flexDirection: "column", gap: "1.0417cqw", flex: "1" },
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
                            height: "1.0417cqw",
                            width: "13.3333cqw",
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
