const errorTypes = [
  { type: 400, message: '"username" is required' },
  { type: 400, message: '"vocation" is required' },
  { type: 400, message: '"level" is required' },
  { type: 400, message: '"password" is required' },
  { type: 422, message: '"username" must be a string' },
  { type: 422, message: '"vocation" must be a string' },
  { type: 422, message: '"level" must be a number' },
  { type: 422, message: '"password" must be a string' },
  { type: 422, message: '"username" length must be at least 3 characters long' },
  { type: 422, message: '"vocation" length must be at least 3 characters long' },
  { type: 422, message: '"level" must be greater than or equal to 1g' },
  { type: 422, message: '"password" length must be at least 8 characters long' },
];
    
const getError = (message:string) => errorTypes.find((err) => err.message === message);
    
export default getError;