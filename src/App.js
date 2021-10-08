import {Component} from "react";
import Display from "./Components/Display.jsx"
import "./Styles/App.css";

class App extends Component{

  render(){

    return(
      <>
          <div className={"header"}>
            <h1>CALCULATOR</h1>
          </div>

          <div className={"calContainer"}>
            <Display/>  
          </div>
        
      </>
    )
  }
}

export default App;