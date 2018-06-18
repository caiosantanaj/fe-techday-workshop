import React  from 'react';

import caioPhoto from './mypphoto.jpeg';
import './styles.css';


const Header = () => (
  <header>
    <div className={"header-container"}>
      <img src={caioPhoto} alt={""} className="header-photo"/>
      <h1>Caio Jacobina</h1>
      <p>Hi, my name is Caio Jacobina and I'm a Student at University of Aveiro.
        <br/>
        This portfolio was made in Mindera Frontend Tech Day using React and GraphQL.
        <br/>
        These are just two of the technologies that I have been learning! 
        I'm currently looking for an opportunity in Aveiro/Porto, give me a call!</p>
      <div className={"header-social-container"}>
        <a href={"https://www.facebook.com/caiosantanaj"} target="_blank"><i className="fab fa-facebook-f"/> Facebook</a>
        <a href={"https://www.linkedin.com/in/caiosantanaj"} target="_blank"><i className="fab fa-linkedin-in"/> LinkedIn</a>
        <a href={"https://github.com/caiosantanaj/"} target="_blank"><i className="fab fa-github"/> GitHub</a>
      </div>
    </div>
  </header>
);

export default Header;
