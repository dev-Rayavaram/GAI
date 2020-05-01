import React,{Component} from 'react';
import "../style/Summary.scss";

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
                  Technology companies and researchers should conduct HRIAs throughout the lifecycle of their AI systems. Researchers should reevaluate HRIA methodology for AI,particularly in light of new developments in algorithmic impact assessments. Toolkits should be developed to assess specific industry needs.
                </p>
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

                  participating governments should evaluate whether existing UN mechanisms for inter-
                  national rights monitoring, accountability, and redress are adequate to respond to AI

                  and other rapidly emerging technologies. UN leadership should also assume a central
                  role in international technology debates by promoting shared global values based on
                  fundamental rights and human dignity.
                </p>  
              </div>
              <div id="academia-div-summary">
                <h3 className="h3-summary-class">ACADEMIA</h3>
                <p className="p-summary-class">
                  Academics should further examine the value, limitations, and interactions between hu-
                  man rights law and human dignity approaches; humanitarian law; and ethics in relation
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

