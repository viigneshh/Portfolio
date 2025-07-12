import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import con from '../image/cont2.png';
import NavBar from '../components/navbar';

function Home() {
  const [explodeOrb, setExplodeOrb] = useState(''); // '', 'orb1', 'orb2', 'orb3'
  const [fadeOut, setFadeOut] = useState(false);
   const [fadeOut1, setFadeOut1] = useState(false);
  const navigate = useNavigate();

  function handleClick(orbId) {
    setExplodeOrb(orbId);
    setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    setTimeout(() => {
      navigate('/about');
    }, 2000);
  }
  function handleClick1(orbId) {
    setExplodeOrb(orbId);
    setTimeout(() => {
      setFadeOut1(true);
    }, 1200);

    setTimeout(() => {
      navigate('/projects');
    }, 2000);
  }
  function handleClick2(orbId) {
    setExplodeOrb(orbId);
    setTimeout(() => {
      setFadeOut1(true);
    }, 1200);

    setTimeout(() => {
      navigate('/contact');
    }, 2000);
  }

  return (
    <>
      <div className="outerShell">
        <div className="contentWrapper">
          <NavBar/>
          <div className="heading">
            {/*<h2 className="hii">Hey there!</h2>
            <h3 className="pp">I am N Mani Naga Vignesh</h3>
            <h2 className='p1'>A passionate MERN stack Developer</h2>*/}
            <img src={con} alt='viggs' className='fitIt1' />
          </div>
          {/* Show orbs only on desktop/tablet */}
          <div className="container desktop-orbs">
            <div className="orbit1">
              <div className={`orb2 ${explodeOrb === 'orb2' ? 'explode' : ''}`}>
                <button className="button1" onClick={() => handleClick2('orb2')}><div className={`inner ${explodeOrb==='orb2'?'fade':''}`}>Contact Me</div></button>
              </div>
              <div className={`orb3 ${explodeOrb === 'orb3' ? 'explode' : ''}`}>
                <button className="button1" onClick={() => handleClick1('orb3')}><div className={`inner ${explodeOrb==='orb3'?'fade':''}`}>Projects</div></button>
              </div>
              <div className={`orb1 ${explodeOrb === 'orb1' ? 'explode' : ''}`}>
                <button className="button1" onClick={() => handleClick('orb1')}><div className={`inner ${explodeOrb==='orb1'?'fade':''}`}>About Me</div></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Smooth fade transition */}
      <div className={`transition-overlay ${fadeOut ? 'show' : ''}`}></div>
      <div className={`transition-overlay1 ${fadeOut1 ? 'show' : ''}`}></div>
    </>
  );
}

export default Home;
