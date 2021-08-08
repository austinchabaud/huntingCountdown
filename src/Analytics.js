import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
function Analytics() {
	useEffect(() => {
		ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);

		ReactGA.pageview(window.location.pathname + window.location);
	}, []);
	return <div></div>;
}

export default Analytics;
