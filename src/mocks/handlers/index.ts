import loginHandlers from './login';
import formsHandlers from './forms';

const handlers = [...loginHandlers, ...formsHandlers];

export default handlers;
