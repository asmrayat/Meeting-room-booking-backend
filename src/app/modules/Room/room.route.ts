import express from 'express';
import { RoomControllers } from './room.controller';

const router = express.Router();

//will call controller function
router.post('/rooms', RoomControllers.createRoom);
router.get('/rooms', RoomControllers.getAllRoom);
router.get('/rooms/:id', RoomControllers.getSingleRoom);
router.put('/rooms/:id', RoomControllers.updateSingleRoom);
router.delete('/rooms/:id', RoomControllers.deleteSingleRoom);

export const RoomRoutes = router;