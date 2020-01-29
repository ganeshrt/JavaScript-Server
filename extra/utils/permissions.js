const PERMISSION_ALL="all"
const PERMISSION_READ="read";
const PERMISSION_WRITE="write";
const PERMISSION_DELETE="delete";
const ROLE_HEAD_TRANIER="head-trainer";
const ROLE_TRANIER="trainer";
const ROLE_TRANIEE="trainee";
const MODULE1="getUsers";
const MODULE2="newUsers";

let permission = {
  [MODULE1]: {
    [PERMISSION_ALL]: [ROLE_HEAD_TRANIER],
    [PERMISSION_READ]: [ROLE_TRANIEE,ROLE_TRANIER ],
    [PERMISSION_WRITE]: [ROLE_TRANIER],
    [PERMISSION_DELETE]: [],
  },
  [MODULE2]: {
    [PERMISSION_ALL]: [ROLE_HEAD_TRANIER],
    [PERMISSION_READ]: [],
    [PERMISSION_WRITE]: [ROLE_TRANIER],
    [PERMISSION_DELETE]: [ROLE_TRANIER],
  }
}

let hasPermission = (moduleName, role, permissionType) => {
  if ( permission[moduleName].hasOwnProperty(permissionType) 
    && (permission[moduleName][PERMISSION_ALL].indexOf(role) != -1 
    || permission[moduleName][permissionType].indexOf(role) != -1) ) 
    {
      return true;
    }
  return false;
}

console.log(hasPermission(MODULE1, ROLE_HEAD_TRANIER, PERMISSION_DELETE));
console.log(hasPermission(MODULE2, ROLE_TRANIER, PERMISSION_READ));
console.log(hasPermission(MODULE2, ROLE_HEAD_TRANIER,PERMISSION_WRITE));
console.log(hasPermission(MODULE1, ROLE_TRANIEE, ));
console.log(hasPermission(MODULE1, "asd", PERMISSION_DELETE));
console.log(hasPermission(MODULE2, ROLE_TRANIEE, PERMISSION_READ));


