import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faRotateRight, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

export default function MediaControl() {
  return (
    <div className='field has-addons'>
      <p className='control'>
        <button className='button is-link is-light'>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </button>
      </p>
      <p className='control'>
        <button className='button is-link is-light'>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faPause} />
          </span>
        </button>
      </p>
      <p className='control'>
        <button className='button is-link is-light'>
          <span className='icon is-small'>
            <FontAwesomeIcon icon={faRotateRight} />
          </span>
        </button>
      </p>

      <button className='button is-danger is-light ml-3'>
        <span className='icon is-small'>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </span>
      </button>
    </div>
  )
}