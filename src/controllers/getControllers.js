import { getDocBySpeciality } from "../services/getServices.js";

const getDocBySpecialityController = async (req, res, next) => {
  try {
    const { especialidad } = req.query;
    const result = await getDocBySpeciality(especialidad);
    if (result.length === 0) {
      res.status(404).json("No hay doctores en esa especialidad");
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
export { getDocBySpecialityController };
