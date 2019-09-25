import * as Yup from "yup";
import Pet from "../models/Pet";

class PetController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      gender: Yup.string().required(),
      species: Yup.string().required(),
      age: Yup.number().positive(),
      weight: Yup.number().positive(),
      breed: Yup.string(),
      found: Yup.boolean(), // Colocar .when() para que sejá necessário fornecer um dos parâmetros (found, lost, for_adoption) como true
      lost: Yup.boolean(),
      for_adoption: Yup.boolean(),
      adopted: Yup.boolean(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: "Validation failed" });
    }

    const owner_id = req.userId;

    // Add validation to check if an animal with the same name and from the same owner already exists

    const pet = await Pet.create({ ...req.body, owner_id });

    return res.json(pet);
  }
}

export default new PetController();
