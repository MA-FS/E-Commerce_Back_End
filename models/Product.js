// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Integer.
      allowNull: false, // Doesn't allow null values.
      primaryKey: true, // Set as primary key.
      autoIncrement: true // Uses auto increment.
    },
    
    product_name: {
        type: DataTypes.STRING, // String.
        allowNull: false // Doesn't allow null values.
    },
    
    price: {
        type: DataTypes.DECIMAL(10,2), // Decimal.
        allowNull: false, // Doesn't allow null values.
        validate: {
            isDecimal: true // Validates that the value is a decimal.
        }
    },
    
    stock: {
        type: DataTypes.INTEGER, // Integer.
        allowNull: false, // Doesn't allow null values.
        defaultValue: 10, // Set a default value of 10.
        validate: {
            isNumeric: true // Validates that the value is numeric.
        }
    },
    
    category_id: {
        type: DataTypes.INTEGER, // Integer.
        references: {
            model: "category", // References the Category model's id.
            key: "id"  
        }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
