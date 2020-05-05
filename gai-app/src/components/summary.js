import React,{Component} from 'react';
import "../Style/Summary.scss";
/*
create class component Page(we began with creating class component because we tried sending state to child components,summary page
        //to display multiple modals for each section(but it didn't work for each section))
  implement life cycle method render
      procedure render
          render all sections as div elements
      end
  export Page



*/
class Summary extends Component {
  
  render(){
    return (
            <div id="main-div-summary">
              <div id="business-div-summary">
                <h3 className="h3-summary-class">BUSINESS</h3>
                <p className="p-summary-class">
                  Technology companies should find effective channels of communication with local civil society groups and researchers – particularly in geographic areas where human rights concerns are high – in order to identify and respond to risks related to AI deployments.
                </p>
              </div>
              <div id="cs-div-summary">
                <h3 className="h3-summary-class">CIVIL SOCIETY</h3>
                <p className="p-summary-class">
                WHILE SOME MAJOR INTERNATIONAL HUMAN RIGHTS ORGANIZATIONS ARE STARTING TO FOCUS ON AI,ADDITIONAL ATTENTION IS NEEDED FROM CIVIL SOCIETY ON POTENTIAL RISKS AND HARMS.</p>
              </div>
              <div id="government-div-summary">
                <h3 className="h3-summary-class">GOVERNMENTS</h3>
                <p className="p-summary-class">
                  Governments should acknowledge their human rights obligations and incorporateduty to protect fundamental rights in national AI policies, guidelines, and possible regulations. Governments can play a more active role in multilateral institutions, like the UN,to advocate for AI development that respects human rights.
                </p>
              </div>
              <div id="un-div-summary">
                <h3 className="h3-summary-class">UNITED NATIONS</h3>
                <p className="p-summary-class">
                  UN human rights investigators and special rapporteurs should continue researching
                  and publicizing the human rights impacts resulting from AI systems. UN officials and
                  participating governments should evaluate whether existing UN mechanisms for international
                  rights monitoring, accountability, and redress are adequate to respond to AI
                  and other rapidly emerging technologies. UN leadership should also assume a central
                  role in international technology debates by promoting shared global values based on
                  fundamental rights and human dignity.
                </p>  
              </div>
              <div id="academia-div-summary">
                <h3 className="h3-summary-class">ACADEMIA</h3>
                <p className="p-summary-class">
                  Academics should further examine the value, limitations, and interactions between human
                  rights law and human dignity approaches; humanitarian law; and ethics in relation
                  to emerging AI technologies. Human rights and legal scholars should work with other
                  stakeholders on the tradeoffs between rights when faced with specific AI risks and
                  harms. Social science researchers should empirically investigate the on-the-ground
                  impact of AI on human rights.   
                </p>        
              </div>
              <div id="img-summary-div">
                <img id="robot-summary" src={require("../img/pngwave (22).png")}/>
              </div>
            </div>
    );
  }
}

export default Summary

