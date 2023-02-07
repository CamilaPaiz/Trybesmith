import Joi from 'joi';
import { IProduct } from '../interfaces/Product';
import { IUser } from '../interfaces/User';

const validateProductSchema = (product:IProduct) => {
  const productSchema = Joi.object<IProduct>({
    name: Joi.string().min(3).required().label('name'),
    amount: Joi.string().min(3).required().label('amount')
      .messages({
        'any.required': '{{#label}} is required',
        'any.string': '{{#label}} must be a string',
        'any.min': '{{#label}} length must be at least 3 characters long',
      }),
  });
  return productSchema.validate(product);
}; 

/* function validate(product:IProduct):IError[] {
  const productSchema = Joi.object<IProduct>({
    name: Joi.string().min(3).required().error(() => ({
      type: 400,
      message: '"name" is required',
    })),
  });
} 
 */
const validateUserSchema = (user:IUser) => {
  const userSchema = Joi.object<IUser>({
    username: Joi.string().min(3).required(),
    vocation: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });
  return userSchema.validate(user);
};

export default { validateProductSchema, validateUserSchema };