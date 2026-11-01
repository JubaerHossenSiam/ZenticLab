import Link from "next/link";
export default function ServicesDesign() {
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
              gridTemplateColumns: "1.2fr 1fr",
              gap: "56px",
              alignItems: "center",
            },
            className: "zl-section-inner zl-content-grid zl-split-grid",
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
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Website Services"}</span>
              {" for"}
              <br />
              {"Shops and Businesses"}
              <br />
              {"in Bangladesh"}
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
              {"From logo to website launch, we do everything you need."}
            </p>
            <div {...{ style: { marginTop: "36px" } }}>
              <a
                {...{
                  className: "zl-btn",
                  href: "#services",
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
                }}
              >
                {"View Our Services\n"}
                <svg
                  {...{
                    style: { transform: "rotate(90deg)" },
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
              className: "zl-hero-visual zl-mockup zl-section-visual",
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
                    background: "#ffffff",
                    border: "0.1838cqw solid #e6e6ea",
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
                      borderBottom: "0.1838cqw solid #ececef",
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
                        background: "#ececef",
                        marginLeft: "2.66cqw",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "1.4cqw",
                        fontSize: "1.2cqw",
                        color: "#6b6b76",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"bloomcafe.com"}
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      height: "6.43cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 2.6cqw",
                      borderBottom: "0.1838cqw solid #ececef",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "3cqw",
                        height: "3cqw",
                        borderRadius: "0.9cqw",
                        background: "#0f9d8a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "#ffffff",
                        "aria-hidden": "true",
                        style: { width: "2cqw", height: "2cqw" },
                      }}
                    >
                      <path {...{ d: "M5 19c0-8 5-14 15-14 0 9-5 15-13 15-.8 0-1.5-.1-2-.3z" }}></path>
                      <path
                        {...{
                          d: "M5 21c1-5 4-8 8-10",
                          stroke: "#0f9d8a",
                          strokeWidth: "1.6",
                          strokeLinecap: "round",
                          fill: "none",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        fontSize: "1.8cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        marginLeft: "1cqw",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Bloom Cafe"}
                  </span>
                  <div
                    {...{
                      style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: "2.4cqw" },
                    }}
                  >
                    <span {...{ style: { fontSize: "1.38cqw", fontWeight: "500", color: "#3b3b45" } }}>
                      {"Menu"}
                    </span>
                    <span {...{ style: { fontSize: "1.38cqw", fontWeight: "500", color: "#3b3b45" } }}>
                      {"About"}
                    </span>
                    <span {...{ style: { fontSize: "1.38cqw", fontWeight: "500", color: "#3b3b45" } }}>
                      {"Contact"}
                    </span>
                  </div>
                </div>
                <div
                  {...{
                    style: {
                      flex: "1",
                      display: "flex",
                      alignItems: "center",
                      gap: "3cqw",
                      padding: "0 3.4cqw",
                    },
                  }}
                >
                  <div
                    {...{ style: { flex: "1.3", display: "flex", flexDirection: "column", gap: "1.2cqw" } }}
                  >
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "3.7cqw",
                          lineHeight: "1.2",
                          fontWeight: "800",
                          color: "#1f1f29",
                        },
                      }}
                    >
                      {"Fresh coffee, made with love"}
                    </span>
                    <span
                      {...{
                        style: {
                          display: "block",
                          width: "90%",
                          height: "1.1cqw",
                          borderRadius: "1cqw",
                          background: "#e6e6ea",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          display: "block",
                          width: "70%",
                          height: "1.1cqw",
                          borderRadius: "1cqw",
                          background: "#e6e6ea",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          marginTop: "0.8cqw",
                          alignSelf: "flex-start",
                          background: "#ff8a3d",
                          color: "#ffffff",
                          fontSize: "1.45cqw",
                          fontWeight: "600",
                          padding: "1.1cqw 2.4cqw",
                          borderRadius: "0.9cqw",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Order now"}
                    </span>
                  </div>
                  <div
                    {...{
                      style: {
                        flex: "1",
                        height: "24cqw",
                        borderRadius: "1.6cqw",
                        background: "#f4f4f8",
                        overflow: "hidden",
                      },
                    }}
                  >
                    <img
                      {...{
                        src: "/images/c26ba9e0ca95.webp",
                        alt: "Cup of coffee",
                        style: { display: "block", width: "100%", height: "100%", objectFit: "cover" },
                        loading: "lazy",
                        decoding: "async",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "73.5cqw",
                    top: "15cqw",
                    width: "23.5cqw",
                    height: "45cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    border: "0.5cqw solid #1f1f29",
                    borderRadius: "3.6cqw",
                    boxShadow: "0 1.5cqw 4cqw rgba(20,20,40,.18)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    padding: "2.2cqw 1.8cqw 1.8cqw",
                  },
                }}
              >
                <div {...{ style: { display: "flex", alignItems: "center", gap: "0.8cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "2.4cqw",
                        height: "2.4cqw",
                        borderRadius: "0.7cqw",
                        background: "#0f9d8a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "#ffffff",
                        "aria-hidden": "true",
                        style: { width: "1.6cqw", height: "1.6cqw" },
                      }}
                    >
                      <path {...{ d: "M5 19c0-8 5-14 15-14 0 9-5 15-13 15-.8 0-1.5-.1-2-.3z" }}></path>
                      <path
                        {...{
                          d: "M5 21c1-5 4-8 8-10",
                          stroke: "#0f9d8a",
                          strokeWidth: "1.6",
                          strokeLinecap: "round",
                          fill: "none",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        fontSize: "1.4cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Bloom Cafe"}
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      height: "14cqw",
                      borderRadius: "1.4cqw",
                      background: "#f4f4f8",
                      marginTop: "2cqw",
                      overflow: "hidden",
                      flex: "none",
                    },
                  }}
                >
                  <img
                    {...{
                      src: "/images/c26ba9e0ca95.webp",
                      alt: "Cup of coffee",
                      style: { display: "block", width: "100%", height: "100%", objectFit: "cover" },
                      loading: "lazy",
                      decoding: "async",
                    }}
                  />
                </div>
                <span
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "2cqw",
                      lineHeight: "1.2",
                      fontWeight: "800",
                      color: "#1f1f29",
                      marginTop: "2cqw",
                    },
                  }}
                >
                  {"Fresh coffee, made with love"}
                </span>
                <div
                  {...{
                    style: { marginTop: "1.2cqw", display: "flex", flexDirection: "column", gap: "0.9cqw" },
                  }}
                >
                  <span
                    {...{
                      style: {
                        display: "block",
                        width: "90%",
                        height: "0.9cqw",
                        borderRadius: "1cqw",
                        background: "#e6e6ea",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        display: "block",
                        width: "65%",
                        height: "0.9cqw",
                        borderRadius: "1cqw",
                        background: "#e6e6ea",
                      },
                    }}
                  ></span>
                </div>
                <span
                  {...{
                    style: {
                      marginTop: "auto",
                      textAlign: "center",
                      background: "#ff8a3d",
                      color: "#ffffff",
                      fontSize: "1.5cqw",
                      fontWeight: "600",
                      padding: "1.3cqw 0",
                      borderRadius: "0.9cqw",
                    },
                  }}
                >
                  {"Order now"}
                </span>
              </div>

              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "0",
                    top: "44cqw",
                    width: "26cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    border: "0.1838cqw solid #e6e6ea",
                    borderRadius: "2.4cqw",
                    boxShadow: "0 1.2cqw 3.2cqw rgba(20,20,40,.14)",
                    padding: "2cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.4cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: { fontSize: "1.3cqw", fontWeight: "600", color: "#6b6b76", whiteSpace: "nowrap" },
                  }}
                >
                  {"Logo & Brand Guideline"}
                </span>
                <div {...{ style: { display: "flex", alignItems: "center", gap: "1.6cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "7cqw",
                        height: "7cqw",
                        borderRadius: "2cqw",
                        background: "#0f9d8a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "#ffffff",
                        "aria-hidden": "true",
                        style: { width: "4.6cqw", height: "4.6cqw" },
                      }}
                    >
                      <path {...{ d: "M5 19c0-8 5-14 15-14 0 9-5 15-13 15-.8 0-1.5-.1-2-.3z" }}></path>
                      <path
                        {...{
                          d: "M5 21c1-5 4-8 8-10",
                          stroke: "#0f9d8a",
                          strokeWidth: "1.6",
                          strokeLinecap: "round",
                          fill: "none",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <span
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "4cqw",
                        fontWeight: "800",
                        color: "#1f1f29",
                      },
                    }}
                  >
                    {"Aa"}
                  </span>
                </div>
                <div {...{ style: { display: "flex", gap: "0.9cqw" } }}>
                  <span
                    {...{
                      style: {
                        width: "2.6cqw",
                        height: "2.6cqw",
                        borderRadius: "50%",
                        background: "#0f9d8a",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "2.6cqw",
                        height: "2.6cqw",
                        borderRadius: "50%",
                        background: "#ff8a3d",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "2.6cqw",
                        height: "2.6cqw",
                        borderRadius: "50%",
                        background: "#0b4f46",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "2.6cqw",
                        height: "2.6cqw",
                        borderRadius: "50%",
                        background: "#e3f3f0",
                      },
                    }}
                  ></span>
                </div>
              </div>

              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "30cqw",
                    top: "52.5cqw",
                    width: "36cqw",
                    height: "8.2cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    border: "0.1838cqw solid #e6e6ea",
                    borderRadius: "1.8cqw",
                    boxShadow: "0 1cqw 2.6cqw rgba(20,20,40,.12)",
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
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "2.4cqw", height: "2.4cqw" },
                    }}
                  >
                    <path {...{ d: "M5 12.5l4.5 4.5L19 7.500" }}></path>
                  </svg>
                </span>
                <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                  <span
                    {...{
                      style: {
                        fontSize: "1.5cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Your website is live"}
                  </span>
                  <span {...{ style: { fontSize: "1.2cqw", color: "#6b6b76", whiteSpace: "nowrap" } }}>
                    {"bloomcafe.com"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{ id: "services", style: { background: "#faf8ff", padding: "96px 0" }, className: "zl-section" }}
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
              {"Our Services"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px" },
                className: "zl-body-copy",
              }}
            >
              {"See which service fits your business."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
                gap: "32px",
                marginTop: "56px",
              },
              className: "zl-content-grid zl-services-grid zl-section-content",
            }}
          >
            <div
              {...{
                className: "zl-card zl-lift zl-card-panel",
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <div
                {...{
                  style: { display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" },
                  className: "zl-service-heading",
                }}
              >
                <span
                  {...{
                    style: {
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e9e6f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                    className: "zl-service-heading-icon",
                  }}
                >
                  <svg
                    {...{
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2.2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <circle {...{ cx: "9", cy: "20", r: "1.5" }}></circle>
                    <circle {...{ cx: "18", cy: "20", r: "1.5" }}></circle>
                    <path {...{ d: "M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" }}></path>
                  </svg>
                </span>
                <div
                  {...{
                    style: { display: "flex", flexDirection: "column", gap: "4px" },
                    className: "zl-service-heading-copy",
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
                    {"E-Commerce Website"}
                  </h3>
                  <p
                    {...{
                      style: { fontSize: "16px", fontStyle: "italic", color: "#4a4565" },
                      className: "zl-service-heading-description",
                    }}
                  >
                    {"For shop owners who want to sell online"}
                  </p>
                </div>
              </div>
              <div {...{ style: { height: "1px", background: "#ece5ff", margin: "28px 0" } }}></div>
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
                    gap: "14px",
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
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                  {"All important online store features"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                  {"Manage products and orders yourself"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                    gap: "14px",
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
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                <p {...{ style: { fontSize: "15px", fontWeight: "500", color: "#4a4565" } }}>
                  {"Starting from"}
                </p>
                <p
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "44px",
                      lineHeight: "1.15",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      color: "#200093",
                      marginTop: "2px",
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
                <Link
                  {...{
                    className: "zl-btn-outline",
                    href: "/services/ecommerce",
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
                  {"See E-Commerce Packages\n"}
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
            <div
              {...{
                className: "zl-card zl-lift zl-card-panel",
                style: {
                  background: "#ffffff",
                  border: "1.5px solid #e4dbfb",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  display: "flex",
                  flexDirection: "column",
                },
              }}
            >
              <div
                {...{
                  style: { display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" },
                  className: "zl-service-heading",
                }}
              >
                <span
                  {...{
                    style: {
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#e9e6f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                    className: "zl-service-heading-icon",
                  }}
                >
                  <svg
                    {...{
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "2.2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <rect {...{ x: "3", y: "7", width: "18", height: "13", rx: "2" }}></rect>
                    <path {...{ d: "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" }}></path>
                  </svg>
                </span>
                <div
                  {...{
                    style: { display: "flex", flexDirection: "column", gap: "4px" },
                    className: "zl-service-heading-copy",
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
                    {"Business Website"}
                  </h3>
                  <p
                    {...{
                      style: { fontSize: "16px", fontStyle: "italic", color: "#4a4565" },
                      className: "zl-service-heading-description",
                    }}
                  >
                    {"For agencies, consultants and professionals"}
                  </p>
                </div>
              </div>
              <div {...{ style: { height: "1px", background: "#ece5ff", margin: "28px 0" } }}></div>
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
                    gap: "14px",
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
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                  {"Important pages & features your business needs"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                  {"Manage website content yourself"}
                </li>
                <li
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                    gap: "14px",
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
                      color: "#2c2548",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        flex: "none",
                        width: "24px",
                        height: "24px",
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
                <p {...{ style: { fontSize: "15px", fontWeight: "500", color: "#4a4565" } }}>
                  {"Starting from"}
                </p>
                <p
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "44px",
                      lineHeight: "1.15",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      color: "#200093",
                      marginTop: "2px",
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
                <Link
                  {...{
                    className: "zl-btn-outline",
                    href: "/services/business",
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
                  {"See Business Packages\n"}
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
                  },
                }}
              >
                {"Need Something Different?"}
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
                  "We build custom projects too. Tell us what you need, and we have the experience to build it."
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
                  {"\nMessage Us on WhatsApp"}
                </a>
              </div>
            </div>
            <div {...{ className: "zl-section-visual" }}>
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
                        left: "3cqw",
                        top: "0",
                        width: "88cqw",
                        height: "54cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #e6e6ea",
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
                          height: "5cqw",
                          flex: "none",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 2.1cqw 0 2cqw",
                          borderBottom: "1px solid #ececef",
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
                            background: "#ececef",
                            marginLeft: "2.66cqw",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "1.4cqw",
                            fontSize: "max(8px, 1.2cqw)",
                            color: "#6b6b76",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"app.citycare.com"}
                      </span>
                    </div>
                    <div {...{ style: { flex: "1", display: "flex", minHeight: "0" } }}>
                      <div
                        {...{
                          style: {
                            width: "17cqw",
                            flex: "none",
                            borderRight: "1px solid #ececef",
                            padding: "1.8cqw 1.4cqw",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5cqw",
                          },
                          className: "zl-divided-card",
                        }}
                      >
                        <span
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "1cqw",
                              marginBottom: "1.2cqw",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "2.8cqw",
                                height: "2.8cqw",
                                borderRadius: "0.8cqw",
                                background: "#2f6fed",
                              },
                            }}
                          ></span>
                          <span
                            {...{
                              style: {
                                fontSize: "max(8px,1.45cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"CityCare"}
                          </span>
                        </span>
                        <span
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "0.9cqw",
                              padding: "1cqw 1.2cqw",
                              borderRadius: "1cqw",
                              fontSize: "max(7px,1.15cqw)",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                              background: "#e8effd",
                              color: "#2f6fed",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "1.5cqw",
                                height: "1.5cqw",
                                borderRadius: "0.4cqw",
                                background: "#2f6fed",
                              },
                            }}
                          ></span>
                          {"Dashboard"}
                        </span>
                        <span
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "0.9cqw",
                              padding: "1cqw 1.2cqw",
                              borderRadius: "1cqw",
                              fontSize: "max(7px,1.15cqw)",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                              color: "#6b6b76",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "1.5cqw",
                                height: "1.5cqw",
                                borderRadius: "0.4cqw",
                                background: "#d7d7de",
                              },
                            }}
                          ></span>
                          {"Patients"}
                        </span>
                        <span
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "0.9cqw",
                              padding: "1cqw 1.2cqw",
                              borderRadius: "1cqw",
                              fontSize: "max(7px,1.15cqw)",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                              color: "#6b6b76",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "1.5cqw",
                                height: "1.5cqw",
                                borderRadius: "0.4cqw",
                                background: "#d7d7de",
                              },
                            }}
                          ></span>
                          {"Appointments"}
                        </span>
                        <span
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "0.9cqw",
                              padding: "1cqw 1.2cqw",
                              borderRadius: "1cqw",
                              fontSize: "max(7px,1.15cqw)",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                              color: "#6b6b76",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "1.5cqw",
                                height: "1.5cqw",
                                borderRadius: "0.4cqw",
                                background: "#d7d7de",
                              },
                            }}
                          ></span>
                          {"Doctors"}
                        </span>
                        <span
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "0.9cqw",
                              padding: "1cqw 1.2cqw",
                              borderRadius: "1cqw",
                              fontSize: "max(7px,1.15cqw)",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                              color: "#6b6b76",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "1.5cqw",
                                height: "1.5cqw",
                                borderRadius: "0.4cqw",
                                background: "#d7d7de",
                              },
                            }}
                          ></span>
                          {"Billing"}
                        </span>
                      </div>
                      <div
                        {...{
                          style: {
                            flex: "1",
                            padding: "1.8cqw 2cqw",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.4cqw",
                            minWidth: "0",
                          },
                        }}
                      >
                        <span
                          {...{
                            style: {
                              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                              fontSize: "max(10px, 2cqw)",
                              fontWeight: "800",
                              color: "#1f1f29",
                              whiteSpace: "nowrap",
                            },
                          }}
                        >
                          {"Hospital dashboard"}
                        </span>
                        <div {...{ style: { display: "flex", gap: "1.2cqw" } }}>
                          <div
                            {...{
                              style: {
                                flex: "1",
                                border: "1px solid #ececef",
                                borderRadius: "1.2cqw",
                                padding: "1.1cqw 1.3cqw",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.3cqw",
                              },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6.5px,1cqw)",
                                  color: "#6b6b76",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Patients today"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                  fontSize: "max(9px,2cqw)",
                                  fontWeight: "800",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"124"}
                            </span>
                            <span
                              {...{
                                style: {
                                  height: "0.5cqw",
                                  borderRadius: "1cqw",
                                  background: "#2f6fed",
                                  width: "60%",
                                },
                              }}
                            ></span>
                          </div>
                          <div
                            {...{
                              style: {
                                flex: "1",
                                border: "1px solid #ececef",
                                borderRadius: "1.2cqw",
                                padding: "1.1cqw 1.3cqw",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.3cqw",
                              },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6.5px,1cqw)",
                                  color: "#6b6b76",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Appointments"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                  fontSize: "max(9px,2cqw)",
                                  fontWeight: "800",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"58"}
                            </span>
                            <span
                              {...{
                                style: {
                                  height: "0.5cqw",
                                  borderRadius: "1cqw",
                                  background: "#1f8a5a",
                                  width: "60%",
                                },
                              }}
                            ></span>
                          </div>
                          <div
                            {...{
                              style: {
                                flex: "1",
                                border: "1px solid #ececef",
                                borderRadius: "1.2cqw",
                                padding: "1.1cqw 1.3cqw",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.3cqw",
                              },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6.5px,1cqw)",
                                  color: "#6b6b76",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Beds free"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                  fontSize: "max(9px,2cqw)",
                                  fontWeight: "800",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"17"}
                            </span>
                            <span
                              {...{
                                style: {
                                  height: "0.5cqw",
                                  borderRadius: "1cqw",
                                  background: "#ff8a3d",
                                  width: "60%",
                                },
                              }}
                            ></span>
                          </div>
                        </div>
                        <div {...{ style: { flex: "1", display: "flex", gap: "1.4cqw", minHeight: "0" } }}>
                          <div
                            {...{
                              style: {
                                flex: "1.45",
                                border: "1px solid #ececef",
                                borderRadius: "1.2cqw",
                                padding: "1.1cqw 1.3cqw",
                                display: "flex",
                                flexDirection: "column",
                                minWidth: "0",
                              },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6.5px,1cqw)",
                                  color: "#6b6b76",
                                  marginBottom: "0.6cqw",
                                },
                              }}
                            >
                              {"Today's appointments"}
                            </span>
                            <div
                              {...{
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1cqw",
                                  padding: "0.8cqw 0",
                                  borderTop: "1px solid #f0f0f3",
                                },
                              }}
                            >
                              <span
                                {...{
                                  style: {
                                    width: "2.4cqw",
                                    height: "2.4cqw",
                                    borderRadius: "50%",
                                    background: "#e8effd",
                                    flex: "none",
                                  },
                                }}
                              ></span>
                              <span
                                {...{
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    minWidth: "0",
                                  },
                                }}
                              >
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(7px,1.15cqw)",
                                      fontWeight: "600",
                                      color: "#1f1f29",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Rahim Uddin"}
                                </span>
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(6px,0.95cqw)",
                                      color: "#6b6b76",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Dr. Karim · Cardiology"}
                                </span>
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6.5px,1cqw)",
                                    color: "#3b3b45",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"09:30"}
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6px,0.95cqw)",
                                    fontWeight: "600",
                                    color: "#1f8a5a",
                                    background: "#e3f4ec",
                                    padding: "0.3cqw 0.8cqw",
                                    borderRadius: "1cqw",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"Checked in"}
                              </span>
                            </div>
                            <div
                              {...{
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1cqw",
                                  padding: "0.8cqw 0",
                                  borderTop: "1px solid #f0f0f3",
                                },
                              }}
                            >
                              <span
                                {...{
                                  style: {
                                    width: "2.4cqw",
                                    height: "2.4cqw",
                                    borderRadius: "50%",
                                    background: "#e8effd",
                                    flex: "none",
                                  },
                                }}
                              ></span>
                              <span
                                {...{
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    minWidth: "0",
                                  },
                                }}
                              >
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(7px,1.15cqw)",
                                      fontWeight: "600",
                                      color: "#1f1f29",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Nusrat Jahan"}
                                </span>
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(6px,0.95cqw)",
                                      color: "#6b6b76",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Dr. Salma · Medicine"}
                                </span>
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6.5px,1cqw)",
                                    color: "#3b3b45",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"10:00"}
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6px,0.95cqw)",
                                    fontWeight: "600",
                                    color: "#b7791f",
                                    background: "#fdf1d9",
                                    padding: "0.3cqw 0.8cqw",
                                    borderRadius: "1cqw",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"Waiting"}
                              </span>
                            </div>
                            <div
                              {...{
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1cqw",
                                  padding: "0.8cqw 0",
                                  borderTop: "1px solid #f0f0f3",
                                },
                              }}
                            >
                              <span
                                {...{
                                  style: {
                                    width: "2.4cqw",
                                    height: "2.4cqw",
                                    borderRadius: "50%",
                                    background: "#e8effd",
                                    flex: "none",
                                  },
                                }}
                              ></span>
                              <span
                                {...{
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    minWidth: "0",
                                  },
                                }}
                              >
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(7px,1.15cqw)",
                                      fontWeight: "600",
                                      color: "#1f1f29",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Abdul Hamid"}
                                </span>
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(6px,0.95cqw)",
                                      color: "#6b6b76",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Dr. Rafiq · Orthopedics"}
                                </span>
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6.5px,1cqw)",
                                    color: "#3b3b45",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"10:30"}
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6px,0.95cqw)",
                                    fontWeight: "600",
                                    color: "#2f6fed",
                                    background: "#e8effd",
                                    padding: "0.3cqw 0.8cqw",
                                    borderRadius: "1cqw",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"Booked"}
                              </span>
                            </div>
                            <div
                              {...{
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1cqw",
                                  padding: "0.8cqw 0",
                                  borderTop: "1px solid #f0f0f3",
                                },
                              }}
                            >
                              <span
                                {...{
                                  style: {
                                    width: "2.4cqw",
                                    height: "2.4cqw",
                                    borderRadius: "50%",
                                    background: "#e8effd",
                                    flex: "none",
                                  },
                                }}
                              ></span>
                              <span
                                {...{
                                  style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: "1",
                                    minWidth: "0",
                                  },
                                }}
                              >
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(7px,1.15cqw)",
                                      fontWeight: "600",
                                      color: "#1f1f29",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Farhana Akter"}
                                </span>
                                <span
                                  {...{
                                    style: {
                                      fontSize: "max(6px,0.95cqw)",
                                      color: "#6b6b76",
                                      whiteSpace: "nowrap",
                                    },
                                  }}
                                >
                                  {"Dr. Imran · Pediatrics"}
                                </span>
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6.5px,1cqw)",
                                    color: "#3b3b45",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"11:00"}
                              </span>
                              <span
                                {...{
                                  style: {
                                    fontSize: "max(6px,0.95cqw)",
                                    fontWeight: "600",
                                    color: "#2f6fed",
                                    background: "#e8effd",
                                    padding: "0.3cqw 0.8cqw",
                                    borderRadius: "1cqw",
                                    whiteSpace: "nowrap",
                                  },
                                }}
                              >
                                {"Booked"}
                              </span>
                            </div>
                          </div>
                          <div
                            {...{
                              style: {
                                flex: "1",
                                border: "1px solid #ececef",
                                borderRadius: "1.2cqw",
                                padding: "1.1cqw 1.3cqw",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.6cqw",
                              },
                            }}
                          >
                            <span {...{ style: { fontSize: "max(6.5px,1cqw)", color: "#6b6b76" } }}>
                              {"Patients this week"}
                            </span>
                            <svg
                              {...{
                                viewBox: "0 0 70 50",
                                preserveAspectRatio: "none",
                                "aria-hidden": "true",
                                style: { width: "100%", flex: "1", minHeight: "0" },
                              }}
                            >
                              <g {...{ fill: "#d6e3fb" }}>
                                <rect {...{ x: "2", y: "26", width: "7", height: "24", rx: "1.500" }}></rect>
                                <rect {...{ x: "12", y: "18", width: "7", height: "32", rx: "1.500" }}></rect>
                                <rect {...{ x: "22", y: "22", width: "7", height: "28", rx: "1.500" }}></rect>
                                <rect {...{ x: "42", y: "14", width: "7", height: "36", rx: "1.500" }}></rect>
                                <rect {...{ x: "52", y: "24", width: "7", height: "26", rx: "1.500" }}></rect>
                                <rect {...{ x: "62", y: "30", width: "6", height: "20", rx: "1.500" }}></rect>
                              </g>
                              <rect
                                {...{
                                  x: "32",
                                  y: "4",
                                  width: "7",
                                  height: "46",
                                  rx: "1.500",
                                  fill: "#2f6fed",
                                }}
                              ></rect>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "0",
                        top: "49cqw",
                        width: "42cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #e6e6ea",
                        borderRadius: "2.4cqw",
                        boxShadow: "0 1.2cqw 3.2cqw rgba(20,20,40,.14)",
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
                          background: "#e8effd",
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
                          stroke: "#2f6fed",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.8cqw", height: "2.8cqw" },
                        }}
                      >
                        <circle {...{ cx: "10", cy: "8", r: "4" }}></circle>
                        <path {...{ d: "M3 21a7 7 0 0 1 14 0" }}></path>
                        <path {...{ d: "M19 8v6M16 11h6" }}></path>
                      </svg>
                    </span>
                    <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                      <span
                        {...{
                          style: {
                            fontSize: "max(9px, 1.5cqw)",
                            fontWeight: "700",
                            color: "#1f1f29",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"New patient registered"}
                      </span>
                      <span
                        {...{
                          style: { fontSize: "max(8px, 1.2cqw)", color: "#6b6b76", whiteSpace: "nowrap" },
                        }}
                      >
                        {"Rahim Uddin · ID P-1042"}
                      </span>
                    </div>
                  </div>
                  <div
                    {...{
                      style: {
                        position: "absolute",
                        left: "60cqw",
                        top: "52cqw",
                        width: "36cqw",
                        height: "8.4cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #e6e6ea",
                        borderRadius: "1.8cqw",
                        boxShadow: "0 1cqw 2.6cqw rgba(20,20,40,.12)",
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
                          strokeWidth: "3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.4cqw", height: "2.4cqw" },
                        }}
                      >
                        <path {...{ d: "M5 12.500l4.500 4.500L19 7.500" }}></path>
                      </svg>
                    </span>
                    <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                      <span
                        {...{
                          style: {
                            fontSize: "max(9px, 1.5cqw)",
                            fontWeight: "700",
                            color: "#1f1f29",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Lab report ready"}
                      </span>
                      <span
                        {...{
                          style: { fontSize: "max(8px, 1.2cqw)", color: "#6b6b76", whiteSpace: "nowrap" },
                        }}
                      >
                        {"Sent to Dr. Karim"}
                      </span>
                    </div>
                  </div>
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
                    "Each package has its own delivery time. You can see it on the E-Commerce and Business pages. We do not rush the work. We always want to deliver quality work, and that takes time. You will get the exact timeline in your plan before we start the project."
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
                {"Ready to Take Your Business Online?"}
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
                  aspectRatio: "440 / 360",
                  containerType: "inline-size",
                  maxWidth: "440px",
                },
                "aria-hidden": "true",
                className: "zl-cta-visual",
              }}
            >
              <svg
                {...{
                  width: "440",
                  height: "360",
                  viewBox: "0 0 440 360",
                  fill: "none",
                  style: { position: "absolute", inset: "0", width: "100cqw", height: "81.8182cqw" },
                }}
              >
                <g {...{ stroke: "#ffffff", fill: "none" }}>
                  <circle
                    {...{ cx: "220", cy: "180", r: "100", strokeOpacity: "0.16", strokeWidth: "1.5" }}
                  ></circle>
                  <circle
                    {...{ cx: "220", cy: "180", r: "150", strokeOpacity: "0.11", strokeWidth: "1.5" }}
                  ></circle>
                  <circle
                    {...{ cx: "220", cy: "180", r: "200", strokeOpacity: "0.07", strokeWidth: "1.5" }}
                  ></circle>
                </g>
              </svg>
              <div
                {...{
                  style: {
                    position: "absolute",
                    top: "8.6364cqw",
                    width: "42.7273cqw",
                    height: "64.5455cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.5455cqw",
                    padding: "3.1818cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.2727cqw",
                    left: "0",
                    boxShadow: "0 2.7273cqw 6.3636cqw rgba(10,0,61,.28)",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      alignSelf: "flex-start",
                      fontSize: "2.7273cqw",
                      fontWeight: "700",
                      color: "#6b6780",
                      background: "#f3f3f6",
                      borderRadius: "227.0455cqw",
                      padding: "0.9091cqw 2.7273cqw",
                      lineHeight: "1.3",
                    },
                  }}
                >
                  {"Offline"}
                </span>
                <div
                  {...{
                    style: {
                      height: "23.6364cqw",
                      borderRadius: "2.7273cqw",
                      background: "#f3f3f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "62",
                      height: "62",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#8f80c9",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { width: "14.0909cqw", height: "14.0909cqw" },
                    }}
                  >
                    <path {...{ d: "M3 9l1.5-5h15L21 9" }}></path>
                    <path
                      {...{
                        d: "M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3",
                      }}
                    ></path>
                    <path {...{ d: "M5 12v8h14v-8" }}></path>
                    <path {...{ d: "M10 20v-4h4v4" }}></path>
                  </svg>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "2.0455cqw",
                      padding: "1.8182cqw 2.2727cqw",
                      borderRadius: "2.7273cqw",
                      background: "#f3f3f6",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "6.3636cqw",
                        height: "6.3636cqw",
                        borderRadius: "50%",
                        background: "#ffffff",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#6b6780",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { width: "3.6364cqw", height: "3.6364cqw" },
                      }}
                    >
                      <path {...{ d: "M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" }}></path>
                      <circle {...{ cx: "12", cy: "10", r: "2.2" }}></circle>
                    </svg>
                  </span>
                  <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <span
                      {...{
                        style: {
                          fontSize: "2.3864cqw",
                          fontWeight: "600",
                          color: "#6b6780",
                          lineHeight: "1.3",
                        },
                      }}
                    >
                      {"Customers"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.9545cqw",
                          fontWeight: "700",
                          color: "#6b6780",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Nearby only"}
                    </span>
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "2.0455cqw",
                      padding: "1.8182cqw 2.2727cqw",
                      borderRadius: "2.7273cqw",
                      background: "#f3f3f6",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "6.3636cqw",
                        height: "6.3636cqw",
                        borderRadius: "50%",
                        background: "#ffffff",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#6b6780",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { width: "3.6364cqw", height: "3.6364cqw" },
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                      <path
                        {...{
                          d: "M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.8-2.5 1.9 0 2.7 5 1.3 5 4 0 1.1-1.1 1.9-2.5 1.9-1.1 0-2.100-.4-2.600-1.200M12 6.500V8M12 16v1.500",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <span
                      {...{
                        style: {
                          fontSize: "2.3864cqw",
                          fontWeight: "600",
                          color: "#6b6780",
                          lineHeight: "1.3",
                        },
                      }}
                    >
                      {"Profit"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.9545cqw",
                          fontWeight: "700",
                          color: "#6b6780",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"$"}
                    </span>
                  </span>
                </div>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    top: "8.6364cqw",
                    width: "42.7273cqw",
                    height: "64.5455cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "4.5455cqw",
                    padding: "3.1818cqw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2.2727cqw",
                    right: "0",
                    boxShadow: "0 4.0909cqw 10cqw rgba(10,0,61,.38)",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      alignSelf: "flex-start",
                      fontSize: "2.7273cqw",
                      fontWeight: "700",
                      color: "#1a7f52",
                      background: "#e6f5ee",
                      borderRadius: "227.0455cqw",
                      padding: "0.9091cqw 2.7273cqw",
                      lineHeight: "1.3",
                    },
                  }}
                >
                  {"Online"}
                </span>
                <div
                  {...{
                    style: {
                      height: "23.6364cqw",
                      borderRadius: "2.7273cqw",
                      border: "0.2273cqw solid #ececef",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    },
                  }}
                >
                  <div
                    {...{
                      style: {
                        height: "4.5455cqw",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.9091cqw",
                        padding: "0 1.8182cqw",
                        background: "#fafafb",
                        borderBottom: "0.2273cqw solid #ececef",
                      },
                    }}
                  >
                    <span
                      {...{
                        style: {
                          width: "1.1364cqw",
                          height: "1.1364cqw",
                          borderRadius: "50%",
                          background: "#ff5f57",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          width: "1.1364cqw",
                          height: "1.1364cqw",
                          borderRadius: "50%",
                          background: "#febc2e",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          width: "1.1364cqw",
                          height: "1.1364cqw",
                          borderRadius: "50%",
                          background: "#28c840",
                        },
                      }}
                    ></span>
                    <span
                      {...{
                        style: {
                          flex: "1",
                          height: "2.5cqw",
                          borderRadius: "1.3636cqw",
                          background: "#ececef",
                          marginLeft: "0.9091cqw",
                          fontSize: "1.7045cqw",
                          fontWeight: "500",
                          color: "#5b5b66",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 1.3636cqw",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"yourbusiness.com"}
                    </span>
                  </div>
                  <div
                    {...{
                      style: {
                        flex: "1",
                        padding: "1.8182cqw",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.3636cqw",
                      },
                    }}
                  >
                    <div
                      {...{
                        style: {
                          flex: "1",
                          borderRadius: "1.8182cqw",
                          background: "#e9e6f4",
                          display: "flex",
                          alignItems: "center",
                          gap: "1.8182cqw",
                          padding: "0 2.2727cqw",
                        },
                      }}
                    >
                      <svg
                        {...{
                          width: "26",
                          height: "26",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#200093",
                          strokeWidth: "1.6",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          style: { width: "5.9091cqw", height: "5.9091cqw" },
                        }}
                      >
                        <path {...{ d: "M3 9l1.5-5h15L21 9" }}></path>
                        <path
                          {...{
                            d: "M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3",
                          }}
                        ></path>
                        <path {...{ d: "M5 12v8h14v-8" }}></path>
                        <path {...{ d: "M10 20v-4h4v4" }}></path>
                      </svg>
                      <span {...{ style: { display: "flex", flexDirection: "column", gap: "0.9091cqw" } }}>
                        <span
                          {...{
                            style: {
                              width: "10cqw",
                              height: "1.1364cqw",
                              borderRadius: "0.6818cqw",
                              background: "#200093",
                            },
                          }}
                        ></span>
                        <span
                          {...{
                            style: {
                              width: "6.8182cqw",
                              height: "0.9091cqw",
                              borderRadius: "0.4545cqw",
                              background: "#a599d3",
                            },
                          }}
                        ></span>
                      </span>
                    </div>
                    <div {...{ style: { display: "flex", gap: "1.3636cqw", height: "5cqw" } }}>
                      <span
                        {...{ style: { flex: "1", borderRadius: "1.3636cqw", background: "#f3f3f6" } }}
                      ></span>
                      <span
                        {...{ style: { flex: "1", borderRadius: "1.3636cqw", background: "#f3f3f6" } }}
                      ></span>
                      <span
                        {...{ style: { flex: "1", borderRadius: "1.3636cqw", background: "#26262e" } }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "2.0455cqw",
                      padding: "1.8182cqw 2.2727cqw",
                      borderRadius: "2.7273cqw",
                      background: "#e6f5ee",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "6.3636cqw",
                        height: "6.3636cqw",
                        borderRadius: "50%",
                        background: "#ffffff",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1a7f52",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { width: "3.6364cqw", height: "3.6364cqw" },
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                      <path {...{ d: "M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" }}></path>
                    </svg>
                  </span>
                  <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <span
                      {...{
                        style: {
                          fontSize: "2.3864cqw",
                          fontWeight: "600",
                          color: "#6b6780",
                          lineHeight: "1.3",
                        },
                      }}
                    >
                      {"Customers"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.9545cqw",
                          fontWeight: "700",
                          color: "#1a7f52",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"All Bangladesh"}
                    </span>
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "2.0455cqw",
                      padding: "1.8182cqw 2.2727cqw",
                      borderRadius: "2.7273cqw",
                      background: "#e6f5ee",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "6.3636cqw",
                        height: "6.3636cqw",
                        borderRadius: "50%",
                        background: "#ffffff",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <svg
                      {...{
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1a7f52",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        style: { width: "3.6364cqw", height: "3.6364cqw" },
                      }}
                    >
                      <circle {...{ cx: "12", cy: "12", r: "9" }}></circle>
                      <path
                        {...{
                          d: "M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.8-2.5 1.9 0 2.7 5 1.3 5 4 0 1.1-1.1 1.9-2.5 1.9-1.1 0-2.100-.4-2.600-1.200M12 6.500V8M12 16v1.500",
                        }}
                      ></path>
                    </svg>
                  </span>
                  <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <span
                      {...{
                        style: {
                          fontSize: "2.3864cqw",
                          fontWeight: "600",
                          color: "#6b6780",
                          lineHeight: "1.3",
                        },
                      }}
                    >
                      {"Profit"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.9545cqw",
                          fontWeight: "700",
                          color: "#1a7f52",
                          lineHeight: "1.3",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"$$$"}
                    </span>
                  </span>
                </div>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "45cqw",
                    top: "35.9091cqw",
                    width: "10cqw",
                    height: "10cqw",
                    borderRadius: "50%",
                    background: "#ffffff",
                    boxShadow: "0 1.8182cqw 4.5455cqw rgba(10,0,61,.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <svg
                  {...{
                    width: "22",
                    height: "22",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#200093",
                    strokeWidth: "2.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: { width: "5cqw", height: "5cqw" },
                  }}
                >
                  <path {...{ d: "M5 12h14M13 6l6 6-6 6" }}></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
