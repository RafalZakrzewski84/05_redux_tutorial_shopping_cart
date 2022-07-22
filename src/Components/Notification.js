/** @format */

import React from 'react';
import Alert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/uiSlice';

//component will take type nad alert message as props
const Notification = ({ type, msg }) => {
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.ui.notification);

	//function for closing Notification component
	const closeHandler = () => {
		dispatch(
			uiActions.showNotification({
				open: false,
			})
		);
	};

	return (
		<div>
			//showing alert when changing state of ui notification.open
			{notification.open && (
				<Alert onClick={closeHandler} severity={type}>
					{msg}
				</Alert>
			)}
		</div>
	);
};

export default Notification;
