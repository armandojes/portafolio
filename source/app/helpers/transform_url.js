function transform_url (url){
  
  var parsed = url.replace('-', '_');
  parsed = parsed.replace(' ', '_');
  return parsed;
}

export default transform_url;