import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mudassar Shahzad </span>
            from <span className="purple">Kahuta, Pakistan</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>About Me</strong>
            <br />
            Hello! I'm Mudassar Shahzad, a passionate and driven JavaScript and React developer based in Kahuta, Pakistan. At 19 years old, I'm dedicated to crafting responsive and dynamic web applications that provide seamless user experiences.
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>My Journey</strong>
            <br />
            From a young age, I've been fascinated by technology and its potential to transform our lives. This curiosity led me to dive deep into web development, where I discovered my love for coding and problem-solving. Over the years, I've honed my skills in JavaScript, React.js, HTML, CSS, and responsive design, striving to stay ahead in this ever-evolving field.
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>What I Do</strong>
            <br />
            I specialize in building modern, responsive web applications. Whether it's creating interactive user interfaces with React or ensuring a site looks great on any device, I'm committed to delivering high-quality solutions that meet the needs of users and clients alike.
          </p>
         
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
