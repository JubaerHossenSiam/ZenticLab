import Link from "next/link";
export default function ContactDesign() {
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
            },
            className: "zl-section-inner",
          }}
        >
          <div {...{ style: { textAlign: "center", maxWidth: "780px", margin: "0 auto" } }}>
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
              {"Let's Talk About Your Business"}
            </h1>
            <p
              {...{
                style: {
                  fontSize: "19px",
                  lineHeight: "1.55",
                  color: "#4a4565",
                  marginTop: "24px",
                  textWrap: "pretty",
                },
                className: "zl-body-copy",
              }}
            >
              {"Choose the way that is easiest for you."}
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
                <rect {...{ x: "14", y: "34", width: "54", height: "14", rx: "7", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "22", y: "39", width: "28", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "40", y: "54", width: "56", height: "14", rx: "7", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "48", y: "59", width: "30", height: "4", rx: "2", fill: "#ffffff" }}></rect>
                <rect {...{ x: "14", y: "72", width: "30", height: "8", rx: "4", fill: "#f3f1fa" }}></rect>
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
                  <path {...{ d: "M21 12a8 8 0 0 1-11.500 7.200L4 20l1-4.500A8 8 0 1 1 21 12z" }}></path>
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
                {"WhatsApp"}
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
                {"Chat with us and get a quick reply."}
              </p>
              <p
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "19px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "#200093",
                    marginTop: "16px",
                  },
                  className: "zl-body-copy",
                }}
              >
                {"+8801814090134"}
              </p>
              <div
                {...{
                  style: { marginTop: "auto", paddingTop: "28px", width: "100%", boxSizing: "border-box" },
                }}
              >
                <a
                  {...{
                    className: "zl-btn",
                    href: "https://wa.me/8801814090134",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
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
                  {...{ x: "14.0", y: "36", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "31.5", y: "36", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "49.0", y: "36", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "66.5", y: "36", width: "12.500", height: "10", rx: "3", fill: "#c4bce3" }}
                ></rect>
                <rect
                  {...{ x: "84.0", y: "36", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "14.0", y: "50", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "31.5", y: "50", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "49.0", y: "50", width: "12.500", height: "10", rx: "3", fill: "#200093" }}
                ></rect>
                <rect
                  {...{ x: "66.5", y: "50", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "84.0", y: "50", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "14.0", y: "64", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "31.5", y: "64", width: "12.500", height: "10", rx: "3", fill: "#c4bce3" }}
                ></rect>
                <rect
                  {...{ x: "49.0", y: "64", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "66.5", y: "64", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "84.0", y: "64", width: "12.500", height: "10", rx: "3", fill: "#e9e6f4" }}
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
                      d: "M22 16.920v3a2 2 0 0 1-2.180 2 19.790 19.790 0 0 1-8.630-3.070 19.500 19.500 0 0 1-6-6 19.790 19.790 0 0 1-3.070-8.670A2 2 0 0 1 4.110 2h3a2 2 0 0 1 2 1.720 12.840 12.840 0 0 0 .7 2.810 2 2 0 0 1-.45 2.110L8.090 9.910a16 16 0 0 0 6 6l1.270-1.270a2 2 0 0 1 2.110-.45 12.840 12.840 0 0 0 2.810.7A2 2 0 0 1 22 16.920z",
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
                {"Book a Free Project Call"}
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
                {"Talk about your project on a call. Choose a time that suits you."}
              </p>
              <div
                {...{
                  style: { marginTop: "auto", paddingTop: "28px", width: "100%", boxSizing: "border-box" },
                }}
              >
                <a
                  {...{
                    className: "zl-btn-outline",
                    href: "https://calendly.com/zenticlab/30min",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      border: "1.5px solid #200093",
                      color: "#200093",
                      background: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "14.5px 24px",
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
                    <rect {...{ x: "3", y: "4", width: "18", height: "18", rx: "2" }}></rect>
                    <path {...{ d: "M16 2v4M8 2v4M3 10h18" }}></path>
                  </svg>
                  {"Book a Free Project Call"}
                </a>
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
                <rect {...{ x: "14", y: "34", width: "82", height: "44", rx: "8", fill: "#f3f1fa" }}></rect>
                <path
                  {...{
                    d: "M16 38l39 24 39-24",
                    fill: "none",
                    stroke: "#c4bce3",
                    strokeWidth: "2.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect {...{ x: "22", y: "68", width: "30", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
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
                      d: "M21.440 11.050l-9.190 9.190a6 6 0 0 1-8.490-8.490l8.570-8.570A4 4 0 1 1 18 8.840l-8.590 8.570a2 2 0 0 1-2.830-2.830l8.490-8.480",
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
                {"Email"}
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
                {"Send your project details or files."}
              </p>
              <p
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "19px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "#200093",
                    marginTop: "16px",
                  },
                  className: "zl-body-copy",
                }}
              >
                {"zenticlab@gmail.com"}
              </p>
              <div
                {...{
                  style: { marginTop: "auto", paddingTop: "28px", width: "100%", boxSizing: "border-box" },
                }}
              >
                <a
                  {...{
                    className: "zl-btn-outline",
                    href: "mailto:zenticlab@gmail.com",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      border: "1.5px solid #200093",
                      color: "#200093",
                      background: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "600",
                      padding: "14.5px 24px",
                      borderRadius: "12px",
                    },
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
                    <rect {...{ x: "2", y: "4", width: "20", height: "16", rx: "2" }}></rect>
                    <path {...{ d: "M22 7l-10 6L2 7" }}></path>
                  </svg>
                  {"Send an Email"}
                </a>
              </div>
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
                },
              }}
            >
              {"What Happens Next"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"A clear path from your first contact to the start of your project."}
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"First Contact"}
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
                {"Reach us on WhatsApp, by email or by booking a call. We get back to you within 24 hours."}
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"Project Discussion"}
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
                {"We learn about your business, your customers and what you need."}
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"Plan & Price"}
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
                  "We suggest the best option for you, even if it is the most affordable one, and we write down the plan, the price and the timeline."
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-card-title",
                }}
              >
                {"Project Start"}
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
                {"Once you approve the plan and pay the first 50%, we begin your project."}
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
              {"Quick answers before you reach out."}
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
                  {"Is the first talk really free?"}
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
                    "Yes. The first call or chat is free. We want to make sure we are the right partner for you before any money changes hands."
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
                  {"What should I tell you when I contact you?"}
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
                    "Tell us about your business and what you want your website to do. A rough idea is enough, and we will ask the rest."
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
                  {"I do not know which package I need. Can you help?"}
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
                    "Yes. Tell us what you want your website to do, like sell products or show your work, and we will suggest the best fit. If no package fits, we can plan a project around your needs."
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
                  {"Can I know the price before I decide?"}
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
                    "Yes. The starting prices are on our service pages. After we talk, we write the exact price in your plan before you pay anything."
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
                  {"Do you work with clients outside Dhaka?"}
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
                    "Yes. We work with clients all over Bangladesh. Everything happens by chat, call and email."
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
                  {"Do you offer hosting and care after my website is ready?"}
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
                    "Yes. For the websites we build, we offer Domain & Hosting Plans and Website Care Plans. Both are optional."
                  }
                </p>
                <Link
                  {...{
                    className: "zl-qa-link",
                    href: "/hosting-care",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "14px",
                      color: "#0a003d",
                      fontSize: "15px",
                      fontWeight: "700",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    },
                  }}
                >
                  {"See Hosting & Care Plans\n"}
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
                {"Ready to Start Your Project?"}
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
                {"Let's talk about what you need."}
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
                }}
              >
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
                <a
                  {...{
                    className: "zl-cta-link",
                    href: "https://calendly.com/zenticlab/30min",
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "600",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    },
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }}
                >
                  {"Book a Free Project Call"}
                  <svg
                    {...{
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M5 12h14M13 6l6 6-6 6" }}></path>
                  </svg>
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
                    left: "10.4167cqw",
                    top: "7.0833cqw",
                    width: "50cqw",
                    height: "73.3333cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.1667cqw",
                    boxShadow: "0 3.75cqw 9.1667cqw rgba(10,0,61,.38)",
                    padding: "4.5833cqw",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div {...{ style: { display: "flex", flexDirection: "column", gap: "1.6667cqw" } }}>
                  <span
                    {...{
                      style: {
                        height: "2.2917cqw",
                        width: "25cqw",
                        borderRadius: "1.25cqw",
                        background: "#200093",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        height: "1.4583cqw",
                        width: "16.6667cqw",
                        borderRadius: "0.8333cqw",
                        background: "#d9d4ec",
                      },
                    }}
                  ></span>
                </div>
                <div
                  {...{ style: { height: "0.2083cqw", background: "#ececef", margin: "3.3333cqw 0" } }}
                ></div>
                <div {...{ style: { display: "flex", flexDirection: "column", gap: "2.0833cqw" } }}>
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
                        <path {...{ d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }}></path>
                        <path {...{ d: "M14 2v6h6M8 13h8M8 17h5" }}></path>
                      </svg>
                    </span>
                    <span {...{ style: { display: "flex", flexDirection: "column", gap: "1.25cqw" } }}>
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
                            width: "13.75cqw",
                            borderRadius: "0.625cqw",
                            background: "#e0dbf0",
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
                          {...{ d: "M12.500 2.500H20a1.500 1.500 0 0 1 1.500 1.500v7.500L11 22 2 13z" }}
                        ></path>
                        <circle {...{ cx: "16.500", cy: "7.500", r: "1.200" }}></circle>
                      </svg>
                    </span>
                    <span {...{ style: { display: "flex", flexDirection: "column", gap: "1.25cqw" } }}>
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
                            height: "1.25cqw",
                            width: "10.4167cqw",
                            borderRadius: "0.625cqw",
                            background: "#e0dbf0",
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
                        <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                        <path {...{ d: "M12 7v5l3 2" }}></path>
                      </svg>
                    </span>
                    <span {...{ style: { display: "flex", flexDirection: "column", gap: "1.25cqw" } }}>
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
                            width: "12.0833cqw",
                            borderRadius: "0.625cqw",
                            background: "#e0dbf0",
                          },
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div
                  {...{
                    style: {
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "flex-end",
                      gap: "2.0833cqw",
                      height: "9.1667cqw",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "110",
                      height: "40",
                      viewBox: "0 0 110 40",
                      fill: "none",
                      "aria-hidden": "true",
                      style: { width: "22.9167cqw", height: "8.3333cqw" },
                    }}
                  >
                    <path
                      {...{
                        d: "M4 26c6-14 10-18 12-14s-6 20 0 16 8-12 12-8-2 10 4 6 8-10 12-6 4 8 10 4 8-8 14-8 6 6 12 2",
                        stroke: "#a599d3",
                        strokeWidth: "2.200",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                    ></path>
                    <path
                      {...{ d: "M2 36h104", stroke: "#d9d4ec", strokeWidth: "2", strokeLinecap: "round" }}
                    ></path>
                  </svg>
                  <span
                    {...{
                      style: {
                        width: "4.5833cqw",
                        height: "4.5833cqw",
                        borderRadius: "50%",
                        background: "#1f8a5a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "none",
                        marginBottom: "0.8333cqw",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "13",
                        height: "13",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "3.400",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { width: "2.7083cqw", height: "2.7083cqw" },
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
                    position: "absolute",
                    left: "55.4167cqw",
                    top: "16.25cqw",
                    width: "31.25cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.3333cqw",
                    boxShadow: "0 2.9167cqw 7.0833cqw rgba(10,0,61,.34)",
                    overflow: "hidden",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      height: "5.4167cqw",
                      background: "#e9e6f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 2.5cqw",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "8.3333cqw",
                        height: "1.4583cqw",
                        borderRadius: "0.8333cqw",
                        background: "#c4bce3",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "2.9167cqw",
                        height: "1.4583cqw",
                        borderRadius: "0.8333cqw",
                        background: "#c4bce3",
                      },
                    }}
                  ></span>
                </div>
                <div
                  {...{
                    style: {
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 5cqw)",
                      gap: "1.25cqw",
                      justifyContent: "center",
                      padding: "2.9167cqw 0 3.3333cqw",
                    },
                    className: "",
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#c4bce3",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#200093",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#e9e6f4",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "5cqw",
                        height: "3.75cqw",
                        borderRadius: "1.0417cqw",
                        background: "#c4bce3",
                      },
                    }}
                  ></span>
                </div>
              </div>
              <span
                {...{
                  style: {
                    position: "absolute",
                    left: "52.5cqw",
                    top: "66.6667cqw",
                    width: "14.1667cqw",
                    height: "14.1667cqw",
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
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "1.900",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    style: { width: "5.8333cqw", height: "5.8333cqw" },
                  }}
                >
                  <path
                    {...{
                      d: "M4.500 16.500c-1.500 1.260-2 5-2 5s3.740-.5 5-2c.71-.84.7-2.130-.09-2.910a2.180 2.180 0 0 0-2.910-.09z",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M12 15l-3-3a22 22 0 0 1 2-3.950A12.880 12.880 0 0 1 22 2c0 2.720-.78 7.500-6 11a22.350 22.350 0 0 1-4 2z",
                    }}
                  ></path>
                  <path {...{ d: "M9 12H4s.55-3.030 2-4c1.620-1.080 5 0 5 0" }}></path>
                  <path {...{ d: "M12 15v5s3.030-.55 4-2c1.080-1.620 0-5 0-5" }}></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
