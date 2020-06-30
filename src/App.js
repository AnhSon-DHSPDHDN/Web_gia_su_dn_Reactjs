import React, { Suspense } from 'react';
import Footer from './components/Footer/Footer'
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from './config/router'

const Navigation = React.lazy(() => import('./components/Navigation'));

const showContentMenu = (router) => {
	let result;
	if (router.length > 0) {
		result = router.map((router, index) => {
			return (
				<Route
					key={index}
					path={router.path}
					exact={router.exact}
					component={router.component}
				>
				</Route>
			)
		})
	}
	return result;
}
function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Navigation />
					<Menu />
					<Switch>
						{showContentMenu(router)}
					</Switch>
					<Footer />
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
