import { Router } from "express";
import {
  getConsultorysPatientController,
  getCountDatesByDocDateController,
  getDatesAlphController,
  getDatesByDateController,
  getDatesByDocController,
  getDatesByGenderController,
  getDatesByPatientController,
  getDatesProxController,
  getDatesSuspendByMontController,
  getDocBySpecialityController,
  getDoctorsConsulController,
  getPatientsAlphController,
} from "../controllers/getControllers.js";
import {
  getConsultorysPatientDTO,
  getCountDatesByDocDateDTO,
  getDatesByDateDTO,
  getDatesByDocDTO,
  getDatesByGenderDTO,
  getDatesByPatientDTO,
  getDatesProxDTO,
  getDatesSuspendByMontDTO,
  getDocBySpecialityDTO,
} from "./DTO/getDTO.js";
import { limitPets, limitSize } from "../utils/limit.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/medicosporespecialidad",
    limitPets,
    limitSize,
    getDocBySpecialityDTO,
    getDocBySpecialityController
  );
  router.get(
    "/pacientesalfabeticamente",
    limitPets,
    limitSize,
    getPatientsAlphController
  );
  router.get(
    "/citasalfabeticamente",
    limitPets,
    limitSize,
    getDatesAlphController
  );
  router.get(
    "/citaproxima",
    limitPets,
    limitSize,
    getDatesProxDTO,
    getDatesProxController
  );
  router.get(
    "/citaspormedico",
    limitPets,
    limitSize,
    getDatesByDocDTO,
    getDatesByDocController
  );
  router.get(
    "/citasporpaciente",
    limitPets,
    limitSize,
    getDatesByPatientDTO,
    getDatesByPatientController
  );
  router.get(
    "/citasporfecha",
    limitPets,
    limitSize,
    getDatesByDateDTO,
    getDatesByDateController
  );
  router.get(
    "/medicosyconsultorios",
    limitPets,
    limitSize,
    getDoctorsConsulController
  );
  router.get(
    "/contadordecitas",
    limitPets,
    limitSize,
    getCountDatesByDocDateDTO,
    getCountDatesByDocDateController
  );
  router.get(
    "/consultoriosdepacientes",
    limitPets,
    limitSize,
    getConsultorysPatientDTO,
    getConsultorysPatientController
  );
  router.get(
    "/citasporgenero",
    limitPets,
    limitSize,
    getDatesByGenderDTO,
    getDatesByGenderController
  );
  router.get(
    "/citasrechazas",
    limitPets,
    limitSize,
    getDatesSuspendByMontDTO,
    getDatesSuspendByMontController
  );
  return router;
};

export { getInitRoute };
