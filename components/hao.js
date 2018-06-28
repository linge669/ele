
import React from "react";
import "../style/hao.css";

class Top extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div id="h_top">
					<h2 className="h_area">
					<span></span>
					海为科技园
					<b></b>
					</h2>
					<p className="h_hongbao">抓龙虾拿红包</p>
				
				</div>
				<div id="h_search">
					<input type="text" id="h_s" placeholder="搜索商家、商店名称" />
					<ul>
						<li>烤鸭</li>
						<li>炸鸡</li>
						<li>酸菜鱼</li>
						<li>烤鸭</li>
						<li>炸鸡</li>
					</ul>
				</div>
				
				<div id="h_pic">
					<div className="pic">这是图片</div>
				</div>
				<div id="h_list">
					<ul>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
						<li>
							<span></span>
							<p>美食</p>
						</li>
					</ul>
					<div className="h_gongdong">
						<span className="h_huadong"></span>
						<span className="h_huadong"></span>
					</div>
				</div>
			</div>
			
		)
	}
}


export default Top