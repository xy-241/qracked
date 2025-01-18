import type { PlasmoCSConfig } from "plasmo"
import { BrowserMultiFormatReader } from "@zxing/library";

export const config: PlasmoCSConfig = {
  // all urls 
  matches: ["<all_urls>"],
}

// audio
const quackBackgroundAudio = new Audio("https://share.yxy.ninja/quack_background.mp3");
quackBackgroundAudio.loop = true;
const quackAudio = new Audio("https://share.yxy.ninja/quack.mp3");

const playQuack = () => {
  quackAudio.play().catch(e => console.log("error playing quack", e));
}
const playQuackBackground = () => {
  quackBackgroundAudio.play().catch(e => console.log("error playing quack background", e));
}

// play quackBackgroundAudio when user clicks on the page
window.addEventListener("click", () => {
  playQuackBackground();
});

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
      newImg.src = "https://share.yxy.ninja/qracked.jpeg";
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
