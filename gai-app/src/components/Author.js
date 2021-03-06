import React from 'react'
import "../Style/Home.scss"

//brief bio of the author and his  work
//component is the  info/profile like name,  contacts, and other works 
// contact and other works are anchor tag to external links 

export default class  Author extends React.Component{
    
  
    render(){
      return (
        <div id="author-div">
          <h1 id='author-name-h1'>
            Mark Latonero
          </h1>
            <div id="bio-and-photo-div">
              <img id="author-photo" src={require('../img/profile.png')}  alt='profile pic'/>
              <p id="bio-p">
                "Mark Latonero is a Senior Researcher at Data & Society focused on human rights. He is a fellow at Harvard Kennedy School’s Carr Center for Human Rights Policy and a research fellow at both Berkeley Law’s Human Rights Center and USC’s Annenberg Center for Communication Leadership & Policy. Previously he was a research director and research professor at USC where he led the Technology and Human Trafficking Initiative. 
                He has also served as the Innovation Consultant for the UN Office of the High Commissioner for Human Rights." - 
                  <a id="data-and-society-link" href="https://datasociety.net/people/latonero-mark/"> Data & Society</a>
              </p>
          </div>
          <div id="hand-img-contacts">
            <ul id='author-contacts-ul'>
              <li className="author-contacts-li">
                <a className="author-contacts-links" href='https://twitter.com/latonero?lang=en'>Twitter</a>
              </li>
              <li className="author-contacts-li">
                <a className="author-contacts-links" href='https://www.linkedin.com/in/marklatonero'>LinkedIn</a>
              </li>
              <li className="author-contacts-li" >
                <a className="author-contacts-links" href='https://latonero.com/'>Personal WebPage</a>
              </li>
            </ul>
            <img id="hand-img" src={require("../img/hand.png")} />
          </div>
        </div>
      );
  
    }
    
    }
    
