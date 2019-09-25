import Sequelize, { Model } from "sequelize";

class Pet extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        gender: Sequelize.STRING,
        species: Sequelize.STRING,
        age: Sequelize.FLOAT,
        weight: Sequelize.INTEGER,
        breed: Sequelize.STRING,
        found: Sequelize.BOOLEAN,
        lost: Sequelize.BOOLEAN,
        for_adotion: Sequelize.BOOLEAN,
        adopted: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "owner_id" });
  }
}

export default Pet;
