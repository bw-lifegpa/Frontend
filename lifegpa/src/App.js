// React/Routing
import React from "react";
import { Route } from "react-router-dom";
// Components
import FormikLogin from "./components/Login";
import Advice from "./components/Advice";
import Dashboard from "./pages/Dashboard";
import Challenges from "./components/Challenges";
import PrivateRoute from "./pages/PrivateRoute";
import FormikSignUpForm from "./components/SignUpForm";
import FormikNewGoalForm from "./components/NewGoalForm";
import ViewGoals from "./components/ViewGoals";
import EditForm from "./components/EditForm";
import TrackGoals from "./components/TrackGoals";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
// Styling
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={FormikLogin} />
			<Route path="/register" component={FormikSignUpForm} />
			{/* Private Routes */}
			<Route path="/dashboard/:id" component={Dashboard} />
			<Route path="/track/:id" component={TrackGoals} />
			<Route path="/goals/:id" component={ViewGoals} />
			<Route path="/edit/:id/:goal_id" component={EditForm} />
			<Route path="/create/:id" component={FormikNewGoalForm} />
			<Route path="/challenges/:id" component={Challenges} />
			<Route path="/advice/:id" component={Advice} />
			<Footer />
		</div>
	);
}

export default App;
