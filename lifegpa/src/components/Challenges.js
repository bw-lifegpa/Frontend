import React from "react";
import { NavLink } from "react-router-dom";
import "./Challenges.css";
import { connect } from "react-redux";

import Nav from "./Nav";
import Eye from "../assets/eye-img.png";
import MagnifyingGlass from "../assets/magnifying-glass.png";

function Challenges(props) {
	return (
		<div className="challenges-container">
			<Nav user_id={props.id} />
			<div className="body">
				<div className="challenges active">
					<div className="challenges-profile-mini">
						<div className="challenges-profile-info">
							<h4>{`${props.first_name} ${props.last_name}`}</h4>
							<h5>View Account</h5>
						</div>
					</div>
					<h1>Active Challenges</h1>
					<h2>You currently have no active challenges.</h2>
				</div>
				<div className="challenges search">
					<NavLink to={`/dashboard/${props.id}`}>
						<h3>Back to Dashboard</h3>
					</NavLink>
					<h1>Search Challenges</h1>
					<form>
						<label>
							<input value="Search by name or category" />
						</label>
						<img src={MagnifyingGlass} />
					</form>
					<div className="challenges-suggested">
						<h2>Suggested for you</h2>
						<p>
							As you add more goals, we will suggest challenges
							perfect for you!
						</p>
					</div>
					<div className="challenges-popular">
						<h2>Popular Challenges</h2>
						<div className="challenges-line">
							<img className="eye-img" src={Eye} />
							<p>A Mile a Day Keeps the Doctor Away Challenge</p>
							<p className="challenges-join">JOIN</p>
						</div>
						<div className="challenges-line">
							<img className="eye-img" src={Eye} />
							<p>A Mile a Day Keeps the Doctor Away Challenge</p>
							<p className="challenges-join">JOIN</p>
						</div>
					</div>
					<div className="challenges-create">
						<h2>Have a challenge you don't see listed?</h2>
						<div className="challenge-create-button">
							<h2>Create a Challenge</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		error: state.error,
		isFetching: state.isFetching,
		id: state.id,
		username: state.username,
		first_name: state.first_name,
		last_name: state.last_name,
		email: state.email,
	};
};

export default connect(mapStateToProps, {})(Challenges);
