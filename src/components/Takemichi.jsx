import React, { useRef, useState } from "react";
import Navbar from './Navbar'

const Takemichi = () => {

  const buttonData = [
    { code: "heart", label: "❤️ Heart" },
    { code: "demo5", label: "💫 Fractal Tree" },
    { code: "demo13", label: "🌈 The Bifröst" },
    { code: "demo7", label: "🎆 Voronoi" },
    { code: "demo12", label: "🌇 Pyramid" },
    { code: "demo8", label: "🌃 #3D" },
    { code: "demo6", label: "🌠 Starry Night" },
    { code: "demo10", label: "🏙️ Fireworks" },
  
    { code: "demo4", label: "🔮 Geometry" },
    { code: "demo9", label: "🌉 Lotus" },
    { code: "demo2", label: "🎇 Flower" },
    { code: "demo18", label: "⏭️ Sierpiński Triangle" },
    { code: "spiral", label: "🌀 Spiral" },
    { code: "demo11", label: "🌆 Night Sky" },
  
    { code: "demo3", label: "🌌 Galaxy" },
    { code: "demo14", label: "💾 Noise" },
    { code: "demo15", label: "🌿 Pines" },
    { code: "demo16", label: "📼 TikTok" },
  
    { code: "demo1", label: "✨ Elsa" },
    { code: "demo17", label: "🥂 The Shattering" },
  ];

  const rows = [
    buttonData.slice(0, 8),  // First row (8 buttons)
    buttonData.slice(8, 14), // Second row (6 buttons)
    buttonData.slice(14, 18), // Third row (4 buttons)
    buttonData.slice(18, 22)  // Fourth row (4 buttons)
  ];

  const iframeRef = useRef(null); // Create a reference for the iframe

  const codeSources = {
    heart: "47d740979c11",
    spiral: "1e6a88781280",
    demo1: "bda3c75ea643",
    demo2: "14c99745c2cf",
    demo3: "3e469a122373",
    demo4: "5f86d3f581b2",
    demo5: "4dc6ea681fbe",
    demo6: "2fa6e8430aef",
    demo7: "e37aeda9a666",
    demo8: "7360f4af37a5",
    demo9: "b20b0c5b37b5",
    demo10: "67646dcc1a50",
    demo11: "561f3126323d",
    demo12: "34a87a814786",
    demo13: "28ca5bf3c56c",
    demo14: "c70e7d02523d",
    demo15: "d7a2868120d8",
    demo16: "ad61401d783a",
    demo17: "23f96db7147e",
    demo18: "afc7c822301d",
  };

  const [activeCode, setActiveCode] = useState("heart");

  function loadCode(codeType) {
    setActiveCode(codeType);
    if (iframeRef.current) {
      iframeRef.current.src = `https://trinket.io/embed/python/${codeSources[codeType]}?outputOnly=true&runOption=run&start=result&t=${Date.now()}`;
    }
  }

  return (
    <>
    <Navbar />
      <div className="trinket-container">
        <iframe ref={iframeRef} id="codeFrame" src={`https://trinket.io/embed/python/${codeSources.heart}?outputOnly=true&runOption=run&start=result`} />
      </div>

      <div className="button-rows">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row" style={{ textAlign: "center" }}>
            {row.map((button, index) => (
              <button
                key={index}
                className={`neon-button ${activeCode === button.code ? "active" : ""}`}
                onClick={() => loadCode(button.code)}
              >
                {button.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Takemichi;