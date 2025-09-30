// src/components/VantaBackground.jsx
import { useEffect, useRef, useState } from "react"

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    // Ensure VANTA is available from global script
    if (!vantaEffect && window.VANTA && window.VANTA.BIRDS) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffa5d6,
          color1: 0xe53935,
          color2: 0xfb923c,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} style={{ width: "100%", minHeight: "100vh", position: "relative" }}>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  )
}
