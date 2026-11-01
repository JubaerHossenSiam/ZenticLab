import Link from "next/link";
export default function Footer() {
  return (
    <footer
      {...{
        id: "contact",
        style: {
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #f3eeff 0%, #ebe2ff 55%, #e2d6ff 100%)",
          flex: "1",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div {...{ "aria-hidden": "true", style: { position: "absolute", inset: "0", pointerEvents: "none" } }}>
        <svg
          {...{
            viewBox: "0 0 1440 260",
            preserveAspectRatio: "none",
            fill: "none",
            style: { position: "absolute", left: "0", bottom: "0", width: "100%", height: "240px" },
          }}
        >
          <path
            {...{
              d: "M0 120C240 40 480 40 720 110S1200 190 1440 90V260H0Z",
              fill: "#7132ff",
              fillOpacity: ".06",
            }}
          ></path>
          <path
            {...{
              d: "M0 170C300 110 600 120 900 170S1300 220 1440 160V260H0Z",
              fill: "#7132ff",
              fillOpacity: ".07",
            }}
          ></path>
          <path
            {...{
              d: "M0 215C360 175 720 205 1080 225S1340 235 1440 215V260H0Z",
              fill: "#7132ff",
              fillOpacity: ".08",
            }}
          ></path>
        </svg>
        <div
          {...{
            style: {
              position: "absolute",
              left: "-160px",
              top: "40px",
              width: "520px",
              height: "520px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(113,50,255,.18) 0%, rgba(113,50,255,0) 70%)",
            },
          }}
        ></div>
        <div
          {...{
            style: {
              position: "absolute",
              right: "-180px",
              bottom: "-200px",
              width: "640px",
              height: "640px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(113,50,255,.22) 0%, rgba(113,50,255,0) 70%)",
            },
          }}
        ></div>
      </div>
      <div
        {...{
          style: {
            position: "relative",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "72px 40px 0",
            boxSizing: "border-box",
            flex: "1",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <div
          {...{
            style: { display: "grid", gridTemplateColumns: "1.5fr 1fr 1.3fr 1.5fr", gap: "40px" },
            className: "zl-footer-grid",
          }}
        >
          <div {...{ className: "zl-footer-brand" }}>
            <Link
              {...{
                href: "/",
                "aria-label": "Zentic Lab home",
                style: { display: "block", lineHeight: "0" },
              }}
            >
              <svg
                {...{
                  viewBox: "398 872 1205 276",
                  width: "240",
                  height: "55",
                  role: "img",
                  "aria-label": "Zentic Lab",
                  style: { display: "block" },
                }}
              >
                <g {...{ fill: "#7132ff" }}>
                  <path
                    {...{
                      d: "M812.04,993.26h98.18v25.79h-141.1v-25.79l89.13-76.04,7.31-5.58h-95.87v-25.8h138.6v25.8l-89.13,76.23-7.12,5.39Z",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M962.57,992.49v-26.76h95.48v-26.19h-95.48v-27.14h95.48v-26.56h-124.54v133.21h124.54v-26.57h-95.48Z",
                    }}
                  ></path>
                  <polygon
                    {...{
                      points:
                        "1198.04 885.84 1227.1 885.84 1227.1 1044.67 1106.79 930.31 1106.79 1019.05 1077.91 1019.05 1077.91 860.17 1198.04 974.59 1198.04 885.84",
                    }}
                  ></polygon>
                  <path
                    {...{ d: "M1245.82,885.84v27.71h51.77v105.5h29.64v-105.5h54.48v-27.71h-135.89Z" }}
                  ></path>
                  <path {...{ d: "M1400.69,1019.05v-133.21h29.45v133.21h-29.45Z" }}></path>
                  <path
                    {...{
                      d: "M1596.65,993.84h-73.99c-26.18,0-41.58-16.55-41.77-41.39v-.19c0-24.45,15.59-41.2,41.77-41.2h73.99v-26.95h-73.99c-44.47,0-71.03,26.95-71.03,68.15v.19c0,41.39,26.57,68.34,71.03,68.34h73.99v-26.95Z",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M726.97,879.61l-136.28,201.09h-50.41l117.89-165.44h-128.7c-41.77,0-75.63,33.86-75.63,75.63v44.07l-35.65,35.65v-85.17c0-58.45,47.38-105.83,105.83-105.83h202.96Z",
                    }}
                  ></path>
                </g>
                <g {...{ fill: "#200093" }}>
                  <path {...{ d: "M781.09,1128.82v-85.39h-11.98v96.39h103.53l8.36-11.01h-99.92Z" }}></path>
                  <path
                    {...{
                      d: "M1051.59,1139.82h-13.09l-18.39-24.38h-95.14l-18.39,24.38h-13.09l73.27-96.39h11.42l73.41,96.39ZM972.61,1053.19l-40.53,52.79h80.93l-40.39-52.79Z",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M1213.04,1113.92c0,17.69-12.26,25.91-34.96,25.91h-106.14v-96.39h100.85c23.12,0,34.96,7.8,34.96,24.79,0,12.81-6.69,19.64-19.78,22.01,15.88,1.53,25.07,8.36,25.07,23.68ZM1083.5,1052.91v33.15h89.15c15.88,0,23.54-5.02,23.54-16.58s-7.8-16.58-23.4-16.58h-89.29ZM1083.5,1130.35h94.58c15.74,0,23.4-5.29,23.4-17.55s-7.52-17.55-23.68-17.55h-94.3v35.1Z",
                    }}
                  ></path>
                  <path
                    {...{
                      d: "M403.35,1139.83l147.61-201.09h50.41l-124.63,165.44h124.11c41.77,0,75.63-33.86,75.63-75.63v-35.15l35.65-35.65v76.25c0,58.45-47.38,105.83-105.83,105.83h-202.96Z",
                    }}
                  ></path>
                </g>
              </svg>
            </Link>
            <p
              {...{
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  fontWeight: "600",
                  color: "#200093",
                  marginTop: "24px",
                  maxWidth: "300px",
                },
              }}
            >
              {"Your Partner in Digital Growth"}
            </p>
            <div {...{ style: { display: "flex", alignItems: "center", gap: "12px", marginTop: "28px" } }}>
              <span
                {...{
                  className: "zl-social",
                  "aria-label": "Facebook",
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#1877f2",
                  },
                  role: "img",
                  title: "Facebook profile coming soon",
                }}
              >
                <svg
                  {...{
                    width: "31",
                    height: "31",
                    viewBox: "0 0 24 24",
                    fill: "#ffffff",
                    "aria-hidden": "true",
                  }}
                >
                  <path
                    {...{
                      d: "M14 8h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v7h3.2v-7h3l.6-3h-3.6V9.200c0-.7.3-1.200 1.100-1.200z",
                    }}
                  ></path>
                </svg>
              </span>
              <span
                {...{
                  className: "zl-social",
                  "aria-label": "Instagram",
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
                  },
                  role: "img",
                  title: "Instagram profile coming soon",
                }}
              >
                <svg
                  {...{
                    width: "26",
                    height: "26",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                  }}
                >
                  <rect {...{ x: "3", y: "3", width: "18", height: "18", rx: "5" }}></rect>
                  <circle {...{ cx: "12", cy: "12", r: "4" }}></circle>
                  <path {...{ d: "M17.500 6.500h.01", strokeWidth: "2.600" }}></path>
                </svg>
              </span>
              <span
                {...{
                  className: "zl-social",
                  "aria-label": "LinkedIn",
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0a66c2",
                  },
                  role: "img",
                  title: "LinkedIn profile coming soon",
                }}
              >
                <svg
                  {...{
                    width: "26",
                    height: "26",
                    viewBox: "0 0 24 24",
                    fill: "#ffffff",
                    "aria-hidden": "true",
                  }}
                >
                  <rect {...{ x: "3.500", y: "9", width: "3.600", height: "11" }}></rect>
                  <circle {...{ cx: "5.300", cy: "5.200", r: "2.100" }}></circle>
                  <path
                    {...{
                      d: "M10 9h3.400v1.600c.5-.9 1.700-1.900 3.600-1.900 3.600 0 4.400 2.300 4.400 5.400V20h-3.600v-5.200c0-1.400-.1-2.900-1.800-2.900s-2.100 1.300-2.100 2.800V20H10z",
                    }}
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div>
            <h3
              {...{
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              <Link
                {...{
                  className: "zl-foot-link",
                  href: "/services",
                  style: { color: "var(--Dark-Purple, #0a003d)" },
                }}
              >
                {"Services"}
              </Link>
            </h3>
            <ul
              {...{
                style: {
                  listStyle: "none",
                  padding: "0",
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                },
                className: "zl-footer-list",
              }}
            >
              <li>
                <Link
                  {...{
                    className: "zl-foot-link",
                    href: "/ecommerce",
                    style: { fontSize: "15.5px", color: "#4a4565" },
                  }}
                >
                  {"E-Commerce Website"}
                </Link>
              </li>
              <li>
                <Link
                  {...{
                    className: "zl-foot-link",
                    href: "/business",
                    style: { fontSize: "15.5px", color: "#4a4565" },
                  }}
                >
                  {"Business Website"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3
              {...{
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              <Link
                {...{
                  className: "zl-foot-link",
                  href: "/hosting-care",
                  style: { color: "var(--Dark-Purple, #0a003d)" },
                }}
              >
                {"Hosting & Care"}
              </Link>
            </h3>
            <ul
              {...{
                style: {
                  listStyle: "none",
                  padding: "0",
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                },
                className: "zl-footer-list",
              }}
            >
              <li>
                <Link
                  {...{
                    className: "zl-foot-link",
                    href: "/domain-hosting-plans",
                    style: { fontSize: "15.5px", color: "#4a4565" },
                  }}
                >
                  {"Domain & Hosting Plans"}
                </Link>
              </li>
              <li>
                <Link
                  {...{
                    className: "zl-foot-link",
                    href: "/content-update-plans",
                    style: { fontSize: "15.5px", color: "#4a4565" },
                  }}
                >
                  {"Content Update Plans"}
                </Link>
              </li>
              <li>
                <Link
                  {...{
                    className: "zl-foot-link",
                    href: "/security-maintenance-plans",
                    style: { fontSize: "15.5px", color: "#4a4565" },
                  }}
                >
                  {"Security & Maintenance Plans"}
                </Link>
              </li>
            </ul>
          </div>
          <div {...{ className: "zl-footer-contact" }}>
            <h3
              {...{
                style: {
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "var(--Dark-Purple, #0a003d)",
                },
              }}
            >
              {"Contact"}
            </h3>
            <ul
              {...{
                style: {
                  listStyle: "none",
                  padding: "0",
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                },
                className: "zl-footer-list",
              }}
            >
              <li {...{ style: { display: "flex", alignItems: "center", gap: "14px" } }}>
                <span
                  {...{
                    style: {
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      "aria-hidden": "true",
                    }}
                  >
                    <rect
                      {...{ x: "0.500", y: "0.500", width: "23", height: "23", rx: "6.500", fill: "#00c03b" }}
                    ></rect>
                    <path
                      {...{
                        d: "M7.730 15.870A6.600 6.600 0 1 1 11.480 17.740L6.300 19.300Z",
                        fill: "none",
                        stroke: "#ffffff",
                        strokeWidth: "1.700",
                        strokeLinejoin: "round",
                      }}
                    ></path>
                    <path
                      {...{
                        transform: "translate(7.600 6.400) scale(.4)",
                        d: "M22 16.920v3a2 2 0 0 1-2.180 2 19.790 19.790 0 0 1-8.630-3.070 19.500 19.500 0 0 1-6-6 19.790 19.790 0 0 1-3.070-8.670A2 2 0 0 1 4.110 2h3a2 2 0 0 1 2 1.720 12.840 12.840 0 0 0 .7 2.810 2 2 0 0 1-.45 2.110L8.090 9.910a16 16 0 0 0 6 6l1.270-1.270a2 2 0 0 1 2.110-.45 12.840 12.840 0 0 0 2.810.7A2 2 0 0 1 22 16.920z",
                        fill: "#ffffff",
                      }}
                    ></path>
                  </svg>
                </span>
                <div {...{ style: { display: "flex", flexDirection: "column", gap: "2px" } }}>
                  <span {...{ style: { fontSize: "13px", color: "#6b6485" } }}>{"WhatsApp"}</span>
                  <a
                    {...{
                      className: "zl-foot-link",
                      href: "https://wa.me/8801814090134",
                      style: { fontSize: "15.5px", color: "#0a003d" },
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                  >
                    {"+8801814090134"}
                  </a>
                </div>
              </li>
              <li {...{ style: { display: "flex", alignItems: "center", gap: "14px" } }}>
                <span
                  {...{
                    style: {
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "30",
                      height: "22.500",
                      viewBox: "0 0 24 18",
                      fill: "none",
                      "aria-hidden": "true",
                    }}
                  >
                    <path
                      {...{ d: "M0 4.600L5.500 8.500V18H1.800A1.800 1.800 0 0 1 0 16.200Z", fill: "#4285f4" }}
                    ></path>
                    <path
                      {...{
                        d: "M0 4.600V2.800A2.800 2.800 0 0 1 4.400.5L5.500 1.300V8.500Z",
                        fill: "#c5221f",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M5.500 1.800L12 6.400 18.500 1.800V8.500L12 13.400 5.500 8.500Z",
                        fill: "#ea4335",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M18.500 1.300L19.600.5A2.800 2.800 0 0 1 24 2.800V4.600L18.500 8.500Z",
                        fill: "#fbbc04",
                      }}
                    ></path>
                    <path
                      {...{
                        d: "M24 4.600V16.200A1.800 1.800 0 0 1 22.200 18H18.500V8.500Z",
                        fill: "#34a853",
                      }}
                    ></path>
                  </svg>
                </span>
                <div {...{ style: { display: "flex", flexDirection: "column", gap: "2px" } }}>
                  <span {...{ style: { fontSize: "13px", color: "#6b6485" } }}>{"Email"}</span>
                  <a
                    {...{
                      className: "zl-foot-link",
                      href: "mailto:zenticlab@gmail.com",
                      style: { fontSize: "15.5px", color: "#0a003d" },
                    }}
                  >
                    {"zenticlab@gmail.com"}
                  </a>
                </div>
              </li>
              <li {...{ style: { display: "flex", alignItems: "center", gap: "14px" } }}>
                <span
                  {...{
                    style: {
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    },
                  }}
                >
                  <svg
                    {...{
                      width: "21",
                      height: "29.800",
                      viewBox: "0 0 24 34",
                      fill: "none",
                      "aria-hidden": "true",
                    }}
                  >
                    <defs>
                      <clipPath {...{ id: "zlpin" }}>
                        <path
                          {...{
                            d: "M12 0C5.400 0 0 5.300 0 11.900c0 3.300 1.400 6.300 3.600 9L8.900 27.500C10 29 10.500 30.500 10.800 32 11 33.500 11.800 34 12 34s1-.5 1.200-2c.3-1.500.8-3 1.900-4.500L20.400 20.900C22.600 18.200 24 15.200 24 11.900 24 5.300 18.600 0 12 0Z",
                          }}
                        ></path>
                      </clipPath>
                    </defs>
                    <g {...{ clipPath: "url(#zlpin)" }}>
                      <rect {...{ x: "-2", y: "-2", width: "28", height: "38", fill: "#34a853" }}></rect>
                      <path
                        {...{ d: "M-1 -1H15.500V0.400L8.500 8.800 2.600 4 5 -1Z", fill: "#1a73e8" }}
                      ></path>
                      <path
                        {...{
                          d: "M15.500 -1H26V5.500L22.900 6.200 15.900 13.500 8.500 8.800 15.500 0.400Z",
                          fill: "#4285f4",
                        }}
                      ></path>
                      <path
                        {...{ d: "M2.600 4L8.500 8.800 1.100 17.200 -1 17.200 -1 4Z", fill: "#ea4335" }}
                      ></path>
                      <path
                        {...{
                          d: "M1.100 17.200L8.500 8.800 15.900 13.500 6.600 24.900H-1V17.200Z",
                          fill: "#fbbc04",
                        }}
                      ></path>
                    </g>
                    <circle {...{ cx: "12", cy: "11.700", r: "4.600", fill: "#ffffff" }}></circle>
                  </svg>
                </span>
                <div {...{ style: { display: "flex", flexDirection: "column", gap: "2px" } }}>
                  <span {...{ style: { fontSize: "13px", color: "#6b6485" } }}>{"Address"}</span>
                  <span {...{ style: { fontSize: "15.5px", color: "#0a003d" } }}>
                    {"Mirpur, Dhaka, Bangladesh"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div {...{ style: { marginTop: "auto", paddingTop: "64px" }, className: "zl-footer-bottom" }}>
          <div
            {...{
              style: {
                padding: "28px 0",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "16px",
              },
            }}
          >
            <p {...{ style: { fontSize: "14.5px", color: "#4a4565" } }}>
              {"© 2026 Zentic Lab. All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
