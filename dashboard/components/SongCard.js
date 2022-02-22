import Image from 'next/image'
import '../node_modules/bulma/css/bulma.css'

import MediaControl from './MediaControl'

export default function SongCard(props) {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-16by9'>
          <img src={props.image}></img>
        </figure>
      </div>
      <div className='card-content'>
        <p className='title is-4'>{props.title}</p>
        <p className='subtitle is-6'>{props.artist}</p>
        <div className='content'>
          {props.description.substring(0, 150)}...
        </div>
            
        <MediaControl />
      </div>
    </div>
  )
}