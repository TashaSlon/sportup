import ReactPlayer from 'react-player';

export default function Video() {
    const url = 'videos/deleteAccountVideo.mp4';

    return (
        <ReactPlayer className='video' url={url} controls={true}/>
    );
};