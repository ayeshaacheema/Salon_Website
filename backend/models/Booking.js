const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Service = require('./Service');

const Booking = sequelize.define('Booking', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  time: { type: DataTypes.STRING, allowNull: false },
  notes: { type: DataTypes.STRING, allowNull: true },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
    defaultValue: 'pending',
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Service.hasMany(Booking, { foreignKey: 'serviceId', onDelete: 'CASCADE' });
Booking.belongsTo(Service, { foreignKey: 'serviceId', allowNull: false });

module.exports = Booking;
