import express from 'express';
import { getUsers, addUsers, editUser, deleteUser, getUserById } from '../Controller/user-controller.js';

const route = express.Router();


route.get('/',getUsers)
route.post('/add', addUsers)
route.get('/:id', getUserById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);

export default route;