import React from "react";
import "./Header.css";

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
			<div className="header-icons">
				<Link to={`/dashboard/${props.id}`}>
					<img className="logo" src={Logo} />
				</Link>
				<img
					className="sign-out"
					src={SignOut}
					onClick={signOutHandler}
				/>
			</div>
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
