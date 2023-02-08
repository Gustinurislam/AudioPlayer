import { Howler } from 'howler'
import { BsSpotify, BsPlayFill, BsPauseFill } from 'react-icons/bs'

const Header = ({ playing, setPlaying, selectedHowl }) => {

    const handleVolumeChange = (e) => {
        Howler.volume(parseInt(e.target.value, 10) / 100)
    }

    const togglePlay = () => {
        if (!selectedHowl) return;

        if (playing) {
            selectedHowl.pause()
            setPlaying(false)
        } else {
            selectedHowl.play()
            setPlaying(true)
        }
    }

    return (
        <header className='w-full bg-white p-4 flex items-center justify-between'>
            <div className='flex items-center'>
                <BsSpotify size='30px' />
                <h1 className='font-bold ml-2 text-2xl'>Audio Player</h1>
            </div>
            <div className='flex items-center'>
                <input type="range" max='100' defaultValue='100' onChange={handleVolumeChange} className='cursor-pointer' />
                <button className='p-2 bg-black rounded-full ml-4' onClick={togglePlay}>
                    {playing ? (
                        <BsPauseFill className='text-white' size='24px' />
                    ) : (<BsPlayFill className='text-white' size='24px' />)}
                </button>
            </div>
        </header>
    )
}

export default Header