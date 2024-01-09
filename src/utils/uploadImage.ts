import { axios } from '../core/axios'

interface UploadImageReturnProps {
	data: {
		_id?: string,
		filename: string
		url: string
	}
}

export const uploadImages = async (image: File): Promise<UploadImageReturnProps> => {
	let formData = new FormData()
	formData.append('image', image)
	const { data } = await axios.post('/upload', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	})
	console.log(data)
	return data
}
