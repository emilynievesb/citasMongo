import { object, string, number, date } from "yup";

const getDocBySpecialityDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      especialidad: string()
        .strict()
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Is not in correct format")
        .required(),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};
export { getDocBySpecialityDTO };
