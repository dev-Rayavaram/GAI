import React from 'react';

function Bio(props){

    return(
        <div className='bioConatiner'>
            <button className='exit' onClick={props.clickX}>X</button>

            <div className='authorsBio'>
               '' Mark Latonero is a Senior Researcher at Data & Society focused on human rights. ... Previously he was a research director and research professor at USC where he led the Technology and Human Trafficking Initiative. He has also served as the Innovation Consultant for the UN Office of the High Commissioner for Human Rights." -google

            </div>
                
            

        </div>
    )
}

export default Bio;