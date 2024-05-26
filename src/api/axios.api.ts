import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/localstorage.helper'

export const instance = axios.create({
	// baseURL: 'http://localhost:3001/api',
	baseURL: 'https://my-budget-app-nest-js-backend.vercel.app/api',
	headers: {
		Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
	},
})
