

export default function initializeDeck() {
   let id = 0;
   const cards = ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue'].reduce((acc, type) => {
      acc.push({
         id: id++,
         type
      })
      acc.push({
         id: id++,
         type
      })
      return acc
   }, [])

   return cards;
}