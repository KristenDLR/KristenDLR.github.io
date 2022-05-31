import { React } from 'react';
import me from '../../assets/large/About/mePurple.jpg'
import "./styles.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';


function About() {

 
  return (

   <Container fluid>
     <Row style={{ marginLeft:'20px'}}>
      <Col>
      <h1 id="about">About Me</h1>
      <p style={{ color:'white'}}>I am a Web Developer working as a Senior Learning Assistant for 2U Trilogy Instructional Program, with strong analytical skills and a desire to work with emerging technologies. Purposeful and self-motivated with proficiency in JavaScript, HTML, CSS, and responsive web development with cross-browser compatibility, as well as a track record of learning new technologies. Have worked on producing high-quality, responsive design and exceptional user experience with a focus on detailed documentation, establishing multi-device compatibility, and exceptional user interface experience with efficient product design.
. Proficient in the following areas:</p>
      <ul style={{ color:'white'}}>
        <li><FontAwesomeIcon icon={faTerminal} /> HTML</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Wireframe</li>
        <li> <FontAwesomeIcon icon={faTerminal} /> CSS/SASS</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Jacascript</li>
        <li><FontAwesomeIcon icon={faTerminal} /> React (Redux, Es6)</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Handlebars.js</li>
        <li><FontAwesomeIcon icon={faTerminal} /> REST API</li>
        <li><FontAwesomeIcon icon={faTerminal} /> AJAX</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Node</li>
        <li><FontAwesomeIcon icon={faTerminal} /> MySQL</li>
        <li><FontAwesomeIcon icon={faTerminal} /> MongoDB</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Express</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Github- version control</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Object-Relational Mapping</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Heroku</li>
        <li><FontAwesomeIcon icon={faTerminal} /> AWS</li>
      </ul>
      <p style={{ color:'white'}}>I take great care to ensure all projects represent the most viable product by providing high quality, responsive, project tested on a wide range of devices. I consider well document and easily-maintained projects enhance website functionality for proper growth.</p>
       </Col>
       <Col>
       <div className="containerAbout">
          <img src={me} alt="Kristen De La Rosa" className="profPic"/>
       </div>
       </Col>
    </Row>
    <Footer></Footer>
  </Container>
 

  );
}

export default About;
