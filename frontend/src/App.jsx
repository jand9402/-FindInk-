import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from './routes/RouteUtils'
import routes from './routes/routes'
import { CssBaseline } from '@material-ui/core'
import NavbarVisit from "../src/components/views/NavbarVisit/NavbarVisit.js"

const App = () => {
	return (
		<>
			<CssBaseline />
			<Router>
			<NavbarVisit/>
				<Suspense fallback={<p>loading...</p>}>
					{renderRoutes(routes)}
				</Suspense>
			</Router>
		</>
	)
}

export default App
