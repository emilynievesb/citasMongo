import connection from "../utils/connect.js";
class Doctor {
  med_nroMatriculaProfesional;
  med_nombreCompleto;
  med_consultorio;
  med_especialidad;
  esp_nombre;
  constructor() {
    this.med_nroMatriculaProfesional = 888888;
    this.med_nombreCompleto = "Antonio Apellido";
    this.med_consultorio = 5;
    this.med_especialidad = 1;
  }
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
              localField: "med_consultorio",
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
