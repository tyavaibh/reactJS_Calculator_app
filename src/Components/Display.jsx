import {Component} from "react";
import ButtonPad from "./ButtonPad.jsx";

class Display extends Component{

    state={
        cal_str:"",

    }

    
    handleClick=(e)=>{
        // console.log("Run",e.target.innerText);
        if(e.target.innerText>=0 && e.target.innerText<=9){
            let inp_str=this.state.cal_str + " " + (e.target.innerText) ;
            this.setState({cal_str:inp_str})
        }else{
            let inp_str=this.state.cal_str + " " + (e.target.innerText);
            this.setState({cal_str:inp_str})
        }
        
    }

    handleClear=()=>{
        this.setState({cal_str:""})
    }

    handleC=()=>{
        if(this.state.cal_str.length>0){

            var str=this.state.cal_str;
            var clip_str="";
            

            for(let i=0; i<(str.length-2); i++){
                let el=str.charAt(i)
                clip_str=clip_str + el;
                this.setState({cal_str:clip_str})
            }
        }        
    }

    handleSolve=()=>{

        let str=this.state.cal_str;
        if(str.length>1){

            let  str_clip="";
            for(let i=0; i<(str.length); i++){
                let el=str.charAt(i);
                if(el!==" "){
                    str_clip=str_clip + el;
                }
            }

            console.log(str_clip.length);
            let sol=eval(str_clip);
            this.setState({cal_str:sol});
        }else{
            this.setState({cal_str:str});
        }
        
        
    }

    render(){

        return (
            <>
                <div className={"display"}>
                    <h4>{this.state.cal_str}</h4>
                </div>

                
                <ButtonPad handleClick={this.handleClick}
                            handleClear={this.handleClear}
                            handleC={this.handleC}
                            handleSolve={this.handleSolve}/>
                
            </>
        )
    }
}

export default Display;