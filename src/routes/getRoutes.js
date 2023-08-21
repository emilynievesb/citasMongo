import { Router } from "express";
import {
  getDocBySpecialityController,
  getPatientsAlphController,
} from "../controllers/getControllers.js";
import { getDocBySpecialityDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/medicosporespecialidad",
    getDocBySpecialityDTO,
    getDocBySpecialityController
  );
  router.get("/pacientesalfabeticamente", getPatientsAlphController);
  return router;
};

export { getInitRoute };
