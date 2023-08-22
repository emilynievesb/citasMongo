import { Router } from "express";
import {
  getDatesAlphController,
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
  router.get("/citasalfabeticamente", getDatesAlphController);
  return router;
};

export { getInitRoute };
