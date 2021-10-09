import {Component} from "react";

class ButtonPad extends Component{

    render(){

        return(
            <>
                
                    <button onClick={this.props.handleClear} className={"btn_ops special"}>Clear</button>
                    <button onClick={this.props.handleC}className={"btn_ops"}>C</button>
                    <button onClick={this.props.handleClick} className={"btn_ops"}>(</button>
                    <button onClick={this.props.handleClick} className={"btn_ops"}>)</button>
                    <br />

                    <button onClick={this.props.handleClick} className={"btn_num"}>7</button>
                    <button onClick={this.props.handleClick} className={"btn_num"}>8</button>
                    <button onClick={this.props.handleClick} className={"btn_num"}>9</button>
                    <button onClick={this.props.handleClick} className={"btn_ops"}>*</button>
                    <br />


                    <button onClick={this.props.handleClick} className={"btn_num"}>4</button>                
                    <button onClick={this.props.handleClick} className={"btn_num"}>5</button>
                    <button onClick={this.props.handleClick} className={"btn_num"}>6</button>
                    <button onClick={this.props.handleClick} className={"btn_ops"}>-</button>
                    <br />


                    <button onClick={this.props.handleClick} className={"btn_num"}>1</button>            
                    <button onClick={this.props.handleClick} className={"btn_num"}>2</button>
                    <button onClick={this.props.handleClick} className={"btn_num"}>3</button>
                    <button onClick={this.props.handleClick} className={"btn_ops"}>+</button>
                    <br />

                    
                    <button onClick={this.props.handleClick} className={"btn_num"}>0</button>
                    <button onClick={this.props.handleClick} className={"btn_num"}>.</button>
                    <button onClick={this.props.handleClick} className={"btn_ops"}>/</button>
                    <button onClick={this.props.handleSolve} className={"btn_ops special"}>=</button>
               

            </>
        )
    }
}

export default ButtonPad;