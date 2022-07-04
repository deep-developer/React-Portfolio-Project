import './Description.css';

const Description = ()=>{
	const descDesign = (
		<>
			<div className="bg-img" style={{
				width: "100%",
				height: "90vh",
				backgroundImage: "url(PicImages/intro-bg.png)",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center"
			}}>
			<div className="container intro-bg px-5">
				<div className="row intro-row px-5">
					<div className="col-md-5 name-details-box py-2 d-flex justify-content-center align-items-start flex-column">
						<span className="font-montserrat font-weight-bold name-text-one">Hi! I am</span>
						<span className="font-anek font-weight-bold name-text-two">Deep Dey</span>
						<span className="font-josefin name-text-three mb-4">Front End Developer with High Level of Exeperiences in web designing and developments, Producting the Quality works</span>
						<button className="all-btn px-4 py-2">Hire Me</button>
						<div className="mt-5 py-4 w-50 social-icons d-flex justify-content-between align-items-center">
							<i class="fa-brands fa-github"></i>
							<i class="fa-brands fa-linkedin-in"></i>
							<i class="fa-brands fa-instagram"></i>
						</div>
					</div>
					<div className="col-md-7 d-flex justify-content-end align-items-center">
						<div className="my-pic-box d-flex justify-content-end align-items-center">
							<div className="shape-one-box">
								<img src="PicImages/shape-1.png" width="100%"/>
							</div>
							<div className="shape-two-box">
								<img src="PicImages/shape-2.png" width="100%"/>
							</div>
							<div className="profile-image d-flex justify-content-center align-items-end">
								<img src="PicImages/profile-pic.png" width="70%"/>
							</div>
							<div className="emoji-box">
								<img src="PicImages/emoji.png" width="100%"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</>
	);
	return descDesign;
}

export default Description;