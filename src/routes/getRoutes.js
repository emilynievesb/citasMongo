import { Router } from "express";
import {
  getDatesAlphController,
  getDatesProxController,
  getDocBySpecialityController,
  getPatientsAlphController,
} from "../controllers/getControllers.js";
import { getDatesProxDTO, getDocBySpecialityDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/medicosporespecialidad",
    getDocBySpecialityDTO,
    getDocBySpecialityController
  );
  router.get("/pacientesalfabeticamente", getPatientsAlphController);
  router.get("/citasalfabeticamente", getDatesAlphController);
  router.get("/citaproxima", getDatesProxDTO, getDatesProxController);
  return router;
};

export { getInitRoute };
