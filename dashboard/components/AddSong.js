export default function AddSong() {
  const addSong = async event => {
    event.preventDefault();

    const res = await fetch(
      `http://localhost:5000/video/${event.target.video_id.value}?skip_download=1`
    )
  }

  return (
    <form onSubmit={addSong}>
      <div className='columns'>
        <div className='column is-two-fifths'>
          <input name="video_id" className='input is-hovered is-medium mr-2' type='text' placeholder='Video ID' />
        </div>
        <div className='column'>
          <button type='submit' className='button is-link is-light is-medium'>Add Song</button>
        </div>
      </div>
    </form>
  )
}