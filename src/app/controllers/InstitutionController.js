import User from "../models/User";

class InstitutionController {
  async index(req, res) {
    let institutions = await User.findAll({
      where: {
        institute: true,
      },
      order: ["id"],
      attributes: ["name"],
    });

    // Institutions come as: [{name: name1}, {name: name2}, {name: name3}]
    // After the instruction below, it becomes: [name1, name2, name3]
    institutions = institutions.map(i => i.name);

    return res.json(institutions);
  }
}

export default new InstitutionController();
