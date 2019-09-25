module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pets", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      species: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      breed: {
        type: Sequelize.STRING,
      },
      found: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      lost: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      for_adoption: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      adopted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("pets");
  },
};
