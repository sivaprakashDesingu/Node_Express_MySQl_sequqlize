const {User} = require('./../models')

module.exports = {
    create: function(request, response) {
        User.create(request.body)
        .then(user => response.json(user))
    },
    getUser: function(request,response){
        User.findAll().then(users => response.json(users))
    }
};