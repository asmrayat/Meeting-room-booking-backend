import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/User/user.route';
import { RoomRoutes } from './app/modules/Room/room.route';
import { SlotRoutes } from './app/modules/Slot/slot.route';
import { BookingRoutes } from './app/modules/Booking/booking.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/auth/', UserRoutes);
app.use('/api/auth/', RoomRoutes);
app.use('/api/', SlotRoutes);
app.use('/api/', BookingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
