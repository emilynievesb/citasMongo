import connection from "../utils/connect.js";

class Patient {
  usu_id;
  usu_nombre;
  usu_segdo_nombre;
  usu_primer_apellido_usuar;
  usu_segdo_apellido_usuar;
  usu_telefono;
  usu_direccion;
  usu_e_mail;
  usu_fechNac;
  usu_tipodoc;
  usu_genero;
  usu_acudiente;
  constructor() {
    this.usu_nombre = "Emily";
    this.usu_segdo_nombre = "Julieth";
    this.usu_primer_apellido_usuar = "Nieves";
    this.usu_segdo_apellido_usuar = "Badillo";
    this.usu_telefono = 316484155;
    this.usu_e_mail = "nemily1710@gmail.com";
    this.usu_fechNac = "2022-10-12";
    this.usu_tipodoc = 2;
    this.usu_genero = 1;
    this.usu_acudiente = 1333;
  }
  async connect() {
    try {
      const result = await connection("usuario");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getPatientsAlf() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $project: {
              _id: 0,
              UsuarioID: "$usu_id",
              PrimerNombreUsuario: "$usu_nombre",
              SegundoNombreUsuario: "$usu_segdo_nombre",
              PrimerApellidoUsuario: "$usu_primer_apellido_usuar",
              SegundoApellidoUsuario: "$usu_segdo_apellido_usuar",
              UsuarioTelefono: "$usu_telefono",
              DireccionUsuario: "$usu_direccion",
              EmailUsuario: "$usu_e_mail",
              FechaNacimientoUsuario: "$usu_fechNac",
            },
          },
          {
            $sort: {
              PrimerApellidoUsuario: 1,
              PrimerNombreUsuario: 1,
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async isAdult() {
    let today = new Date();
    let birth = new Date(this.usu_fechNac);
    let ageMs = today - birth;
    let age = ageMs / (1000 * 60 * 60 * 24 * 365.25);
    return age >= 18;
  }

  async postPatient() {
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        usu_id: this.usu_id,
        usu_nombre: this.usu_nombre,
        usu_segdo_nombre: this.usu_segdo_nombre,
        usu_primer_apellido_usuar: this.usu_primer_apellido_usuar,
        usu_segdo_apellido_usuar: this.usu_segdo_apellido_usuar,
        usu_telefono: this.usu_telefono,
        usu_direccion: this.usu_direccion,
        usu_e_mail: this.usu_e_mail,
        usu_fechNac: this.usu_fechNac,
        usu_tipodoc: this.usu_tipodoc,
        usu_genero: this.usu_genero,
        usu_acudiente: this.usu_acudiente,
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Patient };
