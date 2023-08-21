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

export { getDocBySpeciality, getPatientsAlph };
