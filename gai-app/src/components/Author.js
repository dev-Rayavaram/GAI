import React from 'react'
import Bio from './Bio'

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
          Mark Latonearo
          </h1>
          {
            this.state.on
            ? <Bio clickX={this.bioPopUp}/>
            : null
          }     
          
          
          <img src={'../img/profile.jpg'}  alt='profile pic'/>

          <ul className='contacts'>
                <li>
                    <a href='https://twitter.com/latonero?lang=en'>Twitter</a>
                </li>

                <li>
                    <a href='https://www.google.com/search?source=hp&ei=M1mqXtbLEIWb_Qb4p5_gDg&q=mark+latonearo+&oq=mark+latonearo+&gs_lcp=CgZwc3ktYWIQAzIECAAQDTIGCAAQDRAeMgYIABANEB4yBggAEA0QHjIGCAAQDRAeOgIIADoGCAAQFhAeSgUIEhIBMFDpDVj3L2DePmgAcAB4AYABvAWIAekOkgENMS4xLjAuMS4wLjEuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiWsdr8rI_pAhWFTd8KHfjTB-wQ4dUDCAg&uact=5'>Linken</a>
                </li>

               <li>
                     <a href='https://www.wired.com/author/mark-latonero/'>WIRED</a>
               </li>

            </ul>
  




        </div>
      );
  
    }
    
    }
    