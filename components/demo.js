import React from "react";
//自己引入这里并在下边调用
import Hasakei from "./yao.js"
class Demo extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<Hasakei/>
		)
	}
}
export default Demo