import { TagsState } from './../../store/ducks/tags/contracts/state';
import axios from 'axios'

export const tagsAPI = {
	fetchTags(): Promise<TagsState['items']> {
		return axios.get('/tags').then(({ data }) => data)
	},
}
