import { useState, useRef } from "react";
import "./App.css";
import img from "./SoundImg/logo.png";
import play from "./SoundImg/play.png";
import pause from "./SoundImg/pause.png";
import music from "./SoundImg/mixkit-beautiful-dream-493.mp3";

function App() {
  const audioRef = useRef(new Audio(music)); // store audio object
  const [isPlaying, setIsPlaying] = useState(false); // track play/pause

  function togglePlay() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }
  function showMessage() {
    alert("Please play the music 🎵");
  }

  return (
    <div className="container">
      <div className="navbar">
        <img src={img} className="logo" />
        <ul>
          <li>
            <a onClick={showMessage}>HOME</a>
          </li>
          <li>
            <a onClick={showMessage}>ABOUT</a>
          </li>
          <li>
            <a onClick={showMessage}>SPECIFICATIONS</a>
          </li>
          <li>
            <a onClick={showMessage}>PRODUCTS</a>
          </li>
          <li>
            <a onClick={showMessage}>CONNECT</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="left-col">
          <h1>
            THE<br></br>REAL <br></br>SOUND
          </h1>
        </div>
        <div className="right-col">
          <p>Click Here To Listen</p>

          <img
            src={isPlaying ? pause : play}
            alt="toggle"
            className="icon"
            onClick={togglePlay}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
