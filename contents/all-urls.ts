import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.hiokkuek.info/"]
}

window.addEventListener("load", () => {
  const printPageHTML = () => {
    const pageHTML = document.documentElement.outerHTML
    console.log(pageHTML)
  }
  printPageHTML()

  const removeCanvasElements = () => {
    const canvasElements = document.querySelectorAll("img")
    canvasElements.forEach((canvas) => {
      canvas.remove()
    })
  }
  removeCanvasElements()
})
