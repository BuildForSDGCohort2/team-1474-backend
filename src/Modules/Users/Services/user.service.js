import db from '../../../Database/models/index';

export function createUser(user){
    return db.Users.create(user);
}

export function getUserByMail(email){
    return db.Users.findOne({
        where: { email }
    })
}

export function getUserByPhone(phone){
    return db.Users.findOne({
        where: {phone}
    })
}

export function getUserById(id){
    return db.Users.findOne({where: {id}})
}