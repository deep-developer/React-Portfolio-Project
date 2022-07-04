import "./BgBox.css";
import NavmenuBar from "../Navbar/Navbar";
import Description from "../Description/Description";
import Services from "../Services/Services";

const BgBox = ()=>{
	const bgDesign = (
		<>
			<div className="bgbox">
				<NavmenuBar />
				<Description />
				<Services />
			</div>
		</>
	);
	return bgDesign;
}

export default BgBox;