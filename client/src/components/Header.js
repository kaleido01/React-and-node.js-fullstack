import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
class Header extends React.Component {

  renderContent(){

    switch(this.props.auth){

      case null:
        return ""
      case false:
        return <a href="/auth/google">login with google</a>
      default :
        return <a href="/api/logout">logout</a>
    }
  }

	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper pl-5">
						<Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
							Emaily
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								{this.renderContent() }
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps=({auth})=>{
  return {auth}
}

export default connect(mapStateToProps)(Header);
