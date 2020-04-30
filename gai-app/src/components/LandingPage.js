import React from 'react'
import Author from './Author'
import "../Style/Home.scss"




function LandingPage(){
    return(
        <div id='landing-page-main-div'>
           <div id="summary-title-landing-page-div">
                <h1 id='title-landing-page'> 
                    Governing Artificial Intelligence:Upholding Human Rights & Dignity
                </h1>
                    <p id="summary-landing-page-p">"Can international human rights help guide and govern artificial intelligence (AI)?
                    Currently, much of society is uncertain about the real human impacts of AI systems.
                    Amid hopes that AI can bring forth “global good” there is evidence that some AI sys-
                    tems are already violating fundamental rights and freedoms. As stakeholders look for
                    a North Star to guide AI development, we can rely on human rights to help chart the
                    course ahead. International human rights are a powerful tool for identifying, prevent-
                    ing, and redressing an important class of risks and harms. A human rights-based
                    frame could provide those developing AI with the aspirational, normative, and legal
                    guidance to uphold human dignity and the inherent worth of every individual regard-
                    less of country or jurisdiction." - Mark Latonero
                    </p>
            </div>
            <Author />
        </div>
    )
}

export default  LandingPage;