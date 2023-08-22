import { Router } from "express";
import {
  getDatesAlphController,
  getDatesByDateController,
  getDatesByDocController,
  getDatesByPatientController,
  getDatesProxController,
  getDocBySpecialityController,
  getPatientsAlphController,
} from "../controllers/getControllers.js";
import {
  getDatesByDateDTO,
  getDatesByDocDTO,
  getDatesByPatientDTO,
  getDatesProxDTO,
  getDocBySpecialityDTO,
} from "./DTO/getDTO.js";

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
  router.get("/citaspormedico", getDatesByDocDTO, getDatesByDocController);
  router.get(
    "/citasporpaciente",
    getDatesByPatientDTO,
    getDatesByPatientController
  );
  router.get("/citasporfecha", getDatesByDateDTO, getDatesByDateController);
  return router;
};

export { getInitRoute };
