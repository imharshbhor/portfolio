"use client"

import { useEffect } from "react"

export function MouseGlow() {
  useEffect(() => {
    const cursorCircle = document.createElement("div")
    cursorCircle.style.position = "fixed"
    cursorCircle.style.width = "250px"
    cursorCircle.style.height = "250px"
    cursorCircle.style.borderRadius = "50%"
    cursorCircle.style.backgroundColor = "rgba(0, 0, 255, 0.5)"
    cursorCircle.style.pointerEvents = "none"
    // cursorCircle.style.zIndex = "9999"
    cursorCircle.style.filter = "blur(200px)"
    document.body.appendChild(cursorCircle)

    const moveCircle = (e: MouseEvent) => {
      cursorCircle.style.left = `${e.clientX - 125}px`
      cursorCircle.style.top = `${e.clientY - 125}px`
    }

    window.addEventListener("mousemove", moveCircle)

    return () => {
      window.removeEventListener("mousemove", moveCircle)
      document.body.removeChild(cursorCircle)
    }
  }, [])

  return null
}
