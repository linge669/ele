import React from "react";
import '../style/lstyle.css'
class Lin extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className="l_banner"></div>
				<div className="l_kuai">
					<div className="l_xianliang">
						<h3>限量抢购</h3>
						<p>丰盛晚餐9.9元起</p>
						<p><span>2099人</span>正在抢></p>
					</div>
					<div className="l_xianliang">
						<h3>周四水果日</h3>
						<p>荔枝1分钱500g</p>
						<p>大牌减20</p>
					</div>
				</div>
				
				
			</div>
		)
	}
}
export default Lin
