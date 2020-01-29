import { HasPermission } from "./../interfaces";
import {PERMISSION_ALL, PERMISSION_DELETE, PERMISSION_READ, PERMISSION_WRITE } from "./constant";
let hasPermission: HasPermission;

const permission = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: [],
  },
  newUsers: {
    all: ["head-trainer"],
    read: [],
    write: ["trainer"],
    delete: ["trainer"],
  },
};

export default hasPermission = (moduleName, role, permissionType) => {

  if ( permission[moduleName].hasOwnProperty(permissionType)
    && (permission[moduleName][PERMISSION_ALL].indexOf(role) != -1
    || permission[moduleName][permissionType].indexOf(role) != -1) ) {

      return true;

    }

  return false;
};