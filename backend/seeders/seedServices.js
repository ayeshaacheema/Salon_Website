require('dotenv').config();
const sequelize = require('../config/database');
const Service = require('../models/Service');

const services = [
  { name: 'Bridal Makeup', category: 'makeup', price: 'on request', note: 'Includes trial' },
  { name: 'Party Makeup', category: 'makeup', price: 'PKR 18,000' },
  { name: 'Editorial / Shoot', category: 'makeup', price: 'on request' },
  { name: 'Casual / Soft Glam', category: 'makeup', price: 'PKR 12,000' },

  { name: 'Signature Cut', category: 'hair', price: 'PKR 5,500' },
  { name: 'Colour · Balayage', category: 'hair', price: 'from PKR 22,000' },
  { name: 'Keratin · Botox', category: 'hair', price: 'from PKR 18,000' },
  { name: 'Bridal Hair Styling', category: 'hair', price: 'PKR 15,000' },

  { name: 'Hydrafacial', category: 'skin', price: 'PKR 14,000' },
  { name: 'Signature Facial', category: 'skin', price: 'PKR 9,500' },
  { name: 'Bridal Radiance Course', category: 'skin', price: 'from PKR 45,000' },
  { name: 'Chemical Peel', category: 'skin', price: 'PKR 11,000' },

  { name: 'Manicure', category: 'nails', price: 'PKR 3,500' },
  { name: 'Pedicure', category: 'nails', price: 'PKR 4,500' },
  { name: 'Gel Overlay', category: 'nails', price: 'PKR 5,500' },
  { name: 'Minimal Nail Art', category: 'nails', price: 'PKR 6,500' },

  { name: 'Bridal Mehndi', category: 'mehndi', price: 'on request' },
  { name: 'Party Mehndi', category: 'mehndi', price: 'PKR 4,500' },
  { name: 'Threading & Waxing', category: 'mehndi', price: 'from PKR 800' },
  { name: 'Bridal Waxing Ritual', category: 'mehndi', price: 'PKR 8,500' },
];

async function seed() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const existing = await Service.count();
    if (existing > 0) {
      console.log(`Services table already has ${existing} row(s). Skipping seed.`);
      process.exit(0);
    }

    await Service.bulkCreate(services);
    console.log(`Seeded ${services.length} services.`);
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
