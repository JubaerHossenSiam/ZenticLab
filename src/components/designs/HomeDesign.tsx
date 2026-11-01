import Link from "next/link";
export default function HomeDesign() {
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
                  fontSize: "56px",
                  lineHeight: "1.2",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                  color: "var(--Dark-Purple, #0a003d)",
                  textWrap: "balance",
                },
              }}
            >
              {"Get an E-Commerce Website That Helps You "}
              <span {...{ style: { color: "var(--Violet, #7132ff)" } }}>{"Sell More"}</span>
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
                "Right now, only people who come to your shop can buy from you. With a website, customers from anywhere in Bangladesh can order at any time."
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
                  href: "#services",
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
              {"Worried About Choosing the Right Website Company?"}
            </h2>
            <p
              {...{
                style: {
                  fontSize: "19px",
                  lineHeight: "1.55",
                  margin: "20px auto 0",
                  maxWidth: "520px",
                  textWrap: "pretty",
                },
                className: "zl-body-copy",
              }}
            >
              {"It is normal to worry. Here are the questions we hear most, and how we handle them."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
                gap: "24px",
                marginTop: "56px",
              },
              className: "zl-content-grid zl-section-content",
            }}
          >
            <div {...{ className: "zl-qa", style: { minHeight: "310px" } }}>
              <input
                {...{
                  type: "checkbox",
                  id: "qa1",
                  className: "zl-qa-t",
                  "aria-label": "How do I know my website will be good?",
                }}
              />
              <div
                {...{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "36px 24px",
                    height: "100%",
                    boxSizing: "border-box",
                  },
                  className: "zl-illustrated-card zl-qa-front",
                }}
              >
                <svg
                  {...{
                    className: "zl-qa-ill zl-card-illustration",
                    width: "160",
                    height: "110",
                    viewBox: "0 0 160 110",
                    fill: "none",
                    "aria-hidden": "true",
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
                  <rect {...{ x: "14", y: "35", width: "50", height: "28", rx: "6", fill: "#e9e6f4" }}></rect>
                  <rect {...{ x: "72", y: "35", width: "26", height: "8", rx: "3", fill: "#d9d4ec" }}></rect>
                  <rect {...{ x: "72", y: "48", width: "18", height: "8", rx: "3", fill: "#d9d4ec" }}></rect>
                  <rect
                    {...{ x: "14", y: "70", width: "28", height: "9", rx: "4.500", fill: "#c4bce3" }}
                  ></rect>
                  <path
                    {...{
                      d: "M102 84l-8 24 12-5 6 9 6-26z",
                      fill: "#c4bce3",
                      stroke: "#fff",
                      strokeWidth: "3",
                      strokeLinejoin: "round",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M126 84l8 24-12-5-6 9-6-26z",
                      fill: "#c4bce3",
                      stroke: "#fff",
                      strokeWidth: "3",
                      strokeLinejoin: "round",
                    }}
                  ></path>
                  <polygon
                    {...{
                      points:
                        "140.0,66.0 135.3,71.7 136.5,79.0 129.6,81.6 127.0,88.5 119.7,87.3 114.0,92.0 108.3,87.3 101.0,88.5 98.4,81.6 91.5,79.0 92.7,71.7 88.0,66.0 92.7,60.3 91.5,53.0 98.4,50.4 101.0,43.5 108.3,44.7 114.0,40.0 119.7,44.7 127.0,43.5 129.6,50.4 136.5,53.0 135.3,60.3",
                      fill: "#a599d3",
                      stroke: "#fff",
                      strokeWidth: "3.500",
                      strokeLinejoin: "round",
                    }}
                  ></polygon>
                  <polygon
                    {...{
                      points:
                        "114.0,54.0 117.1,61.8 125.4,62.3 118.9,67.6 121.1,75.7 114.0,71.2 106.9,75.7 109.1,67.6 102.6,62.3 110.9,61.8",
                      fill: "#fff",
                    }}
                  ></polygon>
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
                  {"How do I know my website will be good?"}
                </h3>
                <div {...{ style: { marginTop: "auto", paddingTop: "20px" }, className: "zl-qa-action" }}>
                  <label
                    {...{
                      htmlFor: "qa1",
                      className: "zl-qa-btn",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#200093",
                      },
                    }}
                  >
                    {"See the answer"}
                    <svg
                      {...{
                        width: "24",
                        height: "24",
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
                  </label>
                </div>
              </div>
              <div {...{ className: "zl-qa-back", style: { padding: "36px 24px" } }}>
                <label {...{ htmlFor: "qa1", className: "zl-qa-close", "aria-label": "Close answer" }}>
                  <svg
                    {...{
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#0a003d",
                      strokeWidth: "2.600",
                      strokeLinecap: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </label>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.55", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "We design and build every website ourselves, with 3+ years of real experience. We do not use copy-paste templates. You see and approve the design before we build anything."
                  }
                </p>
              </div>
            </div>
            <div {...{ className: "zl-qa", style: { minHeight: "310px" } }}>
              <input
                {...{
                  type: "checkbox",
                  id: "qa2",
                  className: "zl-qa-t",
                  "aria-label": "What if I pay and never get my website?",
                }}
              />
              <div
                {...{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "36px 24px",
                    height: "100%",
                    boxSizing: "border-box",
                  },
                  className: "zl-illustrated-card zl-qa-front",
                }}
              >
                <svg
                  {...{
                    className: "zl-qa-ill zl-card-illustration",
                    width: "160",
                    height: "110",
                    viewBox: "0 0 160 110",
                    fill: "none",
                    "aria-hidden": "true",
                  }}
                >
                  <circle
                    {...{ cx: "30", cy: "52", r: "26", fill: "#c4bce3", stroke: "#fff", strokeWidth: "4" }}
                  ></circle>
                  <g {...{ transform: "translate(30 52) scale(0.0720) translate(-231 -280)", fill: "#fff" }}>
                    <path
                      {...{
                        d: "M48 68 C 42 45, 80 28, 118 33 C 160 40, 178 70, 178 120 L178 420 C 178 450, 210 460, 245 440 C 300 410, 335 370, 342 335 C 300 335, 275 305, 275 270 C 275 235, 305 212, 345 214 C 400 218, 435 270, 428 330 C 418 410, 340 480, 270 510 C 215 534, 150 520, 128 470 L128 285 L128 130 C 128 100, 112 92, 82 105 Z M28 236H205L252 285H75Z",
                      }}
                    ></path>
                  </g>
                  <path
                    {...{ d: "M63 52h18", stroke: "#c4bce3", strokeWidth: "4", strokeLinecap: "round" }}
                  ></path>
                  <path
                    {...{
                      d: "M75 44l9 8-9 8",
                      stroke: "#c4bce3",
                      strokeWidth: "4",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  ></path>
                  <rect
                    {...{
                      x: "90",
                      y: "20",
                      width: "68",
                      height: "64",
                      rx: "9",
                      fill: "#fff",
                      stroke: "#d9d4ec",
                      strokeWidth: "2",
                    }}
                  ></rect>
                  <path {...{ d: "M91 29a8 8 0 0 1 8-8h50a8 8 0 0 1 8 8v6H91z", fill: "#e9e6f4" }}></path>
                  <circle {...{ cx: "99", cy: "28", r: "2.200", fill: "#c4bce3" }}></circle>
                  <circle {...{ cx: "106", cy: "28", r: "2.200", fill: "#c4bce3" }}></circle>
                  <circle {...{ cx: "113", cy: "28", r: "2.200", fill: "#c4bce3" }}></circle>
                  <circle
                    {...{
                      cx: "124",
                      cy: "59",
                      r: "12",
                      fill: "none",
                      stroke: "#c4bce3",
                      strokeWidth: "3.500",
                    }}
                  ></circle>
                  <path
                    {...{
                      d: "M115.500 67.500l17-17",
                      stroke: "#c4bce3",
                      strokeWidth: "3.500",
                      strokeLinecap: "round",
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
                  {"What if I pay and never get my website?"}
                </h3>
                <div {...{ style: { marginTop: "auto", paddingTop: "20px" }, className: "zl-qa-action" }}>
                  <label
                    {...{
                      htmlFor: "qa2",
                      className: "zl-qa-btn",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#200093",
                      },
                    }}
                  >
                    {"See the answer"}
                    <svg
                      {...{
                        width: "24",
                        height: "24",
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
                  </label>
                </div>
              </div>
              <div {...{ className: "zl-qa-back", style: { padding: "36px 24px" } }}>
                <label {...{ htmlFor: "qa2", className: "zl-qa-close", "aria-label": "Close answer" }}>
                  <svg
                    {...{
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#0a003d",
                      strokeWidth: "2.600",
                      strokeLinecap: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </label>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.55", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "The plan, price and deadline are written down before you pay anything. You pay half to start, and the other half only when your website is ready. We are a real team in Dhaka, and you can see our names and photos on the About Us page."
                  }
                </p>
              </div>
            </div>
            <div {...{ className: "zl-qa", style: { minHeight: "310px" } }}>
              <input
                {...{
                  type: "checkbox",
                  id: "qa3",
                  className: "zl-qa-t",
                  "aria-label": "Why is your price higher than many agencies?",
                }}
              />
              <div
                {...{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "36px 24px",
                    height: "100%",
                    boxSizing: "border-box",
                  },
                  className: "zl-illustrated-card zl-qa-front",
                }}
              >
                <svg
                  {...{
                    className: "zl-qa-ill zl-card-illustration",
                    width: "160",
                    height: "110",
                    viewBox: "0 0 160 110",
                    fill: "none",
                    "aria-hidden": "true",
                  }}
                >
                  <g {...{ transform: "translate(0 -4) scale(1.12)" }}>
                    <path
                      {...{
                        d: "M62 30v62M40 94h44",
                        stroke: "#d9d4ec",
                        strokeWidth: "6",
                        strokeLinecap: "round",
                      }}
                    ></path>
                    <path
                      {...{ d: "M18 36L106 36", stroke: "#a599d3", strokeWidth: "4", strokeLinecap: "round" }}
                    ></path>
                    <circle
                      {...{ cx: "62", cy: "30", r: "7", fill: "#a599d3", stroke: "#fff", strokeWidth: "3" }}
                    ></circle>
                    <path
                      {...{
                        d: "M18 36l-12 28h24zM106 36l-12 28h24z",
                        fill: "#e9e6f4",
                        stroke: "#c4bce3",
                        strokeWidth: "2.500",
                        strokeLinejoin: "round",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M2 64h32M90 64h32",
                        stroke: "#c4bce3",
                        strokeWidth: "4",
                        strokeLinecap: "round",
                      }}
                    ></path>
                    <g
                      {...{
                        transform: "translate(18 51.500) scale(0.0460) translate(-231 -280)",
                        fill: "#8f80c9",
                        stroke: "#8f80c9",
                        strokeWidth: "12",
                        strokeLinejoin: "round",
                      }}
                    >
                      <path
                        {...{
                          d: "M48 68 C 42 45, 80 28, 118 33 C 160 40, 178 70, 178 120 L178 420 C 178 450, 210 460, 245 440 C 300 410, 335 370, 342 335 C 300 335, 275 305, 275 270 C 275 235, 305 212, 345 214 C 400 218, 435 270, 428 330 C 418 410, 340 480, 270 510 C 215 534, 150 520, 128 470 L128 285 L128 130 C 128 100, 112 92, 82 105 Z M28 236H205L252 285H75Z",
                        }}
                      ></path>
                    </g>
                    <rect
                      {...{
                        x: "98",
                        y: "45",
                        width: "16",
                        height: "16.500",
                        rx: "3",
                        fill: "#fff",
                        stroke: "#8f80c9",
                        strokeWidth: "2.500",
                      }}
                    ></rect>
                    <path {...{ d: "M98 51h16", stroke: "#8f80c9", strokeWidth: "2.500" }}></path>
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
                  {"Why is your price higher than many agencies?"}
                </h3>
                <div {...{ style: { marginTop: "auto", paddingTop: "20px" }, className: "zl-qa-action" }}>
                  <label
                    {...{
                      htmlFor: "qa3",
                      className: "zl-qa-btn",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#200093",
                      },
                    }}
                  >
                    {"See the answer"}
                    <svg
                      {...{
                        width: "24",
                        height: "24",
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
                  </label>
                </div>
              </div>
              <div {...{ className: "zl-qa-back", style: { padding: "36px 24px" } }}>
                <label {...{ htmlFor: "qa3", className: "zl-qa-close", "aria-label": "Close answer" }}>
                  <svg
                    {...{
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#0a003d",
                      strokeWidth: "2.600",
                      strokeLinecap: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </label>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.55", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "Your price pays for a website made only for you: your logo, your design, your content and the full build, all made to fit your business and your customers. A cheap website is often a copy-paste template that does not fit your customers, and it can also be slow and easy to hack. You pay for quality that lasts."
                  }
                </p>
              </div>
            </div>
            <div {...{ className: "zl-qa", style: { minHeight: "310px" } }}>
              <input
                {...{
                  type: "checkbox",
                  id: "qa4",
                  className: "zl-qa-t",
                  "aria-label": "Will there be hidden costs later?",
                }}
              />
              <div
                {...{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "36px 24px",
                    height: "100%",
                    boxSizing: "border-box",
                  },
                  className: "zl-illustrated-card zl-qa-front",
                }}
              >
                <svg
                  {...{
                    className: "zl-qa-ill zl-card-illustration",
                    width: "160",
                    height: "110",
                    viewBox: "0 0 160 110",
                    fill: "none",
                    "aria-hidden": "true",
                  }}
                >
                  <path
                    {...{
                      d: "M4 6h82v90l-10.250-6.500-10.250 6.500-10.250-6.500-10.250 6.500-10.250-6.500-10.250 6.500L4 89.500z",
                      fill: "#fff",
                      stroke: "#d9d4ec",
                      strokeWidth: "2",
                      strokeLinejoin: "round",
                    }}
                  ></path>
                  <rect {...{ x: "16", y: "18", width: "34", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                  <rect {...{ x: "58", y: "18", width: "16", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                  <rect {...{ x: "16", y: "31", width: "26", height: "6", rx: "3", fill: "#e9e6f4" }}></rect>
                  <rect {...{ x: "58", y: "31", width: "16", height: "6", rx: "3", fill: "#d9d4ec" }}></rect>
                  <path
                    {...{ d: "M16 46h58", stroke: "#d9d4ec", strokeWidth: "2", strokeDasharray: "3 4" }}
                  ></path>
                  <rect
                    {...{
                      x: "12",
                      y: "53",
                      width: "66",
                      height: "13",
                      rx: "6.500",
                      fill: "#e9e6f4",
                      stroke: "#c4bce3",
                      strokeWidth: "2",
                      strokeDasharray: "4 3",
                    }}
                  ></rect>
                  <rect
                    {...{ x: "20", y: "57.500", width: "30", height: "4", rx: "2", fill: "#c4bce3" }}
                  ></rect>
                  <rect
                    {...{ x: "58", y: "57.500", width: "12", height: "4", rx: "2", fill: "#c4bce3" }}
                  ></rect>
                  <rect
                    {...{
                      x: "12",
                      y: "70",
                      width: "66",
                      height: "13",
                      rx: "6.500",
                      fill: "#e9e6f4",
                      stroke: "#c4bce3",
                      strokeWidth: "2",
                      strokeDasharray: "4 3",
                    }}
                  ></rect>
                  <rect
                    {...{ x: "20", y: "74.500", width: "24", height: "4", rx: "2", fill: "#c4bce3" }}
                  ></rect>
                  <rect
                    {...{ x: "58", y: "74.500", width: "12", height: "4", rx: "2", fill: "#c4bce3" }}
                  ></rect>
                  <circle
                    {...{ cx: "104", cy: "62", r: "20", fill: "#a599d3", stroke: "#fff", strokeWidth: "4" }}
                  ></circle>
                  <path
                    {...{
                      d: "M104 52v20M94 62h20",
                      stroke: "#fff",
                      strokeWidth: "4.500",
                      strokeLinecap: "round",
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
                  {"Will there be hidden costs later?"}
                </h3>
                <div {...{ style: { marginTop: "auto", paddingTop: "20px" }, className: "zl-qa-action" }}>
                  <label
                    {...{
                      htmlFor: "qa4",
                      className: "zl-qa-btn",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#200093",
                      },
                    }}
                  >
                    {"See the answer"}
                    <svg
                      {...{
                        width: "24",
                        height: "24",
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
                  </label>
                </div>
              </div>
              <div {...{ className: "zl-qa-back", style: { padding: "36px 24px" } }}>
                <label {...{ htmlFor: "qa4", className: "zl-qa-close", "aria-label": "Close answer" }}>
                  <svg
                    {...{
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#0a003d",
                      strokeWidth: "2.600",
                      strokeLinecap: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </label>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.55", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "No. The price in your written plan is the price you pay, and we never add extras to your bill. Domain and hosting are not included, and we tell you this before you start."
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
                </Link>
              </div>
            </div>
            <div {...{ className: "zl-qa", style: { minHeight: "310px" } }}>
              <input
                {...{
                  type: "checkbox",
                  id: "qa5",
                  className: "zl-qa-t",
                  "aria-label": "Will I have full access to my website?",
                }}
              />
              <div
                {...{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "36px 24px",
                    height: "100%",
                    boxSizing: "border-box",
                  },
                  className: "zl-illustrated-card zl-qa-front",
                }}
              >
                <svg
                  {...{
                    className: "zl-qa-ill zl-card-illustration",
                    width: "160",
                    height: "110",
                    viewBox: "0 0 160 110",
                    fill: "none",
                    "aria-hidden": "true",
                  }}
                >
                  <rect
                    {...{
                      x: "12",
                      y: "10",
                      width: "108",
                      height: "78",
                      rx: "10",
                      fill: "#fff",
                      stroke: "#d9d4ec",
                      strokeWidth: "2",
                    }}
                  ></rect>
                  <path {...{ d: "M13 20a9 9 0 0 1 9-9h90a9 9 0 0 1 9 9v6H13z", fill: "#e9e6f4" }}></path>
                  <circle {...{ cx: "23", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                  <circle {...{ cx: "32", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                  <circle {...{ cx: "41", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                  <rect {...{ x: "52", y: "14", width: "56", height: "9", rx: "4.5", fill: "#fff" }}></rect>
                  <rect {...{ x: "24", y: "36", width: "44", height: "24", rx: "6", fill: "#e9e6f4" }}></rect>
                  <rect {...{ x: "76", y: "36", width: "32", height: "8", rx: "3", fill: "#d9d4ec" }}></rect>
                  <rect {...{ x: "76", y: "50", width: "22", height: "8", rx: "3", fill: "#d9d4ec" }}></rect>
                  <g
                    {...{
                      stroke: "#fff",
                      strokeWidth: "12",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  >
                    <circle {...{ cx: "136", cy: "78", r: "13" }}></circle>
                    <path {...{ d: "M123 78H84" }}></path>
                    <path {...{ d: "M92 78v12M104 78v9" }}></path>
                  </g>
                  <g
                    {...{
                      stroke: "#c4bce3",
                      strokeWidth: "6",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  >
                    <circle {...{ cx: "136", cy: "78", r: "13" }}></circle>
                    <path {...{ d: "M123 78H84" }}></path>
                    <path {...{ d: "M92 78v12M104 78v9" }}></path>
                  </g>
                  <circle {...{ cx: "136", cy: "78", r: "4", fill: "#a599d3" }}></circle>
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
                  {"Will I have full access to my website?"}
                </h3>
                <div {...{ style: { marginTop: "auto", paddingTop: "20px" }, className: "zl-qa-action" }}>
                  <label
                    {...{
                      htmlFor: "qa5",
                      className: "zl-qa-btn",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#200093",
                      },
                    }}
                  >
                    {"See the answer"}
                    <svg
                      {...{
                        width: "24",
                        height: "24",
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
                  </label>
                </div>
              </div>
              <div {...{ className: "zl-qa-back", style: { padding: "36px 24px" } }}>
                <label {...{ htmlFor: "qa5", className: "zl-qa-close", "aria-label": "Close answer" }}>
                  <svg
                    {...{
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#0a003d",
                      strokeWidth: "2.600",
                      strokeLinecap: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </label>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.55", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "Yes. Your domain and hosting are in your own name, so you have full control. If you ever leave us, your website goes with you."
                  }
                </p>
              </div>
            </div>
            <div {...{ className: "zl-qa", style: { minHeight: "310px" } }}>
              <input
                {...{
                  type: "checkbox",
                  id: "qa6",
                  className: "zl-qa-t",
                  "aria-label": "Can I update my website myself?",
                }}
              />
              <div
                {...{
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "36px 24px",
                    height: "100%",
                    boxSizing: "border-box",
                  },
                  className: "zl-illustrated-card zl-qa-front",
                }}
              >
                <svg
                  {...{
                    className: "zl-qa-ill zl-card-illustration",
                    width: "160",
                    height: "110",
                    viewBox: "0 0 160 110",
                    fill: "none",
                    "aria-hidden": "true",
                  }}
                >
                  <rect
                    {...{
                      x: "12",
                      y: "10",
                      width: "112",
                      height: "82",
                      rx: "10",
                      fill: "#fff",
                      stroke: "#d9d4ec",
                      strokeWidth: "2",
                    }}
                  ></rect>
                  <path {...{ d: "M13 20a9 9 0 0 1 9-9h94a9 9 0 0 1 9 9v6H13z", fill: "#e9e6f4" }}></path>
                  <circle {...{ cx: "23", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                  <circle {...{ cx: "32", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                  <circle {...{ cx: "41", cy: "19", r: "2.5", fill: "#c4bce3" }}></circle>
                  <rect {...{ x: "24", y: "36", width: "42", height: "42", rx: "6", fill: "#e9e6f4" }}></rect>
                  <rect
                    {...{ x: "76", y: "36", width: "40", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                  ></rect>
                  <rect
                    {...{
                      x: "76",
                      y: "49",
                      width: "40",
                      height: "9",
                      rx: "3",
                      fill: "#c4bce3",
                      fillOpacity: ".22",
                    }}
                  ></rect>
                  <rect
                    {...{ x: "76", y: "51.500", width: "30", height: "4", rx: "2", fill: "#c4bce3" }}
                  ></rect>
                  <rect
                    {...{ x: "76", y: "64", width: "26", height: "7", rx: "3.500", fill: "#d9d4ec" }}
                  ></rect>
                  <g {...{ transform: "translate(120 44) rotate(38)" }}>
                    <rect
                      {...{
                        x: "-7",
                        y: "0",
                        width: "14",
                        height: "46",
                        rx: "3",
                        fill: "#c4bce3",
                        stroke: "#fff",
                        strokeWidth: "3",
                      }}
                    ></rect>
                    <rect {...{ x: "-7", y: "0", width: "14", height: "9", rx: "3", fill: "#a599d3" }}></rect>
                    <path
                      {...{
                        d: "M-7 46h14l-7 14z",
                        fill: "#c4bce3",
                        stroke: "#fff",
                        strokeWidth: "3",
                        strokeLinejoin: "round",
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
                  {"Can I update my website myself?"}
                </h3>
                <div {...{ style: { marginTop: "auto", paddingTop: "20px" }, className: "zl-qa-action" }}>
                  <label
                    {...{
                      htmlFor: "qa6",
                      className: "zl-qa-btn",
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#200093",
                      },
                    }}
                  >
                    {"See the answer"}
                    <svg
                      {...{
                        width: "24",
                        height: "24",
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
                  </label>
                </div>
              </div>
              <div {...{ className: "zl-qa-back", style: { padding: "36px 24px" } }}>
                <label {...{ htmlFor: "qa6", className: "zl-qa-close", "aria-label": "Close answer" }}>
                  <svg
                    {...{
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#0a003d",
                      strokeWidth: "2.600",
                      strokeLinecap: "round",
                      "aria-hidden": "true",
                    }}
                  >
                    <path {...{ d: "M6 6l12 12M18 6L6 18" }}></path>
                  </svg>
                </label>
                <p
                  {...{
                    style: { fontSize: "17px", lineHeight: "1.55", color: "#0a003d" },
                    className: "zl-body-copy",
                  }}
                >
                  {
                    "It depends on the website you choose. With an E-Commerce Website, you can manage products and orders yourself. With a Business Website, you can update your content, like text and images. For bigger changes, we do it for you with our Content Update Plans."
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        {...{
          id: "services",
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
                    href: "/services?tab=ecommerce",
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
                    href: "/services?tab=business",
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
              {"Our Work Process"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px" },
                className: "zl-body-copy",
              }}
            >
              {"Three simple steps, from your first message to website launch."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
                gap: "32px",
                marginTop: "64px",
              },
              className: "zl-content-grid zl-section-content",
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
                {"Listen & Plan"}
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
                  "We understand your business and your problem first. Then we give you a proper plan with the price and the time it will take to build your website."
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
                {"Design & Build"}
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
                  "We design your website and show you the design for review. After you approve it, we build your website so it is ready for launch."
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
                {"Launch & Support"}
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
                  "Once you confirm that everything is good, we launch your website and hand it over to you. You get 7 days of free support if something breaks."
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
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              {"Why Choose Us"}
            </h2>
            <p
              {...{
                style: { fontSize: "18px", lineHeight: "1.55", marginTop: "16px" },
                className: "zl-body-copy",
              }}
            >
              {"Three reasons you can trust us to build your website."}
            </p>
          </div>
          <div
            {...{
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                marginTop: "64px",
              },
              className: "zl-content-grid zl-section-content",
            }}
          >
            <div
              {...{
                className: "zl-why zl-illustrated-card",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "8px 40px",
                },
              }}
            >
              <svg
                {...{
                  className: "zl-why-icon zl-card-illustration",
                  width: "160",
                  height: "120",
                  viewBox: "0 0 160 120",
                  fill: "none",
                  "aria-hidden": "true",
                }}
              >
                <rect
                  {...{
                    x: "20",
                    y: "14",
                    width: "120",
                    height: "98",
                    rx: "14",
                    fill: "#ffffff",
                    stroke: "#d2cce9",
                    strokeWidth: "2",
                  }}
                ></rect>
                <path
                  {...{ d: "M21 40V28a13 13 0 0 1 13-13h92a13 13 0 0 1 13 13v12z", fill: "#200093" }}
                ></path>
                <rect {...{ x: "49", y: "8", width: "7", height: "15", rx: "3.5", fill: "#200093" }}></rect>
                <rect {...{ x: "104", y: "8", width: "7", height: "15", rx: "3.5", fill: "#200093" }}></rect>
                <rect {...{ x: "32", y: "52", width: "20", height: "14", rx: "4", fill: "#200093" }}></rect>
                <path
                  {...{
                    d: "M38 59.5l3 3 5-6",
                    stroke: "#fff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                ></path>
                <rect {...{ x: "58", y: "52", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "84", y: "52", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "110", y: "52", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "32", y: "72", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "58", y: "72", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "84", y: "72", width: "20", height: "14", rx: "4", fill: "#200093" }}></rect>
                <path
                  {...{
                    d: "M90 79.5l3 3 5-6",
                    stroke: "#fff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                ></path>
                <rect {...{ x: "110", y: "72", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "32", y: "92", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "58", y: "92", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "84", y: "92", width: "20", height: "14", rx: "4", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "110", y: "92", width: "20", height: "14", rx: "4", fill: "#200093" }}></rect>
                <path
                  {...{
                    d: "M116 99.5l3 3 5-6",
                    stroke: "#fff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                ></path>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "24px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Focus on Few"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                    maxWidth: "320px",
                  },
                }}
              >
                {
                  "We are not a factory. We take limited projects every month, so your website gets the time and care it needs."
                }
              </p>
            </div>
            <div
              {...{
                className: "zl-why zl-illustrated-card zl-divided-card",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "8px 40px",
                  borderLeft: "1px solid #e4dbfb",
                },
              }}
            >
              <svg
                {...{
                  className: "zl-why-icon zl-card-illustration",
                  width: "160",
                  height: "120",
                  viewBox: "0 0 160 120",
                  fill: "none",
                  "aria-hidden": "true",
                }}
              >
                <rect
                  {...{
                    x: "12",
                    y: "12",
                    width: "112",
                    height: "84",
                    rx: "10",
                    fill: "#ffffff",
                    stroke: "#d2cce9",
                    strokeWidth: "2",
                  }}
                ></rect>
                <path {...{ d: "M13 22a9 9 0 0 1 9-9h92a9 9 0 0 1 9 9v6H13z", fill: "#e9e6f4" }}></path>
                <circle {...{ cx: "24", cy: "21", r: "2.5", fill: "#bcb2de" }}></circle>
                <circle {...{ cx: "33", cy: "21", r: "2.5", fill: "#bcb2de" }}></circle>
                <circle {...{ cx: "42", cy: "21", r: "2.5", fill: "#bcb2de" }}></circle>
                <rect {...{ x: "24", y: "38", width: "52", height: "26", rx: "6", fill: "#e9e6f4" }}></rect>
                <rect {...{ x: "84", y: "38", width: "28", height: "9", rx: "3", fill: "#d2cce9" }}></rect>
                <rect {...{ x: "84", y: "52", width: "20", height: "9", rx: "3", fill: "#d2cce9" }}></rect>
                <rect {...{ x: "24", y: "72", width: "26", height: "10", rx: "5", fill: "#200093" }}></rect>
                <rect {...{ x: "56", y: "75", width: "40", height: "4", rx: "2", fill: "#d2cce9" }}></rect>
                <path {...{ d: "M104 98l-6 20 12-6 10 8 4-20z", fill: "#200093" }}></path>
                <circle
                  {...{ cx: "118", cy: "84", r: "26", fill: "#200093", stroke: "#ffffff", strokeWidth: "4" }}
                ></circle>
                <circle
                  {...{
                    cx: "118",
                    cy: "84",
                    r: "18",
                    stroke: "#ffffff",
                    strokeOpacity: ".5",
                    strokeWidth: "2",
                  }}
                ></circle>
                <path
                  {...{
                    d: "M108.500 84.500l7 7 12.500-14.500",
                    stroke: "#fff",
                    strokeWidth: "4.500",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "24px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"Expert Skills & Quality"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                    maxWidth: "320px",
                  },
                }}
              >
                {
                  "We have 3+ years of real experience in building websites. We make customized websites that your business really needs."
                }
              </p>
            </div>
            <div
              {...{
                className: "zl-why zl-illustrated-card zl-divided-card",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "8px 40px",
                  borderLeft: "1px solid #e4dbfb",
                },
              }}
            >
              <svg
                {...{
                  className: "zl-why-icon zl-card-illustration",
                  width: "160",
                  height: "120",
                  viewBox: "0 0 160 120",
                  fill: "none",
                  "aria-hidden": "true",
                }}
              >
                <path
                  {...{
                    d: "M4 50h16M0 64h14M6 78h14",
                    stroke: "#bcb2de",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <circle {...{ cx: "74", cy: "62", r: "46", fill: "#e9e6f4" }}></circle>
                <circle
                  {...{ cx: "70", cy: "62", r: "42", fill: "#ffffff", stroke: "#200093", strokeWidth: "4" }}
                ></circle>
                <path
                  {...{
                    d: "M70.0 31.0L70.0 24.0",
                    stroke: "#200093",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M86.5 33.4L89.0 29.1",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M98.6 45.5L102.9 43.0",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M101.0 62.0L108.0 62.0",
                    stroke: "#200093",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M98.6 78.5L102.9 81.0",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M86.5 90.6L89.0 94.9",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M70.0 93.0L70.0 100.0",
                    stroke: "#200093",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M53.5 90.6L51.0 94.9",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M41.4 78.5L37.1 81.0",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M39.0 62.0L32.0 62.0",
                    stroke: "#200093",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M41.4 45.5L37.1 43.0",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{
                    d: "M53.5 33.4L51.0 29.1",
                    stroke: "#200093",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }}
                ></path>
                <path
                  {...{ d: "M70 62V40", stroke: "#200093", strokeWidth: "4", strokeLinecap: "round" }}
                ></path>
                <path
                  {...{ d: "M70 62l14 9", stroke: "#200093", strokeWidth: "4", strokeLinecap: "round" }}
                ></path>
                <circle {...{ cx: "70", cy: "62", r: "5", fill: "#200093" }}></circle>
                <circle
                  {...{ cx: "116", cy: "30", r: "20", fill: "#1a7f52", stroke: "#ffffff", strokeWidth: "4" }}
                ></circle>
                <path
                  {...{
                    d: "M107 30.5l6.5 6.5 11-13",
                    stroke: "#fff",
                    strokeWidth: "4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                ></path>
              </svg>
              <h3
                {...{
                  style: {
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: "24px",
                    lineHeight: "1.4",
                    fontWeight: "800",
                    color: "var(--Dark-Purple, #0a003d)",
                    marginTop: "24px",
                    "--card-title-size": "22px",
                  },
                  className: "zl-illustration-title zl-card-title",
                }}
              >
                {"On-Time Delivery"}
              </h3>
              <p
                {...{
                  style: {
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: "#4a4565",
                    marginTop: "12px",
                    maxWidth: "320px",
                  },
                }}
              >
                {
                  "We respect your time. We deliver your website on or before the deadline we commit to, with no excuses."
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
                {"Ready to Sell to Customers All Over Bangladesh?"}
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
                {
                  "Every day without a website, customers who can't visit your shop buy from someone else. We can change that."
                }
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
                <g
                  {...{
                    stroke: "#ffffff",
                    strokeOpacity: "0.6",
                    strokeWidth: "2",
                    strokeDasharray: "2 7",
                    strokeLinecap: "round",
                  }}
                >
                  <path {...{ d: "M110 70 L152 112" }}></path>
                  <path {...{ d: "M330 70 L288 112" }}></path>
                  <path {...{ d: "M110 290 L152 248" }}></path>
                  <path {...{ d: "M330 290 L288 248" }}></path>
                </g>
              </svg>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "28.1818cqw",
                    top: "23.1818cqw",
                    width: "43.6364cqw",
                    height: "35.4545cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.6364cqw",
                    boxShadow: "0 4.0909cqw 10cqw rgba(10,0,61,.38)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  },
                }}
              >
                <div
                  {...{
                    style: {
                      height: "6.3636cqw",
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.1364cqw",
                      padding: "0 2.5cqw",
                      borderBottom: "0.2273cqw solid #ececef",
                      background: "#fafafb",
                    },
                  }}
                >
                  <span
                    {...{
                      style: {
                        width: "1.3636cqw",
                        height: "1.3636cqw",
                        borderRadius: "50%",
                        background: "#ff5f57",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.3636cqw",
                        height: "1.3636cqw",
                        borderRadius: "50%",
                        background: "#febc2e",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        width: "1.3636cqw",
                        height: "1.3636cqw",
                        borderRadius: "50%",
                        background: "#28c840",
                      },
                    }}
                  ></span>
                  <span
                    {...{
                      style: {
                        flex: "1",
                        height: "3.6364cqw",
                        borderRadius: "1.8182cqw",
                        background: "#ececef",
                        marginLeft: "1.3636cqw",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 1.8182cqw",
                        fontSize: "2.1591cqw",
                        fontWeight: "500",
                        color: "#5b5b66",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"yourshop.com"}
                  </span>
                </div>
                <div
                  {...{
                    style: {
                      padding: "2.7273cqw 2.7273cqw 0",
                      display: "flex",
                      gap: "2.7273cqw",
                      alignItems: "center",
                    },
                  }}
                >
                  <div
                    {...{
                      style: {
                        width: "16.3636cqw",
                        height: "16.3636cqw",
                        borderRadius: "2.2727cqw",
                        background: "#eeeef1",
                        flex: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
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
                  <div {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                    <span
                      {...{
                        style: {
                          fontSize: "2.9545cqw",
                          fontWeight: "600",
                          color: "#1f1f29",
                          lineHeight: "1.3",
                        },
                      }}
                    >
                      {"Bag"}
                    </span>
                    <span
                      {...{
                        style: {
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: "3.8636cqw",
                          fontWeight: "800",
                          color: "#1f1f29",
                          lineHeight: "1.3",
                        },
                      }}
                    >
                      {"Tk 1,200"}
                    </span>
                    <span
                      {...{
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "1.1364cqw",
                          fontSize: "2.5cqw",
                          fontWeight: "600",
                          color: "#1a7f52",
                          lineHeight: "1.4",
                        },
                      }}
                    >
                      <span
                        {...{
                          style: {
                            width: "1.3636cqw",
                            height: "1.3636cqw",
                            borderRadius: "50%",
                            background: "#1a7f52",
                          },
                        }}
                      ></span>
                      {"In stock"}
                    </span>
                  </div>
                </div>
                <div {...{ style: { padding: "2.2727cqw 2.7273cqw 0" } }}>
                  <span
                    {...{
                      style: {
                        height: "6.3636cqw",
                        borderRadius: "1.8182cqw",
                        background: "#26262e",
                        color: "#ffffff",
                        fontSize: "2.7273cqw",
                        fontWeight: "600",
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
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "0cqw",
                    top: "2.7273cqw",
                    width: "35.4545cqw",
                    height: "12.7273cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.6364cqw",
                    boxShadow: "0 2.7273cqw 6.3636cqw rgba(10,0,61,.30)",
                    padding: "0 4.5455cqw 0 2.2727cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "2.2727cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      width: "8.1818cqw",
                      height: "8.1818cqw",
                      borderRadius: "50%",
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
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "1.9",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { width: "4.5455cqw", height: "4.5455cqw" },
                    }}
                  >
                    <circle {...{ cx: "12", cy: "8", r: "4" }}></circle>
                    <path {...{ d: "M4.5 21a7.5 7.5 0 0 1 15 0" }}></path>
                  </svg>
                </span>
                <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                  <span
                    {...{
                      style: {
                        fontSize: "3.1818cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        lineHeight: "1.25",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Dhaka"}
                  </span>
                  <span
                    {...{
                      style: {
                        fontSize: "2.7273cqw",
                        fontWeight: "600",
                        color: "#1a7f52",
                        lineHeight: "1.3",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Order placed"}
                  </span>
                </span>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    right: "0cqw",
                    top: "2.7273cqw",
                    width: "35.4545cqw",
                    height: "12.7273cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.6364cqw",
                    boxShadow: "0 2.7273cqw 6.3636cqw rgba(10,0,61,.30)",
                    padding: "0 4.5455cqw 0 2.2727cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "2.2727cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      width: "8.1818cqw",
                      height: "8.1818cqw",
                      borderRadius: "50%",
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
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "1.9",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { width: "4.5455cqw", height: "4.5455cqw" },
                    }}
                  >
                    <circle {...{ cx: "12", cy: "8", r: "4" }}></circle>
                    <path {...{ d: "M4.5 21a7.5 7.5 0 0 1 15 0" }}></path>
                  </svg>
                </span>
                <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                  <span
                    {...{
                      style: {
                        fontSize: "3.1818cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        lineHeight: "1.25",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Chattogram"}
                  </span>
                  <span
                    {...{
                      style: {
                        fontSize: "2.7273cqw",
                        fontWeight: "600",
                        color: "#1a7f52",
                        lineHeight: "1.3",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Order placed"}
                  </span>
                </span>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    left: "0cqw",
                    top: "66.3636cqw",
                    width: "35.4545cqw",
                    height: "12.7273cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.6364cqw",
                    boxShadow: "0 2.7273cqw 6.3636cqw rgba(10,0,61,.30)",
                    padding: "0 4.5455cqw 0 2.2727cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "2.2727cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      width: "8.1818cqw",
                      height: "8.1818cqw",
                      borderRadius: "50%",
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
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "1.9",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { width: "4.5455cqw", height: "4.5455cqw" },
                    }}
                  >
                    <circle {...{ cx: "12", cy: "8", r: "4" }}></circle>
                    <path {...{ d: "M4.5 21a7.5 7.5 0 0 1 15 0" }}></path>
                  </svg>
                </span>
                <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                  <span
                    {...{
                      style: {
                        fontSize: "3.1818cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        lineHeight: "1.25",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Rajshahi"}
                  </span>
                  <span
                    {...{
                      style: {
                        fontSize: "2.7273cqw",
                        fontWeight: "600",
                        color: "#1a7f52",
                        lineHeight: "1.3",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Order placed"}
                  </span>
                </span>
              </div>
              <div
                {...{
                  style: {
                    position: "absolute",
                    right: "0cqw",
                    top: "66.3636cqw",
                    width: "35.4545cqw",
                    height: "12.7273cqw",
                    boxSizing: "border-box",
                    background: "#ffffff",
                    borderRadius: "3.6364cqw",
                    boxShadow: "0 2.7273cqw 6.3636cqw rgba(10,0,61,.30)",
                    padding: "0 4.5455cqw 0 2.2727cqw",
                    display: "flex",
                    alignItems: "center",
                    gap: "2.2727cqw",
                  },
                }}
              >
                <span
                  {...{
                    style: {
                      width: "8.1818cqw",
                      height: "8.1818cqw",
                      borderRadius: "50%",
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
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "#200093",
                      strokeWidth: "1.9",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      style: { width: "4.5455cqw", height: "4.5455cqw" },
                    }}
                  >
                    <circle {...{ cx: "12", cy: "8", r: "4" }}></circle>
                    <path {...{ d: "M4.5 21a7.5 7.5 0 0 1 15 0" }}></path>
                  </svg>
                </span>
                <span {...{ style: { display: "flex", flexDirection: "column", minWidth: "0" } }}>
                  <span
                    {...{
                      style: {
                        fontSize: "3.1818cqw",
                        fontWeight: "700",
                        color: "#1f1f29",
                        lineHeight: "1.25",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Sylhet"}
                  </span>
                  <span
                    {...{
                      style: {
                        fontSize: "2.7273cqw",
                        fontWeight: "600",
                        color: "#1a7f52",
                        lineHeight: "1.3",
                        whiteSpace: "nowrap",
                      },
                    }}
                  >
                    {"Order placed"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
