import Http from './Http'
import Auth from './Auth'
import Rank from './Rank'

export const httpService = new Http()
export const authService = new Auth(httpService)
export const rankService = new Rank(httpService)
