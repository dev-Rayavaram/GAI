import React from 'react'


export default class  Author extends React.Component{
    constructor(props){
      super(props)
      this.state={
        on: false
  
      } 
    }
    bioPopUp = () => {
      this.setState({on : !this.state.on})
    }
  
    render(){
      return (
        <div className="author">
          <h1 className='authorsName' onClick={this. bioPopUp}>
          Mark Latonero
          </h1>
          
             Mark Latonero is a Senior Researcher at Data & Society focused on human rights. ... Previously he was a research director and research professor at USC where he led the Technology and Human Trafficking Initiative. He has also served as the Innovation Consultant for the UN Office of the High Commissioner for Human Rights." -google
              
          
          
          <img src={require('../img/profile.jpg')}  alt='profile pic'/>

          <ul className='contacts'>
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
    