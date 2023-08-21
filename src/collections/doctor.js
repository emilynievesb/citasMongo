import connection from "../utils/connect.js";
class Doctor {
  med_nroMatriculaProsional;
  med_nombreCompleto;
  med_consultario;
  med_especialidad;
  esp_nombre;
  constructor() {}
  async connect() {
    try {
      const result = await connection("medico");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getDoctorBySpeciality() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "especialidad",
              localField: "med_especialidad",
              foreignField: "esp_id",
              as: "especialidad",
            },
          },
          {
            $match: {
              "especialidad.esp_nombre": { $eq: `${this.esp_nombre}` },
            },
          },
          {
            $project: {
              med_nroMatriculaProsional: 1,
              med_nombreCompleto: 1,
              Especialidad: "$especialidad.esp_nombre",
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getDoctorsConsul() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "consultorio",
              localField: "med_consultario",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
          },
          {
            $unwind: "$consultorio",
          },
          {
            $project: {
              _id: 0,
              NombreMedico: "$med_nombreCompleto",
              NombreConsultorio: "$consultorio.cons_nombre",
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Doctor };
