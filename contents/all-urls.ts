import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  // all urls 
  matches: ["<all_urls>"],
}

// interval to search every 2 seconds
setInterval( () => {
  const printPageHTML = () => {
    const pageHTML = document.documentElement.outerHTML
    // console.log(pageHTML)
  }
  printPageHTML()

  const removeCanvasElements = () => {
    // #react-qrcode-logo is the id for the canvas element of kahoot qr code
    const canvasElements = document.querySelectorAll("#react-qrcode-logo");

    // replace canvas with new image element
    canvasElements.forEach((canvas) => {
      const newImg = document.createElement("img");
      
      // new image is nus hackers logo
      newImg.src = "https://media.licdn.com/dms/image/v2/D560BAQE2pJ2bMhfGhQ/company-logo_200_200/company-logo_200_200/0/1691820001578/nus_hackers_logo?e=2147483647&v=beta&t=jVYrYmhSDz_oyTejx5WlPVtZIRdbaVZaGnFcv_iJ7fE";
      newImg.width = canvas.clientWidth;
      newImg.height = canvas.clientHeight;

      canvas.parentNode.replaceChild(newImg, canvas);
    })


    // for remove elements
    // canvasElements.forEach((canvas) => {
    //   canvas.remove()
    // })
    // kahootQR.remove();
  }
  removeCanvasElements()
}, 2000);
