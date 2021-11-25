// client/src/components/Projects.js
import React, {useState} from "react";
import Project from "./Project";



const tecLog={
  PHP: 'images/technologylogos/php_tp.png',
  React: 'images/technologylogos/react_tp.png',
  Flask: 'images/technologylogos/flask_tp1.png',
  MySQL: 'images/technologylogos/mysql_tp1.png',
  HTML: 'images/technologylogos/html_tp1.png',
  CSS: 'images/technologylogos/css_tp1.png',
  MQTT: 'images/technologylogos/mqtt_tp.png',
  CPP: 'images/technologylogos/cpp_tp.png'
}


const projects = [
    {
      id: 1,
      image: 'images/projectimages/SmartHomeDevices.jpg',
      title: 'SmartHome',
      //technologies: ['React', 'Flask', 'MySQL', 'MQTT', 'CPP', 'HTML', 'CSS'],
      technologies:[tecLog.CPP, tecLog.React, tecLog.Flask, tecLog.MySQL, tecLog.MQTT, tecLog.HTML, tecLog.CSS],
      github: 'https://github.com/KasperiRosengren/SmartHome',
      youtube: "https://www.youtube.com/playlist?list=PL872ra4gWyJHHP2PqL7meYm0NWhReBfDC",
      demosite: 'no link',
      poster: 'no link',
      presentation: 'no link',
      description:
      <div>
        <p>The aim of the project was to have a web-interface to control and monitor various home appliances and lights.</p>
        <p>The access to devices is role based. Role accesses are broken into weekdays and hours for each individual room, or for the whole building.</p>
        <p>There are multiple different access types but mainly the "Can read device data and/or can control devices" are used.</p>
        <p>At the moment there is support for only ledlights, temperature/humidity sensor and for anything that can be controlled by a relay.</p>
        <p>This was my first time using React and Flask so most of the time on the project was used on learning new things and what both of them are capable of.
          For the database I used MySQL, which I already knew the basics of.
        </p>
      </div>
    },
    {
      id: 2,
      image: 'images/projectimages/SmartLock.jpg',
      title: 'SmartLock',
      //technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'CPP'],
      technologies:[tecLog.CPP, tecLog.MySQL, tecLog.HTML, tecLog.CSS, tecLog.PHP],
      github: 'https://github.com/KasperiRosengren/Projekti1_V2',
      youtube: "https://www.youtube.com/playlist?list=PL872ra4gWyJERAhs_GQ0mQ5uYIt3bFTPQ",
      demosite: 'no link',
      poster: 'files/posters/smartlock.pdf',
      presentation: 'no link',
      description:
      <div>
        <p>
          The aim of the project was to learn some basic full stack technologies by controlling wireless device through
          web interface and by sending data from said device to small database.
        </p>
        <p>
          We ended up using ESP-32 as the microntroller since it has built in Wi-Fi and two usable cores. The device had RFID reader and a servo acting as the lock.
          Each RFID tag had an unique owner
        </p>
      </div>
    },
    {
      id: 3,
      image: 'images/projectimages/BTRCCar.jpg',
      title: 'BT RC Car',
      //technologies: ['CPP'],
      technologies:[tecLog.CPP],
      github: 'no link',
      youtube: "https://youtu.be/y8KYhsTDJ-I",
      demosite: 'no link',
      poster: 'no link',
      presentation: 'no link',
      description:
      <div>
        <p>This was the first project done in school and the aim was to learn more about programming and Arduinos.</p>
        <p>We had one arduino running the dc-motors on the car, one arduino running led lights based on the cars tires rotation speed and the cars angle. The bluetooth controller had another Arduino.</p>
      </div>
    },
    {
      id: 4,
      image: 'images/projectimages/SmartBackPack.jpg',
      title: 'Smart backpack',
      //technologies: ['CPP'],
      technologies:[tecLog.CPP],
      github: 'no link',
      youtube: "https://www.youtube.com/playlist?list=PL872ra4gWyJH8sgAUOI2c1XZD6xZfhjsr",
      demosite: 'no link',
      poster: 'files/posters/smartback.pdf',
      presentation: 'files/presentations/smartback.pdf',
      description:
      <div>
        <p>This project was done in school by my group in collaboration with the students from AP Hogeschool Antwerpen participating in the international project.</p>
        <p>We were in charge of the device which was controlled by ESP-32 and for sensors we used velostat sheet to measure weight and to detect change in it. We also used printed electronics to detect water in the bag, which then warned the user through the mobile app (Done by the Belgium students).</p>
        <p>The aim in this project wasn't as much about learning programming or device design, but more about learning to work in a international group.</p>
      </div>
    }
  ];






export default function Projects() {
  const [currentProjID, setCurrentProjID] = useState(1);
  
  const projectlist = projects.map((project, index) => 
  //<div className="project" onClick={() => setCurrentProjID(project.id)}><Project project={project} key={index} /></div>
  <div className="project" key={index} onClick={()=>{showDescription(project.id)}}><Project project={project} key={index} /></div>
  )

  function showDescription(newID){
    let currentStyle = document.getElementById('projectDescription').style.display;
    if(currentStyle==="grid"){
        if(currentProjID===newID){
          document.getElementById('projectDescription').style.display = "none";
        }
        else{
          setCurrentProjID(newID)
        }
    }
    else{
        setCurrentProjID(newID)
        document.getElementById('projectDescription').style.display = "grid";
    }
  }
/*
  function technologylist(projectID){
    projects[projectID].technologies.map((technology, index)=>{
      const thistechnology = Object.values(technologylogos).find(value => technologylogos[value] === technology);
      console.log(thistechnology)
      return(
        <img key={index} src={technologylogos.PHP} style={{backgroundColor:"white"}}/>
      )
    })
  }




  {technologylist(currentProjID-1)}
*/

  let technologyList = projects[currentProjID-1].technologies.map((technology, index)=>{
    return(<img key={index} src={technology} className="projectDescriptionTechnology"/>)
  })

  return (
      <div id="projects" >
        <h2>Projects</h2>
        <p className="projectsClickForMore">Click for more information about a particular project!</p>
        <div className = "projects">
          {projectlist}
        </div>

        <div className="projectDescription" id="projectDescription">
          <h2 className="projectDescriptionTitle">{projects[currentProjID-1].title}</h2>
          <div className="projectDescriptionTechnologies">
            {technologyList}
          </div>
          <div className="projectDescriptionLeft">
            {projects[currentProjID-1].description}
          </div>
          <div className="projectDescriptionRight">
            <div>
              <img src={projects[currentProjID-1].image} className="projectDescriptionImage"/>
            </div>
          </div>     

          <div className="projectDescriptionLinks">
              {projects[currentProjID-1].github!=='no link' && <a className="projectDescriptionLink" href={projects[currentProjID-1].github}><p >Github</p></a>}
              {projects[currentProjID-1].youtube!=='no link' && <a className="projectDescriptionLink" href={projects[currentProjID-1].youtube}><p >Youtube</p></a>}
              {projects[currentProjID-1].demosite!=='no link' && <a className="projectDescriptionLink" href={projects[currentProjID-1].demosite}><p >Demo</p></a>}
          </div>
        </div>

      </div>
  )
}

/*
          <div className="projectDescriptionRight">
            <div>
              <img src={projects[currentProjID-1].image} className="projectDescriptionImage"/>
              {projects[currentProjID-1].poster !=='no link' && <embed src={projects[currentProjID-1].poster}/>}
            </div>
          </div>



          {projects[currentProjID-1].poster !=='no link' && 
          <div className="projectDescriptionPosterOuter" >
            {projects[currentProjID-1].presentation !=='no link' && <embed id="ProjectPresentation" src={projects[currentProjID-1].presentation} className="projectDescriptionPosterInner"/>}
            <embed id="ProjectPoster" src={projects[currentProjID-1].poster} className="projectDescriptionPosterInner"/>
          </div>
          }
*/