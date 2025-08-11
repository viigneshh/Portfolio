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
              
              <a href="https://github.com/viigneshh/FullStackApp" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* 🛠️ Ongoing: Portfolio Website Builder */}
                  <div className="project-card animate">
          <h2 className="title">Swiggy Clone</h2>
          <p className="tags">React • Vite • Tailwind CSS • Redux</p>
          <p className="description">
            A full-featured Swiggy clone built with React and Vite, showcasing real-time food ordering UI, dynamic menus, and cart management using Redux Toolkit. Built for performance with modern state management and Tailwind-based styling.
          </p>
          <ul className="features">
            <li>Live restaurant menu with category filtering</li>
            <li>Cart with add/remove and total calculation using Redux</li>
            <li>Responsive layout with modern Tailwind UI</li>
            <li>Dynamic routing with React Router v6</li>
            <li>Optimized component structure for scalability</li>
          </ul>
          <div className="links">
              
              <a href="https://github.com/viigneshh/Clone_FoodApp" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
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
