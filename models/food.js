'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    type: {
      type : DataTypes.STRING,
      validate: {
        isValidType: function(value, next) {
          if(['bread', 'sweets'].includes(value)) {
            return next()
          }
          next('Unacceptable type of food.')
        }
      }
    }
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
  };
  return Food;
};