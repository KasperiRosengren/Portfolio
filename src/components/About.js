// client/src/components/Navbar.js
import React from "react";


const About = () =>{
       return (
        <div id="about">
            <h2>About me</h2>
            <div className="about" >
                <div className="aboutIntro">
                    <h2>Hi, I'm Kasperi</h2>
                    <h2>An aspiring programmer</h2>
                    <p>
                        I'm currently studying information technology at Oulu University of Applied Sciences (3rd year).
                    </p>
                    <p>
                        I'm interested in multiple different programming fields especially everything related to IoT-development, from embedded software to frontend development. So far I have
                        some excperience from full stack, embedded programming and game development.
                    </p>

                    <p>
                        On my free time I often listen to music while either practising programming or
                        doing some light gaming.
                    </p>
                    
                </div>
                <img src="images/projectimages/face.jpg" className="aboutPicture"/>
            </div>
        </div>
    );
}

export default About
