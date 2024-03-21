import React  from "react";
import './Hero.css'

const Hero =() => {
return <section className="hero-container">
<div className="hero-content">
 <h3>Its Me,</h3>   
 <h2>Muhammad Aditya Rinaldi</h2>   
 <h3>I'm Full Stack Developer</h3>
 <p>Ngoding aja dulu,jago belakangan #developer magang</p>

 </div>


<div className="hero-img">
    <div>
<div className="tech-icon">
    <img className="logoc" src="./assest/image/javascript.png" />
</div>
<img src="./assest/image/pictaboutme.png"/>
</div>

<div className="atur">
<div className="tech-icon">
    <img className="logoc" src="./assest/image/nodejs.png"/>
</div>

<div className="tech-icon">
    <img className="logoc" src="./assest/image/react.png"/>
</div>

<div className="tech-icon">
    <img className="logoc" src="./assest/image/nestjs.png"/>
</div>
</div>





</div>
</section>
    


}

export default Hero;