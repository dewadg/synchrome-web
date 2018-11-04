import axios from 'axios'

export default class Http {
  _axios = null

  constructor () {
    this._axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    })
  }
  
  /**
   * Set HTTP basic auth data.
   * 
   * @param  {object} val
   */
  set authData (val) {
    this._axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      auth: val
    })
  }

  /**
   * Perform GET request.
   * 
   * @param  {string} url
   */
  get (url) {
    try {
      return this._axios.request({
        method: 'get',
        url
      })
    } catch (err) {
      throw err
    }
  }

  /**
   * Perform POST request.
   * 
   * @param  {string} url
   * @param  {object} data
   */
  post (url, data) {
    try {
      return this._axios.request({
        method: 'post',
        url,
        data
      })
    } catch (err) {
      throw err
    }
  }

  /**
   * Perform PATCH request.
   * 
   * @param  {string} url
   * @param  {object} data
   */
  patch (url, data) {
    try {
      return this._axios.request({
        method: 'patch',
        url,
        data
      })
    } catch (err) {
      throw err
    }
  }

  /**
   * Perform DELETE request.
   * 
   * @param  {string} url
   */
  delete (url) {
    try {
      return this._axios.request({
        method: 'delete',
        url
      })
    } catch (err) {
      throw err
    }
  }
}
