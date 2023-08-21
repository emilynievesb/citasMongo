import { Doctor } from "../collections/doctor.js";

const getDocBySpeciality = async (esp_nombre) => {
  const doctor = new Doctor();
  doctor.esp_nombre = esp_nombre;
  const result = await doctor.getDoctorBySpeciality();
  console.log(result);
  return result;
};

export { getDocBySpeciality };
