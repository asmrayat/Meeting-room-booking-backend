import express from 'express';
import { SlotControllers } from './slot.controller';

const router = express.Router();

router.post('/slots', SlotControllers.createSlot);
router.get('/slots/availability', SlotControllers.getAllSlot);
// router.get('/bookings ', UserControllers.getAllRoom);
// router.get('/rooms/:id', UserControllers.getSingleRoom);
// router.put('/rooms/:id', UserControllers.updateSingleRoom);
// router.delete('/rooms/:id', UserControllers.deleteSingleRoom);

export const SlotRoutes = router;