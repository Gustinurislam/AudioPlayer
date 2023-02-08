import { useState } from "react"
import Header from "./components/Header"
import Tracks from "./components/Tracks"

function App() {
  const [selectedHowl, setSelectedHowl] = useState(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="bg-zinc-900 h-screen w-full">
      <Header playing={playing} setPlaying={setPlaying} selectedHowl={selectedHowl} />
      <Tracks playing={playing} setPlaying={setPlaying} selectedHowl={selectedHowl} setSelectedHowl={setSelectedHowl} />
    </div>
  )
}

export default App
