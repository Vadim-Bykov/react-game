export const getInitialState = (localStorageName, initialState) => {
   let state;
   const localState = JSON.parse(localStorage.getItem(localStorageName));
   if (localState) {
     state = localState;
   } else {
     localStorage.setItem(localStorageName, JSON.stringify(initialState));
     state = initialState;
   }
 
   return state;
 };