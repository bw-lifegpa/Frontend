import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import GoalCard from "./GoalCard";

import { fetchUserGoals } from "../utils/actions";

import "./ViewGoals.css";
import { FaPlusCircle } from "react-icons/fa";

const ViewGoals = props => {
	useEffect(() => {
		props.fetchUserGoals(props.match.params.id);
	}, []);

	if (props.user_goals === 0) {
		return (
			<div>
				<Nav user_id={props.match.params.id} />
				<div>
					<h1>Please Create Goals to Begin Tracking</h1>
					<Link to={`/create/${props.match.params.id}`}>
						<FaPlusCircle />
						<h3>Create New Goal</h3>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Nav user_id={props.match.params.id} />
			<h1 className="viewgoals-title">Goals</h1>
			<div className="viewgoals-body">
				{props.user_goals.length >= 1
					? props.user_goals.map((goal, index) => {
							return (
								<GoalCard
									{...props}
									goal={goal}
									id={goal.id}
									key={index}
								/>
							);
					  })
					: () => {
							return <div></div>;
					  }}
			</div>

			<Link
				className="create-new-goal"
				to={`/create/${props.match.params.id}`}
			>
				<FaPlusCircle />
				<h3>Create New Goal</h3>
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user_goals: state.user_goals,
	};
};

export default connect(mapStateToProps, { fetchUserGoals })(ViewGoals);
