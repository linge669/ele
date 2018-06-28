import React from "react";
import '../style/lstyle.css'
class Lin2 extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<div className="l_kuai">
					<div className="l_second">
						<p>名店热搜榜</p>
						<span>满30减10起</span>
					</div>
					<div className="l_second">
						<p>品质联盟</p>
						<span>品质提升,消费亲民</span>
					</div>
					<div className="l_second">
						<p>乐享鲜果</p>
						<span>水果立减15元</span>
					</div>
				</div>
				<div className="l_kuai">
						<div className="l_left">
							<p>大牌驾到</p>
							<p><b>零食饮料</b>满30减15</p>
							<a>全场爆款直降,进店猛戳>></a>
						</div>
						<div className="l_right">
						
						</div>
						
				</div>
				
			</div>
		)
	}
}
export default Lin2
