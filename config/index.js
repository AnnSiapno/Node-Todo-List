let configValues = require('./config')

module.exports = {

  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds111882.mlab.com:11882/node-todo-list'
  }

}
