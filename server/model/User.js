const { Sequelize } = require("sequelize");
const database = require("../config/conn");

const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER(),
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING(100),
    required : true,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(100),
    required : true,
    allowNull: false,
  },
  email: {
    type:Sequelize.STRING(100),
    required : true,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(100),
    required : true,
    allowNull: false,
  },
  role: {
    type: Sequelize.ENUM('customer', 'admin'),
    required : true,
    allowNull: false,
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
},
{
    freezeTableName:true,
    timestamps: true,
    paranoid: true
});

module.exports = User;
