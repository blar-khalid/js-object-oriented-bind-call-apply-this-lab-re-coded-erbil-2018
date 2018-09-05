function justInvoke(func) {
  return func();
}
function setThisWithCall(func, objectt, arg) {
  return func.call(objectt, arg);
}

function setThisWithApply(func,objectt, arg) {
  return func.apply(objectt,arg);
}

function returnNewFunctionOf(functionToBeCopied,objectt) {
  const newObject = functionToBeCopied.bind(objectt);
  return newObject;
}