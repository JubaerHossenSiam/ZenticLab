import Link from "next/link";
export default function BusinessDesign() {
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
              {"A Professional Website That Helps You Get "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"New Clients"}</span>
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
                "Clients check you online before they make contact. We build a website that shows your work and makes them trust you."
              }
            </p>
            <div
              {...{
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "28px",
                  marginTop: "36px",
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
                {"\nMessage Us on WhatsApp"}
              </a>
              <a
                {...{
                  className: "zl-link",
                  href: "#packages",
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#200093",
                    fontSize: "16px",
                    fontWeight: "600",
                  },
                }}
              >
                {"See Packages and Prices\n"}
                <svg
                  {...{
                    className: "zl-arrow",
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

          <div
            {...{
              style: { containerType: "inline-size", width: "100%" },
              "aria-hidden": "true",
              className: "zl-hero-visual zl-mockup",
            }}
          >
            <div {...{ style: { position: "relative", width: "100%", aspectRatio: "1088 / 714" } }}>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "0",
                    top: "4.3cqw",
                    width: "89.7cqw",
                    height: "56.7cqw",
                    background: "#f3f3f6",
                    borderRadius: "4.6cqw",
                  },
                }}
              ></div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "52.9cqw",
                    top: "1.3cqw",
                    width: "45.8cqw",
                    height: "59.7cqw",
                    background: "#f3f3f6",
                    borderRadius: "4.6cqw",
                  },
                }}
              ></div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "4.96cqw",
                    top: "0",
                    width: "70.77cqw",
                    height: "49.36cqw",
                    boxSizing: "border-box",
                    background: "#faf7f2",
                    border: "0.1838cqw solid #e6e1d4",
                    borderRadius: "3.1cqw",
                    boxShadow: "0 1.5cqw 4cqw rgba(20,20,40,.10)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      height: "4.96cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 2.1cqw 0 2cqw",
                      borderBottom: "0.1838cqw solid #ece6d8",
                      background: "#ffffff",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "1.29cqw",
                        height: "1.29cqw",
                        borderRadius: "50%",
                        background: "#ff5f57",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.29cqw",
                        height: "1.29cqw",
                        borderRadius: "50%",
                        background: "#febc2e",
                        marginLeft: "1cqw",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.29cqw",
                        height: "1.29cqw",
                        borderRadius: "50%",
                        background: "#28c840",
                        marginLeft: "1cqw",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        height: "2.57cqw",
                        borderRadius: "1.3cqw",
                        background: "#f1ede3",
                        marginLeft: "2.66cqw",
                      },
                    }}
                  ></span>
                </div>
                <div
                  {...{
                    style: {
                      height: "6.43cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 5.2cqw 0 2.6cqw",
                    },
                  }}
                >
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#2a2e3b",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "2.6cqw", height: "2.6cqw", flex: "none" },
                    }}
                  >
                    <rect {...{ x: "5", y: "3", width: "14", height: "18", rx: "2" }}></rect>
                    <path
                      {...{ d: "M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" }}
                    ></path>
                  </svg>
                  <span
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "2cqw",
                        fontWeight: "800",
                        color: "#2a2e3b",
                        marginLeft: "0.9cqw",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Agrani Accounts"}
                  </span>
                  <div
                    {...{
                      style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: "2.4cqw" },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          fontSize: "1.38cqw",
                          fontWeight: "500",
                          color: "#23252e",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Home"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.38cqw",
                          fontWeight: "500",
                          color: "#23252e",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Services"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.38cqw",
                          fontWeight: "500",
                          color: "#23252e",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"About"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.3cqw",
                          fontWeight: "600",
                          color: "#2a2e3b",
                          border: "0.2757cqw solid #2a2e3b",
                          borderRadius: "0.8cqw",
                          padding: "0.6cqw 1.5cqw",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Contact"}
                    </span>
                  </div>
                </div>
                <div
                  {...{
                    style: {
                      margin: "0.6cqw 5.2cqw 0 2.6cqw",
                      borderRadius: "2cqw",
                      background: "#2a2e3b",
                      padding: "2.4cqw 2.8cqw",
                      display: "flex",
                      alignItems: "center",
                      gap: "2cqw",
                      height: "23cqw",
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <div
                    {...{ style: { flex: "1.25", minWidth: "0", display: "flex", flexDirection: "column" } }}
                  >
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "3.1cqw",
                          fontWeight: "800",
                          lineHeight: "1.2",
                          letterSpacing: "-0.01em",
                          color: "#ffffff",
                        },
                      }}
                    >
                      {"Tax and accounts, made simple"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.45cqw",
                          lineHeight: "1.5",
                          color: "#c9ccd6",
                          marginTop: "1cqw",
                        },
                      }}
                    >
                      {"Clear books and on-time returns for your business."}
                    </span>
                    <span
                      {...{
                        style: {
                          alignSelf: "flex-start",
                          marginTop: "1.7cqw",
                          height: "4cqw",
                          padding: "0 2.2cqw",
                          borderRadius: "0.95cqw",
                          background: "#e6d5b0",
                          color: "#23252e",
                          fontSize: "1.6cqw",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Get a free quote"}
                    </span>
                  </div>
                  <div {...{ style: { flex: "1", height: "100%", minWidth: "0" } }}>
                    <svg
                      {...{
                        viewBox: "0 0 200 150",
                        preserveAspectRatio: "xMidYMid meet",
                        "aria-hidden": "true",
                        style: { width: "100%", height: "100%", display: "block" },
                      }}
                    >
                      <rect
                        {...{
                          x: "14",
                          y: "92",
                          width: "26",
                          height: "46",
                          rx: "5",
                          fill: "#ffffff",
                          fillOpacity: "0.32",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "52",
                          y: "74",
                          width: "26",
                          height: "64",
                          rx: "5",
                          fill: "#ffffff",
                          fillOpacity: "0.5",
                        }}
                      ></rect>
                      <rect
                        {...{
                          x: "90",
                          y: "56",
                          width: "26",
                          height: "82",
                          rx: "5",
                          fill: "#ffffff",
                          fillOpacity: "0.72",
                        }}
                      ></rect>
                      <rect
                        {...{ x: "128", y: "34", width: "26", height: "104", rx: "5", fill: "#ffffff" }}
                      ></rect>
                      <path
                        {...{
                          d: "M22 78L66 56L104 40L152 14",
                          fill: "none",
                          stroke: "#e6d5b0",
                          strokeWidth: "5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      ></path>
                      <path
                        {...{
                          d: "M136 12h19v19",
                          fill: "none",
                          stroke: "#e6d5b0",
                          strokeWidth: "5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                      ></path>
                      <circle {...{ cx: "176", cy: "116", r: "14", fill: "#e6d5b0" }}></circle>
                      <circle
                        {...{
                          cx: "176",
                          cy: "116",
                          r: "8",
                          fill: "none",
                          stroke: "#2a2e3b",
                          strokeWidth: "2.500",
                        }}
                      ></circle>
                    </svg>
                  </div>
                </div>
                <div
                  {...{
                    style: {
                      padding: "2cqw 5.2cqw 0 2.6cqw",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "1.4cqw",
                    },
                  }}
                >
                  <div
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "1.2cqw",
                        background: "#ffffff",
                        border: "0.1838cqw solid #e6e0d3",
                        borderRadius: "1.4cqw",
                        padding: "1.5cqw 1.4cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "4.2cqw",
                          height: "4.2cqw",
                          borderRadius: "1.1cqw",
                          background: "#efeae0",
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
                          stroke: "#2a2e3b",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw", flex: "none" },
                        }}
                      >
                        <path {...{ d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" }}></path>
                        <path {...{ d: "M14 3v5h5M9 13h6M9 17h6" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.5cqw",
                          fontWeight: "600",
                          color: "#23252e",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Tax Returns"}
                    </span>
                  </div>
                  <div
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "1.2cqw",
                        background: "#ffffff",
                        border: "0.1838cqw solid #e6e0d3",
                        borderRadius: "1.4cqw",
                        padding: "1.5cqw 1.4cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "4.2cqw",
                          height: "4.2cqw",
                          borderRadius: "1.1cqw",
                          background: "#efeae0",
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
                          stroke: "#2a2e3b",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw", flex: "none" },
                        }}
                      >
                        <path {...{ d: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" }}></path>
                        <path {...{ d: "M4 21V5M9 8h6" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.5cqw",
                          fontWeight: "600",
                          color: "#23252e",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Bookkeeping"}
                    </span>
                  </div>
                  <div
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "1.2cqw",
                        background: "#ffffff",
                        border: "0.1838cqw solid #e6e0d3",
                        borderRadius: "1.4cqw",
                        padding: "1.5cqw 1.4cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "4.2cqw",
                          height: "4.2cqw",
                          borderRadius: "1.1cqw",
                          background: "#efeae0",
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
                          stroke: "#2a2e3b",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw", flex: "none" },
                        }}
                      >
                        <path {...{ d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" }}></path>
                        <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
                      </svg>
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.5cqw",
                          fontWeight: "600",
                          color: "#23252e",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Audit"}
                    </span>
                  </div>
                </div>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "13.4cqw",
                    top: "52.1cqw",
                    width: "46.7cqw",
                    height: "5.42cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    border: "0.1838cqw solid #ececef",
                    borderRadius: "1.4cqw",
                    boxShadow: "0 0.8cqw 2.4cqw rgba(20,20,40,.08)",
                    padding: "0 2.5cqw 0 1.5cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.7cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      width: "3.5cqw",
                      height: "3.5cqw",
                      borderRadius: "50%",
                      background: "#1a7f52",
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
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "1.9cqw", height: "1.9cqw" },
                    }}
                  >
                    <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                  </svg>
                </span>
                <span
                  {...{
                    style: {
                      flex: "1",
                      fontSize: "1.84cqw",
                      fontWeight: "600",
                      color: "#1f1f29",
                      whiteSpace: "nowrap",
                    },
                  }}
                >
                  {"New inquiry"}
                </span>
                <span {...{ style: { fontSize: "1.65cqw", color: "#5b5b66", whiteSpace: "nowrap" } }}>
                  {"Just now"}
                </span>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "13.4cqw",
                    top: "59.1cqw",
                    width: "46.7cqw",
                    height: "5.42cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    border: "0.1838cqw solid #ececef",
                    borderRadius: "1.4cqw",
                    boxShadow: "0 0.8cqw 2.4cqw rgba(20,20,40,.08)",
                    padding: "0 2.5cqw 0 1.5cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.7cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      width: "3.5cqw",
                      height: "3.5cqw",
                      borderRadius: "50%",
                      background: "#1a7f52",
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
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "1.9cqw", height: "1.9cqw" },
                    }}
                  >
                    <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                  </svg>
                </span>
                <span
                  {...{
                    style: {
                      flex: "1",
                      fontSize: "1.84cqw",
                      fontWeight: "600",
                      color: "#1f1f29",
                      whiteSpace: "nowrap",
                    },
                  }}
                >
                  {"Call booked"}
                </span>
                <span {...{ style: { fontSize: "1.65cqw", color: "#5b5b66", whiteSpace: "nowrap" } }}>
                  {"2 min ago"}
                </span>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "73.4cqw",
                    top: "14.5cqw",
                    width: "26.6cqw",
                    height: "51.1cqw",
                    boxSizing: "border-box",
                    background: "#faf7f2",
                    border: "0.55cqw solid #1d1d27",
                    borderRadius: "3.7cqw",
                    boxShadow: "0 1.5cqw 4cqw rgba(20,20,40,.16)",
                    padding: "1.1cqw 1.65cqw 1.65cqw",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      height: "2.4cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 0.6cqw",
                    },
                  }}
                >
                  <span {...{ style: { fontSize: "1.1cqw", fontWeight: "600", color: "#1f1f29" } }}>
                    {"9:41"}
                  </span>
                  <span {...{ style: { display: "flex", alignItems: "center", gap: "0.5cqw" } }}>
                    <svg
                      {...{
                        viewBox: "0 0 18 12",
                        "aria-hidden": "true",
                        style: { width: "1.7cqw", height: "1.1cqw" },
                      }}
                    >
                      <rect
                        {...{ x: "0", y: "8", width: "3", height: "4", rx: "0.8", fill: "#1f1f29" }}
                      ></rect>
                      <rect
                        {...{ x: "5", y: "5", width: "3", height: "7", rx: "0.8", fill: "#1f1f29" }}
                      ></rect>
                      <rect
                        {...{ x: "10", y: "2.5", width: "3", height: "9.5", rx: "0.8", fill: "#1f1f29" }}
                      ></rect>
                      <rect
                        {...{ x: "15", y: "0", width: "3", height: "12", rx: "0.8", fill: "#1f1f29" }}
                      ></rect>
                    </svg>
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f1f29",
                        strokeWidth: "2.4",
                        strokeLinecap: "round",
                        "aria-hidden": "true",
                        style: { width: "1.5cqw", height: "1.5cqw" },
                      }}
                    >
                      <path {...{ d: "M2 9a14 14 0 0 1 20 0M6 13a8 8 0 0 1 12 0" }}></path>
                      <circle {...{ cx: "12", cy: "18", r: "1.4", fill: "#1f1f29" }}></circle>
                    </svg>
                    <span
                      {...{
                        style: {
                          width: "2cqw",
                          height: "1cqw",
                          borderRadius: "0.3cqw",
                          background: "#1f1f29",
                        },
                      }}
                    ></span>
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      height: "3.7cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "0.1838cqw solid #ece6d8",
                      padding: "0 0.3cqw",
                    },
                  }}
                >
                  <span {...{ style: { display: "flex", alignItems: "center", gap: "0.6cqw" } }}>
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#2a2e3b",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.2cqw", height: "2.2cqw", flex: "none" },
                      }}
                    >
                      <rect {...{ x: "5", y: "3", width: "14", height: "18", rx: "2" }}></rect>
                      <path
                        {...{ d: "M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" }}
                      ></path>
                    </svg>
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "1.3cqw",
                          fontWeight: "800",
                          color: "#2a2e3b",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Agrani Accounts"}
                    </span>
                  </span>
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#23252e",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "2cqw", height: "2cqw", flex: "none" },
                    }}
                  >
                    <path {...{ d: "M4 7h16M4 12h16M4 17h16" }}></path>
                  </svg>
                </div>
                <div
                  {...{
                    style: {
                      marginTop: "1.3cqw",
                      borderRadius: "1.6cqw",
                      background: "#2a2e3b",
                      padding: "1.8cqw 1.7cqw",
                      display: "flex",
                      flexDirection: "column",
                      flex: "none",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "2.1cqw",
                        fontWeight: "800",
                        lineHeight: "1.2",
                        color: "#ffffff",
                      },
                    }}
                  >
                    {"Tax and accounts, made simple"}
                  </span>
                  <span
                    {...{
                      style: {
                        marginTop: "1.2cqw",
                        height: "3.4cqw",
                        borderRadius: "0.9cqw",
                        background: "#e6d5b0",
                        color: "#23252e",
                        fontSize: "1.4cqw",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Get a free quote"}
                  </span>
                </div>
                <span
                  {...{
                    style: {
                      fontSize: "1.5cqw",
                      fontWeight: "800",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      color: "#23252e",
                      marginTop: "1.3cqw",
                    },
                  }}
                >
                  {"Our services"}
                </span>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2cqw",
                      background: "#ffffff",
                      border: "0.1838cqw solid #e6e0d3",
                      borderRadius: "1.2cqw",
                      padding: "0.9cqw 1.2cqw",
                      marginTop: "0.9cqw",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "3.6cqw",
                        height: "3.6cqw",
                        borderRadius: "1cqw",
                        background: "#efeae0",
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
                        stroke: "#2a2e3b",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.2cqw", height: "2.2cqw", flex: "none" },
                      }}
                    >
                      <path {...{ d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" }}></path>
                      <path {...{ d: "M14 3v5h5M9 13h6M9 17h6" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        fontSize: "1.3cqw",
                        fontWeight: "600",
                        color: "#23252e",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Tax Returns"}
                  </span>
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#9a9684",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                    }}
                  >
                    <path {...{ d: "M9 6l6 6-6 6" }}></path>
                  </svg>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2cqw",
                      background: "#ffffff",
                      border: "0.1838cqw solid #e6e0d3",
                      borderRadius: "1.2cqw",
                      padding: "0.9cqw 1.2cqw",
                      marginTop: "0.9cqw",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "3.6cqw",
                        height: "3.6cqw",
                        borderRadius: "1cqw",
                        background: "#efeae0",
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
                        stroke: "#2a2e3b",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.2cqw", height: "2.2cqw", flex: "none" },
                      }}
                    >
                      <path {...{ d: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" }}></path>
                      <path {...{ d: "M4 21V5M9 8h6" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        fontSize: "1.3cqw",
                        fontWeight: "600",
                        color: "#23252e",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Bookkeeping"}
                  </span>
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#9a9684",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                    }}
                  >
                    <path {...{ d: "M9 6l6 6-6 6" }}></path>
                  </svg>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2cqw",
                      background: "#ffffff",
                      border: "0.1838cqw solid #e6e0d3",
                      borderRadius: "1.2cqw",
                      padding: "0.9cqw 1.2cqw",
                      marginTop: "0.9cqw",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "3.6cqw",
                        height: "3.6cqw",
                        borderRadius: "1cqw",
                        background: "#efeae0",
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
                        stroke: "#2a2e3b",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.2cqw", height: "2.2cqw", flex: "none" },
                      }}
                    >
                      <path {...{ d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" }}></path>
                      <path {...{ d: "M8.500 12l2.500 2.500 4.500-5" }}></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        fontSize: "1.3cqw",
                        fontWeight: "600",
                        color: "#23252e",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Audit"}
                  </span>
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#9a9684",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                    }}
                  >
                    <path {...{ d: "M9 6l6 6-6 6" }}></path>
                  </svg>
                </div>
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
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"What a Good Website Does for Your Business"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Your website is often the first thing a new client sees."}
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
                <rect {...{ x: "14", y: "33", width: "14", height: "12", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "34", y: "34", width: "40", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "34", y: "41", width: "26", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
                ></rect>
                <rect {...{ x: "14", y: "50", width: "14", height: "12", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "34", y: "51", width: "34", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "34", y: "58", width: "30", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
                ></rect>
                <rect {...{ x: "14", y: "67", width: "14", height: "12", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "34", y: "68", width: "44", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "34", y: "75", width: "20", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
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
                  <path {...{ d: "M2 12s3.5-7 10-7 10 7 10 7-3.500 7-10 7S2 12 2 12z" }}></path>
                  <circle {...{ cx: "12", cy: "12", r: "3" }}></circle>
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
                {"Clients Understand You Quickly"}
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
                  "Your website is like a digital catalog. Clients see who you are and what you offer in one place."
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
                  {...{ x: "14", y: "32", width: "40", height: "13", rx: "6.500", fill: "#e9e6f4" }}
                ></rect>
                <rect
                  {...{ x: "21", y: "37", width: "20", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
                ></rect>
                <rect {...{ x: "36", y: "50", width: "60", height: "18", rx: "8", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "42", y: "55", width: "40", height: "8", rx: "4", fill: "#ffffff" }}></rect>
                <path
                  {...{ d: "M46 59h9", stroke: "#a599d3", strokeWidth: "2", strokeLinecap: "round" }}
                ></path>
                <rect
                  {...{ x: "14", y: "73", width: "30", height: "5", rx: "2.500", fill: "#e9e6f4" }}
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
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Save Your Time"}
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
                  "Clients can learn about you on their own. When someone asks about your business, you can just share your website."
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
                  {...{
                    x: "14",
                    y: "31",
                    width: "82",
                    height: "12",
                    rx: "6",
                    fill: "#f3f1fa",
                    stroke: "#d9d4ec",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <circle
                  {...{ cx: "23", cy: "37", r: "3", fill: "none", stroke: "#a599d3", strokeWidth: "1.500" }}
                ></circle>
                <rect {...{ x: "30", y: "35", width: "26", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect
                  {...{
                    x: "14",
                    y: "48",
                    width: "82",
                    height: "19",
                    rx: "6",
                    fill: "#e9e6f4",
                    stroke: "#a599d3",
                    strokeWidth: "1.500",
                  }}
                ></rect>
                <rect
                  {...{ x: "21", y: "53", width: "38", height: "4.500", rx: "2.200", fill: "#a599d3" }}
                ></rect>
                <rect
                  {...{ x: "21", y: "60", width: "52", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
                ></rect>
                <rect {...{ x: "14", y: "72", width: "60", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
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
                  <circle {...{ cx: "12", cy: "12", r: "9.5" }}></circle>
                  <path {...{ d: "M2.5 12h19" }}></path>
                  <path
                    {...{
                      d: "M12 2.500a14.500 14.500 0 0 1 4 9.500 14.500 14.500 0 0 1-4 9.500 14.500 14.500 0 0 1-4-9.500A14.500 14.500 0 0 1 12 2.500z",
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
                {"Be Found Online"}
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
                  "When someone looks you up online, they can find you. Being easy to find makes you look more credible."
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
                <circle {...{ cx: "29", cy: "49", r: "10", fill: "#e9e6f4" }}></circle>
                <circle {...{ cx: "29", cy: "46", r: "3.500", fill: "#c4bce3" }}></circle>
                <path {...{ d: "M22 56a7 5 0 0 1 14 0", fill: "#c4bce3" }}></path>
                <rect {...{ x: "46", y: "40", width: "46", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "46", y: "51", width: "32", height: "5", rx: "2.500", fill: "#c4bce3" }}
                ></rect>
                <rect
                  {...{ x: "14", y: "68", width: "82", height: "11", rx: "5.500", fill: "#e9e6f4" }}
                ></rect>
                <circle {...{ cx: "22", cy: "73.500", r: "2.500", fill: "#a599d3" }}></circle>
                <rect
                  {...{ x: "29", y: "72", width: "34", height: "3.500", rx: "1.800", fill: "#c4bce3" }}
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
                  <path {...{ d: "M7 10v12" }}></path>
                  <path
                    {...{
                      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
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
                {"Build Trust Before the First Contact"}
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
                {"A professional website shows you are serious, before you say a word."}
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
                <rect {...{ x: "14", y: "32", width: "38", height: "30", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "60", y: "34", width: "34", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "60", y: "45", width: "24", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{ x: "60", y: "55", width: "30", height: "5", rx: "2.500", fill: "#c4bce3" }}
                ></rect>
                <rect {...{ x: "14", y: "70", width: "82", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "70", width: "82", height: "6", rx: "3", fill: "#c4bce3" }}></rect>
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
                  <rect {...{ x: "5", y: "11", width: "14", height: "10", rx: "2" }}></rect>
                  <path {...{ d: "M8 11V8a4 4 0 0 1 8 0v3" }}></path>
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
                {"Keep Your Clients' Trust"}
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
                  "A website that is slow, broken, hard to understand or badly designed makes clients lose trust. A good website keeps it."
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
                <rect {...{ x: "14", y: "32", width: "46", height: "26", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "67", y: "34", width: "29", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                <rect
                  {...{ x: "67", y: "45", width: "20", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "14", y: "65", width: "36", height: "12", rx: "6", fill: "#a599d3" }}></rect>
                <rect
                  {...{ x: "21", y: "69.500", width: "22", height: "3.500", rx: "1.800", fill: "#ffffff" }}
                ></rect>
                <path
                  {...{
                    d: "M58 70l7 3-3 1 2 4-2 1-2-4-2 2z",
                    fill: "#c4bce3",
                    stroke: "#a599d3",
                    strokeWidth: "1",
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
                  <circle {...{ cx: "9", cy: "8", r: "4" }}></circle>
                  <path {...{ d: "M2 21a7 7 0 0 1 14 0" }}></path>
                  <path {...{ d: "M19 8v6M16 11h6" }}></path>
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
                {"Turn Visitors into Clients"}
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
                {"A clear, well-planned website shows what you offer and guides visitors to contact you."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{
          id: "packages",
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
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              {"Our Business Packages"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Each package is made with the same care. Bigger packages add more pages and more features."}
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
                {"Starter"}
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
                {"For small or new businesses that are just getting started online"}
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
                  {"Up to 5 pages"}
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
                  {"Logo & Brand Guideline"}
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
                  {"Custom design and content writing"}
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
                  {"Phone and email contact"}
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
                  {"Basic SEO"}
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
                  {"Basic animations"}
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
                  {"Website in either English or Bangla language"}
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
                  {"Fast, secure and mobile friendly"}
                </li>
              </ul>
              <p
                {...{
                  style: {
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#200093",
                    marginTop: "28px",
                  },
                }}
              >
                {"Not included"}
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
                        background: "#efeff3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#5b5b66",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                    </svg>
                  </span>
                  {"Domain & Hosting"}
                </li>
              </ul>
              <div {...{ style: { marginTop: "auto", paddingTop: "32px" } }}>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#4a4565",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                    <path {...{ d: "M12 7v5l3 2" }}></path>
                  </svg>
                  {"Delivery: 10 to 15 days"}
                </div>
                <p
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "44px",
                      lineHeight: "1.15",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      color: "#200093",
                      marginTop: "14px",
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
                    {"BDT"}
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
                {"Standard"}
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
                {"For growing businesses that need a stronger online presence"}
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
                  {"Up to 8 pages"}
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
                  {"Logo & Brand Guideline"}
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
                  {"Custom design and content writing"}
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
                  {"Phone, email and contact form"}
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
                  {"Google Analytics and better SEO"}
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
                  {"Standard animations"}
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
                  {"Website in either English or Bangla language"}
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
                  {"Fast, secure and mobile friendly"}
                </li>
              </ul>
              <p
                {...{
                  style: {
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#200093",
                    marginTop: "28px",
                  },
                }}
              >
                {"Not included"}
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
                        background: "#efeff3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#5b5b66",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                    </svg>
                  </span>
                  {"Domain & Hosting"}
                </li>
              </ul>
              <div {...{ style: { marginTop: "auto", paddingTop: "32px" } }}>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#4a4565",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                    <path {...{ d: "M12 7v5l3 2" }}></path>
                  </svg>
                  {"Delivery: 20 to 25 days"}
                </div>
                <p
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "44px",
                      lineHeight: "1.15",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      color: "#200093",
                      marginTop: "14px",
                    },
                  }}
                >
                  {"30,000 "}
                  <span
                    {...{
                      style: { fontSize: "20px", fontWeight: "700", letterSpacing: "0" },
                      className: "zl-body-copy",
                    }}
                  >
                    {"BDT"}
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
                {"Advance"}
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
                {"For established businesses that need a bigger, complete website"}
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
                  {"Up to 12 pages"}
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
                  {"Logo & Brand Guideline"}
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
                  {"Custom design and content writing"}
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
                  {"Phone, email, contact form and book‑a‑call"}
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
                  {"Google Analytics and advanced SEO"}
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
                  {"Advance animations"}
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
                  {"Website in English and Bangla language"}
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
                  {"Fast, secure and mobile friendly"}
                </li>
              </ul>
              <p
                {...{
                  style: {
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#200093",
                    marginTop: "28px",
                  },
                }}
              >
                {"Not included"}
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
                        background: "#efeff3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#5b5b66",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                      }}
                    >
                      <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                    </svg>
                  </span>
                  {"Domain & Hosting"}
                </li>
              </ul>
              <div {...{ style: { marginTop: "auto", paddingTop: "32px" } }}>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#4a4565",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                    <path {...{ d: "M12 7v5l3 2" }}></path>
                  </svg>
                  {"Delivery: 30 to 45 days"}
                </div>
                <p
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "44px",
                      lineHeight: "1.15",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      color: "#200093",
                      marginTop: "14px",
                    },
                  }}
                >
                  {"50,000 "}
                  <span
                    {...{
                      style: { fontSize: "20px", fontWeight: "700", letterSpacing: "0" },
                      className: "zl-body-copy",
                    }}
                  >
                    {"BDT"}
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
      <section {...{ style: { background: "#faf8ff", padding: "96px 0" }, className: "zl-section" }}>
        <div
          {...{
            style: { maxWidth: "1280px", margin: "0 auto", padding: "0 40px", boxSizing: "border-box" },
            className: "zl-section-inner",
          }}
        >
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "1.35fr 1fr",
                gap: "48px",
                alignItems: "center",
              },
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
                    color: "var(--Dark-Purple, #0a003d)",
                    textWrap: "balance",
                  },
                }}
              >
                {"Don't See a Package That Fits Your Business?"}
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
                {"Tell us what you need. We have the experience to build it."}
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
                  {"\nMessage Us on WhatsApp"}
                </a>
              </div>
            </div>
            <div>
              <div {...{ style: { containerType: "inline-size", width: "100%" }, "aria-hidden": "true" }}>
                <div {...{ style: { position: "relative", width: "100%", aspectRatio: "1088 / 714" } }}>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "0",
                        top: "4.3cqw",
                        width: "89.7cqw",
                        height: "56.7cqw",
                        background: "#e3eef6",
                        borderRadius: "4.6cqw",
                      },
                    }}
                  ></div>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "52.9cqw",
                        top: "1.3cqw",
                        width: "45.8cqw",
                        height: "59.7cqw",
                        background: "#e3eef6",
                        borderRadius: "4.6cqw",
                      },
                    }}
                  ></div>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "3cqw",
                        top: "0",
                        width: "88cqw",
                        height: "54cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #d6e3ec",
                        borderRadius: "3.1cqw",
                        boxShadow: "0 1.5cqw 4cqw rgba(15,50,80,.12)",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      },
                    }}
                  >
                    <div
                      {...{
                        style: {
                          height: "5cqw",
                          flex: "none",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 2.1cqw 0 2cqw",
                          borderBottom: "1px solid #e3ecf2",
                          background: "#fafcfd",
                        },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            width: "1.29cqw",
                            height: "1.29cqw",
                            borderRadius: "50%",
                            background: "#ff5f57",
                          },
                        }}
                      ></span>
                      <span
                        {...{
                          style: {
                            width: "1.29cqw",
                            height: "1.29cqw",
                            borderRadius: "50%",
                            background: "#febc2e",
                            marginLeft: "1cqw",
                          },
                        }}
                      ></span>
                      <span
                        {...{
                          style: {
                            width: "1.29cqw",
                            height: "1.29cqw",
                            borderRadius: "50%",
                            background: "#28c840",
                            marginLeft: "1cqw",
                          },
                        }}
                      ></span>
                      <span
                        {...{
                          style: {
                            flex: "1",
                            height: "2.57cqw",
                            borderRadius: "1.3cqw",
                            background: "#eef3f7",
                            marginLeft: "2.66cqw",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "1.4cqw",
                            fontSize: "max(8px, 1.2cqw)",
                            color: "#5f7688",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"safartours.com/tours"}
                      </span>
                    </div>
                    <div
                      {...{
                        style: {
                          height: "6.4cqw",
                          flex: "none",
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "3cqw",
                          padding: "0 2.6cqw",
                          background: "#ffffff",
                          borderBottom: "1px solid #e3ecf2",
                        },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "1cqw",
                            alignSelf: "center",
                            marginRight: "2cqw",
                          },
                        }}
                      >
                        <span
                          {...{
                            style: {
                              width: "3cqw",
                              height: "3cqw",
                              borderRadius: "1cqw",
                              background: "#0e6ba8",
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
                              stroke: "#ffffff",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              "aria-hidden": "true",
                              style: { width: "1.9cqw", height: "1.9cqw", flex: "none" },
                            }}
                          >
                            <path
                              {...{
                                d: "M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.300.3l.5-.2c.4-.3.6-.7.5-1.200z",
                              }}
                            ></path>
                          </svg>
                        </span>
                        <span
                          {...{
                            style: {
                              fontSize: "max(8px,1.5cqw)",
                              fontWeight: "700",
                              color: "#17324a",
                              whiteSpace: "nowrap",
                            },
                          }}
                        >
                          {"Safar Tours"}
                        </span>
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#0e6ba8",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid #0e6ba8",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Tours"}
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#6b8296",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid transparent",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Bookings"}
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#6b8296",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid transparent",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Guests"}
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#6b8296",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid transparent",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Reports"}
                      </span>
                    </div>
                    <div
                      {...{
                        style: {
                          flex: "1",
                          display: "flex",
                          gap: "2.6cqw",
                          padding: "2cqw 2.6cqw 6.5cqw",
                          minHeight: "0",
                        },
                      }}
                    >
                      <div
                        {...{
                          style: { flex: "1.45", display: "flex", flexDirection: "column", minWidth: "0" },
                        }}
                      >
                        <div
                          {...{
                            style: {
                              position: "relative",
                              height: "21cqw",
                              borderRadius: "1.8cqw",
                              overflow: "hidden",
                            },
                          }}
                        >
                          <svg
                            {...{
                              viewBox: "0 0 200 84",
                              preserveAspectRatio: "xMidYMid slice",
                              "aria-hidden": "true",
                              style: { position: "absolute", inset: "0", width: "100%", height: "100%" },
                            }}
                          >
                            <rect {...{ width: "200", height: "84", fill: "#dff0fb" }}></rect>
                            <circle {...{ cx: "150", cy: "26", r: "13", fill: "#f5b94a" }}></circle>
                            <path {...{ d: "M0 52l30-22 26 18 24-14 30 20v30H0z", fill: "#a9d1b8" }}></path>
                            <path {...{ d: "M70 58l34-26 40 30v22H70z", fill: "#7fb99a" }}></path>
                            <rect {...{ y: "56", width: "200", height: "28", fill: "#0e6ba8" }}></rect>
                            <path
                              {...{
                                d: "M0 64c14-5 26-5 40 0s26 5 40 0 26-5 40 0 26 5 40 0 26-5 40 0v6c-14-5-26-5-40 0s-26 5-40 0-26-5-40 0-26 5-40 0-26-5-40 0z",
                                fill: "#5aa6d6",
                              }}
                            ></path>
                            <path
                              {...{
                                d: "M0 76c14-5 26-5 40 0s26 5 40 0 26-5 40 0 26 5 40 0 26-5 40 0v8H0z",
                                fill: "#e9d6a8",
                              }}
                            ></path>
                            <path {...{ d: "M96 56V34l16 20z", fill: "#ffffff" }}></path>
                            <path {...{ d: "M92 56h26l-4 6H96z", fill: "#f08a4b" }}></path>
                          </svg>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: "1.4cqw",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                fontSize: "max(9px,1.8cqw)",
                                fontWeight: "800",
                                color: "#17324a",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"Sea Beach Escape"}
                          </span>
                          <span
                            {...{
                              style: { fontSize: "max(7px,1.15cqw)", color: "#6b8296", whiteSpace: "nowrap" },
                            }}
                          >
                            {"3 days, 2 nights"}
                          </span>
                        </div>
                        <div {...{ style: { display: "flex", gap: "1cqw", marginTop: "1.2cqw" } }}>
                          <span
                            {...{
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "0.8cqw",
                                fontSize: "max(7px,1.15cqw)",
                                fontWeight: "600",
                                color: "#33566f",
                                background: "#e3f0f8",
                                borderRadius: "1cqw",
                                padding: "0.7cqw 1.2cqw",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            <svg
                              {...{
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#0e6ba8",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                              }}
                            >
                              <path {...{ d: "M3 20V8l9-5 9 5v12" }}></path>
                              <path {...{ d: "M9 20v-6h6v6" }}></path>
                            </svg>
                            {"Hotel"}
                          </span>
                          <span
                            {...{
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "0.8cqw",
                                fontSize: "max(7px,1.15cqw)",
                                fontWeight: "600",
                                color: "#33566f",
                                background: "#e3f0f8",
                                borderRadius: "1cqw",
                                padding: "0.7cqw 1.2cqw",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            <svg
                              {...{
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#0e6ba8",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                              }}
                            >
                              <path
                                {...{ d: "M4 3v7a3 3 0 0 0 3 3v8M10 3v18M18 3c-2 2-3 5-3 8h3v10" }}
                              ></path>
                            </svg>
                            {"Meals"}
                          </span>
                          <span
                            {...{
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "0.8cqw",
                                fontSize: "max(7px,1.15cqw)",
                                fontWeight: "600",
                                color: "#33566f",
                                background: "#e3f0f8",
                                borderRadius: "1cqw",
                                padding: "0.7cqw 1.2cqw",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            <svg
                              {...{
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#0e6ba8",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                              }}
                            >
                              <rect {...{ x: "3", y: "4", width: "18", height: "12", rx: "2" }}></rect>
                              <path {...{ d: "M3 11h18M7 20v-4M17 20v-4" }}></path>
                            </svg>
                            {"Bus"}
                          </span>
                        </div>
                      </div>
                      <div
                        {...{
                          style: {
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.8cqw",
                            minWidth: "0",
                          },
                        }}
                      >
                        <div {...{ style: { display: "flex", flexDirection: "column", gap: "0.5cqw" } }}>
                          <span
                            {...{
                              style: { fontSize: "max(6.5px,1cqw)", fontWeight: "600", color: "#6b8296" },
                            }}
                          >
                            {"Travelers"}
                          </span>
                          <span
                            {...{
                              style: {
                                height: "4.8cqw",
                                boxSizing: "border-box",
                                border: "1px solid #d3e2ec",
                                borderRadius: "1cqw",
                                padding: "0 1.4cqw",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: "max(8px,1.3cqw)",
                                fontWeight: "600",
                                color: "#17324a",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"4 people"}
                            <svg
                              {...{
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#6b8296",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                style: { width: "1.6cqw", height: "1.6cqw", flex: "none" },
                              }}
                            >
                              <path {...{ d: "M5 12h14M12 5v14" }}></path>
                            </svg>
                          </span>
                        </div>
                        <div {...{ style: { display: "flex", flexDirection: "column", gap: "0.5cqw" } }}>
                          <span
                            {...{
                              style: { fontSize: "max(6.5px,1cqw)", fontWeight: "600", color: "#6b8296" },
                            }}
                          >
                            {"Date"}
                          </span>
                          <span
                            {...{
                              style: {
                                height: "4.8cqw",
                                boxSizing: "border-box",
                                border: "1px solid #d3e2ec",
                                borderRadius: "1cqw",
                                padding: "0 1.4cqw",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                fontSize: "max(8px,1.3cqw)",
                                fontWeight: "600",
                                color: "#17324a",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"Fri, 20 Nov"}
                            <svg
                              {...{
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "#6b8296",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                style: { width: "1.8cqw", height: "1.8cqw", flex: "none" },
                              }}
                            >
                              <rect {...{ x: "3", y: "5", width: "18", height: "16", rx: "2" }}></rect>
                              <path {...{ d: "M3 10h18M8 3v4M16 3v4" }}></path>
                            </svg>
                          </span>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "baseline",
                              justifyContent: "space-between",
                              marginTop: "0.6cqw",
                            },
                          }}
                        >
                          <span {...{ style: { fontSize: "max(7px,1.15cqw)", color: "#6b8296" } }}>
                            {"Total"}
                          </span>
                          <span
                            {...{
                              style: {
                                fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                fontSize: "max(10px,2.2cqw)",
                                fontWeight: "800",
                                color: "#17324a",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"Tk 34,000"}
                          </span>
                        </div>
                        <span
                          {...{
                            style: {
                              height: "5cqw",
                              borderRadius: "1.1cqw",
                              background: "#0e6ba8",
                              color: "#ffffff",
                              fontSize: "max(8px,1.4cqw)",
                              fontWeight: "700",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              whiteSpace: "nowrap",
                            },
                          }}
                        >
                          {"Book this tour"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "0",
                        top: "49cqw",
                        width: "40cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #d6e3ec",
                        borderRadius: "2.4cqw",
                        boxShadow: "0 1.2cqw 3.2cqw rgba(15,50,80,.14)",
                        padding: "1.6cqw 2cqw",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.6cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "5cqw",
                          height: "5cqw",
                          borderRadius: "50%",
                          background: "#0e6ba8",
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
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.8cqw", height: "2.8cqw" },
                        }}
                      >
                        <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                      </svg>
                    </span>
                    <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                      <span
                        {...{
                          style: {
                            fontSize: "max(9px, 1.5cqw)",
                            fontWeight: "700",
                            color: "#17324a",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Booking confirmed"}
                      </span>
                      <span
                        {...{
                          style: { fontSize: "max(8px, 1.2cqw)", color: "#5f7688", whiteSpace: "nowrap" },
                        }}
                      >
                        {"4 travelers · Fri, 20 Nov"}
                      </span>
                    </div>
                  </div>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "58cqw",
                        top: "52cqw",
                        width: "38cqw",
                        height: "8.4cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #d6e3ec",
                        borderRadius: "1.8cqw",
                        boxShadow: "0 1cqw 2.6cqw rgba(15,50,80,.12)",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.6cqw",
                        padding: "0 2cqw",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "4.2cqw",
                          height: "4.2cqw",
                          borderRadius: "50%",
                          background: "#e3f0f8",
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
                          stroke: "#0e6ba8",
                          strokeWidth: "2.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.4cqw", height: "2.4cqw", flex: "none" },
                        }}
                      >
                        <rect {...{ x: "3", y: "6", width: "18", height: "12", rx: "2" }}></rect>
                        <circle {...{ cx: "12", cy: "12", r: "2.500" }}></circle>
                      </svg>
                    </span>
                    <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                      <span
                        {...{
                          style: {
                            fontSize: "max(9px, 1.5cqw)",
                            fontWeight: "700",
                            color: "#17324a",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Advance received"}
                      </span>
                      <span
                        {...{
                          style: { fontSize: "max(8px, 1.2cqw)", color: "#5f7688", whiteSpace: "nowrap" },
                        }}
                      >
                        {"Tk 17,000 · bKash"}
                      </span>
                    </div>
                  </div>
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
                  {"Why is your price higher than some other agencies?"}
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
                    "Agencies with very low prices often use copy-paste templates. Those websites are not made for your business, and they can be slow and easy to hack. We take the time to give quality in every part, from design to build, made fully for what your business needs. You pay for quality that lasts."
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
                  {"Are domain and hosting included?"}
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
                    "No. Domain and hosting are not in the package price. You can buy them yourself and share the access with us, or you can choose our Domain & Hosting Plans."
                  }
                </p>
                <Link
                  {...{
                    className: "zl-qa-link",
                    href: "/domain-hosting-plans",
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
                  {"See Domain & Hosting Plans\n"}
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
                  {"How does payment work?"}
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
                    "You pay 50% to start the project and 50% before we hand over your website. You can pay by bKash, Nagad or bank, whichever you prefer."
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
                  {"How long does it take to make the website?"}
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
                    "Each package has its own delivery time. You can see it in the package cards above. We do not rush the work. We always want to deliver quality work, and that takes time. You will get the exact timeline in your plan before we start the project."
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
                  {"Can I update my website myself?"}
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
                    "You can update the content of your website, like text and images. For bigger changes, like the design or new pages, we do it for you at its own price. For regular help with content, you can choose our Website Care Plans. This keeps your website safe from breaking."
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
                  {"What support do I get after launch?"}
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
                    "We give 7 days of free support after your website launch. If something breaks or does not work as it should, we fix it for free. New pages, new features and design changes are not part of free support and get their own price. For content changes and regular upkeep, you can choose our Content Update Plans or Security & Maintenance Plans."
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
                {"Ready to Get Your Business Online?"}
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
                {"Let's plan your project together."}
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
                    top: "20cqw",
                    width: "75cqw",
                    height: "44.5833cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.75cqw",
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
                      height: "6.25cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.0417cqw",
                      padding: "0 2.7083cqw",
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
                        flex: "1",
                        height: "3.75cqw",
                        borderRadius: "1.875cqw",
                        background: "#ececef",
                        marginLeft: "1.6667cqw",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 2.0833cqw",
                        fontSize: "2.1875cqw",
                        fontWeight: "500",
                        color: "#5b5b66",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"yourbusiness.com"}
                  </span>
                </div>
                <svg
                  {...{
                    width: "360",
                    height: "42",
                    viewBox: "0 0 360 42",
                    style: { display: "block", flex: "none", width: "75cqw", height: "8.75cqw" },
                    "aria-hidden": "true",
                  }}
                >
                  <path {...{ d: "M0 0h72v20a36 36 0 0 1-72 0z", fill: "#2f5d50" }}></path>
                  <path {...{ d: "M72 0h72v20a36 36 0 0 1-72 0z", fill: "#f0e4cb" }}></path>
                  <path {...{ d: "M144 0h72v20a36 36 0 0 1-72 0z", fill: "#2f5d50" }}></path>
                  <path {...{ d: "M216 0h72v20a36 36 0 0 1-72 0z", fill: "#f0e4cb" }}></path>
                  <path {...{ d: "M288 0h72v20a36 36 0 0 1-72 0z", fill: "#2f5d50" }}></path>
                </svg>
                <div {...{ style: { display: "flex", gap: "2.9167cqw", padding: "2.5cqw 3.75cqw 0" } }}>
                  <div {...{ style: { flex: "1", display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <div
                      {...{
                        style: {
                          height: "17.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#f4ecdc",
                          overflow: "hidden",
                        },
                      }}
                    >
                      <svg
                        {...{
                          viewBox: "0 0 100 82",
                          preserveAspectRatio: "xMidYMid slice",
                          "aria-hidden": "true",
                          style: { display: "block", width: "100%", height: "100%" },
                        }}
                      >
                        <rect {...{ width: "100", height: "82", fill: "#f4ecdc" }}></rect>
                        <rect {...{ y: "60", width: "100", height: "22", fill: "#e0cfae" }}></rect>
                        <rect
                          {...{ x: "8", y: "9", width: "30", height: "30", rx: "2", fill: "#fffaf0" }}
                        ></rect>
                        <path {...{ d: "M23 9v30M8 24h30", stroke: "#d8c7a5", strokeWidth: "1.6" }}></path>
                        <path {...{ d: "M5 7h8v36H5zM33 7h8v36h-8z", fill: "#8fb3a2" }}></path>
                        <rect
                          {...{ x: "60", y: "12", width: "26", height: "20", rx: "2", fill: "#fffaf0" }}
                        ></rect>
                        <rect
                          {...{ x: "63", y: "15", width: "20", height: "14", rx: "1.5", fill: "#f2c46b" }}
                        ></rect>
                        <path {...{ d: "M63 29l7-7 5 4 3-3 5 6z", fill: "#c9794d" }}></path>
                        <ellipse
                          {...{ cx: "46", cy: "70", rx: "34", ry: "6", fill: "#c9794d", fillOpacity: "0.35" }}
                        ></ellipse>
                        <rect
                          {...{ x: "14", y: "36", width: "60", height: "22", rx: "8", fill: "#7a9e8e" }}
                        ></rect>
                        <rect
                          {...{ x: "9", y: "46", width: "70", height: "16", rx: "6", fill: "#2f5d50" }}
                        ></rect>
                        <rect
                          {...{ x: "5", y: "43", width: "12", height: "20", rx: "6", fill: "#2f5d50" }}
                        ></rect>
                        <rect
                          {...{ x: "71", y: "43", width: "12", height: "20", rx: "6", fill: "#2f5d50" }}
                        ></rect>
                        <rect
                          {...{ x: "20", y: "40", width: "14", height: "12", rx: "4", fill: "#c9794d" }}
                        ></rect>
                        <rect
                          {...{ x: "52", y: "40", width: "14", height: "12", rx: "4", fill: "#f2c46b" }}
                        ></rect>
                        <path
                          {...{ d: "M92 62V40", stroke: "#6b5a45", strokeWidth: "2", strokeLinecap: "round" }}
                        ></path>
                        <path {...{ d: "M86 40l2.500-11h7l2.500 11z", fill: "#f2c46b" }}></path>
                      </svg>
                    </div>
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "2.7083cqw",
                          fontWeight: "800",
                          color: "#1f1f29",
                          marginTop: "1.875cqw",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                        },
                      }}
                    >
                      {"Living Room"}
                    </span>
                  </div>
                  <div {...{ style: { flex: "1", display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <div
                      {...{
                        style: {
                          height: "17.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#f4ecdc",
                          overflow: "hidden",
                        },
                      }}
                    >
                      <svg
                        {...{
                          viewBox: "0 0 100 82",
                          preserveAspectRatio: "xMidYMid slice",
                          "aria-hidden": "true",
                          style: { display: "block", width: "100%", height: "100%" },
                        }}
                      >
                        <rect {...{ width: "100", height: "82", fill: "#f4ecdc" }}></rect>
                        <rect {...{ y: "60", width: "100", height: "22", fill: "#e0cfae" }}></rect>
                        <rect
                          {...{ x: "6", y: "6", width: "88", height: "3", rx: "1.500", fill: "#b98a5e" }}
                        ></rect>
                        <rect
                          {...{ x: "6", y: "9", width: "40", height: "20", rx: "2", fill: "#8fb3a2" }}
                        ></rect>
                        <rect
                          {...{ x: "54", y: "9", width: "40", height: "20", rx: "2", fill: "#8fb3a2" }}
                        ></rect>
                        <path {...{ d: "M26 9v20M74 9v20", stroke: "#f4ecdc", strokeWidth: "1.500" }}></path>
                        <path
                          {...{
                            d: "M22 20h1.500M28.500 20H30M70 20h1.500M76.500 20H78",
                            stroke: "#f4ecdc",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                          }}
                        ></path>
                        <path {...{ d: "M30 0v6M70 0v6", stroke: "#6b5a45", strokeWidth: "1.200" }}></path>
                        <path {...{ d: "M24 6h12l-2 7h-8zM64 6h12l-2 7h-8z", fill: "#f2c46b" }}></path>
                        <rect
                          {...{ x: "6", y: "46", width: "88", height: "6", rx: "2", fill: "#b98a5e" }}
                        ></rect>
                        <rect
                          {...{ x: "8", y: "52", width: "84", height: "26", rx: "2", fill: "#2f5d50" }}
                        ></rect>
                        <path
                          {...{
                            d: "M36 52v26M64 52v26",
                            stroke: "#f4ecdc",
                            strokeOpacity: "0.5",
                            strokeWidth: "1.200",
                          }}
                        ></path>
                        <rect
                          {...{ x: "32", y: "58", width: "2.500", height: "8", rx: "1.200", fill: "#f4ecdc" }}
                        ></rect>
                        <rect
                          {...{ x: "38", y: "58", width: "2.500", height: "8", rx: "1.200", fill: "#f4ecdc" }}
                        ></rect>
                        <rect
                          {...{ x: "60", y: "58", width: "2.500", height: "8", rx: "1.200", fill: "#f4ecdc" }}
                        ></rect>
                        <rect
                          {...{ x: "66", y: "58", width: "2.500", height: "8", rx: "1.200", fill: "#f4ecdc" }}
                        ></rect>
                        <rect
                          {...{ x: "42", y: "36", width: "16", height: "10", rx: "1.500", fill: "#fffaf0" }}
                        ></rect>
                        <circle {...{ cx: "46", cy: "41", r: "2.500", fill: "#c9794d" }}></circle>
                        <circle {...{ cx: "54", cy: "41", r: "2.500", fill: "#c9794d" }}></circle>
                        <rect
                          {...{ x: "12", y: "35", width: "14", height: "11", rx: "3", fill: "#c9794d" }}
                        ></rect>
                        <path {...{ d: "M12 38h14", stroke: "#fffaf0", strokeWidth: "1.500" }}></path>
                        <path {...{ d: "M78 46c-1-6 3-10 8-10s9 4 8 10z", fill: "#7a9e8e" }}></path>
                      </svg>
                    </div>
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "2.7083cqw",
                          fontWeight: "800",
                          color: "#1f1f29",
                          marginTop: "1.875cqw",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                        },
                      }}
                    >
                      {"Kitchen"}
                    </span>
                  </div>
                  <div {...{ style: { flex: "1", display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <div
                      {...{
                        style: {
                          height: "17.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#f4ecdc",
                          overflow: "hidden",
                        },
                      }}
                    >
                      <svg
                        {...{
                          viewBox: "0 0 100 82",
                          preserveAspectRatio: "xMidYMid slice",
                          "aria-hidden": "true",
                          style: { display: "block", width: "100%", height: "100%" },
                        }}
                      >
                        <rect {...{ width: "100", height: "82", fill: "#f4ecdc" }}></rect>
                        <rect {...{ y: "60", width: "100", height: "22", fill: "#e0cfae" }}></rect>
                        <rect
                          {...{ x: "60", y: "10", width: "28", height: "26", rx: "2", fill: "#fffaf0" }}
                        ></rect>
                        <path
                          {...{ d: "M74 10v26M60 23h28", stroke: "#d8c7a5", strokeWidth: "1.500" }}
                        ></path>
                        <rect
                          {...{ x: "12", y: "14", width: "46", height: "22", rx: "3", fill: "#fffaf0" }}
                        ></rect>
                        <path {...{ d: "M17 31l8-8 6 5 5-4 8 7z", fill: "#8fb3a2" }}></path>
                        <rect
                          {...{ x: "12", y: "26", width: "64", height: "30", rx: "6", fill: "#2f5d50" }}
                        ></rect>
                        <rect
                          {...{ x: "8", y: "44", width: "72", height: "18", rx: "5", fill: "#fffaf0" }}
                        ></rect>
                        <rect
                          {...{ x: "15", y: "37", width: "26", height: "12", rx: "5", fill: "#f2c46b" }}
                        ></rect>
                        <rect
                          {...{
                            x: "46",
                            y: "37",
                            width: "26",
                            height: "12",
                            rx: "5",
                            fill: "#f4ecdc",
                            stroke: "#d8c7a5",
                            strokeWidth: "1",
                          }}
                        ></rect>
                        <rect
                          {...{ x: "8", y: "52", width: "72", height: "13", rx: "4", fill: "#c9794d" }}
                        ></rect>
                        <path
                          {...{
                            d: "M8 57h72",
                            stroke: "#fffaf0",
                            strokeOpacity: "0.45",
                            strokeWidth: "1.500",
                          }}
                        ></path>
                        <rect
                          {...{ x: "84", y: "50", width: "12", height: "16", rx: "2", fill: "#b98a5e" }}
                        ></rect>
                        <path {...{ d: "M86 50l2-9h4l2 9z", fill: "#f2c46b" }}></path>
                        <rect {...{ x: "8", y: "64", width: "4", height: "4", fill: "#6b5a45" }}></rect>
                        <rect {...{ x: "76", y: "64", width: "4", height: "4", fill: "#6b5a45" }}></rect>
                      </svg>
                    </div>
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "2.7083cqw",
                          fontWeight: "800",
                          color: "#1f1f29",
                          marginTop: "1.875cqw",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                          textAlign: "center",
                        },
                      }}
                    >
                      {"Bedroom"}
                    </span>
                  </div>
                </div>
              </div>
              <svg
                {...{
                  width: "480",
                  height: "130",
                  viewBox: "0 0 480 130",
                  fill: "none",
                  style: { position: "absolute", left: "0", top: "0", width: "100cqw", height: "27.0833cqw" },
                  "aria-hidden": "true",
                }}
              >
                <path
                  {...{
                    d: "M34 97Q63.0 98.8 80 100",
                    stroke: "#ffffff",
                    strokeOpacity: "0.85",
                    strokeWidth: "1.4",
                    fill: "none",
                  }}
                ></path>
                <path {...{ d: "M34 92C4 74 9 40 34 40C59 40 64 74 34 92z", fill: "#ffc933" }}></path>
                <path {...{ d: "M29 98L34 91L39 98z", fill: "#ffc933" }}></path>
                <path
                  {...{
                    d: "M24 56Q20 65 23 72",
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M116 93Q92.0 97.2 80 100",
                    stroke: "#ffffff",
                    strokeOpacity: "0.85",
                    strokeWidth: "1.4",
                    fill: "none",
                  }}
                ></path>
                <path {...{ d: "M116 88C86 70 91 36 116 36C141 36 146 70 116 88z", fill: "#ef4444" }}></path>
                <path {...{ d: "M111 94L116 87L121 94z", fill: "#ef4444" }}></path>
                <path
                  {...{
                    d: "M106 52Q102 61 105 68",
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M74 65Q83.0 86.0 80 100",
                    stroke: "#ffffff",
                    strokeOpacity: "0.85",
                    strokeWidth: "1.4",
                    fill: "none",
                  }}
                ></path>
                <path {...{ d: "M74 60C44 42 49 8 74 8C99 8 104 42 74 60z", fill: "#2f7bff" }}></path>
                <path {...{ d: "M69 66L74 59L79 66z", fill: "#2f7bff" }}></path>
                <path
                  {...{
                    d: "M64 24Q60 33 63 40",
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M364 93Q388.0 97.2 400 100",
                    stroke: "#ffffff",
                    strokeOpacity: "0.85",
                    strokeWidth: "1.4",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{ d: "M364 88C334 70 339 36 364 36C389 36 394 70 364 88z", fill: "#2fbf71" }}
                ></path>
                <path {...{ d: "M359 94L364 87L369 94z", fill: "#2fbf71" }}></path>
                <path
                  {...{
                    d: "M354 52Q350 61 353 68",
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M446 97Q417.0 98.8 400 100",
                    stroke: "#ffffff",
                    strokeOpacity: "0.85",
                    strokeWidth: "1.4",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{ d: "M446 92C416 74 421 40 446 40C471 40 476 74 446 92z", fill: "#ffc933" }}
                ></path>
                <path {...{ d: "M441 98L446 91L451 98z", fill: "#ffc933" }}></path>
                <path
                  {...{
                    d: "M436 56Q432 65 435 72",
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
                <path
                  {...{
                    d: "M406 65Q397.0 86.0 400 100",
                    stroke: "#ffffff",
                    strokeOpacity: "0.85",
                    strokeWidth: "1.4",
                    fill: "none",
                  }}
                ></path>
                <path {...{ d: "M406 60C376 42 381 8 406 8C431 8 436 42 406 60z", fill: "#ef4444" }}></path>
                <path {...{ d: "M401 66L406 59L411 66z", fill: "#ef4444" }}></path>
                <path
                  {...{
                    d: "M396 24Q392 33 395 40",
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    fill: "none",
                  }}
                ></path>
              </svg>
              <svg
                {...{
                  width: "480",
                  height: "64",
                  viewBox: "0 0 480 64",
                  fill: "none",
                  style: {
                    position: "absolute",
                    left: "0",
                    top: "61.6667cqw",
                    width: "100cqw",
                    height: "13.3333cqw",
                  },
                  "aria-hidden": "true",
                }}
              >
                <path {...{ d: "M0 12H226L218 36H0L10 24z", fill: "#f58220" }}></path>
                <path {...{ d: "M0 30H220L218 36H0L3 33z", fill: "#c4590a" }}></path>
                <path {...{ d: "M262 12H480L470 24L480 36H254z", fill: "#f58220" }}></path>
                <path {...{ d: "M258 30H477L480 36H254z", fill: "#c4590a" }}></path>
                <path {...{ d: "M196 36H218L212 56L206 50L198 55z", fill: "#f58220" }}></path>
                <path {...{ d: "M254 36H276L270 54L264 49L257 55z", fill: "#f58220" }}></path>
                <g {...{ transform: "translate(240 24) rotate(-90) scale(1.7) translate(-12 -12)" }}>
                  <g
                    {...{
                      stroke: "#0a003d",
                      strokeWidth: "3.6",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                  >
                    <circle {...{ cx: "6", cy: "6", r: "3" }}></circle>
                    <path {...{ d: "M8.12 8.12 12 12" }}></path>
                    <path {...{ d: "M20 4 8.12 15.88" }}></path>
                    <circle {...{ cx: "6", cy: "18", r: "3" }}></circle>
                    <path {...{ d: "M14.8 14.8 20 20" }}></path>
                  </g>
                  <g
                    {...{
                      stroke: "#ffffff",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none",
                    }}
                  >
                    <circle {...{ cx: "6", cy: "6", r: "3" }}></circle>
                    <path {...{ d: "M8.12 8.12 12 12" }}></path>
                    <path {...{ d: "M20 4 8.12 15.88" }}></path>
                    <circle {...{ cx: "6", cy: "18", r: "3" }}></circle>
                    <path {...{ d: "M14.8 14.8 20 20" }}></path>
                  </g>
                </g>
              </svg>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "28.9583cqw",
                    top: "75.8333cqw",
                    width: "42.0833cqw",
                    height: "8.3333cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "2.5cqw",
                    boxShadow: "0 2.0833cqw 5cqw rgba(10,0,61,.28)",
                    padding: "0 2.5cqw 0 1.6667cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.6667cqw",
                  },
                }}
              >
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
                      strokeWidth: "3.2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { width: "2.7083cqw", height: "2.7083cqw" },
                    }}
                  >
                    <path {...{ d: "M5 12.5l4.5 4.5L19 7.5" }}></path>
                  </svg>
                </span>
                <span
                  {...{
                    style: {
                      fontSize: "2.6042cqw",
                      fontWeight: "600",
                      color: "#1f1f29",
                      whiteSpace: "nowrap",
                      flex: "1",
                    },
                  }}
                >
                  {"New inquiry"}
                </span>
                <span {...{ style: { fontSize: "2.3958cqw", color: "#6b6b76", whiteSpace: "nowrap" } }}>
                  {"Just now"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
