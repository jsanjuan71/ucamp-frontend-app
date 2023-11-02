import Video from "./video";
import './video.css'

function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? 'Videos' : 'Video';
      heading = count + ' ' + noun;
    }

    return (
      <section>
        <h2>{heading}</h2>
        <div className='video-list'>
            {videos.map(video =>
                <Video key={video.id} video={video} />
            )}
        </div>
      </section>
    );
}

export default VideoList;