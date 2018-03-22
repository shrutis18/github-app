const Users = [
               {"id": 1, "name": "Govind Patel", "profile": "https:/jbdfjsvb", "dataOne": "qwerty", "dataTwo": "qwerty"},
               {"id": 2, "name": "Pooja Patel" ,"profile": "https:/jbdfjsvb", "dataOne": "qwerty", "dataTwo": "qwerty"},
               {"id": 3, "name": "Sneha Patel", "profile": "https:/jbdfjsvb", "dataOne": "qwerty", "dataTwo": "qwerty"},

             ];
const initialState = {
//users: Users
}
export default  (state = initialState, action)  => {
console.log('action', action)
switch (action.type) {
case 'FETCH_USERS': {
  return {
    ...state,
    users: action.users
  }

 }
  default:
  return state;
 }

 }
