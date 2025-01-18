import type { PlasmoCSConfig } from "plasmo"
import { BrowserMultiFormatReader } from "@zxing/library";
import img_pzl from "./img_puzzle.js"

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
      // const newImg = document.createElement("img");
      
      // // newImg.setAttribute('onclick', "alert('click')");
      // newImg.style.zIndex = "999999";
      // newImg.style.position = "relative";

      // newImg.onclick = function () {
      //   console.log('hello')
      //   const overlay = document.createElement("div");
      //     overlay.style.position = "fixed";
      //     overlay.style.top = "0";
      //     overlay.style.left = "0";
      //     overlay.style.width = "100%";
      //     overlay.style.height = "100%";
      //     overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      //     overlay.style.zIndex = "1999999";
      //     document.body.appendChild(overlay);
      // };
      // // new image is nus hackers logo
      // newImg.id = "replacedImg";  
      // newImg.width = element.clientWidth;
      // newImg.height = element.clientHeight;


      // newImg.src = "https://share.yxy.ninja/qracked.jpeg";
      
      // element.parentNode.replaceChild(newImg, element);



      ////// for inline
      const newDiv = document.createElement("div");
      newDiv.style.width = `${element.clientWidth}px`;
      newDiv.style.height = `${element.clientHeight}px`;
      newDiv.style.zIndex = "999999";
      newDiv.style.position = "relative";

      newDiv.className = "replacedImgPuzzle";

      element.parentNode.replaceChild(newDiv, element);

      let images = [element.src];
      
        img_pzl({
          image: images,
          holder: ".replacedImgPuzzle"
        });
    }

  const findQRCode = async () => {
    const reader = new BrowserMultiFormatReader();
    const elements = Array.from(document.querySelectorAll<HTMLElement>("img, canvas"));
  
    for (const element of elements) {
      try {
        let src = "";
        if (element instanceof HTMLImageElement) {
          src = element.src; // Image source
          // console.log('found image')
        } else if (element instanceof HTMLCanvasElement) {
          src = element.toDataURL(); // Canvas content as a data URL
          // console.log('found camnvas')
        } 
        const result = await reader.decodeFromImageUrl(src);
        if (result) {
          console.log('found qr code')
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
