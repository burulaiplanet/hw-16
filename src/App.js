import React, { useState } from 'react'
import Logins from './components/Login/Logins'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/auth-context'
import { useEffect } from 'react'



function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		const srtoredUserLoggedInfor = localStorage.getItem('isLoggedIn') //localStorage den kluch menen chakyryp atat
		if (srtoredUserLoggedInfor === '1') {
			//isLoggedIn   barby,bar bolso anda setIsLoggedIn true bolup tura beret,bizdin sluchiede Home komponenti ishtep tura beret,obnovlenie kylsa da ochup ketpeit,sebebi LocalStorage ke saltapaldyk
			setIsLoggedIn(true)
		}
	}, [])

	const loginHandler = async (email, password) => {
		localStorage.setItem('isLoggedIn', '1')

		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn')
		setIsLoggedIn(false)
	}
	const [switchState, setSwitchState] = useState(false)
	
//Provaider  globalnyi  sostoianiaga baardyk komponentterge dostup  beret
	return (
		<React.Fragment>
			<AuthContext.Provider value={{ isLoggedIn: isLoggedIn ,onLogout:logoutHandler,onSwictch:setSwitchState}}>
				<MainHeader />
				<main  style={{backgroundColor:!switchState ? 'white':'black' ,height:'512px' }}>
					{!isLoggedIn && <Logins onLogin={loginHandler} />}
					{isLoggedIn && <Home onLogout={logoutHandler} />}
				</main>
			
			</AuthContext.Provider>
		</React.Fragment>
	)
}

export default App
