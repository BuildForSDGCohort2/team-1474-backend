import * as  UserService from '../Services/user.service';
import {hashPassword, createToken} from '../../../Utils/authentication.util';
import { sendresult } from '../../../Utils/helpers';

export function signup(req, res){
    const {email,phone, password, lastname, name} = req.body;
    const result = UserService.createUser({email, phone, password: hashPassword(password), lastname,name});
    const token =  createToken({email, phone, lastname, name}, true);
    return sendresult(res, 201, 'user created', {...result, token});
}