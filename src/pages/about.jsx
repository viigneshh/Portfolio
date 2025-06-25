import '../css/about.css';
import meImage from '../image/me21.png';

function Aboutme() {
  return (
    <div>
      <div className="background">
        <div className="lowback"></div>

        <div className="contain">
          <h2>Hello, I'm Vignesh</h2>
          <p>
            I'm currently pursuing a B.Tech in Electrical and Electronics Engineering at Amrita School of Engineering, Coimbatore.
            I'm passionate about web development and love working with full-stack technologies.
          </p>

          <h4>Career Objective</h4>
          <p>
            To be part of an organization where I can fully utilize my skills and knowledge,
            contributing meaningfully to its success while continuously growing as an individual.
          </p>

          <h4>Education</h4>
          <ul>
            <li>B.Tech EEE – Amrita University – 6.79 GPA (Ongoing)</li>
            <li>12th – Bhashyam Junior College, Gorantla – 92.2%</li>
            <li>10th – Bhashyam High School, Guntur – 9.8 GPA</li>
          </ul>

          <h4>Technical Skills</h4>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript, React.js</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MySQL, MongoDB</li>
            <li>Other: Git, Python</li>
          </ul>
        </div>

        <div className="contain1">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication & Teamwork</li>
            <li>Leadership</li>
            <li>Time Management</li>
            <li>Problem Solving</li>
          </ul>

          <h3>From</h3>
          <p>Guntur, Andhra Pradesh</p>
        </div>

        <div className="image">
          <img src={meImage} alt="Vignesh" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
