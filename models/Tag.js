const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    
    id: {
      type: DataTypes.INTEGER, // Integer.
      allowNull: false, // Doesn't allow null values.
      primaryKey: true, // Set as primary key.
      autoIncrement: true // Uses auto increment.
    },
    
    tag_name: {
        type: DataTypes.STRING // String.
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
