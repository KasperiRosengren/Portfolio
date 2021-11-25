import React from 'react';

export default function Project(props) {

    const project = props.project; 
    function showDescription(){
        let currentStyle = document.getElementById('projectDescription').style.display;
        if(currentStyle==="grid"){
            props.currentProjID=project.id
            document.getElementById('projectDescription').style.display = "none";
        }
        else{
            document.getElementById('projectDescription').style.display = "grid";
        }
    }
    return(
        <div id={"projectID"+project.id}>
            
            <a href="/#projectDescription">
                    <p className="projectTitle">{project.title}</p>
                    <div className="projectInner">
                        <img src={project.image} id={"picture"+project.id} className="projectThumbnail" />
                        <div className="arrowDown"/>
                    </div>
                    
                    
                        
            </a>
        </div>
    )
}