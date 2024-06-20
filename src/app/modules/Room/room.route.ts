import express from 'express';
import { RoomControllers } from './room.controller';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

//will call controller function
router.post('/rooms' ,auth(USER_ROLE.admin), RoomControllers.createRoom);
router.get('/rooms', RoomControllers.getAllRoom);
router.get('/rooms/:id', RoomControllers.getSingleRoom);
router.put('/rooms/:id',auth(USER_ROLE.admin), RoomControllers.updateSingleRoom);
router.delete('/rooms/:id',auth(USER_ROLE.admin), RoomControllers.deleteSingleRoom);

export const RoomRoutes = router;