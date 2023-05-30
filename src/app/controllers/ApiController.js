const UserSchema = require('../models/UserSchema');

class ApiController {
    //[GET] getAllUser
    async getAllUser(req, res, next) {
        try {
            const user = await UserSchema.find({});

            if (!user) return;

            res.json({ message: 'Successfully!!!', status: true, user });
        } catch (error) {
            return res.json({ message: 'Fail!!!', status: false, error });
        }
    }
}

module.exports = new ApiController();
