import { postPatient } from "../services/postServices.js";

const postPatientController = async (req, res, next) => {
  try {
    const {
      documento,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      telefono,
      direccion,
      email,
      fecha_nacimiento,
      id_tipo_documento,
      id_genero,
      doc_acudiente,
      cod_acudiente,
      acudiente_nombre,
      acudiente_telefono,
      acudiente_direccion,
    } = req.body;
    const result = await postPatient(
      documento,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      telefono,
      direccion,
      email,
      fecha_nacimiento,
      id_tipo_documento,
      id_genero,
      doc_acudiente,
      cod_acudiente,
      acudiente_nombre,
      acudiente_telefono,
      acudiente_direccion
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { postPatientController };
