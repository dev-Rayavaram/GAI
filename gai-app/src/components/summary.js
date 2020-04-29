import React from 'react'
import ReactDom from 'react-dom'
const summary = document.getElementById('summary')

function Summary(props){
    let title = props.state.title;
    let paragraph = props.state.paragraph;
    return ReactDom.createPortal(
        <div style={{
                position:'absolute',
                top:'15%',
                left:'15%',
                display:'grid',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'lightgray',
                width:'400px',
                height:'300px'
             }} onClick={props.onClose}>
            <h1>
                {title}
            </h1>
            <p>{paragraph}</p>
        </div>
        ,summary
    )
}

export default Summary;