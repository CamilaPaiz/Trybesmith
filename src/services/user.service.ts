import UserModel from '../models/user.model';
import { IUser } from '../interfaces/User';
/* import { userSchema } from '../validations/schema';
import getError from '../errors/TypeErrorsUser'; */
 
async function create(
  username:string, 
  vocation:string, 
  level:number, 
  password:string,
)
  :Promise<IUser> {
  /*  const { error } = userSchema.validate(username, vocation, level, password);
  if (error) {
    return getError(error);
  }  */
  const newUser = await UserModel.create(username, vocation, level, password);
  return newUser;
}

export default { create };