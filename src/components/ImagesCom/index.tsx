import React from 'react'
export const ImagesPath: React.FC = (): React.ReactElement | null => {
	return (
		<img src={window.location.pathname} alt="www" />
	)
}
