import connection from "../utils/connect.js";

class Attendant {
  acu_codigo;
  acu_nombreCompleto;
  acu_telefono;
  acu_direccion;
  constructor() {
    this.acu_nombreCompleto = "Alguien";
    this.acu_telefono = 316484155;
    this.acu_direccion = "Una casa";
  }
  async connect() {
    try {
      const result = await connection("acudiente");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async postAttendant() {
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        acu_codigo: this.acu_codigo,
        acu_nombreCompleto: this.acu_nombreCompleto,
        acu_telefono: this.acu_telefono,
        acu_direccion: this.acu_direccion,
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async searchAttendant() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .findOne({
          acu_codigo: this.acu_codigo,
        })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Attendant };
