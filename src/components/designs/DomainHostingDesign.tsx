import Link from "next/link";
export default function DomainHostingDesign() {
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
              {"Hosting That Keeps Your Website "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Fast and Safe"}</span>
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
              {"Choose a plan, and we handle the rest. Your .com domain is included."}
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
                  x: "24",
                  y: "76",
                  width: "170",
                  height: "258",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <rect {...{ x: "40", y: "96", width: "138", height: "56", rx: "12", fill: "#f3f1fa" }}></rect>
              <circle {...{ cx: "58", cy: "116", r: "4.500", fill: "#1f8a5a" }}></circle>
              <circle {...{ cx: "74", cy: "116", r: "4.500", fill: "#a599d3" }}></circle>
              <rect {...{ x: "92", y: "112", width: "68", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect
                {...{ x: "52", y: "132", width: "104", height: "7", rx: "3.500", fill: "#e4dff2" }}
              ></rect>
              <rect {...{ x: "52", y: "132", width: "96", height: "7", rx: "3.500", fill: "#a599d3" }}></rect>
              <rect {...{ x: "40", y: "164", width: "138", height: "56", rx: "12", fill: "#f3f1fa" }}></rect>
              <circle {...{ cx: "58", cy: "184", r: "4.500", fill: "#1f8a5a" }}></circle>
              <circle {...{ cx: "74", cy: "184", r: "4.500", fill: "#a599d3" }}></circle>
              <rect {...{ x: "92", y: "180", width: "68", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect
                {...{ x: "52", y: "200", width: "104", height: "7", rx: "3.500", fill: "#e4dff2" }}
              ></rect>
              <rect {...{ x: "52", y: "200", width: "70", height: "7", rx: "3.500", fill: "#a599d3" }}></rect>
              <rect {...{ x: "40", y: "232", width: "138", height: "56", rx: "12", fill: "#f3f1fa" }}></rect>
              <circle {...{ cx: "58", cy: "252", r: "4.500", fill: "#1f8a5a" }}></circle>
              <circle {...{ cx: "74", cy: "252", r: "4.500", fill: "#a599d3" }}></circle>
              <rect {...{ x: "92", y: "248", width: "68", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect
                {...{ x: "52", y: "268", width: "104", height: "7", rx: "3.500", fill: "#e4dff2" }}
              ></rect>
              <rect
                {...{ x: "52", y: "268", width: "112", height: "7", rx: "3.500", fill: "#a599d3" }}
              ></rect>
              <rect {...{ x: "40", y: "298", width: "60", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
              <path
                {...{
                  d: "M196 205h42",
                  stroke: "#a599d3",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeDasharray: "2 8",
                }}
              ></path>
              <path
                {...{
                  d: "M226 197l10 8-10 8",
                  stroke: "#a599d3",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              ></path>
              <rect
                {...{
                  x: "244",
                  y: "52",
                  width: "296",
                  height: "296",
                  rx: "22",
                  fill: "#ffffff",
                  stroke: "#e6e6ea",
                  strokeWidth: "1.5",
                }}
              ></rect>
              <line {...{ x1: "245", y1: "94", x2: "539", y2: "94", stroke: "#ececef" }}></line>
              <circle {...{ cx: "266", cy: "73", r: "4.500", fill: "#ff5f57" }}></circle>
              <circle {...{ cx: "281", cy: "73", r: "4.500", fill: "#febc2e" }}></circle>
              <circle {...{ cx: "296", cy: "73", r: "4.500", fill: "#28c840" }}></circle>
              <rect
                {...{
                  x: "258",
                  y: "108",
                  width: "268",
                  height: "32",
                  rx: "16",
                  fill: "#f3f3f6",
                  stroke: "#e6e6ea",
                }}
              ></rect>
              <g
                {...{
                  transform: "translate(270 116) scale(0.68)",
                  fill: "none",
                  stroke: "#1f8a5a",
                  strokeWidth: "2.4",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <rect {...{ x: "4", y: "11", width: "16", height: "10", rx: "2" }}></rect>
                <path {...{ d: "M8 11V7a4 4 0 0 1 8 0v4" }}></path>
              </g>
              <rect {...{ x: "294", y: "120", width: "100", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
              <rect {...{ x: "470", y: "114", width: "48", height: "20", rx: "10", fill: "#200093" }}></rect>
              <text
                {...{
                  x: "494",
                  y: "128.500",
                  textAnchor: "middle",
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "12",
                  fontWeight: "700",
                  fill: "#ffffff",
                }}
              >
                {".com"}
              </text>
              <path
                {...{
                  d: "M338 262a56 56 0 0 1 112 0",
                  transform: "translate(-0 0)",
                  stroke: "#e9e6f4",
                  strokeWidth: "16",
                  strokeLinecap: "round",
                }}
              ></path>
              <path
                {...{
                  d: "M338 262a56 56 0 0 1 96-39.600",
                  stroke: "#200093",
                  strokeWidth: "16",
                  strokeLinecap: "round",
                }}
              ></path>
              <circle {...{ cx: "394", cy: "262", r: "22", fill: "#200093" }}></circle>
              <g
                {...{
                  transform: "translate(382 250) scale(1)",
                  fill: "none",
                  stroke: "#ffffff",
                  strokeWidth: "2.1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path {...{ d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }}></path>
              </g>
              <rect
                {...{ x: "278", y: "290", width: "150", height: "9", rx: "4.500", fill: "#d9d4ec" }}
              ></rect>
              <rect {...{ x: "278", y: "308", width: "100", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
              <rect {...{ x: "446", y: "290", width: "70", height: "26", rx: "13", fill: "#e9e6f4" }}></rect>
              <circle {...{ cx: "460", cy: "303", r: "5", fill: "#1f8a5a" }}></circle>
              <rect {...{ x: "471", y: "300", width: "34", height: "6", rx: "3", fill: "#c4bce3" }}></rect>
              <circle
                {...{ cx: "520", cy: "352", r: "24", fill: "#200093", stroke: "#ffffff", strokeWidth: "4" }}
              ></circle>
              <g
                {...{
                  transform: "translate(508 340) scale(1)",
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
            </svg>
          </div>
        </div>
      </section>
      <section
        {...{ id: "plans", style: { background: "#faf8ff", padding: "96px 0" }, className: "zl-section" }}
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
              {"Our Hosting Plans"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"See which plan fits your website."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "28px",
                marginTop: "56px",
                alignItems: "stretch",
              },
              className: "zl-content-grid zl-card-grid zl-section-content",
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
                {"Hosting Starter"}
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
                {"For small websites that are just getting started"}
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
                  {".com domain for 1 year"}
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
                  {"5 GB SSD storage"}
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
                  {"250 GB bandwidth"}
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
                  {"Free SSL certificate"}
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
                  {"Fast BDIX hosting"}
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
                  {"LiteSpeed speed boost"}
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
                  {"Hosting protection"}
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
                  {"Website backups"}
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
                  {"Business email accounts"}
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
                  {"Website setup by us"}
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
                  {"6,000 "}
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
                {"Hosting Standard"}
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
                {"For growing websites and small online stores"}
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
                  {".com domain for 1 year"}
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
                  {"10 GB SSD storage"}
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
                  {"500 GB bandwidth"}
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
                  {"Free SSL certificate"}
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
                  {"Fast BDIX hosting"}
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
                  {"LiteSpeed speed boost"}
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
                  {"Hosting protection"}
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
                  {"Website backups"}
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
                  {"Business email accounts"}
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
                  {"Website setup by us"}
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
                {"Hosting Advance"}
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
                {"For busy websites and large online stores"}
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
                  {".com domain for 1 year"}
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
                  {"20 GB SSD storage"}
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
                  {"1000 GB bandwidth"}
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
                  {"Free SSL certificate"}
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
                  {"Fast BDIX hosting"}
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
                  {"LiteSpeed speed boost"}
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
                  {"Hosting protection"}
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
                  {"Website backups"}
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
                  {"Business email accounts"}
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
                  {"Website setup by us"}
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
                  {"20,000 "}
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
                {
                  "Tell us about your website. We know how much power it needs, so we will choose the right plan for you."
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
                    y: "126",
                    width: "108",
                    height: "110",
                    rx: "16",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <rect {...{ x: "34", y: "142", width: "46", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "34", y: "158", width: "72", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "34", y: "172", width: "58", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "34", y: "186", width: "64", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "186",
                    y: "86",
                    width: "108",
                    height: "150",
                    rx: "16",
                    fill: "#ffffff",
                    stroke: "#200093",
                    strokeWidth: "2.500",
                  }}
                ></rect>
                <rect {...{ x: "200", y: "102", width: "46", height: "8", rx: "4", fill: "#200093" }}></rect>
                <rect {...{ x: "200", y: "118", width: "72", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "200", y: "132", width: "58", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "200", y: "146", width: "64", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "352",
                    y: "46",
                    width: "108",
                    height: "190",
                    rx: "16",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <rect {...{ x: "366", y: "62", width: "46", height: "8", rx: "4", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "366", y: "78", width: "72", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "366", y: "92", width: "58", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "366", y: "106", width: "64", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "20", y: "248", width: "440", height: "10", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{
                    x: "150",
                    y: "296",
                    width: "196",
                    height: "52",
                    rx: "26",
                    fill: "#ffffff",
                    stroke: "#e4dbfb",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <circle {...{ cx: "190", cy: "322", r: "6", fill: "#c4bce3" }}></circle>
                <circle {...{ cx: "212", cy: "322", r: "6", fill: "#a599d3" }}></circle>
                <circle {...{ cx: "234", cy: "322", r: "6", fill: "#200093" }}></circle>
                <rect {...{ x: "262", y: "318", width: "64", height: "8", rx: "4", fill: "#e9e6f4" }}></rect>
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
              {"Want to Use Your Own Hosting?"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"You can. We check two things first."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                marginTop: "56px",
                maxWidth: "960px",
                marginLeft: "auto",
                marginRight: "auto",
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
                    d: "M20 74a30 30 0 0 1 60 0",
                    stroke: "#e9e6f4",
                    strokeWidth: "7",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M20 74a30 30 0 0 1 48-24",
                    stroke: "#a599d3",
                    strokeWidth: "7",
                    strokeLinecap: "round",
                  }}
                ></path>
                <rect
                  {...{ x: "14", y: "36", width: "34", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{ x: "62", y: "36", width: "34", height: "5", rx: "2.500", fill: "#e9e6f4" }}
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
                  <path {...{ d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" }}></path>
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
                {"1. Fast"}
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
                {"Your hosting must load your website quickly for your visitors."}
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
                  {...{ x: "14", y: "36", width: "34", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{
                    x: "38",
                    y: "48",
                    width: "34",
                    height: "26",
                    rx: "8",
                    fill: "#e9e6f4",
                    stroke: "#c4bce3",
                    strokeWidth: "2",
                  }}
                ></rect>
                <path
                  {...{
                    d: "M46 48v-6a8 8 0 0 1 16 0v6",
                    stroke: "#a599d3",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <circle {...{ cx: "55", cy: "61", r: "3.500", fill: "#a599d3" }}></circle>
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
                {"2. Secure"}
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
                {"Your hosting must keep your website safe."}
              </p>
            </div>
          </div>
          <p
            {...{
              style: {
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#2c2548",
                textAlign: "center",
                maxWidth: "720px",
                margin: "40px auto 0",
                textWrap: "pretty",
              },
              className: "zl-body-copy",
            }}
          >
            {"If it passes, we build your website there. If not, we tell you why and what to change."}
          </p>
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
                  {"What is BDIX hosting?"}
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
                    "BDIX hosting is connected to Bangladesh's local internet network. This helps your website load faster for visitors in Bangladesh."
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
                  {"What do storage, bandwidth and SSL mean?"}
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
                    "Storage is the space for your website files. Bandwidth is how much data your website can send to visitors. SSL is the padlock that shows your website is secure."
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
                  {"What if my website grows?"}
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
                    "We move you to a bigger plan. You pay only the difference in price, and we tell you the price first."
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
                  {"Can I take my website to another hosting later?"}
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
                  {"Yes. Your domain is in your name, and your website goes with you."}
                </p>
              </div>
            </details>
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
                {"Ready to Add Hosting to Your Project?"}
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
                {"Let's add hosting to your project."}
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
                    left: "9.1667cqw",
                    top: "14.5833cqw",
                    width: "68.75cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.1667cqw",
                    boxShadow: "0 3.75cqw 9.1667cqw rgba(10,0,61,.38)",
                    padding: "3.75cqw 4.1667cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.9167cqw",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "2.0833cqw",
                      height: "7.9167cqw",
                      boxSizing: "border-box",
                      padding: "0 2.5cqw",
                      borderRadius: "3.9583cqw",
                      background: "#f3f3f6",
                      border: "0.2083cqw solid #e6e6ea",
                    },
                  }}
                >
                  <span {...{ style: { display: "flex", flex: "none" } }}>
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f8a5a",
                        strokeWidth: "2.4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "3.3333cqw", height: "3.3333cqw" },
                      }}
                    >
                      <rect {...{ x: "4", y: "11", width: "16", height: "10", rx: "2" }}></rect>
                      <path {...{ d: "M8 11V7a4 4 0 0 1 8 0v4" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        height: "1.6667cqw",
                        flex: "1",
                        borderRadius: "0.8333cqw",
                        background: "#d9d4ec",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        flex: "none",
                        padding: "0.625cqw 2.0833cqw",
                        borderRadius: "2.5cqw",
                        background: "#200093",
                        color: "#ffffff",
                        fontSize: "2.5cqw",
                        fontWeight: "700",
                        lineHeight: "1.4",
                      },
                    }}
                  >
                    {".com"}
                  </span>
                </div>
                <div {...{ style: { display: "flex", gap: "1.6667cqw" } }}>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "11.6667cqw",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#d9d4ec",
                      },
                    }}
                  ></span>
                </div>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "22.0833cqw",
                    top: "39.1667cqw",
                    width: "68.75cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.1667cqw",
                    boxShadow: "0 3.75cqw 9.1667cqw rgba(10,0,61,.38)",
                    padding: "4.1667cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.5cqw",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "2.5cqw",
                      height: "11.25cqw",
                      boxSizing: "border-box",
                      padding: "0 2.5cqw",
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
                        style: { width: "3.5417cqw", height: "3.5417cqw" },
                      }}
                    >
                      <rect {...{ x: "2", y: "3", width: "20", height: "8", rx: "2" }}></rect>
                      <rect {...{ x: "2", y: "13", width: "20", height: "8", rx: "2" }}></rect>
                      <path {...{ d: "M6 7h.01M6 17h.01" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{ style: { display: "flex", flexDirection: "column", gap: "1.4583cqw", flex: "1" } }}
                  >
                    <span
                      {...{
                        style: {
                          height: "1.6667cqw",
                          width: "18.75cqw",
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
                <div {...{ style: { display: "flex", alignItems: "center", gap: "2.5cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "12.9167cqw",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#d9d4ec",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        display: "block",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#e9e6f4",
                        position: "relative",
                        width: "100%",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          position: "absolute",
                          left: "0",
                          top: "0",
                          height: "1.6667cqw",
                          width: "62%",
                          borderRadius: "0.8333cqw",
                          background: "#a599d3",
                        },
                      }}
                    ></span>
                  </span>
                </div>
                <div {...{ style: { display: "flex", alignItems: "center", gap: "2.5cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "12.9167cqw",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#d9d4ec",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        display: "block",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#e9e6f4",
                        position: "relative",
                        width: "100%",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          position: "absolute",
                          left: "0",
                          top: "0",
                          height: "1.6667cqw",
                          width: "38%",
                          borderRadius: "0.8333cqw",
                          background: "#200093",
                        },
                      }}
                    ></span>
                  </span>
                </div>
                <div {...{ style: { display: "flex", alignItems: "center", gap: "2.5cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "12.9167cqw",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#d9d4ec",
                        flex: "none",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        display: "block",
                        height: "1.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#e9e6f4",
                        position: "relative",
                        width: "100%",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          position: "absolute",
                          left: "0",
                          top: "0",
                          height: "1.6667cqw",
                          width: "80%",
                          borderRadius: "0.8333cqw",
                          background: "#a599d3",
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
                    left: "68.75cqw",
                    top: "29.1667cqw",
                    width: "10.8333cqw",
                    height: "10.8333cqw",
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
                    style: { width: "5cqw", height: "5cqw" },
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
