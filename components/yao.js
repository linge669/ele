import React from "react";
import "../style/yao.css";
import jz from "../img/jiaozi.png";
import hls from "../img/hls.png";
class Hasakei extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className="y_zong">
				<div className="y_pzyx">
					<h5><span>——·</span>　品质优选　<span>·——</span></h5>
					<i className="y_r">更多<b>&gt;</b></i>
					<ul className="y_ul">
						<li>
							<img src={jz}/>
							<p>喜太手工水饺</p>
							<span>大牌精选</span>
						</li>
						<li>
							<img src={jz}/>
							<p>喜太手工水饺</p>
							<span>大牌精选</span>
						</li>
						<li>
							<img src={jz}/>
							<p>喜太手工水饺</p>
							<span>大牌精选</span>
						</li>
						<li>
							<img src={jz}/>
							<p>喜太手工水饺</p>
							<span>大牌精选</span>
						</li>
					</ul>
				</div>
				<div className="y_tjsj">
					<h5><span>——·</span>　推荐商家　<span>·——</span></h5>
					<ul>
						<li><p>综合排序</p></li>
						<li><p>好评优先</p></li>
						<li><p>距离最近</p></li>
						<li><p>筛选</p></li>
					</ul>
					<div className="y_hls">
						<div className="y_h_l">
							<img src={hls} />
						</div>
						<ul className="y_h_r">
							<li><p>华莱士　(庆丰街店)</p><span>...</span></li>
							<li><p>4.9<span>月售293</span></p><b><span>准时达</span><i>蜂鸟专送</i></b></li>
							<li><p>起送$20<span>配送$3</span></p><b><span>26分钟></span><i>1.5KM</i></b></li>
							<li>汉堡</li>
							<li><p><span>满减</span><span>满25减20,满45减25,满65减30,满80减40</span></p></li>
							<li><p><span>首单</span><span>新用户下单立减17元</span></p></li>
							<li><p>附近还有9家华莱士</p></li>
						</ul>
						
					</div>
				</div>
			</div>
		)
	}
}
export default Hasakei