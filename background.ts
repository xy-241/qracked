export {}

// background.ts
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["qrackedSolved"], (res) => {
    if (Object.keys(res).length === 0) {
      chrome.storage.local.set({ qrackedSolved: 0 }, () => {
        console.log("Initialized qrackedSolved in chrome")
      })
    }
  })
  //   chrome.storage.local.set(
  //     { initializedValue: "This is the initial value" },
  //     () => {
  //       console.log("Initialized value stored in chrome.storage.local.")
  //     }
  //   )
})
