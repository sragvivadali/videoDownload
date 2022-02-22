import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import '../node_modules/bulma/css/bulma.css'

import SongCard from '../components/SongCard';
import MediaControl from '../components/MediaControl';
import AddSong from '../components/AddSong';
import SongTable from '../components/SongTable';
import FirstPicks from '../components/FirstPicks';

var songData = [
  {
      "title": "Never Gonna Give You Up",
      "artist": "Rick Astley",
      "thumbnail_url": "/thumbnail1.jpg",
      "length": 210,
      "disk_path": "~/.youtube/song1.mp4"
  },
  {
    "title": "Never Gonna Let You Down",
    "artist": "Rick Astley",
    "thumbnail_url": "/thumbnail2.jpg",
    "length": 211,
    "disk_path": "~/.youtube/song2.mp4"
  },
  {
    "title": "Never Gonna Run Around",
    "artist": "Rick Astley",
    "thumbnail_url": "/thumbnail3.jpg",
    "length": 212,
    "disk_path": "~/.youtube/song3.mp4"
  },
  {
    "title": "And Hurt You",
    "artist": "Rick Astley",
    "thumbnail_url": "/thumbnail3.jpg",
    "length": 213,
    "disk_path": "~/.youtube/song4.mp4"
  },
];

export default function Home({ props }) {
  return (
    <>
      <Head>
        <title>Your Library</title>
      </Head>

      <section className='hero is-link is-medium'>
        <div className='hero-body'>
          <p className='title is-1'>
            Your Library
          </p>
          <p className='subtitle'>
            Listen to all your favorite songs
          </p>

          <AddSong />
        </div>
      </section>
      <section className='section is-small'>
        <h2 className='title is-2'>First Picks</h2>
        <h5 className='subtitle'>Discover songs in your library</h5>
        
        <FirstPicks />

        <h2 className='title is-2'>All Songs</h2>
        <h5 className='subtitle'>View all your songs</h5>

        <SongTable />
      </section>
    </>
  )
}
