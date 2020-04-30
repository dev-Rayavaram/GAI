import React,{Component} from 'react';
import Summary from './summary'

const summaryPage = "Today’s AI debates are searching for principles to govern emerging and future technological systems for the common good. If the “good” involves upholding human dignity, then the international human rights system is fit for purpose. If AI researchers,developers, and designers work to protect and respect fundamental human rights,they could open the path for broad social benefit. To disregard human rights would be to close off that path."
class Page extends Component {
  constructor(props){
    super(props)
    this.state={
      showModel:false,
      summary:summaryPage
    }
    this.handleShowSummary = this.handleShowSummary.bind(this)
    this.handleHideSummary = this.handleHideSummary.bind(this)
  }
    handleShowSummary(){
      this.setState({showModel:true})
    }
    handleHideSummary(){
      this.setState({showModel:false})
    }  
  render(){
    return (
            <div>
              <div>
                <div>
                  <h3>Business</h3>
                  <p>
                      WHILE AI “ETHICS” IS THE TOPIC DU JOUR FOR THE TECH
                      INDUSTRY, HUMAN RIGHTS IS BEGINNING TO EMERGE AS AN
                      ADDITIONAL PERSPECTIVE.
                  </p>
                </div>
                <button  key='id1' onClick={this.handleShowSummary}>Show</button>
                {this.state.showModel?(
                    <Summary onClose={this.handleHideSummary} state={this.state.summary}/>
                ):
                null}
            </div>
            <div>
                <div>
                  <h3>CIVIL SOCIETY</h3>
                  <p>
                      WHILE SOME MAJOR INTERNATIONAL HUMAN RIGHTS
                      ORGANIZATIONS ARE STARTING TO FOCUS ON AI,
                      ADDITIONAL ATTENTION IS NEEDED FROM CIVIL SOCIETY ON
                      POTENTIAL RISKS AND HARMS.
                  </p>
                </div>
                <button  key='id1' onClick={this.handleShowSummary}>Show</button>
                {this.state.showModel?(
                    <Summary onClose={this.handleHideSummary} state={this.state.summary}/>
                ):
                null}
            </div>
            <div>
                <div>
                  <h3>GOVERNMENTS</h3>
                  <p>
                      DOZENS OF COUNTRIES HAVE INITIATED NATIONAL
                      STRATEGIES ON AI, YET HUMAN RIGHTS ARE NOT CENTRAL TO
                      MANY OF THESE EFFORTS.
                  </p>
                </div>
                <button  key='id1' onClick={this.handleShowSummary}>Show</button>
                {this.state.showModel?(
                    <Summary onClose={this.handleHideSummary} state={this.state.summary}/>
                ):
                null}
            </div>
            <div>
                <div>
                  <h3>UNITED NATIONS</h3>
                  <p>
                      THE UN HAS YET TO SUSTAIN A FOCUS ON AI FROM A
                      RIGHTS PERSPECTIVE82 WITH SOME NOTABLE EXCEPTIONS,
                      PARTICULARLY FROM UN INDEPENDENT INVESTIGATORS,
                      SPECIAL RAPPORTEURS, AND THE SECRETARY GENERAL’S
                      STRATEGY ON NEW TECHNOLOGY.
                  </p>
                </div>
                <button  key='id1' onClick={this.handleShowSummary}>Show</button>
                {this.state.showModel?(
                    <Summary onClose={this.handleHideSummary} state={this.state.summary}/>
                ):
                null}
            </div>
            <div>
                <div>
                  <h3>INTERGOVERNMENTAL ORGANIZATIONS</h3>
                  <p>
                      INTERGOVERNMENTAL ORGANIZATIONS MAY PLAY AN
                      INFLUENTIAL ROLE, INCLUDING THE ORGANISATION FOR
                      ECONOMIC COOPERATION AND DEVELOPMENT (OECD),
                      WHICH IS PREPARING GUIDANCE RELATED TO AI FOR ITS 36
                      MEMBER COUNTRIES.87
                  </p>
                </div>
                <button  key='id1' onClick={this.handleShowSummary}>Show</button>
                {this.state.showModel?(
                    <Summary onClose={this.handleHideSummary} state={this.state.summary}/>
                ):
                null}
            </div>
            <div>
                <div>
                  <h3>ACADEMIA</h3>
                  <p>
                      MORE WORK CAN BE DONE TO BRIDGE ACADEMICS IN
                      HUMAN RIGHTS LAW, SOCIAL SCIENCE, COMPUTER SCIENCE,
                      PHILOSOPHY, AND OTHER DISCIPLINES IN ORDER TO
                      CONNECT RESEARCH ON THE SOCIAL IMPACT OF AI, NORMS
                      AND ETHICS, TECHNICAL DEVELOPMENT, AND POLICY.
                  </p>
                </div>
                <button  key='id1' onClick={this.handleShowSummary}>Show</button>
                {this.state.showModel?(
                    <Summary onClose={this.handleHideSummary} state={this.state.summary}/>
                ):
                null}
            </div>

         </div>
    );
  }
}

export default Page;
