import express from 'express';
import validateSignup from '../Validation.js/signup.validation';
import { checkEmailExist, checkPhoneExist } from '../Middlewares';
import {signup} from '../Controllers/user.controller';

const App = express.Router();

App.post('/signup', validateSignup, checkEmailExist, checkPhoneExist, signup);

export default App;