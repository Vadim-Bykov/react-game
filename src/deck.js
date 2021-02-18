import angular from './img/angular.svg';
import aurelia from './img/aurelia.svg';
import backbone from './img/backbone.svg';
import ember from './img/ember.svg';
import react from './img/react.svg';
import vue from './img/vue.svg';


const shuffle = (array) => {
   const arrCopy = [...array];
   return arrCopy.sort(() => Math.random() - 0.5);
}

export default function initializeDeck() {
   let id = 0;
   // const cards = ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue']
   const cards = [angular, aurelia, backbone, ember, react, vue]
      .reduce((acc, type) => {
         acc.push({ id: id++, type });
         acc.push({ id: id++, type });
         return acc;
   }, [])

   return shuffle(cards);
}