import { useEffect, useState } from "react"
import { BsPause, BsPauseFill, BsPlayFill } from "react-icons/bs"
import { Howl } from "howler"

const Track = ({ music, playing, setPlaying, selectedHowl, setSelectedHowl, isFirstMusic }) => {
  const [howl, setHowl] = useState(null)

  useEffect(() => {
    const newHowl = new Howl({
      src: [music.url],
      loop: true,
      autoplay: false,
    })

    setHowl(newHowl)

    if (isFirstMusic) {
      setSelectedHowl(newHowl)
    }
  }, [music])

  const togglePlay = () => {
    if (howl.playing()) {
      howl.pause()
      setPlaying(false)
      return;
    }

    selectedHowl.playing() && selectedHowl.pause();

    setPlaying(true)
    howl.play()
    setSelectedHowl(howl)
  }

  return (
    <div onClick={togglePlay} className="grid grid-cols-player mx-auto px-4 py-2 rounded-sm transition-colors cursor-pointer text-white hover:bg-zinc-800">
      <div className="col-span-1 flex items-center">
        {selectedHowl === howl && playing ? (<BsPauseFill size='20px' />) :
          (<BsPlayFill size='20px' />)}
        <img src={music.cover} className="w-10 h-10 ml-2" />
      </div>

      <div className="col-span-5 flex flex-col items-start justify-start">
        <span className="font-semibold">{music.title}</span>
        <span>{music.artist}</span>
      </div>
      <div className="col-span-5 flex items-center justify-start">{music.album}</div>
      <div className="col-span-1 flex items-center justify-start">{music.duration}</div>
    </div>
  )
}

export default Track
