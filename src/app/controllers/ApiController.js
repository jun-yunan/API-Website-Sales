class ApiController {
    //[GET] getAllUser
    getAllUser(req, res, next) {
        res.json({ message: 'hello' });
    }
}

module.exports = new ApiController();
