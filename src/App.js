import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Login from './pages/Login';

const App = () => {
	return (
		<Routes>
			<Layout>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/login' exact component={Login} />
					<Route path='/*' component={Error404} />
				</Switch>
			</Layout>
		</Routes>
	);
};

export default App;
