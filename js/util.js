'use strict';

window.util = (function () {

  /**
    * случайное значение из диапазона
    * @param {number} min - минимальное значение
    * @param {number} max - максимальное значение
    * @return {number} случайное значение
    */
  var getRandomBetween = function (min, max) {
    var random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  };

  return {

    /**
     * случайное значение из массива
     * @param {array} array - исходный массив значений
     * @return {*} случайное значение из массива
     */
    getRandomElementFromArray: function (array) {
      return array[getRandomBetween(0, array.length - 1)];
    },

    /**
     * уникальное значение из массива
     * @param {array} array - исходный массив значений
     * @return {function} возвращает функцию, которая при каждом новом вызове возвращает уникальное значение из массива
     */
    getUniqueElementFromArray: function (array) {
      var copyArray = array.slice();

      return function () {
        var randomIndexArray = getRandomBetween(0, copyArray.length - 1);
        return copyArray.splice(randomIndexArray, 1);
      };
    },
  };
})();
