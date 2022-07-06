import "./App.css";
import vid1 from "./assets/video1.mp4";
import vid2 from "./assets/video2.mp4";
import ReactPlayer from "react-player";

const videos = [
  {
    id: 1,
    src: vid1,
  },
  // {
  //   id: 2,
  //   src: vid2,
  // },
];

const App = () => {
  return (
    <div className="video-container">
      {videos.map((item) => {
        return <ReactPlayer url={item.src} pip={true} controls={true} width="400px" height="300px" />;
      })}
    </div>
  );
};

export default App;
