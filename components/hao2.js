
import React from "react";
import "../style/hao.css";

class Foot extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div id="h_footer">
					<ul>
						<li className="h_active">
							<span></span>
							<p>外卖</p>
						</li>
						<li>
							<span></span>
							<p>发现</p>
						</li>
						<li>
							<span></span>
							<p>订单</p>
						</li>
						<li>
							<span></span>
							<p>我的</p>
						</li>
					</ul>
				</div>
				
			</div>
			
		)
	}
}


export default Foot