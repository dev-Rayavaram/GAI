import React from 'react'
import Author from './Author'

const summary = <div className='summary'>
                    <p> 
                       
                    </p>
                </div>


function LandingPage(){
    return(
        <div className='landing-Page'>
            <Author />
            {summary}

        </div>
    )
}

export default  LandingPage;