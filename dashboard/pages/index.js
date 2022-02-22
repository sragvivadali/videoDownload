import Head from 'next/head'

import '../node_modules/bulma/css/bulma.css'

import AddSong from '../components/AddSong';
import SongTable from '../components/SongTable';
import FirstPicks from '../components/FirstPicks';

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
