import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import con from '../image/content.png';

function Home() {
  const [animate1, setAnimate1] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  function clicked1() {
    setAnimate1(true);         // Start orb explosion
    setTimeout(() => {
      setFadeOut(true);       // Show overlay fade
    }, 1200);                 // Start fade after orb expands

    setTimeout(() => {
      navigate('/about');     // Navigate after both animations
    }, 2000);
  }
  function clicked2() {
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
            <img src={con} alt='viggs' className='fitIt1'/>
          </div>

          <div className="container">
            <div className="orbit1">
              <div className="orb2"><button className='button1' ></button></div>
               <div className='orb3' >
                <button className="button1" ></button>
              </div>
               <div className={`orb1 ${animate ? 'explode' : ''}`}>
                <button className="button1" onClick={clicked2}></button>
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

