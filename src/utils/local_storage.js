export { isInLE, checkUsuario };
import { router } from "../router/router.js";

const isInLE = (item) => (localStorage.getItem(item) ? true : false);

const checkUsuario = () => {
  return isInLE("idToken"); 
};
