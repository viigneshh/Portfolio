import '../css/contact.css';

function Contact() {
  return (
    <div className="contact-background">
      <div className="contact-lowback">
        <h1 className="contact-heading">Let's Connect</h1>

        <div className="contact-grid">
          {/* GitHub */}
          <div className="contact-card animate">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
            <h2 className="title">GitHub</h2>
            <p className="description">Check out my projects and repositories.</p>
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="link">Visit</a>
          </div>

          {/* LinkedIn */}
          <div className="contact-card animate">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" />
            <h2 className="title">LinkedIn</h2>
            <p className="description">Connect with me professionally.</p>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="link">Visit</a>
          </div>

          {/* Instagram */}
          <div className="contact-card animate">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="icon" />
            <h2 className="title">Instagram</h2>
            <p className="description">Follow me for design inspirations and stories.</p>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="link">Visit</a>
          </div>

          {/* Email */}
          <div className="contact-card animate">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="icon" />
            <h2 className="title">Email</h2>
            <p className="description">Send me a message anytime.</p>
            <a href="mailto:your.email@example.com" className="link">Send Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
