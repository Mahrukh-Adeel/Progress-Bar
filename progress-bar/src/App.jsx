import ProgressBar from './progressBar';
import { useState } from 'react';
import './App.css';
function App() {
  const [progress, setProgress] = useState(0);
    function increaseProgress(){
        setProgress(prevProgress => (prevProgress + 10 > 100 ? 100 : prevProgress + 10))
    }
    function decreaseProgress(){
        setProgress(prevProgress => (prevProgress - 10 < 0 ? 0 : prevProgress - 10))
    }    
    function buttonHovered(e) {
      e.target.style.boxShadow = '0 0 10px rgba(57, 255, 20, 0.5)';
      e.target.style.border = '1px solid #229b0d';
    }
    function buttonUnhovered(e) {
      e.target.style.boxShadow = 'none';
    }
    function buttonFocused(e) {
      e.target.style.boxShadow = 'inset 0 0 10px 5px #229b0d';
      e.target.style.border = '1px solid #229b0d';
      e.target.style.outline = 'none'; 
    }
    function buttonBlur(e) {
      e.target.style.boxShadow = 'none';
    }
    const btnstyle = {
      padding: '10px 20px',
          backgroundColor: '#39FF14',
          color: '#191919',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
          fontWeight: 500,
          fontSize: '20px',
          transition: 'box-shadow 0.2s ease',
          boxSizing: 'border-box'
    }
  return (
    <div className='main'>
      < ProgressBar progress={progress}/>
      <div>
        <button
        style={ btnstyle }
        onClick={decreaseProgress} onBlur={buttonBlur} onFocus={buttonFocused} onMouseOver={buttonHovered} onMouseLeave={buttonUnhovered}>Decrease
        </button>
        <button 
        style={ btnstyle }
        onClick={increaseProgress} onBlur={buttonBlur} onFocus={buttonFocused} onMouseOver={buttonHovered} onMouseLeave={buttonUnhovered}>Increase
        </button>
      </div>
    </div>
  );
}

export default App;
