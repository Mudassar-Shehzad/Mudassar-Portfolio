import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snakerushImage from '../../Assets/Projects/snakerush.png.png';
import tictactoeImage from '../../Assets/Projects/tictactoe.png';
import chessImage from '../../Assets/Projects/chess.png';
// Import your e-commerce project images here
import bookstoreImage from '../../Assets/BiblioPhile.png';
// Import your Facebook app image here
import facebookAppImage from '../../Assets/FacebookPIc.png';
const snakerushDescription = `"SnakeRush" is a revitalization of the classic Snake game, integrating modern web development technologies while preserving the core mechanics that made the original game so addictive. Developed using HTML, CSS, and JavaScript, this project brings back the retro charm of Snake with several enhancements. Players control the snake, guiding it around the screen to consume food and grow longer. However, with each successful bite, the challenge intensifies as the snake’s increasing length requires more skill to avoid collisions with itself or the screen's boundaries.

What sets "SnakeRush" apart is its dynamic and responsive design, which ensures smooth gameplay across devices ranging from mobile phones to desktop browsers. Whether you’re on the go or sitting at your computer, the game adjusts seamlessly to provide a consistent experience. The visuals have been enhanced for the modern web, featuring a sleek, minimalistic interface, smooth transitions, and vibrant colors. Players also have control over the speed settings, allowing them to tailor the pace to their personal preference, whether they want a slow, relaxed game or a fast-paced, high-intensity challenge.

The project code is modular and well-organized, following best practices in JavaScript to demonstrate clean code that is easy to read, maintain, and extend. "SnakeRush" is an excellent showcase of how a classic arcade game can be brought into the 21st century with modern development tools and techniques, offering both nostalgia and innovation in equal measure.`
const tictactoeDescription = `This "Tic-Tac-Toe" project brings the timeless strategy game to the web with a sleek, minimalist interface and highly interactive design. Built with HTML, CSS, and JavaScript, the project provides both single-player and multiplayer modes, allowing players to either challenge a friend or compete against an AI opponent. The AI is carefully crafted to offer a balanced experience, providing an enjoyable challenge for players of all skill levels. Beginners can appreciate a fair game, while experienced players will still find the AI tough enough to engage them.

The game’s UI is simple yet intuitive, offering an interactive and dynamic experience as the board updates instantly with each player’s move. Whether playing on a small mobile screen or a large desktop monitor, the layout is fully responsive, ensuring that the game is accessible and easy to play across all device sizes. Behind the scenes, the game logic is efficiently structured, covering all possible win conditions, ties, and edge cases with smooth transitions between states.

In addition to the basic gameplay, the project includes features such as a restart button and move tracking, ensuring that players can easily reset and start new games. This project not only showcases solid JavaScript and DOM manipulation skills but also highlights the importance of responsive design and clean, intuitive UI/UX. It’s a perfect demonstration of how a simple game can be enhanced with modern web design techniques and coding best practices.

`
const chessDescription = `"Chess-Conqueror" is a feature-rich, fully functional chess game that allows users to engage in the timeless strategy of chess, either against a human opponent or a challenging AI. Developed with HTML, CSS, and JavaScript, this project adheres to all official chess rules, offering players the ability to perform advanced maneuvers such as castling, en passant, and pawn promotion. The game is built with a responsive design, ensuring the chessboard is visually clear and accessible whether played on a mobile device or a desktop browser.

The AI opponent is designed to evaluate moves and provide strategic responses in real-time, offering a challenging experience even for seasoned chess players. One of the most significant technical achievements of this project is the move validation system, which rigorously ensures that all moves comply with standard chess rules. Whether it’s preventing illegal moves or responding to checkmates and stalemates, the game’s logic is highly reliable, providing an accurate and fair game every time.

From a performance perspective, the game’s engine is optimized to handle the computational demands of move analysis, ensuring that gameplay remains smooth and responsive. The user interface is clean and user-friendly, allowing players to focus on the game without distractions. This project is not only a demonstration of advanced JavaScript skills but also a testament to the ability to manage complex game logic, offering both a polished interface and a deeply engaging experience for players.`
const bibiophileDescription =`"Biblio-Phile" is a sophisticated e-commerce platform designed for book lovers, offering a seamless and intuitive shopping experience for those looking to browse, purchase, and download PDF books. The platform is designed with a clean and modern interface, making navigation effortless as users explore books by genre, author, or title. Built using a full stack of technologies, the project demonstrates proficiency in both frontend and backend development, seamlessly integrating user authentication, shopping cart functionality, and secure payment processing.

One of the standout features of "Biblio-Phile" is its personalized recommendation system, which suggests books to users based on their browsing history and preferences. This intelligent feature enhances the user experience by making tailored suggestions that keep users engaged and coming back for more. The site is fully responsive, ensuring that users can browse, purchase, and download books from any device, whether it’s a mobile phone, tablet, or desktop computer, without any compromise in functionality or ease of use.

The platform is also optimized for scalability and security, ensuring that as the user base grows, the performance remains smooth and the checkout process secure. With features like order tracking, wish lists, and detailed book previews, "Biblio-Phile" offers everything users need for an enjoyable online shopping experience. This project highlights advanced skills in full-stack development, with particular attention to responsive design, data security, and user-centric functionality.`

const facebookDescription = `The "Facebook Clone" project is a comprehensive recreation of the core features of the popular social media platform, built using React and Firebase. This project allows users to sign up, log in, and interact with posts by liking, commenting, and sharing, effectively replicating the key elements of the Facebook user experience. One of the standout features is the real-time chat functionality, powered by Firebase, which enables users to engage in live conversations with friends. Additionally, users can update their profile, follow other users, and receive real-time notifications for interactions, just like in the real Facebook application.

The social feed, profile pages, and notifications are all dynamically rendered, offering an interactive, real-time experience. The project showcases advanced integration of React for frontend development with Firebase’s backend services, leveraging Firestore for real-time data synchronization. Whether it's new posts, likes, comments, or shares, updates happen instantly across all users, thanks to Firestore’s real-time database capabilities.

The UI design closely mimics the familiar layout of Facebook, ensuring that users can navigate the platform intuitively. With features like live updates, cloud storage integration, and Firebase authentication, the project also demonstrates how modern web applications can handle complex, real-time functionalities while maintaining smooth performance. This Facebook clone is an excellent demonstration of the ability to combine React and Firebase to create a fully functional, scalable social media platform.`
function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Games');

  const renderGames = () => (
    <>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={snakerushImage}
          isBlog={false}
          title="SnakeRush"
          description={snakerushDescription}
          ghLink="https://github.com/Mudassar-Shehzad/Snake-Game"
          demoLink="https://snake-game-git-main-mudassar-shehzads-projects.vercel.app"
          tools={['Html', 'Css', 'Javascript']}
        />
      </Col>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={tictactoeImage}
          isBlog={false}
          title="Tic-Tac-Toe"
          description={tictactoeDescription}
          ghLink="https://github.com/Mudassar-Shehzad/Tic-Tac-Toe"
          demoLink="https://tic-tac-toe-three-weld.vercel.app"
          tools={['Html', 'Css', 'Javascript']}

        />
      </Col>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={chessImage}
          isBlog={false}
          title="Chess-Conqueror"
          description={chessDescription}
          ghLink="https://github.com/Mudassar-Shehzad/Chess-Conqueror-"
          demoLink="https://chess-conqueror.vercel.app"    
          tools={['Html', 'Css', 'Javascript']}

        />
      </Col>
    </>
  );

  const renderEcommerce = () => (
    <>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={bookstoreImage}
          isBlog={false}
          title="Biblio-Phile"
          description={bibiophileDescription}
          ghLink="https://github.com/Mudassar-Shehzad/Biblio-phile-"
          demoLink="https://ecommerce-sand-eta.vercel.app"
          tools={['React', 'Tailwind Css', 'Firebase']}

        />
      </Col>
    </>
  );

  const renderFacebookApp = () => (
    <>
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={facebookAppImage}
          isBlog={false}
          title="Facebook Clone"
          description={facebookDescription}
          ghLink="https://github.com/Mudassar-Shehzad/facebook"
          demoLink="https://facebook-beryl.vercel.app"
          tools={['React', 'Tailwind Css', 'Firebase']}

        />
      </Col>
    </>
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <ButtonGroup aria-label="Project categories" className="mb-4">
          <Button 
            variant={selectedCategory === 'Games' ? 'primary' : 'outline-primary'} 
            onClick={() => setSelectedCategory('Games')}>
            Games
          </Button>
          <Button 
            variant={selectedCategory === 'E-commerce' ? 'primary' : 'outline-primary'} 
            onClick={() => setSelectedCategory('E-commerce')}>
            E-commerce
          </Button>
          <Button 
            variant={selectedCategory === 'Facebook App' ? 'primary' : 'outline-primary'} 
            onClick={() => setSelectedCategory('Facebook App')}>
            App
          </Button>
        </ButtonGroup>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {selectedCategory === 'Games' && renderGames()}
          {selectedCategory === 'E-commerce' && renderEcommerce()}
          {selectedCategory === 'Facebook App' && renderFacebookApp()}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
