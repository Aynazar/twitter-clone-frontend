import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import React from 'react'

interface NotificationProps {
	children: (callback: (text: string, type: AlertColor) => void) => React.ReactElement;
}

export const Notification: React.FC<NotificationProps> = ({
	children,
}: NotificationProps): React.ReactElement => {
	const [open, setOpen] = React.useState<boolean>(false)
	const [notificationObj, setNotificationObj] = React.useState<{
		text: string
		type: AlertColor
	}>()

	const handleClose = () => {
		setOpen(false)
	}

	const openNotification = (text: string, type: AlertColor) => {
		setOpen(true)
		setNotificationObj({
			text, type
		})
	}

	return (
		<>
			{children(openNotification)}
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={notificationObj?.type}>
					{notificationObj?.text}
				</Alert>
			</Snackbar>
		</>
	)
}
