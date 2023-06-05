import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Container } from "@mui/material";
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function About() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);
  }, []);

  return (
    <Container className="about">
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">
            <InfoIcon style={{marginRight:"10px",lineHeight:"1.0",fontSize:"34px"}} />About Us
          </div>
          <div className="collapsible-body">
            <span>
            Explore the world of Korean cinema through a dynamic film website. Discover a curated selection of Korean movies, ranging from acclaimed classics to hidden treasures. Dive into the captivating narratives and unique storytelling styles that have made Korean films renowned worldwide. With a user-friendly interface, this website invites both avid fans and curious newcomers to delve into the cinematic brilliance of Korea's talented filmmakers. Immerse yourself in the artistry and cultural richness of Korean cinema as you embark on an unforgettable cinematic journey
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <HelpIcon style={{marginRight:"10px",lineHeight:"1.0",fontSize:"34px"}}/>How to watch our movie
          </div>
          <div className="collapsible-body">
            <span>
            To enjoy a film on our platform, you can effortlessly locate your desired movie by either searching for it directly or exploring our extensive movie collection. Once you've identified the movie of your choice, simply click on it to access its dedicated page. On that page, you'll have various options available to you, including renting or purchasing the movie outright. Additionally, for uninterrupted access to our entire movie library, you can opt for our premium subscription service.
            </span>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <DoubleArrowIcon style={{marginRight:"10px",lineHeight:"1.0",fontSize:"34px"}}/>If you need help !!!
          </div>
          <div className="collapsible-body">
            <span>
            Should you encounter any difficulties while using our website or require assistance with any matter, we encourage you to reach out to our dedicated customer support team without hesitation. Our team is available round-the-clock and can be contacted through phone, email, or live chat. Rest assured, we are committed to providing timely and effective support to address your concerns and ensure your experience on our site is seamless.
            </span>
          </div>
        </li>
      </ul>
    </Container>
  );
}

export default About;