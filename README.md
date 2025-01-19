# QRacked - Get Ready to Solve! 🧩

![QRacked Logo](path/to/logo.png)

## What in the Pixel is QRacked? 🤔

Welcome to **QRacked**, the puzzling Chrome extension that slices images into tiny, delightful pieces! Why? Because browsing is too easy these days! In a world full of scrolling and swiping, we’re here to remind you that every image deserves some serious attention. And let’s be honest, what’s more addictive than a good puzzle? 

## Why You’ll Love Getting QRacked! 😍

- **Puzzle-Tastic Adventures:** Every image on a webpage is *QRacked* into a jigsaw masterpiece! You won’t just look at images—you’ll *piece* them together!
- **Customize Your Challenge:** Choose your level of difficulty! Whether you’re a puzzle pie-thin expert or a “is this piece even from this image?” novice, we’ve got you covered.
- **Mind Over Mattered:** Take a break from mindless scrolling! QRacked gives you a reason to think—and isn’t that a *piece* of mind we could all use?
- **Tick Tock, Don’t Stop:** Feeling fast? Put your skills to the test with our time challenge mode! Because every puzzle deserves a little thrill!
- **Share Your Victory!** Finish a puzzle? Time to *QRack* up some social media likes and show off your skills!

## Let’s Get This Puzzle Party Started! 🎉

### Installation Steps:

1. **Download the QRacked Extension:** [Grab it here!](link-to-released-extension-or-directory)
2. **Become a Developer Mode Expert:** 
   - Type `chrome://extensions/` in your browser and enter the *curious* world of extensions.
   - Toggle that "Developer mode" switch like it's a light—you're lighting up the puzzle!
3. **Load Up Your QRacked Fun:**
   - Hit “Load unpacked” and select the folder that holds your shiny new QRacked extension—you’re almost there!

## How to Use This Puzzling Tool 🛠️

1. Click on the QRacked icon in your toolbar. *Abracadabra*, the fun begins!
2. Navigate to any webpage with images (Pinterest, anyone?).
3. Click on an image to set it free from its constraints and instantly QRack it into a puzzle!
4. Piece it together—no pressure, but the original image is waiting for you!

## Join the QRacked Family! 🤗

Want to help us puzzle things out? Here’s the scoop:

- **Spot a Bug?** Like a missing piece in your favorite puzzle, let us know ASAP! We’ll get it fixed faster than you can say “where did that piece go?”
- **Got Ideas?** Throw your suggestions our way! We’re ready for all the *brain-teasing* features you can think of.
- **Code Wizards Apply Here:** If you’re a magician with code, fork our repo and perform your wizardry with a pull request!

### Let’s Keep It Fun and Friendly!

We want a playful community! Please check out our [Code of Conduct](link-to-code-of-conduct) and [Contributing Guidelines](link-to-contributing-guidelines) before diving in.

## License? 🤓

Yep! This puzzle is licensed under the MIT License—because sharing is how we roll! (Find the details in the [LICENSE](LICENSE) file.)

## Questions? Don’t Be Shy! 📬

We're at DH-79!!! Come and take a look!

---

Now go forth, be bold, and let your inner puzzle-solver shine! Each piece matters! 🧩✨


This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
