/** @format */

import React from 'react';
import Alert from '@mui/material/Alert';

//component will take type nad alert message as props
const Notification = ({ type, msg }) => {
	return (
		<div>
			<Alert severity={type}>{msg}</Alert>
		</div>
	);
};

export default Notification;
