import { DateUsu } from "../collections/date.js";
import { Doctor } from "../collections/doctor.js";
import { Patient } from "../collections/patient.js";

const getDocBySpeciality = async (esp_nombre) => {
  const doctor = new Doctor();
  doctor.esp_nombre = esp_nombre;
  const result = await doctor.getDoctorBySpeciality();
  console.log(result);
  return result;
};

const getPatientsAlph = async () => {
  const patient = new Patient();
  const result = await patient.getPatientsAlf();
  return result;
};

const getDatesAlph = async () => {
  const date = new DateUsu();
  const result = await date.getDatesAlf();
  return result;
};

const getDatesProx = async (usu_id) => {
  const date = new DateUsu();
  date.usu_id = usu_id;
  const result = await date.getDateProx();
  return result;
};

const getDatesByDoc = async (med_id) => {
  const date = new DateUsu();
  date.med_id = med_id;
  const result = await date.getDatesDoc();
  return result;
};

const getDatesByPatient = async (usu_id) => {
  const date = new DateUsu();
  date.usu_id = usu_id;
  const result = await date.getDatePatient();
  return result;
};
const getDateByDate = async (fecha) => {
  const date = new DateUsu();
  date.fecha = fecha;
  const result = await date.getDatesByDate();
  return result;
};

const getDoctorsConsul = async () => {
  const doctor = new Doctor();
  const result = await doctor.getDoctorsConsul();
  return result;
};

const getCountDatesByDocDate = async (med_id, fecha) => {
  const date = new DateUsu();
  date.med_id = med_id;
  date.fecha = fecha;
  const result = await date.getCountDatesByDocDate();
  return result;
};

const getConsultorysPatient = async (usu_id) => {
  const date = new DateUsu();
  date.usu_id = usu_id;
  const result = await date.getConsultorysPatient();
  return result;
};

const getDatesByGender = async (genero) => {
  const date = new DateUsu();
  date.genero = genero.charAt(0).toUpperCase() + genero.slice(1);
  const result = await date.getDatesByGender();
  return result;
};

const getDatesSuspendByMont = async (mes) => {
  const date = new DateUsu();
  date.mes = mes;
  const result = await date.getDatesSuspendByMont();
  return result;
};

export {
  getDocBySpeciality,
  getDateByDate,
  getPatientsAlph,
  getDatesByPatient,
  getDatesAlph,
  getDatesProx,
  getDoctorsConsul,
  getDatesByDoc,
  getCountDatesByDocDate,
  getConsultorysPatient,
  getDatesByGender,
  getDatesSuspendByMont,
};
