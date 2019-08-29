const userRouter = require('../controllers').user;

module.exports = function (router) {
    router.post('/api/create', userRouter.create);
    router.get('/api/getUser', userRouter.getUser);
};
