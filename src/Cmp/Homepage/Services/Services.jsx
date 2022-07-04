import "./Services.css";

const Services = ()=>{
	const servicesDesign = (
		<>
			<div style={{
				width: "100%",
				height: "90vh",
				backgroundImage: "url(PicImages/services-bg.png)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center"
			}}>
				<div className="container">
					<div className="row position-relative">
						<div className="col-md-5 position-absolute name-details-box d-flex justify-content-start align-items-start flex-column">
							<span className="font-poppins font-weight-bold services-text-one">My Awesome</span>
							<span className="font-anek font-weight-bold services-text-two">Services</span>
							<span className="font-josefin name-text-three mb-5">Front End Developer with High Level of Exeperiences in web designing and developments, Producting the Quality works</span>
							<button className="all-btn px-4 py-2 mt-2">Download CV</button>
						</div>

						<div className="col-md-7 services-box-two">
							<div className="p-5">
								<i></i>
							<div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
	return servicesDesign;
}

export default Services;