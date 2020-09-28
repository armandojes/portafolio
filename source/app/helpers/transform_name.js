import capitalize from 'helpers/capitalize';

function transform_name (string){
  let name = string.replace('_', ' ');
  name = name.replace('_', ' ');
  name = name.replace('-', ' ');
  name = name.replace('-', ' ');
  return capitalize(name);
}

export default transform_name;