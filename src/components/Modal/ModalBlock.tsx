import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import React from 'react'
import { useStylesSignIn } from '../../pages/SignIn/SignIn'
import TwitterIcon from '@mui/icons-material/Twitter'

interface ModalBlockProps {
	title?: string
	children: React.ReactNode
	classes?: ReturnType<typeof useStylesSignIn>
	visible: boolean
	onClose: () => void
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
	children,
	classes,
	visible,
	title,
	onClose,
}: ModalBlockProps): React.ReactElement => {
	return (
		<Dialog
			maxWidth='sm'
			fullWidth
			open={visible}
			onClose={onClose}
			aria-labelledby='form-dialog-title'
		>
			<div style={{ textAlign: 'center', marginTop: '10px' }}>
				<TwitterIcon color='primary' style={{ fontSize: '29px' }} />
			</div>
			<DialogTitle id='form-dialog-title' style={{ fontSize: '26px' }}>
				<b>{title}</b>
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	)
}
