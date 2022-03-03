import useSwr from 'swr'
import SongCard from "./SongCard"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function FirstPicks() {
  const {data, error} = useSwr("http://localhost:5000/library", fetcher);

  if (error || !data) return (
    <article className='message is-danger'>
      <div className='message-body'>
        No songs found in your library. Go add some!
      </div>
    </article>
  )

  return (
    <div className='columns'>
      {data.videos.slice(0, 3).map((song) => (
        <div className='column is-one-third'>
          <SongCard image={song.thumbnail_url} title={song.title} artist={song.channel} description={song.description} />
        </div>
      ))}
    </div>
  )
}