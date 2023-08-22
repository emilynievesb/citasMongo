import {
  getCountDatesByDocDate,
  getDateByDate,
  getDatesAlph,
  getDatesByDoc,
  getDatesByPatient,
  getDatesProx,
  getDocBySpeciality,
  getDoctorsConsul,
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
    if (result.length !== 1) {
      res.status(404).json("El usuario no tiene citas programadas");
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDatesByDocController = async (req, res, next) => {
  try {
    const { id_medico } = req.query;
    const result = await getDatesByDoc(id_medico);
    if (result.length === 0) {
      res.status(404).json("No tiene citas confirmadas");
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDatesByPatientController = async (req, res, next) => {
  try {
    const { usuario } = req.query;
    const result = await getDatesByPatient(usuario);
    if (result.length === 0) {
      res.status(404).json("Este paciente no tiene citas o no existe");
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDatesByDateController = async (req, res, next) => {
  try {
    const { fecha } = req.query;
    const result = await getDateByDate(fecha);
    if (result.length === 0) {
      res.status(404).json("No hay fechas confirmadas para ese día");
      return;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDoctorsConsulController = async (req, res, next) => {
  try {
    const result = await getDoctorsConsul();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCountDatesByDocDateController = async (req, res, next) => {
  try {
    const { id_medico, fecha } = req.query;
    const result = await getCountDatesByDocDate(id_medico, fecha);
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
  getDatesByDocController,
  getDatesByPatientController,
  getDoctorsConsulController,
  getDatesByDateController,
  getCountDatesByDocDateController,
};
