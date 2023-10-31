
import './video.css'


function Video({ video }) {
    return (
      <div className='video'>
        <img src={video.thumbnail} />
        <a href={video.url}>
          <h3>{video.title}</h3>
        </a>
        <p>{video.description}</p>
      </div>
    );
}

export default Video;