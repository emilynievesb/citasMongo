import { object, string, number, date } from "yup";

const postPatientDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      cod_acudiente: number().optional(),
      acudiente_nombre: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      acudiente_telefono: number().optional(),
      acudiente_direccion: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      documento: number().optional(),
      primer_nombre: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      segundo_nombre: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      primer_apellido: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      segundo_apellido: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      telefono: number().optional(),
      direccion: string()
        .strict()
        .matches(/^[a-z A-Z]+$/)
        .optional(),
      email: string().strict().optional(),
      fecha_nacimiento: date().optional(),
      id_tipo_documento: number().optional(),
      id_genero: number().optional(),
      doc_acudiente: number().nullable().optional(),
    });
    await productSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export { postPatientDTO };
