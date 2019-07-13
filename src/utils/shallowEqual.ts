export const shallowEqualObjects = <T, K extends keyof T>(objA: T, objB: T) => {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  const objAKeys = Object.keys(objA) as K[];
  const objBKeys = Object.keys(objB) as K[];

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  for (let key in objAKeys) {
    if (objA[key as K] !== objB[key as K]) {
      return false;
    }
  }

  return true;
};
