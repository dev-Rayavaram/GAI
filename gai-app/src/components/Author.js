import React from 'react'
import "../Style/Home.scss"


export default class  Author extends React.Component{
    constructor(props){
      super(props)
      this.state={
        on: false
  
      } 
    }
  
    render(){
      return (
        <div id="author-div">
          <h1 id='author-name-h1' onClick={this. bioPopUp}>
          Mark Latonero
          </h1>
            <p id="bio-p">
            "Mark Latonero is a Senior Researcher at Data & Society focused on human rights. He is a fellow at Harvard Kennedy School’s Carr Center for Human Rights Policy and a research fellow at both Berkeley Law’s Human Rights Center and USC’s Annenberg Center for Communication Leadership & Policy. Previously he was a research director and research professor at USC where he led the Technology and Human Trafficking Initiative. He has also served as the Innovation Consultant for the UN Office of the High Commissioner for Human Rights."
            <a id="data-and-society-link" href="https://datasociety.net/people/latonero-mark/"> Data & Society</a>
            </p>
            
          <img id="author-photo" src={require('../img/profile.jpg')}  alt='profile pic'/>

          <ul id='author-contacts-ul'>
                <li>
                    <a href='https://twitter.com/latonero?lang=en'>Twitter</a>
                </li>

                <li>
                    <a href='https://www.linkedin.com/in/marklatonero'>LinkedIn</a>
                </li>
              

               <li>
                     <a href='https://latonero.com/'>Personal WebPage</a>
               </li>

            </ul>
  




        </div>
      );
  
    }
    
    }
    