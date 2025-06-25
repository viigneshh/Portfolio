import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';

function Home() {
  const [animate, setAnimate] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  function clicked() {
    setAnimate(true);         // Start orb explosion
    setTimeout(() => {
      setFadeOut(true);       // Show overlay fade
    }, 1200);                 // Start fade after orb expands

    setTimeout(() => {
      navigate('/about');     // Navigate after both animations
    }, 2000);
  }

  return (
    <>
      <div className="outerShell">
        <div className="contentWrapper">
          <div className="heading">
            <h2 className="hii">Hii!</h2>
            <p className="pp">I am N Mani Naga Vignesh</p>
            <p className="fitIt">I am an Aspiring MERN stack developer</p>
          </div>

          <div className="container">
            <div className="orbit1">
              <div className="orb2"><button>G</button></div>
            </div>
            <div className="orbit1">
              <div className="orb3"><button>a</button></div>
            </div>
            <div className="orbit1">
              <div className={`orb1 ${animate ? 'explode' : ''}`}>
                <button className="button1" onClick={clicked}></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth fade transition */}
      <div className={`transition-overlay ${fadeOut ? 'show' : ''}`}></div>
    </>
  );
}

export default Home;

