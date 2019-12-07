function map (object , handler){
  const keys = Object.keys(object);
  return keys.map((key) => handler(object[key], key));
}

export default map;