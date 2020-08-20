import * as UserService from '../Services/user.service';
import {sendresult} from '../../../Utils/helpers';
export async function checkEmailExist(req, res, next){
    const result = await UserService.getUserByMail(req.body.email);
    if(result) return sendresult(res,403, 'email exist');
    return next();
}

export async function checkPhoneExist(req, res, next){
    console.log(req.body.phone);
    const result = await UserService.getUserByPhone(req.body.phone);
    console.log('phonemid', result);
    if(result) return sendresult(res,403, 'phone exist');
    return next();
}