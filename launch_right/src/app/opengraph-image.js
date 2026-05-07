import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "JurisTech — CAC Registration, Websites & Legal Documents Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0A1628 0%, #0F2137 50%, #0A1628 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #C9972B, #E8B84B)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "white",
              fontWeight: "bold",
            }}
          >
            J
          </div>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            JurisTech
          </span>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          CAC Registration, Websites
          <br />
          & Legal Documents Nigeria
        </div>

        <div
          style={{
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: 1.5,
            maxWidth: 700,
            marginBottom: 48,
          }}
        >
          Built by a practising Nigerian lawyer who codes.
          <br />
          2,000+ clients served.
        </div>

        <div
          style={{
            display: "flex",
            gap: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 20, color: "#C9972B", fontWeight: 700 }}>24-48hrs</span>
            <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}>CAC Approval</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 20, color: "#C9972B", fontWeight: 700 }}>2,000+</span>
            <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}>Clients Served</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 20, color: "#C9972B", fontWeight: 700 }}>4.9/5</span>
            <span style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)" }}>Client Rating</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10B981",
            }}
          />
          <span style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.5)" }}>
            juristech.com.ng
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
