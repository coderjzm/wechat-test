class Model {
  constructor () {
    this.host = process.env.API
  }

  api (options = {}) {
    if (!options.method) options.method = 'get'
    return new Promise((resolve, reject) => {
      wx.request({
        method: options.method,
        url: this.host + options.url,
        data: options.data,
        success: function (res) {
          resolve(res)
        },
        fail: function (error) {
          reject(error)
        },
        complete: function (res) {
        }
      })
    })
  }

  get (options = {}) {
    options.method = 'get'
    return this.api(options)
  }

  post (options = {}) {
    options.method = 'post'
    return this.api(options)
  }

  put (options = {}) {
    options.method = 'put'
    return this.api(options)
  }

  delete (options = {}) {
    options.method = 'delete'
    return this.api(options)
  }
}

export default Model
