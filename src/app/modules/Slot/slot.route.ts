import express from 'express';
import { SlotControllers } from './slot.controller';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middlwares/validateRequest';
import { SlotValidation } from './slot.validation';

const router = express.Router();

router.post('/slots',auth(USER_ROLE.admin),validateRequest(SlotValidation.slotValidationSchema), SlotControllers.createSlot);
router.get('/slots/availability', SlotControllers.getAllSlot);
// router.get('/bookings ', UserControllers.getAllRoom);
// router.get('/rooms/:id', UserControllers.getSingleRoom);
// router.put('/rooms/:id', UserControllers.updateSingleRoom);
// router.delete('/rooms/:id', UserControllers.deleteSingleRoom);

export const SlotRoutes = router;