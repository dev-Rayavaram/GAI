import React,{Component} from 'react';
import Summary from './summary'

class Page extends Component {
  constructor(props){
    super(props)
    this.state={
      showModel:false,
      page:[
        {
          title:'Title',
          paragraph:'Paragraph goes here'
        }
      ]
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
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleShowSummary}>Show</button>
          {this.state.showModel?(
              <Summary onClose={this.handleHideSummary} state={this.state.page[0]}/>
          ):
          null}
        </header>
      </div>
    );
  }
}

export default Page;
