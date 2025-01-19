import "./style.css"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { useEffect, useState } from "react"

function IndexPopup() {
  const [difficultyValue, setDifficultyValue] = useState([1])
  const [qrackedSolved, setQrackedSolved] = useState(0)
  useEffect(() => {
    chrome.storage.local.get(["difficulty"], (res) => {
      console.log("difficulty")
      console.log(res["difficulty"])
      setDifficultyValue(res["difficulty"])
    })
    chrome.storage.local.get(["qrackedSolved"], (res) => {
      console.log(res)
      if (Object.keys(res).length === 0) {
        chrome.storage.local.set({ qrackedSolved: 0 }, () => {
          console.log("Initialized qrackedSolved in chrome")
        })
        setQrackedSolved(0);
      } else {
        setQrackedSolved(res["qrackedSolved"])
      }
    })

    chrome.storage.local.get(["qrackedSolved"], (res) => {
      
    })
  }, [])

  const handleDifficultyChange = (value: number[]) => {
    console.log(value)
    setDifficultyValue(value)
    chrome.storage.local.set({ difficulty: value }, () => {
      console.log(`set difficulty: ${value[0]}`)
    })
  }
  return (
    <div
      style={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        padding: 10,
        alignItems: "center",
        backgroundColor: "#FFA500", // Hex code for orange
        gap: 10
      }}>
      <h2 style={{ fontWeight: "bold" }}>Welcome to Qracked</h2>
      <Slider
        defaultValue={[1]}
        min={1}
        max={5}
        step={1}
        value={difficultyValue}
        onValueChange={handleDifficultyChange}
        style={{ width: "80" }}
      />
      <div>{`Difficulty: ${difficultyValue}`}</div>
      <Card style={{ width: "100%" }}>
        <CardHeader>
          <CardTitle>How QRACKED are you????</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "50px",
              fontWeight: "bold"
            }}>
            {qrackedSolved}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default IndexPopup
