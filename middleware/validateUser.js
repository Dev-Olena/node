const SIGN_UP_SCHEMA = require('../validations/signUpSchema');

module.exports.validationUser = async (req, res, next) => {

    console.log(req.body);
    if(req.body) {
        try{
            const result = await SIGN_UP_SCHEMA.validate(req.body)
        } catch (error) {
           return res.status(400).send(error.message);
        }
        next()
    }
}