
import './video.css'


function Video({ video }) {
    return (
      <div className='video'>
        <div className='image'>
            <img src={video.thumbnail} />
        </div>
        <div className='info'>
            <a href={video.url}>
            <h3>{video.title}</h3>
            </a>
            <p>{video.description}</p>
            <p>{video.category}</p>
        </div>
      </div>
    );
}

export default Video;