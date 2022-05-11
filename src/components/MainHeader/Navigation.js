import React, { useContext } from 'react'

import AuthContext from '../../store/auth-context'
import classes from './Navigation.module.css'

const Navigation = (props) => {
	//Cosumer  arkyluu globalnyi  sostoianiaga baardyk komponentter dostup  alat
	// return(
	// {
		/* <AuthContext.Consumer>
		{(contextData) => { */
	// }

	const contextData = useContext(AuthContext)
	return (
		<nav className={classes.nav}>
			<ul>
				{contextData.isLoggedIn && (
					<li>
						<a href='/'>Users</a>
					</li>
				)}
				{contextData.isLoggedIn && (
					<li>
						<a href='/'>Admin</a>
					</li>
				)}
				{contextData.isLoggedIn && (
					<li>
						<button onClick={contextData.onLogout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	)
	// }}
	// </AuthContext.Consumer>
	// )
}

export default Navigation
// switcher perekluchatel basylganda ak fon kara boluu kerek