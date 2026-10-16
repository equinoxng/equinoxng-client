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
          background: "#121316",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 6, background: "#7C3AED" }} />
        {/* Top: logo mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[76, 40, 76, 40, 76].map((w, i) => (
              <div key={i} style={{ width: w, height: 10, background: "#F2F1EE" }} />
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: "-1px", color: "#F2F1EE" }}>
            equinoxng
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#F2F1EE",
              lineHeight: 1.02,
              letterSpacing: "-3px",
              maxWidth: 860,
            }}
          >
            Simple, impactful products for everyday life.
          </div>
          <div style={{ fontSize: 24, color: "rgba(242,241,238,0.62)", maxWidth: 640 }}>
            A digital services provider — starting with Dash.
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: "28px", fontSize: 14, letterSpacing: "2px", color: "rgba(242,241,238,0.62)" }}>
            <div style={{ display: "flex" }}>LAGOS, NIGERIA</div>
            <div style={{ display: "flex" }}>FOUNDED 2025</div>
          </div>
          <div style={{ fontSize: 14, color: "rgba(242,241,238,0.62)", letterSpacing: "2px" }}>
            WWW.EQUINOXNG.COM
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
