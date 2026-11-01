import Link from "next/link";
export default function EcommerceDesign() {
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
              {"A Professional Online Store That Helps You Get "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"More Sales"}</span>
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
                "Customers check online before they buy. We build a store that shows your products and makes them easy to buy online."
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
                      padding: "0 2.1cqw 0 2.5cqw",
                      borderBottom: "0.1838cqw solid #ececef",
                    },
                  }}
                >
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#1f1f29",
                      strokeWidth: "1.7",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "2.6cqw", height: "2.6cqw", flex: "none" },
                    }}
                  >
                    <path {...{ d: "M4 9l1.5-5h13L20 9" }}></path>
                    <path
                      {...{ d: "M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" }}
                    ></path>
                    <path {...{ d: "M5 12v8h14v-8" }}></path>
                  </svg>
                  <span
                    {...{
                      style: {
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontSize: "2cqw",
                        fontWeight: "600",
                        color: "#1f1f29",
                        marginLeft: "0.9cqw",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Urban Picks"}
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
                          color: "#3b3b45",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Shop"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.38cqw",
                          fontWeight: "500",
                          color: "#3b3b45",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"New arrivals"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "1.38cqw",
                          fontWeight: "500",
                          color: "#3b3b45",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Contact"}
                    </span>
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f1f29",
                        strokeWidth: "1.8",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "1.9cqw", height: "1.9cqw", flex: "none" },
                      }}
                    >
                      <circle {...{ cx: "11", cy: "11", r: "7" }}></circle>
                      <path {...{ d: "M20 20l-4-4" }}></path>
                    </svg>
                    <span {...{ style: { position: "relative", display: "flex" } }}>
                      <svg
                        {...{
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "#1f1f29",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.5cqw", height: "2.5cqw", flex: "none" },
                        }}
                      >
                        <circle {...{ cx: "9", cy: "20", r: "1.5" }}></circle>
                        <circle {...{ cx: "18", cy: "20", r: "1.5" }}></circle>
                        <path {...{ d: "M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" }}></path>
                      </svg>
                      <span
                        {...{
                          style: {
                            position: "absolute",
                            left: "86%",
                            top: "20%",
                            transform: "translate(-50%, -50%)",
                            width: "1.5cqw",
                            height: "1.5cqw",
                            boxSizing: "border-box",
                            border: "0.2757cqw solid #ffffff",
                            borderRadius: "50%",
                            background: "#26262e",
                            color: "#ffffff",
                            fontSize: "0.9cqw",
                            fontWeight: "600",
                            lineHeight: "1",
                            padding: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          },
                        }}
                      >
                        {"3"}
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  {...{
                    style: {
                      padding: "1.75cqw 2.85cqw 0 2.57cqw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: "3cqw",
                        fontWeight: "800",
                        letterSpacing: "-0.01em",
                        color: "#1f1f29",
                      },
                    }}
                  >
                    {"Popular products"}
                  </span>
                  <span
                    {...{
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.6cqw",
                        fontSize: "1.7cqw",
                        fontWeight: "500",
                        color: "#3b3b45",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"See all"}
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#3b3b45",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "1.7cqw", height: "1.7cqw" },
                      }}
                    >
                      <path {...{ d: "M5 12h14M13 6l6 6-6 6" }}></path>
                    </svg>
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      padding: "1.1cqw 2.85cqw 0 2.57cqw",
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "1.6cqw",
                    },
                  }}
                >
                  <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                    <img
                      {...{
                        src: "/images/t-shirt.jpg",
                        alt: "T-Shirt",
                        style: {
                          display: "block",
                          width: "100%",
                          height: "17.55cqw",
                          objectFit: "cover",
                          borderRadius: "1.3cqw",
                          background: "#eeeef1",
                        },
                        loading: "lazy",
                        decoding: "async",
                      }}
                    />
                    <span
                      {...{
                        style: {
                          fontSize: "1.84cqw",
                          fontWeight: "600",
                          color: "#1f1f29",
                          marginTop: "0.9cqw",
                        },
                      }}
                    >
                      {"T-Shirt"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.2cqw",
                          fontWeight: "700",
                          color: "#1f1f29",
                          marginTop: "0.3cqw",
                        },
                      }}
                    >
                      {"Tk 850"}
                    </span>
                    <span
                      {...{
                        style: {
                          height: "3.77cqw",
                          marginTop: "1cqw",
                          border: "0.1838cqw solid #cfcfd6",
                          background: "#ffffff",
                          borderRadius: "0.8cqw",
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "1.75cqw",
                          fontWeight: "500",
                          color: "#1f1f29",
                          padding: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      {"Add to cart"}
                    </span>
                  </div>
                  <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                    <div
                      {...{
                        style: {
                          width: "100%",
                          height: "17.55cqw",
                          borderRadius: "1.3cqw",
                          overflow: "hidden",
                          background: "#eeeef1",
                        },
                      }}
                    >
                      <img
                        {...{
                          src: "/images/shoes.jpg",
                          alt: "Shoes",
                          style: {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "scale(1.2)",
                          },
                          loading: "lazy",
                          decoding: "async",
                        }}
                      />
                    </div>
                    <span
                      {...{
                        style: {
                          fontSize: "1.84cqw",
                          fontWeight: "600",
                          color: "#1f1f29",
                          marginTop: "0.9cqw",
                        },
                      }}
                    >
                      {"Shoes"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.2cqw",
                          fontWeight: "700",
                          color: "#1f1f29",
                          marginTop: "0.3cqw",
                        },
                      }}
                    >
                      {"Tk 2,200"}
                    </span>
                    <span
                      {...{
                        style: {
                          height: "3.77cqw",
                          marginTop: "1cqw",
                          border: "0.1838cqw solid #cfcfd6",
                          background: "#ffffff",
                          borderRadius: "0.8cqw",
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "1.75cqw",
                          fontWeight: "500",
                          color: "#1f1f29",
                          padding: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      {"Add to cart"}
                    </span>
                  </div>
                  <div {...{ style: { display: "flex", flexDirection: "column" } }}>
                    <img
                      {...{
                        src: "/images/headphones.jpg",
                        alt: "Headphones",
                        style: {
                          display: "block",
                          width: "100%",
                          height: "17.55cqw",
                          objectFit: "cover",
                          borderRadius: "1.3cqw",
                          background: "#eeeef1",
                        },
                        loading: "lazy",
                        decoding: "async",
                      }}
                    />
                    <span
                      {...{
                        style: {
                          fontSize: "1.84cqw",
                          fontWeight: "600",
                          color: "#1f1f29",
                          marginTop: "0.9cqw",
                        },
                      }}
                    >
                      {"Headphones"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontSize: "2.2cqw",
                          fontWeight: "700",
                          color: "#1f1f29",
                          marginTop: "0.3cqw",
                        },
                      }}
                    >
                      {"Tk 1,450"}
                    </span>
                    <span
                      {...{
                        style: {
                          height: "3.77cqw",
                          marginTop: "1cqw",
                          border: "0.1838cqw solid #cfcfd6",
                          background: "#ffffff",
                          borderRadius: "0.8cqw",
                          fontFamily: "Inter, system-ui, sans-serif",
                          fontSize: "1.75cqw",
                          fontWeight: "500",
                          color: "#1f1f29",
                          padding: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      {"Add to cart"}
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
                  {"New order · Chattogram"}
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
                  {"New order · Sylhet"}
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
                    background: "#ffffff",
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
                      borderBottom: "0.1838cqw solid #ececef",
                      padding: "0 0.3cqw",
                    },
                  }}
                >
                  <span {...{ style: { display: "flex", alignItems: "center", gap: "0.6cqw" } }}>
                    <svg
                      {...{
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#1f1f29",
                        strokeWidth: "1.7",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        style: { width: "2.2cqw", height: "2.2cqw" },
                      }}
                    >
                      <path {...{ d: "M4 9l1.5-5h13L20 9" }}></path>
                      <path
                        {...{ d: "M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 20 9" }}
                      ></path>
                      <path {...{ d: "M5 12v8h14v-8" }}></path>
                    </svg>
                    <span
                      {...{
                        style: {
                          fontSize: "1.4cqw",
                          fontWeight: "600",
                          color: "#1f1f29",
                          whiteSpace: "nowrap",
                        },
                      }}
                    >
                      {"Urban Picks"}
                    </span>
                  </span>
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#1f1f29",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "2cqw", height: "2cqw" },
                    }}
                  >
                    <circle {...{ cx: "9", cy: "20", r: "1.5" }}></circle>
                    <circle {...{ cx: "18", cy: "20", r: "1.5" }}></circle>
                    <path {...{ d: "M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L21 7H6" }}></path>
                  </svg>
                </div>
                <div
                  {...{
                    style: {
                      width: "100%",
                      height: "18.9cqw",
                      borderRadius: "1.3cqw",
                      overflow: "hidden",
                      background: "#eeeef1",
                      marginTop: "1.1cqw",
                      flex: "none",
                    },
                  }}
                >
                  <img
                    {...{
                      src: "/images/bag.jpg",
                      alt: "Bag",
                      style: {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "scale(1.2)",
                      },
                      loading: "lazy",
                      decoding: "async",
                    }}
                  />
                </div>
                <span
                  {...{
                    style: { fontSize: "1.65cqw", fontWeight: "600", color: "#1f1f29", marginTop: "1cqw" },
                  }}
                >
                  {"Bag"}
                </span>
                <span
                  {...{
                    style: {
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "2.4cqw",
                      fontWeight: "800",
                      color: "#1f1f29",
                      marginTop: "0.2cqw",
                    },
                  }}
                >
                  {"Tk 1,200"}
                </span>
                <div
                  {...{
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "0.9cqw",
                    },
                  }}
                >
                  <span {...{ style: { fontSize: "1.38cqw", fontWeight: "500", color: "#1f1f29" } }}>
                    {"Quantity"}
                  </span>
                  <span
                    {...{
                      style: {
                        display: "flex",
                        alignItems: "center",
                        height: "3.7cqw",
                        width: "11.4cqw",
                        border: "0.1838cqw solid #cfcfd6",
                        borderRadius: "0.8cqw",
                        fontSize: "1.55cqw",
                        fontWeight: "500",
                        color: "#1f1f29",
                      },
                    }}
                  >
                    <span {...{ style: { flex: "1", textAlign: "center" } }}>{"−"}</span>
                    <span
                      {...{
                        style: {
                          flex: "1",
                          textAlign: "center",
                          borderLeft: "0.1838cqw solid #cfcfd6",
                          borderRight: "0.1838cqw solid #cfcfd6",
                          lineHeight: "3.7cqw",
                        },
                      }}
                    >
                      {"1"}
                    </span>
                    <span {...{ style: { flex: "1", textAlign: "center" } }}>{"+"}</span>
                  </span>
                </div>
                <div
                  {...{
                    style: { display: "flex", alignItems: "center", gap: "0.7cqw", marginTop: "0.9cqw" },
                  }}
                >
                  <svg
                    {...{
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#5b5b66",
                      strokeWidth: "1.7",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      "aria-hidden": "true",
                      style: { width: "2cqw", height: "2cqw", flex: "none" },
                    }}
                  >
                    <path {...{ d: "M3 6h11v9H3z" }}></path>
                    <path {...{ d: "M14 9h4l3 3v3h-7z" }}></path>
                    <circle {...{ cx: "7", cy: "17.5", r: "1.8" }}></circle>
                    <circle {...{ cx: "17", cy: "17.5", r: "1.8" }}></circle>
                  </svg>
                  <span {...{ style: { fontSize: "1cqw", color: "#5b5b66", whiteSpace: "nowrap" } }}>
                    {"Delivery all over Bangladesh"}
                  </span>
                </div>
                <span
                  {...{
                    style: {
                      marginTop: "auto",
                      flex: "none",
                      height: "4.5cqw",
                      border: "0",
                      borderRadius: "0.95cqw",
                      background: "#26262e",
                      color: "#ffffff",
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontSize: "1.84cqw",
                      fontWeight: "600",
                      padding: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}
                >
                  {"Order now"}
                </span>
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
              {"What a Good Online Store Does for You"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Your online store is often the first place a new customer sees your products."}
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
                <rect
                  {...{
                    x: "14",
                    y: "31",
                    width: "82",
                    height: "14",
                    rx: "7",
                    fill: "#f3f1fa",
                    stroke: "#d9d4ec",
                    strokeWidth: "1.5",
                  }}
                ></rect>
                <rect {...{ x: "22", y: "36", width: "30", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "14", y: "51", width: "24", height: "18", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "14", y: "74", width: "16", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "14", y: "82", width: "10", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "44", y: "51", width: "24", height: "18", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "44", y: "74", width: "16", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "44", y: "82", width: "10", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "74", y: "51", width: "24", height: "18", rx: "5", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "74", y: "74", width: "16", height: "4", rx: "2", fill: "#d9d4ec" }}></rect>
                <rect {...{ x: "74", y: "82", width: "10", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <circle
                  {...{ cx: "121", cy: "67", r: "8", fill: "none", stroke: "#fff", strokeWidth: "3.500" }}
                ></circle>
                <path
                  {...{ d: "M127 73l7 7", stroke: "#fff", strokeWidth: "3.500", strokeLinecap: "round" }}
                ></path>
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
                {"Customers Find Products Quickly"}
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
                  "A clear, well-organized store lets customers see all your products, with prices, and find what they want in seconds."
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
                <path
                  {...{
                    d: "M0 44h14M4 56h10M0 68h12",
                    stroke: "#c4bce3",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <g {...{ transform: "translate(12 0)" }}>
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
                  <rect
                    {...{ x: "14", y: "76", width: "40", height: "5", rx: "2.500", fill: "#d9d4ec" }}
                  ></rect>
                </g>
                <circle
                  {...{ cx: "128", cy: "72", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <path {...{ d: "M131 58l-12 16h9l-3 14 13-17h-9z", fill: "#fff" }}></path>
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
                {"Fast Pages That Keep Customers"}
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
                  "Many customers leave a slow store before they see a single product. A fast store lets them browse and order without waiting."
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
                <rect {...{ x: "14", y: "34", width: "38", height: "34", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{ x: "60", y: "36", width: "34", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{ x: "60", y: "48", width: "24", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "14", y: "74", width: "40", height: "8", rx: "4", fill: "#c4bce3" }}></rect>
                <circle
                  {...{ cx: "122", cy: "66", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <path {...{ d: "M122 52l12 4v9c0 8-5 13-12 16-7-3-12-8-12-16v-9z", fill: "#fff" }}></path>
                <path
                  {...{
                    d: "M117 66l4 4 7-8",
                    fill: "none",
                    stroke: "#a599d3",
                    strokeWidth: "3.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
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
                {"Customers Trust You Before They Buy"}
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
                {"A professional design and clear payment options show you are a real, serious seller."}
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
                    y: "33",
                    width: "80",
                    height: "14",
                    rx: "7",
                    fill: "#f3f1fa",
                    stroke: "#d9d4ec",
                    strokeWidth: "1.5",
                  }}
                ></rect>
                <path
                  {...{
                    d: "M24 40h12M30 36l6 4-6 4",
                    fill: "none",
                    stroke: "#a599d3",
                    strokeWidth: "2.200",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <rect {...{ x: "44", y: "38", width: "38", height: "4", rx: "2", fill: "#c4bce3" }}></rect>
                <rect {...{ x: "14", y: "54", width: "78", height: "26", rx: "6", fill: "#e9e6f4" }}></rect>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <circle
                  {...{ cx: "124", cy: "70", r: "13", fill: "none", stroke: "#fff", strokeWidth: "3" }}
                ></circle>
                <path
                  {...{
                    d: "M124 62v8l6 4",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
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
                  "Customers see products and prices on their own, so you answer fewer questions. You can also share your store link with anyone."
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
                <rect {...{ x: "14", y: "32", width: "52", height: "26", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{ x: "74", y: "34", width: "22", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{ x: "74", y: "46", width: "16", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                ></rect>
                <g {...{ transform: "translate(8 58) scale(0.9)" }}>
                  <path
                    {...{
                      transform: "translate(0 0)",
                      d: "M12 5l1.600 3.400 3.700.5-2.700 2.600.7 3.700L12 13.400l-3.300 1.800.7-3.700L6.700 8.900l3.700-.5z",
                      fill: "#c4bce3",
                    }}
                  ></path>
                  <path
                    {...{
                      transform: "translate(17 0)",
                      d: "M12 5l1.600 3.400 3.700.5-2.700 2.600.7 3.700L12 13.400l-3.300 1.800.7-3.700L6.700 8.900l3.700-.5z",
                      fill: "#c4bce3",
                    }}
                  ></path>
                  <path
                    {...{
                      transform: "translate(34 0)",
                      d: "M12 5l1.600 3.400 3.700.5-2.700 2.600.7 3.700L12 13.400l-3.300 1.800.7-3.700L6.700 8.900l3.700-.5z",
                      fill: "#c4bce3",
                    }}
                  ></path>
                  <path
                    {...{
                      transform: "translate(51 0)",
                      d: "M12 5l1.600 3.400 3.700.5-2.700 2.600.7 3.700L12 13.400l-3.300 1.800.7-3.700L6.700 8.900l3.700-.5z",
                      fill: "#c4bce3",
                    }}
                  ></path>
                  <path
                    {...{
                      transform: "translate(68 0)",
                      d: "M12 5l1.600 3.400 3.700.5-2.700 2.600.7 3.700L12 13.400l-3.300 1.800.7-3.700L6.700 8.900l3.700-.5z",
                      fill: "#c4bce3",
                    }}
                  ></path>
                </g>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <path
                  {...{
                    d: "M124 82s-13-8-13-17a7 7 0 0 1 13-3.500A7 7 0 0 1 137 65c0 9-13 17-13 17z",
                    fill: "#fff",
                  }}
                ></path>
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
                {"Keep Your Customers' Trust"}
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
                  "A store that is broken, hard to understand or badly designed makes customers lose trust. A good store keeps it."
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
                <rect {...{ x: "14", y: "33", width: "38", height: "34", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect
                  {...{ x: "60", y: "36", width: "34", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                ></rect>
                <rect
                  {...{ x: "60", y: "48", width: "22", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                ></rect>
                <rect {...{ x: "60", y: "60", width: "34", height: "14", rx: "7", fill: "#a599d3" }}></rect>
                <rect {...{ x: "68", y: "65", width: "18", height: "4", rx: "2", fill: "#fff" }}></rect>
                <circle
                  {...{ cx: "124", cy: "70", r: "22", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                ></circle>
                <path
                  {...{
                    d: "M114 59h4l3 14h11l3-10h-16",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "3.200",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
                <circle {...{ cx: "123", cy: "80", r: "2.500", fill: "#fff" }}></circle>
                <circle {...{ cx: "132", cy: "80", r: "2.500", fill: "#fff" }}></circle>
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
                {"Turn Visitors into Buyers"}
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
                {"A clear, well-planned store shows your products and guides visitors to order."}
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
              {"Our E-Commerce Packages"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px", textWrap: "pretty" },
                className: "zl-body-copy",
              }}
            >
              {"Each package is made with the same care. Bigger packages add more features."}
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
                {"For small or new businesses that are just getting started with online selling"}
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
                  {"20 products added"}
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
                  {"Categories, search and filters"}
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
                  {"Size and color, stock tracking, reviews"}
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
                  {"Coupon codes and free delivery offers"}
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
                  {"Cash on delivery and manual payment"}
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
                  {"Delivery charge inside and outside Dhaka"}
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
                  {"Customer login, orders and order emails"}
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
                  {"Admin panel, reports and bulk upload"}
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
                  {"WhatsApp chat button and basic SEO"}
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
                  {"Website in either English or Bangla"}
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
                  {"Delivery: 25 to 30 days"}
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
                {"For growing businesses that need a stronger online store"}
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
                  {"Everything else in Starter"}
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
                  {"Up to 11 pages"}
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
                  {"50 products added"}
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
                  {"Automatic online payment"}
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
                  {"Delivery charge for every district"}
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
                  {"Courier booking"}
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
                  {"Order tracking page for customers"}
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
                  {"Staff accounts"}
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
                  {"PDF invoices and newsletter sign-up"}
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
                  {"Wishlist and compare"}
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
                  {"Related and recently viewed products"}
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
                  {"Customer data and order export"}
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
                  {"Website in either English or Bangla"}
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
                  {"Delivery: 40 to 45 days"}
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
                {"For established businesses that need a bigger, complete online store"}
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
                  {"Everything else in Standard"}
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
                  {"Up to 14 pages"}
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
                  {"100 products added"}
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
                  {"Coupon codes and discount rules"}
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
                  {"Bundle products and flash sales"}
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
                  {"Upsell, cross-sell and popup offers"}
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
                  {"SMS updates and cart reminders"}
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
                  {"Quick view and live search"}
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
                  {"Back-in-stock alerts"}
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
                  {"Customer reward points"}
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
                  {"Advanced reports"}
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
                  {"Facebook and TikTok tracking"}
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
                  {"Website in English and Bangla"}
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
                  {"Delivery: 50 to 60 days"}
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
                  {"70,000 "}
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
                {"Don't See a Package That Fits Your Store?"}
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
                        background: "#ece8f7",
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
                        background: "#ece8f7",
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
                        background: "#fdfbf8",
                        border: "1px solid #e6e1db",
                        borderRadius: "3.1cqw",
                        boxShadow: "0 1.5cqw 4cqw rgba(40,30,20,.12)",
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
                          borderBottom: "1px solid #ece7e1",
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
                            background: "#f1ede8",
                            marginLeft: "2.66cqw",
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "1.4cqw",
                            fontSize: "max(8px, 1.2cqw)",
                            color: "#6b6560",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"app.ronginfashion.com/inventory"}
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
                          borderBottom: "1px solid #ece7e1",
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
                              background: "#c2693f",
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
                              stroke: "#fff",
                              strokeWidth: "2.2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              "aria-hidden": "true",
                              style: { width: "1.9cqw", height: "1.9cqw" },
                            }}
                          >
                            <path {...{ d: "M8 4l-5 4 3 3 2-1v10h8V10l2 1 3-3-5-4a4 4 0 0 1-8 0z" }}></path>
                          </svg>
                        </span>
                        <span
                          {...{
                            style: {
                              fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                              fontSize: "max(9px,1.7cqw)",
                              fontWeight: "800",
                              color: "#1f1f29",
                              whiteSpace: "nowrap",
                            },
                          }}
                        >
                          {"Rongin Fashion"}
                        </span>
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#c2693f",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid #c2693f",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Inventory"}
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#6b6560",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid transparent",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Orders"}
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#6b6560",
                            padding: "1.2cqw 0",
                            borderBottom: "0.35cqw solid transparent",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        {"Suppliers"}
                      </span>
                      <span
                        {...{
                          style: {
                            fontSize: "max(7px,1.25cqw)",
                            fontWeight: "600",
                            color: "#6b6560",
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
                          gap: "2cqw",
                          padding: "2cqw 2.6cqw",
                          minHeight: "0",
                        },
                      }}
                    >
                      <div
                        {...{
                          style: { flex: "2.3", display: "flex", flexDirection: "column", minWidth: "0" },
                        }}
                      >
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "0.8cqw",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                fontSize: "max(9px,1.75cqw)",
                                fontWeight: "800",
                                color: "#1f1f29",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"Stock by size"}
                          </span>
                          <span {...{ style: { display: "flex", gap: "1.2cqw", paddingRight: "0" } }}>
                            <span
                              {...{
                                style: {
                                  width: "4.4cqw",
                                  textAlign: "center",
                                  fontSize: "max(6.5px,1cqw)",
                                  fontWeight: "600",
                                  color: "#8a8580",
                                  flex: "none",
                                },
                              }}
                            >
                              {"S"}
                            </span>
                            <span
                              {...{
                                style: {
                                  width: "4.4cqw",
                                  textAlign: "center",
                                  fontSize: "max(6.5px,1cqw)",
                                  fontWeight: "600",
                                  color: "#8a8580",
                                  flex: "none",
                                },
                              }}
                            >
                              {"M"}
                            </span>
                            <span
                              {...{
                                style: {
                                  width: "4.4cqw",
                                  textAlign: "center",
                                  fontSize: "max(6.5px,1cqw)",
                                  fontWeight: "600",
                                  color: "#8a8580",
                                  flex: "none",
                                },
                              }}
                            >
                              {"L"}
                            </span>
                            <span
                              {...{
                                style: {
                                  width: "4.4cqw",
                                  textAlign: "center",
                                  fontSize: "max(6.5px,1cqw)",
                                  fontWeight: "600",
                                  color: "#8a8580",
                                  flex: "none",
                                },
                              }}
                            >
                              {"XL"}
                            </span>
                          </span>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "1.2cqw",
                              padding: "1.25cqw 0",
                              borderTop: "1px solid #f0ece7",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "3.6cqw",
                                height: "3.6cqw",
                                borderRadius: "0.9cqw",
                                background: "#8a9a5b",
                                flex: "none",
                              },
                            }}
                          ></span>
                          <span
                            {...{
                              style: { display: "flex", flexDirection: "column", flex: "1", minWidth: "0" },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(7px,1.2cqw)",
                                  fontWeight: "600",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Linen Shirt"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6px,0.95cqw)",
                                  color: "#8a8580",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"LS-101"}
                            </span>
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"14"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"22"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"18"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"9"}
                          </span>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "1.2cqw",
                              padding: "1.25cqw 0",
                              borderTop: "1px solid #f0ece7",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "3.6cqw",
                                height: "3.6cqw",
                                borderRadius: "0.9cqw",
                                background: "#5b6b7a",
                                flex: "none",
                              },
                            }}
                          ></span>
                          <span
                            {...{
                              style: { display: "flex", flexDirection: "column", flex: "1", minWidth: "0" },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(7px,1.2cqw)",
                                  fontWeight: "600",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Denim Jacket"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6px,0.95cqw)",
                                  color: "#8a8580",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"DJ-204"}
                            </span>
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"6"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#b4541f",
                                background: "#fde9d8",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"2"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"11"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"7"}
                          </span>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "1.2cqw",
                              padding: "1.25cqw 0",
                              borderTop: "1px solid #f0ece7",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "3.6cqw",
                                height: "3.6cqw",
                                borderRadius: "0.9cqw",
                                background: "#d9c3a5",
                                flex: "none",
                              },
                            }}
                          ></span>
                          <span
                            {...{
                              style: { display: "flex", flexDirection: "column", flex: "1", minWidth: "0" },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(7px,1.2cqw)",
                                  fontWeight: "600",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Cotton Kurta"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6px,0.95cqw)",
                                  color: "#8a8580",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"CK-318"}
                            </span>
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"20"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"25"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"16"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"12"}
                          </span>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "1.2cqw",
                              padding: "1.25cqw 0",
                              borderTop: "1px solid #f0ece7",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "3.6cqw",
                                height: "3.6cqw",
                                borderRadius: "0.9cqw",
                                background: "#b9633f",
                                flex: "none",
                              },
                            }}
                          ></span>
                          <span
                            {...{
                              style: { display: "flex", flexDirection: "column", flex: "1", minWidth: "0" },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(7px,1.2cqw)",
                                  fontWeight: "600",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Summer Dress"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6px,0.95cqw)",
                                  color: "#8a8580",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"SD-412"}
                            </span>
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"8"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#9a9aa5",
                                background: "#f1ede8",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"0"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"5"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"3"}
                          </span>
                        </div>
                        <div
                          {...{
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "1.2cqw",
                              padding: "1.25cqw 0",
                              borderTop: "1px solid #f0ece7",
                            },
                          }}
                        >
                          <span
                            {...{
                              style: {
                                width: "3.6cqw",
                                height: "3.6cqw",
                                borderRadius: "0.9cqw",
                                background: "#3b3b45",
                                flex: "none",
                              },
                            }}
                          ></span>
                          <span
                            {...{
                              style: { display: "flex", flexDirection: "column", flex: "1", minWidth: "0" },
                            }}
                          >
                            <span
                              {...{
                                style: {
                                  fontSize: "max(7px,1.2cqw)",
                                  fontWeight: "600",
                                  color: "#1f1f29",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"Printed Tee"}
                            </span>
                            <span
                              {...{
                                style: {
                                  fontSize: "max(6px,0.95cqw)",
                                  color: "#8a8580",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            >
                              {"PT-066"}
                            </span>
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"18"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"24"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"20"}
                          </span>
                          <span
                            {...{
                              style: {
                                width: "4.4cqw",
                                textAlign: "center",
                                fontSize: "max(7px,1.2cqw)",
                                fontWeight: "700",
                                color: "#1f1f29",
                                background: "transparent",
                                borderRadius: "0.8cqw",
                                padding: "0.35cqw 0",
                                flex: "none",
                              },
                            }}
                          >
                            {"15"}
                          </span>
                        </div>
                      </div>
                      <div
                        {...{
                          style: {
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.4cqw",
                            minWidth: "0",
                          },
                        }}
                      >
                        <div
                          {...{
                            style: {
                              border: "1px solid #ece7e1",
                              borderRadius: "1.4cqw",
                              padding: "1.3cqw 1.5cqw",
                              background: "#ffffff",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.6cqw",
                            },
                          }}
                        >
                          <span {...{ style: { fontSize: "max(6.5px,1cqw)", color: "#8a8580" } }}>
                            {"Stock value"}
                          </span>
                          <span
                            {...{
                              style: {
                                fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
                                fontSize: "max(10px,2.3cqw)",
                                fontWeight: "800",
                                color: "#1f1f29",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            {"Tk 8.4 lakh"}
                          </span>
                          <svg
                            {...{
                              viewBox: "0 0 60 22",
                              preserveAspectRatio: "none",
                              "aria-hidden": "true",
                              style: { width: "100%", height: "5cqw" },
                            }}
                          >
                            <g {...{ fill: "#ecd9cc" }}>
                              <rect {...{ x: "1", y: "12", width: "7", height: "10", rx: "1.5" }}></rect>
                              <rect {...{ x: "11", y: "8", width: "7", height: "14", rx: "1.5" }}></rect>
                              <rect {...{ x: "21", y: "10", width: "7", height: "12", rx: "1.5" }}></rect>
                              <rect {...{ x: "31", y: "5", width: "7", height: "17", rx: "1.5" }}></rect>
                              <rect {...{ x: "41", y: "7", width: "7", height: "15", rx: "1.5" }}></rect>
                            </g>
                            <rect
                              {...{ x: "51", y: "1", width: "7", height: "21", rx: "1.5", fill: "#c2693f" }}
                            ></rect>
                          </svg>
                        </div>
                        <div
                          {...{
                            style: {
                              border: "1px solid #ece7e1",
                              borderRadius: "1.4cqw",
                              padding: "1.3cqw 1.5cqw",
                              background: "#ffffff",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.8cqw",
                            },
                          }}
                        >
                          <span {...{ style: { fontSize: "max(6.5px,1cqw)", color: "#8a8580" } }}>
                            {"Reorder soon"}
                          </span>
                          <span
                            {...{
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "max(7px,1.1cqw)",
                                color: "#1f1f29",
                                fontWeight: "600",
                              },
                            }}
                          >
                            <span>{"Denim Jacket"}</span>
                            <span {...{ style: { color: "#b4541f" } }}>{"2"}</span>
                          </span>
                          <span
                            {...{
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "max(7px,1.1cqw)",
                                color: "#1f1f29",
                                fontWeight: "600",
                              },
                            }}
                          >
                            <span>{"Summer Dress"}</span>
                            <span {...{ style: { color: "#9a9aa5" } }}>{"0"}</span>
                          </span>
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
                        width: "40cqw",
                        boxSizing: "border-box",
                        background: "#ffffff",
                        border: "1px solid #e6e1db",
                        borderRadius: "2.4cqw",
                        boxShadow: "0 1.2cqw 3.2cqw rgba(40,30,20,.14)",
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
                          background: "#f6e6dc",
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
                          stroke: "#c2693f",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.8cqw", height: "2.8cqw" },
                        }}
                      >
                        <path {...{ d: "M4 6v12M8 6v12M12 6v12M17 6v12M20 6v12" }}></path>
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
                        {"Stock received"}
                      </span>
                      <span
                        {...{
                          style: { fontSize: "max(8px, 1.2cqw)", color: "#6b6560", whiteSpace: "nowrap" },
                        }}
                      >
                        {"Linen Shirt · +24 pcs"}
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
                        border: "1px solid #f2d3b8",
                        borderRadius: "1.8cqw",
                        boxShadow: "0 1cqw 2.6cqw rgba(40,30,20,.12)",
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
                          background: "#e08a3c",
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
                          strokeWidth: "2.6",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          "aria-hidden": "true",
                          style: { width: "2.4cqw", height: "2.4cqw" },
                        }}
                      >
                        <path {...{ d: "M12 7v6M12 17h.01" }}></path>
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
                        {"Low stock alert"}
                      </span>
                      <span
                        {...{
                          style: { fontSize: "max(8px, 1.2cqw)", color: "#6b6560", whiteSpace: "nowrap" },
                        }}
                      >
                        {"Denim Jacket · M · 2 left"}
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
                  {"Are there any other costs?"}
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
                    "Our price covers building your store. Some things are paid to other companies, like payment gateway fees, courier charges, SMS credits and yearly renewals of paid plugins. You pay these directly, and we tell you about them before we start."
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
                  {"How do I pay you?"}
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
                    "You pay 50% to start the project and 50% before we hand over your store. You can pay by bKash, Nagad or bank, whichever you prefer."
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
                  {"How will my customers pay?"}
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
                    "In every package, customers can choose cash on delivery. In Starter, they can also send money by bKash, Nagad or bank transfer, and give the payment details when they order. In Standard and Advance, they can also pay inside your store, and the order confirms by itself. For this you need a merchant account, which is a payment account from bKash, Nagad or a bank. When it is ready, we connect it to your store."
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
                  {"How do I send orders to my customers?"}
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
                    "You set your delivery charge in your store. In Starter, you set one charge for inside Dhaka and one for outside Dhaka, and you book the courier yourself. In Standard and Advance, you can set a charge for every district, and you can book Pathao or Steadfast directly from your store."
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
                  {"Who adds my products?"}
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
                    "We add the first products for you: 20 in Starter, 50 in Standard and 100 in Advance. After that, you can add more yourself. If you want us to add them, our Content Update Plans cover it."
                  }
                </p>
                <Link
                  {...{
                    className: "zl-qa-link",
                    href: "/content-update-plans",
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
                  {"See Content Update Plans\n"}
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
                  {"Can I manage my store myself?"}
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
                    "Yes. In your admin panel you can add and edit products, change prices, see orders and update their status. Design changes and new pages are done by us at their own price, so your store does not break. For regular help with products and content, you can choose our Website Care Plans."
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
                  {"How long does it take to make my store?"}
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
                  {"Can I start small and upgrade later?"}
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
                    "Yes. You can start with Starter and move to a bigger package when your store grows. You pay only the difference in price, and we add the new features to your store."
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
                {"Ready to Open Your Online Store?"}
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
                    {"yourstore.com"}
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
                  <path {...{ d: "M0 0h72v20a36 36 0 0 1-72 0z", fill: "#200093" }}></path>
                  <path {...{ d: "M72 0h72v20a36 36 0 0 1-72 0z", fill: "#c4bce3" }}></path>
                  <path {...{ d: "M144 0h72v20a36 36 0 0 1-72 0z", fill: "#200093" }}></path>
                  <path {...{ d: "M216 0h72v20a36 36 0 0 1-72 0z", fill: "#c4bce3" }}></path>
                  <path {...{ d: "M288 0h72v20a36 36 0 0 1-72 0z", fill: "#200093" }}></path>
                </svg>
                <div {...{ style: { display: "flex", gap: "2.9167cqw", padding: "2.5cqw 3.75cqw 0" } }}>
                  <div {...{ style: { flex: "1", display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <div
                      {...{
                        style: {
                          height: "17.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#eeeef1",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <img
                        {...{
                          src: "/images/t-shirt.jpg",
                          alt: "T-Shirt",
                          style: {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transform: "scale(1.2)",
                          },
                          loading: "lazy",
                          decoding: "async",
                        }}
                      />
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
                      {"T-Shirt"}
                    </span>
                  </div>
                  <div {...{ style: { flex: "1", display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <div
                      {...{
                        style: {
                          height: "17.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#eeeef1",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <img
                        {...{
                          src: "/images/bag.jpg",
                          alt: "Bag",
                          style: {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transform: "scale(1.2)",
                          },
                          loading: "lazy",
                          decoding: "async",
                        }}
                      />
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
                      {"Bag"}
                    </span>
                  </div>
                  <div {...{ style: { flex: "1", display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <div
                      {...{
                        style: {
                          height: "17.0833cqw",
                          borderRadius: "2.5cqw",
                          background: "#eeeef1",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        },
                      }}
                    >
                      <img
                        {...{
                          src: "/images/headphones.jpg",
                          alt: "Headphones",
                          style: {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            transform: "scale(1.2)",
                          },
                          loading: "lazy",
                          decoding: "async",
                        }}
                      />
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
                      {"Headphones"}
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
                  {"Order received"}
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
