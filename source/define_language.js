function define_language(request, initialState){
  var initial_state_copy = JSON.parse(JSON.stringify(initialState));
  if (request.cookies.language){
    initial_state_copy.language = request.cookies.language;
  }
  return initial_state_copy;
}

export default define_language;