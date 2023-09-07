const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'johndoe@hotmail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe 2',
        email: 'johndoe2@hotmail.com',
        password_hash: await bcrypt.hash('64321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John Doe 3',
        email: 'johndoe3@hotmail.com',
        password_hash: await bcrypt.hash('123123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
