import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import FlipCard from "../FlipCard/FlipCard";
import { capitalizeFirstLetter } from '../../utils/helpers';
import reactIcon from "../../assets/icons/React Native-48-96px/icons8-react-native-48.png"
import npmIcon from "../../assets/icons/NPM-48-96px/icons8-npm-48.png"
import htmlIcon from "../../assets/icons/Html 5-48-96px/icons8-html-5-48.png"
import arcade from "../../assets/card/arcade.jpg";
import space from "../../assets/card/nasa.jpg";
import herokuIcon from "../../assets/icons/Heroku-48-96px/icons8-heroku-48.png";
import apiIcon from "../../assets/icons/API-48-96px/icons8-api-48.png";
import cssIcon from "../../assets/icons/CSS3-48-96px/icons8-css3-48.png";
import jsIcon from "../../assets/icons/JavaScript-48-96px/icons8-javascript-48.png";
import phone from "../../assets/card/phone.jpg";
import Footer from '../Footer/Footer';


function Portfolio() {
  const currentTab= {
    name: "portfolio",
    description: "A brief snapshot of some of my diverse work"
  };

  const cards = [
    {
      id: "1",
      variant: "click",
      front: "Clicker in Space",
      background:space,
      back: "This react application is a memory game of space images. Don't click the same image twice and try to beat your high score!  Each image listens for click events. Every time an image is clicked, the images shuffle in a random order.",
      icon1:npmIcon,
      icon2: reactIcon,
      icon3: herokuIcon,
      gitHub:"https://github.com/KristenDLR/clickerinspace",
      link:"https://clickerinspace.herokuapp.com/"
    },
    {
      id: "2",
      variant: "click",
      front: "Giftastic",
      background:phone,
      back: "This application incorporates API data from giphy.com to create a personal GIF archive. It allows user to search GIFs, ratings, and saves the users search history for later use. Access the history through the generated buttons the user is presented with the top 10 search results of their favorite TV shows.",
      icon1:apiIcon,
      icon2: jsIcon,
      icon3: cssIcon,
      gitHub:"https://github.com/KristenDLR/GifTastic",
      link:"https://kristendlr.github.io/GifTastic/"
    },
    {
      id: "3",
      variant: "click",
      front: "Code Quiz",
      background:arcade,
      back: "User clicks through an interactive coding quiz then enters initials to save the high score before resetting and starting over.",
      icon1:htmlIcon,
      icon2: jsIcon,
      icon3: cssIcon,
      gitHub:"https://github.com/KristenDLR/quiz-game",
      link:"https://kristendlr.github.io/quiz-game/"
    },{
      id: "4",
      variant: "click",
      front: "Code Quiz",
      background:arcade,
      back: "This app feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes. Timed code quiz that's made up of multiple-choice questions.",
      icon1:htmlIcon,
      icon2: jsIcon,
      icon3: cssIcon,
      gitHub:"https://github.com/KristenDLR/quiz-game",
      link:"https://kristendlr.github.io/quiz-game/"
    },   
  ];

  return (
 
    <section>
    <h1 id="home2">{capitalizeFirstLetter(currentTab.name)}</h1>
    <div className="containerP">
      <div className="row h-100">
        <div style={{display: 'flex', flexWrap: 'wrap'}} className="col">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card}  style={{flex: 1}}/>
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </section>

  )
}

export default Portfolio;
