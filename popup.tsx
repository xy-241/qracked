import "./style.css"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

function IndexPopup() {
  const [difficultyValue, setDifficultyValue] = useState([5])
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
        defaultValue={[5]}
        max={10}
        step={1}
        value={difficultyValue}
        onValueChange={setDifficultyValue}
        style={{ width: "80" }}
      />
      <div>{`Difficulty: ${difficultyValue}`}</div>
      <Card style={{ width: "100%" }}>
        <CardHeader>
          <CardTitle>How many Qracks have you solved?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Stats 1: blabla</li>
            <li>Stats 2: blabla</li>
            <li>Stats 3: blabla</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default IndexPopup
