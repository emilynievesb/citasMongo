import { object, string, number, date } from "yup";

const getDocBySpecialityDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      especialidad: string()
        .strict()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Is not in correct format")
        .required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getDatesProxDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      usuario: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getDatesByDocDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      id_medico: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getDatesByPatientDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      usuario: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getDatesByDateDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      fecha: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getCountDatesByDocDateDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      id_medico: number().required(),
      fecha: string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          'El formato de fecha debe ser "YYYY-MM-DD"'
        )
        .required("La fecha es requerida"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getConsultorysPatientDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      usuario: number().required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getDatesByGenderDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      genero: string()
        .oneOf(["femenino", "masculino", "Femenino", "Masculino"])
        .required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const getDatesSuspendByMontDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      mes: number().min(1).max(12).required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export {
  getDocBySpecialityDTO,
  getDatesProxDTO,
  getDatesByDocDTO,
  getDatesByPatientDTO,
  getDatesByDateDTO,
  getCountDatesByDocDateDTO,
  getConsultorysPatientDTO,
  getDatesByGenderDTO,
  getDatesSuspendByMontDTO,
};
