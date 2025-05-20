import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import img1 from './assets/img1.jpg';


function App() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_portfolio',    // ⬅️ Replace with your actual service ID
        'template_a52wijo',   // ⬅️ Replace with your actual template ID
        form.current,
        'WhZJUmwzwWxuFi0u5'     // ⬅️ Replace with your actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
      <Navbar />

      <div id="Home" className="container2">
      <div className="container2">
  <p>Hi There, I'm Rayen Louati</p>
  <img src={img1} alt="photo" className="image" />
</div>

      </div>

      <section id="About" className="section">
        <div className="container">
          <h2 className="mb-4">About me</h2>
          <p>
          Rayen Louati | Computer Science Student | Passionate about AI, Web
Development, and Databases
Motivated computer science student with a strong background in web
development and a deep interest in AI-driven solutions.
I am seeking opportunities to apply my technical skills to create efficient and
practical technological solutions
          </p>
        </div>
      </section>

      <section id="Skills" className="section">
        <div className="container">
          <h2 className="mb-4">Skills</h2>
          <p>
          Data Analysis: PCA, K-means clustering,
Statistics<br></br>

Machine Learning: KNN, Decision Trees<br></br>
Data Visualization: Pandas, Matplotlib<br></br>
Programming: Python, C, Java<br></br>
Computer Network Modeling<br></br>
Web Development: HTML, XML, CSS,
JavaScript, React js,JSON, PHP<br></br>
Database Design: UML, Entity-Relationship
(ER) Diagrams, SQL, Hive
<br></br>
Software Project Management: Agile
Methodology
          </p>
        </div>
      </section>

      <section id="Projects" className="section">
        <div className="container">
          <h2 className="mb-4">My Projects</h2>
          <div className="row">
          
            <ProjectCard
              title="Smart Schedule App"
              description="A study planner with calendar and reminders."
              image="https://via.placeholder.com/300"
              link="https://github.com/rayen/smart-schedule"
            />
            <ProjectCard
              title="Portfolio Website"
              description="This very portfolio showcasing my work and skills."
              image="https://via.placeholder.com/300"
              link=""
            />
          </div>
        </div>
      </section>

      <section id="Contact" className="section py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Contact Me</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label text-white">Your Name</label>
                  <input type="text" id="name" name="user_name" className="form-control bg-dark text-white" placeholder="Enter your name" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label text-white">Your Email</label>
                  <input type="email" id="email" name="user_email" className="form-control bg-dark text-white" placeholder="Enter your email" required />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message" className="form-label text-white">Message</label>
                  <textarea id="message" name="message" className="form-control bg-dark text-white" rows="5" placeholder="Write your message" required></textarea>
                </div>
                <input type="hidden" name="time" value={new Date().toLocaleString()} />


                <button type="submit" className="btn btn-primary w-100">Send Message</button>
                {status && <p className="mt-3 text-white text-center">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2024 Rayen Louati. All rights reserved.</p>
        </div>
      </footer>

      {/* External Bootstrap (only if needed) */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    </>
  );
}

export default App;
