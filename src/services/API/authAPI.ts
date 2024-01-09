import { axios } from '../../core/axios'
import { LoginFormProps } from '../../pages/SignIn/components/LoginModal'
import { RegisterFormProps } from '../../pages/SignIn/components/RegisterModal'

interface Response {
	status: string
	data: any
}

export const AuthAPI = {
	async signin(postData: LoginFormProps): Promise<Response> {
		const { data } = await axios.post<Response>('/auth/login', {
			username: postData.email,
			password: postData.password,
		})
		return data.data
	},

	async signUp(postData: RegisterFormProps): Promise<Response> {
		const { data } = await axios.post<Response>('/auth/register', {
			email: postData.email,
			username: postData.username,
			fullname: postData.fullname,
			password: postData.password,
			password2: postData.password2,
		})
		return data.data
	},

	async getMe(): Promise<Response> {
		const { data } = await axios.get<Response>('/users/me')
		return data
	},
	async getUserInfo(userId: string): Promise<Response> {
		const { data } = await axios.get<Response>('/users/' + userId)
		return data
	},
}


// @ts-ignore
window.AuthAPI = AuthAPI