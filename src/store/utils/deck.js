import angular from '../../assets/img/angular.svg';
import aurelia from '../../assets/img/aurelia.svg';
import backbone from '../../assets/img/backbone.svg';
import ember from '../../assets/img/ember.svg';
import react from '../../assets/img/react.svg';
import vue from '../../assets/img/vue.svg';
import js from '../../assets/img/js-badge.svg';

const shuffle = (array) => {
  const arrCopy = [...array];
  return arrCopy.sort(() => Math.random() - 0.5);
};

export default function initializeDeck(countPair = 6) {
  let id = 0;
  // const cards = ['angular', 'aurelia', 'backbone', 'ember', 'react', 'vue']
  const cards = shuffle([angular, aurelia, backbone, ember, react, vue, js])
    .slice(0, countPair)
    .reduce((acc, type) => {
      acc.push({ id: id++, type });
      acc.push({ id: id++, type });
      return acc;
    }, []);

  return shuffle(cards);
}
