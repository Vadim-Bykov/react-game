export const playGame = () => (_, getState) => {
   const refs = getState().autoplay.refs;
   let interval = 2000;
   const refsCopy = [...refs]
     .sort((prevRef, nextRef) => prevRef.current.id - nextRef.current.id);
     refsCopy.forEach(element => {
     interval += 2000;
     setTimeout(() => element.current.click(), interval);
   });
 }