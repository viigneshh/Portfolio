import '../css/pro.css';

function Projects() {
  return (
    <div className="project-background">
      <div className="project-lowback">
        <h1 className="project-heading">My Projects</h1>

        <div className="project-grid">
          {/* 🔥 Featured: ColoQ */}
          <div className="project-card animate">
            <h2 className="title">ColoQ – Full-Stack Design Token Platform</h2>
            <p className="tags">React.js • Node.js • MySQL • JWT • Role-Based Access</p>
            <p className="description">
              ColoQ is a robust SaaS platform that allows frontend teams to collaboratively manage, preview, and export design tokens (colors, fonts, spacing, shadows, etc.) in real-time. It includes version control, token organization, role-based permissions (admin/editor/viewer), and mobile/tablet live previews. Built from scratch using the MERN stack (with MySQL instead of Mongo), it's deployed and production-ready.
            </p>
            <ul className="features">
              <li>Live previews for all token types (color, spacing, shadows)</li>
              <li>Drag-and-drop section builder with custom style editor</li>
              <li>Multi-user project system with granular access roles</li>
              <li>Full JWT auth, protected routes, and MySQL DB design</li>
            </ul>
            <div className="links">
              
              <a href="https://github.com/viigneshh" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* 🛠️ Ongoing: Portfolio Website Builder */}
          <div className="project-card animate">
            <h2 className="title">Portfolio Website Builder</h2>
            <p className="tags">React • CSS Modules • Responsive Design</p>
            <p className="description">
              A customizable portfolio website builder with multiple layout templates, drag-and-drop sections, and live responsive previews. Currently integrating advanced publish and export functionality.
            </p>
            <ul className="features">
              <li>Drag-and-drop UI with theme customization</li>
              <li>Live desktop, tablet, mobile previews</li>
              <li>Section reordering and styling controls</li>
            </ul>
           
          </div>

          {/* 🎧 MongoDB-Based Project */}
          <div className="project-card animate">
            <h2 className="title">Music Player App</h2>
            <p className="tags">React • Node.js • MongoDB • JWT Auth</p>
            <p className="description">
              A fully responsive music player where users can sign up, create playlists, and stream tracks. Built using the MERN stack with MongoDB, featuring secure login and playlist management.
            </p>
            <ul className="features">
              <li>JWT-based authentication and user sessions</li>
              <li>MongoDB for track and playlist storage</li>
              <li>Responsive interface with play controls</li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
