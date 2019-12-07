function capitalize (string){
  let capitalized = string.split(' ');
  capitalized = capitalized.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  capitalized = capitalized.join(' ');
  return capitalized;
}

export default capitalize;