import UserRoutes from '../Modules/Users/Routes/user.routes';
import express from 'express';

const App = express.Router();

App.use('/users', UserRoutes);

export default App;
