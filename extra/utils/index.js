import hasPermission from "./permissions";
import { module1, ROLE_HEAD_TRANIER, PERMISSION_DELETE } from "./constant";
import validateUser from "./validation";
export default function callUtils(users){
    console.log(hasPermission(module1,ROLE_HEAD_TRANIER,PERMISSION_DELETE));
    validateUser(users);
}
