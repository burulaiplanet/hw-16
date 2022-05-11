import React, { useContext } from 'react'
import classes from './Switch.module.css'
import AuthContext from '../../store/auth-context'


function Swithc() {



	const switcherData = useContext(AuthContext)
	return (
		<label className={classes.swithc}>
			<input type='checkbox' onClick={()=>switcherData.onSwictch(prevState => !prevState)} />
			<span className={classes.slaider} />
		</label>
	)
}
export default Swithc
