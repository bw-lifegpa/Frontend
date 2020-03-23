import React from "react";
import "./pages.scss";

import Logo from "../assets/lifegpa-logo.png";
import SignOut from "../assets/sign-out-icon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
	const signOutHandler = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	return (
		<div className="header">
			<Link to={`/dashboard/${props.id}`}>
				<img src={Logo} />
			</Link>
			<img src={SignOut} onClick={signOutHandler} />
		</div>
	);
}

const mapStateToProps = state => {
	console.log(state);
	return {
		error: state.error,
		isFetching: state.isFetching,
		id: state.id,
	};
};

export default connect(mapStateToProps, {})(Header);
