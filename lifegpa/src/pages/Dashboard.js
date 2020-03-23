import React, { useEffect } from "react";

import Nav from "../components/Nav";
import DashboardButtons from "../components/DashboardButtons";
import DashboardProfile from "../components/DashboardProfile";
import MiniDash from "../components/MiniDash";
import { connect } from "react-redux";
import { fetchUser } from "../utils/actions";

import "./pages.scss";

const Dashboard = props => {
	useEffect(() => {
		props.fetchUser(props.match.params.id);
	}, []);
	console.log("props", props);

	return (
		<div className="dashboard-container">
			<Nav user_id={props.id} />
			<div className="body">
				<DashboardProfile
					first_name={props.first_name}
					last_name={props.last_name}
				/>
				<div className="dashboard-widgets">
					<MiniDash />
					<DashboardButtons />
				</div>
			</div>
		</div>
	);
};

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

export default connect(mapStateToProps, { fetchUser })(Dashboard);
