export const setLocal = (user) => {

  localStorage.setItem('', JSON.stringify());
  
};
  
export const getLocal = () => {
  
  return JSON.parse(localStorage.getItem('')) || [];
  
};


const [user, dispatch] = useReducer(userReducer, [], getLocal)