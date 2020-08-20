import validator from 'validator';
import { sendresult } from '../../../Utils/helpers';

export default function validateSignup(req, res, next){
    const error = [];
    const {email, phone, name, lastname, password, confirmPassword} = req.body;
    if(!email || !validator.isEmail(email)) error.push({key: 'email', message: 'email is not valid'});
    if(!phone || phone.lenght < 9 || !validator.isNumeric(phone)) error.push({key: 'phone', message: 'phone is not valid'});
    if(!name) error.push({key: 'name', message: 'name is not valid'});
    if(!lastname) error.push({key: 'lastname', message: 'lastname is not valid'});
    if(!password || password.lenght < 8) error.push({key: 'password', message: 'password is not valid'});
    if(!confirmPassword) error.push({key: 'confirmPassword', message: 'confirm is not valid'});
    if(password !== confirmPassword) error.push({key: 'password', message: 'password is different from confirmPassoword'});
    if(error.length > 0) return sendresult(res, 400, 'Make sure you provide correct data', error);
    return next();
}