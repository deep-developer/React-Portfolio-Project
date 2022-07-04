import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Button
} from "react-bootstrap";


import { Link } from "react-router-dom";
import Menu from "../../../json-api/Menu";

const NormalMenu = ({allmenu})=>{
	const menuHoverEffect = (e)=>{
		const menu = e.target;
		menu.style.color = "#DF4C73";
		menu.style.textShadow = "0px 3px 10px #F17A7E";
	}

	const menuOutEffect = (e)=>{
		const menu = e.target;
		menu.style.color = "";
		menu.style.textShadow = "0px 0px 0px #fff";
	}

	const normalDesign = (
		<>
			<Link className="nav-link" to={allmenu.url} onMouseOver={menuHoverEffect} onMouseOut={menuOutEffect} style={{
				fontFamily: "monaco",
				fontWeight: "bold",
				fontSize: "18px",
				marginRight: "17px"
			}}>{allmenu.label}</Link>
		</>
	);
	return normalDesign;
}

const NavmenuBar = ()=>{
	const navDesign = (
		<>
			<Navbar className="py-4" style={{background: "white"}} expand="lg">
			  <Container>
			    	<div className="w-25 d-flex justify-content-between">
			    		<div className="w-100">
			    		<span style={{fontSize: "23px", color: "navy", fontWeight:"bold", fontFamily:"Menlo"}}>DEEP</span>
				    	</div>

				    	<div className="w-100">
				    		<span>DeeP</span>
				    	</div>
			    	</div>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="justify-content-end w-100">
			       {
			       		Menu.map((item)=>{
			       			return <NormalMenu key={item.id} allmenu={item} />
			       		})
			       }

			       <button className="all-btn px-4 py-0">Contact us</button>
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
		</>
	);
	return navDesign;
}

export default NavmenuBar;