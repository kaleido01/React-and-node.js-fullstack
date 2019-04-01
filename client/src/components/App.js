import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import { connect } from 'react-redux'
import * as actions from '../actions' 
const Landing = () => <div> landing</div>;

class App extends Component{

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Route path="/" exact component={Landing} />
			</div>
		</BrowserRouter>
  );
  }
};

export default connect(null,actions)(App);
