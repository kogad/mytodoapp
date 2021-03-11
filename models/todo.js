"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      description: DataTypes.STRING,
      deadline: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "todo",
      underscored: true,
    }
  );
  return todo;
};
