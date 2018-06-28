import React from "react";
import "../style/yscz.css";

//自己引入这里并在下边调用
import Hasakei from "./yao.js";
import Lin from "./lin.js";
import Lin2 from "./lin2.js";
import Top from "./hao.js";
import Foot from "./hao2.js";
class Demo extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<Top/>
				<Lin/>
				<Lin2/>
				<Hasakei/>
				<Foot/>
				
			</div>
			
		)
	}
}
export default Demo