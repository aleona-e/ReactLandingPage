import React from "react";
import { MyNavbar } from "./myNavbar.jsx";
import { MyJumbotron } from "./myJumbotron.jsx";
import { MyCard } from "./myCard.jsx";
import { MyFooter } from "./myFooter.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<MyNavbar />
			<MyJumbotron
				title="A Warm Welcome!"
				description="React is the most popular rendering library in the world, react is the most popular rendering library in the world, React is the most popular rendering library in the world"
				buttonUrl="#"
				buttonLabel="Call to action!"
			/>
			<div className="row">
				<div className="card-group">
					<div className="col-sm-3">
						<MyCard
							image="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
							cardTitle="Card Title"
							cardDescription="react is the most popular rendering library in the world"
							buttonUrl="#"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-sm-3">
						<MyCard
							image="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
							cardTitle="Card Title"
							cardDescription="react is the most popular rendering library in the world"
							buttonUrl="#"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-sm-3">
						<MyCard
							image="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
							cardTitle="Card Title"
							cardDescription="react is the most popular rendering library in the world"
							buttonUrl="#"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-sm-3">
						<MyCard
							image="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
							cardTitle="Card Title"
							cardDescription="react is the most popular rendering library in the world"
							buttonUrl="#"
							buttonLabel="Find out more!"
						/>
					</div>
				</div>
			</div>
			<MyFooter />
		</div>
	);
};

export default Home;
