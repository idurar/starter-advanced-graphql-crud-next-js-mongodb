import { Schema, model, models } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';
// const bcrypt = require('bcryptjs');

const UserSchema = new Schema<schemaType.User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, required: false },
});

export default models.User || model<schemaType.User>('User', UserSchema);

// // generating a hash
// adminSchema.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
// };

// // checking if password is valid
// adminSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };