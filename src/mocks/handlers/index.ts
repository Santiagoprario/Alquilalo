import addUserHandlers from './addUser';
import loginHandlers from './login';
import formsHandlers from './forms';
import orderHandlers from './orders';

const handlers = [...addUserHandlers, ...orderHandlers];

export default handlers;
