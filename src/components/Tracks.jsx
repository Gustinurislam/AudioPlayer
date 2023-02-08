import TableHeader from "./TableHeader"
import Track from "./Track"
import musics from '../../musics.json'

const Tracks = ({ playing, setPlaying, selectedHowl, setSelectedHowl }) => {
    return (
        <div className="w-full mx-auto px-4 py-2">
            <TableHeader />

            {musics.map((music, idx) => {
                return <Track key={music.id} music={music} selectedHowl={selectedHowl} setSelectedHowl={setSelectedHowl} playing={playing} setPlaying={setPlaying} isFirstMusic={idx === 0} />
            })}
        </div>
    )
}

export default Tracks
