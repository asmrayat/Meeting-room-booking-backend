import { Schema, model } from 'mongoose';
import { string } from 'zod';
import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import config from '../../config';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
userSchema.pre('save', async function (next) {
  const isEmailExists = await User.findOne({
    email: this.email
  });

  if (isEmailExists) {
    throw new Error('Email Already Registered');
  }
  next();
});

userSchema.post('save', function (doc: Partial<TUser>, next) {
  doc.password = undefined;
  next();
});

export const User = model<TUser>('User', userSchema);
