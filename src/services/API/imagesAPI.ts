import { axios } from '../../core/axios'

interface Response<T> {
	status: string
	data: T
}

export const imagesAPI = {
	async getAvatar(filename: string) {
		const { data } = await axios.get('/upload/p/' + filename)

		return data
	}
}
