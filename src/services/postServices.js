import { Patient } from "../collections/patient.js";
import { Attendant } from "../collections/attendant.js";

const postPatient = async (
  usu_id,
  usu_nombre,
  usu_segdo_nombre,
  usu_primer_apellido_usuar,
  usu_segdo_apellido_usuar,
  usu_telefono,
  usu_direccion,
  usu_e_mail,
  usu_fechNAc,
  usu_tipodoc,
  usu_genero,
  usu_acudiente,
  acu_codigo,
  acu_nombreCompleto,
  acu_telefono,
  acu_direccion
) => {
  try {
    if (
      usu_id === undefined &&
      usu_nombre === undefined &&
      usu_segdo_nombre === undefined &&
      usu_primer_apellido_usuar === undefined &&
      usu_segdo_apellido_usuar === undefined &&
      usu_telefono === undefined &&
      usu_direccion === undefined &&
      usu_e_mail === undefined &&
      usu_fechNAc === undefined &&
      usu_tipodoc === undefined &&
      usu_genero === undefined &&
      usu_acudiente === undefined &&
      acu_codigo !== undefined &&
      acu_nombreCompleto !== undefined &&
      acu_telefono !== undefined &&
      acu_direccion !== undefined
    ) {
      const attendant = new Attendant();
      attendant.acu_codigo = acu_codigo;
      attendant.acu_nombreCompleto = acu_nombreCompleto;
      attendant.acu_telefono = acu_telefono;
      attendant.acu_direccion = acu_direccion;
      const search = await attendant.searchAttendant();
      if (search.length !== 0) {
        throw new Error("El acudiente ya existe");
      }
      const result = await attendant.postAttendant();
      if (result.affectedRows === 1) {
        return "Acudiente creado con exito";
      }
      return result;
    }
    if (
      usu_id !== undefined &&
      usu_nombre !== undefined &&
      usu_segdo_nombre !== undefined &&
      usu_primer_apellido_usuar !== undefined &&
      usu_segdo_apellido_usuar !== undefined &&
      usu_telefono !== undefined &&
      usu_direccion !== undefined &&
      usu_e_mail !== undefined &&
      usu_fechNAc !== undefined &&
      usu_tipodoc !== undefined &&
      usu_genero !== undefined &&
      acu_nombreCompleto === undefined &&
      acu_telefono === undefined &&
      acu_direccion === undefined
    ) {
      const patient = new Patient();
      patient.usu_id = usu_id;
      patient.usu_nombre = usu_nombre;
      patient.usu_segdo_nombre = usu_segdo_nombre;
      patient.usu_primer_apellido_usuar = usu_primer_apellido_usuar;
      patient.usu_segdo_apellido_usuar = usu_segdo_apellido_usuar;
      patient.usu_telefono = usu_telefono;
      patient.usu_direccion = usu_direccion;
      patient.usu_e_mail = usu_e_mail;
      patient.usu_fechNac = usu_fechNAc;
      patient.usu_tipodoc = usu_tipodoc;
      patient.usu_genero = usu_genero;
      patient.usu_acudiente = usu_acudiente;
      const validation = await patient.isAdult();
      if (
        (!validation && usu_acudiente === undefined) ||
        usu_acudiente === null
      ) {
        throw new Error(
          "El usuario es menor de edad, debe tener un acudiente, por favor primero registre el acudiente"
        );
      }
      const result = await patient.postPatient();
      if (result.affectedRows === 1) {
        return "Paciente creado con éxito";
      }
      return result;
    }
  } catch (error) {
    return error.message;
  }
};

export { postPatient };
