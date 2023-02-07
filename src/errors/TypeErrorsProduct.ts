const errorTypes = [
  { type: 400, message: '"name" is required' },
  { type: 400, message: '"amount" is required' },
  { type: 422, message: '"name" must be a string' },
  { type: 422, message: '"amount" must be a string' },
  { type: 422, message: '"name" length must be at least 3 characters long' },
  { type: 422, message: '"amount" length must be at least 3 characters long' },
];
  
const getError = (message:string) => errorTypes.find((err) => err.message === message);
  
export default getError;
