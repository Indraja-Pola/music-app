import logo from './logo.svg';
import './App.css';
import img from "./SoundImg/logo.png";
import play from './SoundImg/play.png';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <img src= {img} className='logo'/>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>ABOUT</a></li>
          <li><a href='#'>SPECIFICATIONS</a></li>
          <li><a href='#'>PRODUCTS</a></li>
          <li><a href='#'>CONNECT</a></li>

        </ul>
      </div>
  <div className='content'>
    <div className='left-col'>
      <h1>THE<br></br>REAL <br></br>SOUND</h1>
    </div>
    <div className='right-col'>
      <p>
           Click Here To Listen
    </p>
    <img src={play} alt='play' className='icon'/>

    </div>


  </div>
    </div>
 
   
  );
}

export default App;
