import connection from "../utils/connect.js";
class DateUsu {
  cit_codigo;
  cit_fecha;
  cit_estadoCita;
  cit_medico;
  cit_datosUsuario;
  usu_id;
  med_id;
  fecha;
  genero;
  mes;
  constructor() {}
  async connect() {
    try {
      const result = await connection("cita");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getDatesAlf() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProfesional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "estado_cita",
              localField: "cit_estadoCita",
              foreignField: "estcita_id",
              as: "estado_cita",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $unwind: "$estado_cita",
          },
          {
            $project: {
              CodigoCita: "$cit_codigo",
              FechaCita: "$cit_fecha",
              IdEstadoCita: "$cit_estadoCita",
              EstadoCita: "$estado_cita.estcita_nombre",
              MedicoID: "$cit_medico",
              MedicoNombre: "$medico.med_nombreCompleto",
              UsuarioID: "$cit_datosUsuario",
              PrimerApellido: "$usuario.usu_primer_apellido_usuar",
              Nombre: "$usuario.usu_nombre",
            },
          },
          {
            $sort: {
              PrimerApellido: 1,
              Nombre: 1,
            },
          },
        ])
        .toArray();
      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getDateProx() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_datosUsuario: { $eq: Number(this.usu_id) },
              cit_fecha: { $gte: new Date() },
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProfesional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "estado_cita",
              localField: "cit_estadoCita",
              foreignField: "estcita_id",
              as: "estado_cita",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $unwind: "$estado_cita",
          },
          {
            $project: {
              CodigoCita: "$cit_codigo",
              FechaCita: "$cit_fecha",
              IdEstadoCita: "$cit_estadoCita",
              EstadoCita: "$estado_cita.estcita_nombre",
              MedicoID: "$cit_medico",
              MedicoNombre: "$medico.med_nombreCompleto",
              UsuarioID: "$cit_datosUsuario",
              PrimerApellido: "$usuario.usu_primer_apellido_usuar",
              Nombre: "$usuario.usu_nombre",
            },
          },
          {
            $sort: {
              cit_fecha: 1,
            },
          },
          {
            $limit: 1,
          },
        ])
        .toArray();

      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error.message;
    }
  }
  async getDatesDoc() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_medico: Number(this.med_id),
              cit_estadoCita: 2,
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProfesional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "consultorio",
              localField: "medico.med_consultorio",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
          },
          {
            $lookup: {
              from: "especialidad",
              localField: "medico.med_especialidad",
              foreignField: "esp_id",
              as: "especialidad",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$consultorio",
          },
          {
            $unwind: "$especialidad",
          },
          {
            $project: {
              NombrePaciente: "$usuario.usu_nombre",
              ApellidoPaciente: "$usuario.usu_primer_apellido_usuar",
              FechaCita: "$cit_fecha",
              NombreEspecialidad: "$especialidad.esp_nombre",
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
  async getDatePatient() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_datosUsuario: this.usu_id,
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProsional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "consultorio",
              localField: "medico.med_consultario",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
          },
          {
            $lookup: {
              from: "especialidad",
              localField: "medico.med_especialidad",
              foreignField: "esp_id",
              as: "especialidad",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $unwind: "$consultorio",
          },
          {
            $unwind: "$especialidad",
          },
          {
            $project: {
              NombrePaciente: "$usuario.usu_nombre",
              ApellidoPaciente: "$usuario.usu_primer_apellido_usuar",
              FechaCita: "$cit_fecha",
              NombreConsultorio: "$consultorio.cons_nombre",
              NombreEspecialidad: "$especialidad.esp_nombre",
              NombreMedico: "$medico.med_nombreCompleto",
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getDatesByDate() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_fecha: new Date(this.fecha),
              cit_estadoCita: 2,
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProsional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "consultorio",
              localField: "medico.med_consultario",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
          },
          {
            $lookup: {
              from: "especialidad",
              localField: "medico.med_especialidad",
              foreignField: "esp_id",
              as: "especialidad",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $unwind: "$consultorio",
          },
          {
            $unwind: "$especialidad",
          },
          {
            $project: {
              NombrePaciente: "$usuario.usu_nombre",
              ApellidoPaciente: "$usuario.usu_primer_apellido_usuar",
              FechaCita: "$cit_fecha",
              EstadoCita: "$cit_estadoCita",
              NombreConsultorio: "$consultorio.cons_nombre",
              NombreEspecialidad: "$especialidad.esp_nombre",
              NombreMedico: "$medico.med_nombreCompleto",
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getCountDatesByDocDate() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_medico: this.med_id,
              cit_fecha: this.fecha,
            },
          },
          {
            $count: "NumeroCitas",
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getConsultorysPatient() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_datosUsuario: this.usu_id,
              cit_estadoCita: 5,
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProsional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "consultorio",
              localField: "medico.med_consultario",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $unwind: "$consultorio",
          },
          {
            $project: {
              NombrePaciente: "$usuario.usu_nombre",
              ApellidoPaciente: "$usuario.usu_primer_apellido_usuar",
              FechaCita: "$cit_fecha",
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
  async getDatesByGender() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_estadoCita: 5,
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProsional",
              as: "medico",
            },
          },
          {
            $lookup: {
              from: "genero",
              localField: "usuario.usu_genero",
              foreignField: "gen_id",
              as: "genero",
            },
          },
          {
            $lookup: {
              from: "consultorio",
              localField: "medico.med_consultario",
              foreignField: "cons_codigo",
              as: "consultorio",
            },
          },
          {
            $lookup: {
              from: "especialidad",
              localField: "medico.med_especialidad",
              foreignField: "esp_id",
              as: "especialidad",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $unwind: "$genero",
          },
          {
            $unwind: "$consultorio",
          },
          {
            $unwind: "$especialidad",
          },
          {
            $match: {
              "genero.gen_nombre": this.genero,
            },
          },
          {
            $project: {
              NombrePaciente: "$usuario.usu_nombre",
              ApellidoPaciente: "$usuario.usu_primer_apellido_usuar",
              GeneroPaciente: "$genero.gen_nombre",
              FechaCita: "$cit_fecha",
              NombreConsultorio: "$consultorio.cons_nombre",
              NombreEspecialidad: "$especialidad.esp_nombre",
              NombreMedico: "$medico.med_nombreCompleto",
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async getDatesSuspendByMont() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              cit_estadoCita: 8,
              cit_fecha: {
                $gte: new Date(new Date().getFullYear(), this.mes - 1, 1),
                $lt: new Date(new Date().getFullYear(), this.mes, 1),
              },
            },
          },
          {
            $lookup: {
              from: "usuario",
              localField: "cit_datosUsuario",
              foreignField: "usu_id",
              as: "usuario",
            },
          },
          {
            $lookup: {
              from: "medico",
              localField: "cit_medico",
              foreignField: "med_nroMatriculaProsional",
              as: "medico",
            },
          },
          {
            $unwind: "$usuario",
          },
          {
            $unwind: "$medico",
          },
          {
            $project: {
              FechaCita: "$cit_fecha",
              NombreUsuario: "$usuario.usu_nombre",
              NombreMedico: "$medico.med_nombreCompleto",
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

export { DateUsu };
