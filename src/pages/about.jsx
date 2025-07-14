import '../css/about.css';
import meImage from '../image/me21.PNG';
import reacct from '../image/react.png';
import mysql from '../image/mysql.png';
import python from '../image/python.png';
import node from '../image/node.png';
import web from '../image/pngegg.png';
import web1 from '../image/pngegg1.png';
import web2 from '../image/pngegg2.png';
import mongo from '../image/mongo.png';
import exp from '../image/express.png';

function Aboutme() {
  return (
    <div className="about-background">
      <div className="about-container">

        {/* TOP SECTION */}
        <div className="about-top">
          <div className="about-text">
            <h2>Hello, I'm Vignesh</h2>
            <p>
              I have completed my Bachelor of Technology (B.Tech) in Electrical and Electronics 
              Engineering from Amrita School of Engineering, Coimbatore. Though my academic foundation
              lies in core engineering disciplines, I discovered a deep interest in web development during
              my college years. Over time, I have cultivated strong skills in full-stack development,
              working across both frontend and backend technologies to build modern, responsive, and
              user-centric applications. I'm passionate about creating meaningful digital experiences 
              and continuously strive to stay updated with emerging tools and frameworks through 
              hands-on practice, collaboration, and real-world project development.
            </p>
            <p>
              My aim right now is to work in a dynamic and innovative environment where I can apply my skills in full-stack development 
              to create impactful digital solutions. I aim to contribute to the growth and success of an organization 
              while continuously evolving as a developer by embracing new technologies, collaborating with cross-functional teams,
              and taking on challenging responsibilities that enhance both my technical and professional capabilities.
            </p>

            <div className="about-section">
              <h4>Education</h4>
              <ul>
                <li>B.Tech EEE – Amrita University – 6.79 GPA (Ongoing)</li>
                <li>12th – Bhashyam Junior College, Gorantla – 92.2%</li>
                <li>10th – Bhashyam High School, Guntur – 9.8 GPA</li>
              </ul>
            </div>
          </div>

          <div className="about-image">
            <img src={meImage} alt="Vignesh" className="profile-pic" />
          </div>
        </div>

        {/* SOFT SKILLS & LOCATION */}
        <div className="about-extras">
          <div className="extra-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication & Teamwork</li>
              <li>Leadership</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>

          <div className="extra-card">
            <h3>From</h3>
            <p>Guntur, Andhra Pradesh</p>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="tech-section">
  <h3>Technologies I Use</h3>
  <div className="tech-grid">
    <div className="tech-item">
      <img src={reacct} alt="React" />
      <p>React</p>
    </div>
    <div className="tech-item">
      <img src={mysql} alt="MySQL" />
      <p>MySQL</p>
    </div>
    <div className="tech-item">
      <img src={python} alt="Python" />
      <p>Python</p>
    </div>
    <div className="tech-item">
      <img src={node} alt="Node.js" />
      <p>Node.js</p>
    </div>
    <div className="tech-item">
      <img src={web} alt="HTML" />
      <p>HTML</p>
    </div>
    <div className="tech-item">
      <img src={web1} alt="CSS" />
      <p>CSS</p>
    </div>
    <div className="tech-item">
      <img src={web2} alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="tech-item">
      <img src={mongo} alt="MongoDB" />
      <p>MongoDB</p>
    </div>
    <div className="tech-item">
      <img src={exp} alt="Express" />
      <p>Express</p>
    </div>
  </div>
</div>
</div>
</div>
  );
}

export default Aboutme;
