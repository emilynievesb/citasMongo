import { Date } from "../collections/date.js";
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
  const date = new Date();
  const result = await date.getDatesAlf();
  return result;
};

const getDatesProx = async (usu_id) => {
  const date = new Date();
  date.usu_id = usu_id;
  const result = await date.getDateProx();
  return result;
};

export { getDocBySpeciality, getPatientsAlph, getDatesAlph, getDatesProx };
