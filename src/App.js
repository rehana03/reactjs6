import React from 'react';
import './App.css';
import profileImage from './Screenshot 2023-10-29 134050.png'; 

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>My Portfolio</h1>
      </header>
      <main className="App-main">
        <section className="App-section" id="about">
          <h2>About Me</h2>
          <p>I'm Rehana Thogarakunta.</p>
          <p>I am a student in the penultimate year of my Computer Science and Engineering program, where I am specializing in Artificial Intelligence and Machine Learning at Vellore Institute of Technology, Andhra Pradesh.</p>
          <p> I had completed my schooling at Sri Sai Vidyanikethan High School in Badvel.</p>
          <p> I had completed my Intermediate studies at Narayana College in Vijayawada.</p>
        </section>
        <section className="App-section" id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About leaf disease detection using CNN</p>
            <li>Project 2: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About home automation</p>
            <li>Project 3: <button onClick={() => window.location.href = '#'}>Demo</button></li>
            <p>About Bird Spieces Classification (upto 525 spieces)</p>
          </ul>
        </section>
        <section className="App-section" id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </section>
        <section className="App-section colorful" id="contact">
          <h2>Contact Me</h2>
          <p>Contact me: <a href="mailto:thogarakuntarehana@gmail.com">thogarakuntarehana@gmail.com</a></p>
          <p>Phone Number: 9652605478</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;