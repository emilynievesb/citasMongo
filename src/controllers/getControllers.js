import {
  getDatesAlph,
  getDatesProx,
  getDocBySpeciality,
  getPatientsAlph,
} from "../services/getServices.js";

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

const getPatientsAlphController = async (req, res, next) => {
  try {
    const result = await getPatientsAlph();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDatesAlphController = async (req, res, next) => {
  try {
    const result = await getDatesAlph();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDatesProxController = async (req, res, next) => {
  try {
    const { usuario } = req.query;
    const result = await getDatesProx(usuario);
    // if (result.length !== 1) {
    //   res.status(404).json("El usuario no tiene citas programadas");
    //   return;
    // }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  getDocBySpecialityController,
  getPatientsAlphController,
  getDatesAlphController,
  getDatesProxController,
};
