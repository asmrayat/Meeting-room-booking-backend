/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/User/user.route';
import { RoomRoutes } from './app/modules/Room/room.route';
import { SlotRoutes } from './app/modules/Slot/slot.route';
import { BookingRoutes } from './app/modules/Booking/booking.route';
import globalErrorHandler from './app/middlwares/globalErrorhandler';
import notFound from './app/middlwares/notFound';
import { LoginRouter } from './app/modules/Auth/auth.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/auth/', UserRoutes);
app.use('/api/auth/', LoginRouter);
app.use('/api/', RoomRoutes);
app.use('/api/', SlotRoutes);
app.use('/api/', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
