// cli8ent/src/components/Contact.js

export default function Contact() {
    const githublogo = 'images/projectimages/githublogo2.png'
    const githublink = 'https://github.com/KasperiRosengren'
    const linkedinlogo = 'images/projectimages/linkedinlogo2.png'
    const linkedinlink = 'https://www.linkedin.com/in/kasperi-rosengren-0941b5199/'
 
    return (
    <div className="contact" id="contact">
        <div className="contactInfo">
            <p className="contactInfoItem">Phone: 0443210750</p>
            <p className="contactInfoItem">Email: kasperi.rosengren@gmail.com</p>
            <p className="contactInfoItem">Address: Oulu, Kaijonharju (90570)</p>
        </div>
        
        <div className="contactLinks">
            <div className="linkLogo"><a href={githublink}><img src={githublogo} style={{height:"10vh"}}/></a></div>
            <div className="linkLogo"><a href={linkedinlink}><img src={linkedinlogo} style={{height:"10vh"}}/></a></div>
        </div>
        
    </div>
    );
}