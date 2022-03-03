import useSwr from 'swr'
import MediaControl from "./MediaControl";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function SongTable() {
  const {data, error} = useSwr("http://localhost:5000/library", fetcher);

  if (error || !data) {
    return (
      <article className='message is-danger'>
        <div className='message-body'>
          No songs found in your library. Go add some!
        </div>
      </article>
    )
  }

  return (
    <table className='table is-striped is-hoverable is-fullwidth'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Length</th>
          <th>Disk Path</th>
          <th>Controls</th>
        </tr>
      </thead>

      <tfoot>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Length</th>
          <th>Disk Path</th>
          <th>Controls</th>
        </tr>
      </tfoot>

      <tbody>
        {data.videos.map((song, index) => (
          <tr>
            <th>{index + 1}</th>
            <td>{song.title}</td>
            <td>{song.channel}</td>
            <td>{song.length}</td>
            <td><code>{song.disk_path}</code></td>
            <td>
              <MediaControl />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}