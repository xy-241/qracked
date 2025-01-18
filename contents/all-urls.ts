import type { PlasmoCSConfig } from "plasmo"
import { BrowserMultiFormatReader } from "@zxing/library";

export const config: PlasmoCSConfig = {
  // all urls 
  matches: ["<all_urls>"],
}

// interval to search every 2 seconds
setInterval( () => {
  const reader = new BrowserMultiFormatReader();

  const printPageHTML = () => {
    const pageHTML = document.documentElement.outerHTML
    // console.log(pageHTML)
  }
  printPageHTML()

  const changeElement = (element: HTMLElement) => {
      const newImg = document.createElement("img");
      
      // new image is nus hackers logo
      newImg.src = "https://media.licdn.com/dms/image/v2/D560BAQE2pJ2bMhfGhQ/company-logo_200_200/company-logo_200_200/0/1691820001578/nus_hackers_logo?e=2147483647&v=beta&t=jVYrYmhSDz_oyTejx5WlPVtZIRdbaVZaGnFcv_iJ7fE";
      newImg.width = element.clientWidth;
      newImg.height = element.clientHeight;

      element.parentNode.replaceChild(newImg, element);
    }

  const findQRCode = async () => {
    const reader = new BrowserMultiFormatReader();
    const elements = Array.from(document.querySelectorAll<HTMLElement>("img, canvas"));
  
    for (const element of elements) {
      try {
        let src = "";
        if (element instanceof HTMLImageElement) {
          src = element.src; // Image source
          console.log('found image')
        } else if (element instanceof HTMLCanvasElement) {
          src = element.toDataURL(); // Canvas content as a data URL
          console.log('found camnvas')
        }
        const result = await reader.decodeFromImageUrl(src);
        if (result) {
          console.log('found results')
          changeElement(element);
        }
      } catch {
        // Ignore elements without QR codes
      }
    }
  };

  findQRCode();


  // changeElement()
}, 1000);
