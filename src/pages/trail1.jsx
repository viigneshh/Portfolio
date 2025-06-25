import '../App.css';

function Home() {
  return (
    <div>
      <div className="outerShell">
        <div className="heading">
          <h2 className="hii">Hii!</h2>
          <p className="pp">I am N Mani Naga Vignesh</p>
          <p className="fitIt">I am an Aspiring MERN stack developer</p>
        </div>

        {/* Orb Animation */}
        <div className="orb-container">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="orb orb3"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
