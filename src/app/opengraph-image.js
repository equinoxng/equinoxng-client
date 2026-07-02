import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "equinoxng - Digital Made Easy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B1220",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(246,244,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(246,244,238,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Top: logo mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* E mark */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[76, 40, 76, 40, 76].map((w, i) => (
              <div key={i} style={{ width: w, height: 10, background: "white", borderRadius: 2 }} />
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: "-0.5px" }}>
              <span style={{ color: "#F6F4EE" }}>equinox</span>
              <span style={{ color: "#22C55E" }}>ng</span>
            </div>
            <div style={{ fontSize: 12, letterSpacing: "0.15em", color: "#22C55E", textTransform: "uppercase" }}>
              Digital Made Easy
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#F6F4EE", lineHeight: 1.05, letterSpacing: "-2px", maxWidth: 800 }}>
            Simple, impactful products for everyday life.
          </div>
          <div style={{ fontSize: 22, color: "#7A8499", maxWidth: 600 }}>
            Building a connected suite of financial tools for Africa — starting with Dash.
          </div>
        </div>

        {/* Bottom: trust + domain */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: "24px" }}>
            {["CAC Registered", "Incorporated 2025", "Lagos, Nigeria"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: 13, color: "#7A8499" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22C55E" }} />
                {t}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 14, color: "#7A8499", letterSpacing: "0.05em" }}>
            www.equinoxng.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
