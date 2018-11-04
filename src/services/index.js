import Http from './Http'
import Auth from './Auth'

export const httpService = new Http()
export const authService = new Auth(httpService)
