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
import {
  authorizationMiddleware,
  contentMiddlewareDateUsu,
  contentMiddlewareDoctor,
  contentMiddlewarePatient,
} from "../utils/token.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/medicosporespecialidad",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDoctor,
    getDocBySpecialityDTO,
    getDocBySpecialityController
  );
  router.get(
    "/pacientesalfabeticamente",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewarePatient,
    getPatientsAlphController
  );
  router.get(
    "/citasalfabeticamente",
    limitPets,
    limitSize,
    contentMiddlewareDateUsu,
    authorizationMiddleware,
    getDatesAlphController
  );
  router.get(
    "/citaproxima",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getDatesProxDTO,
    getDatesProxController
  );
  router.get(
    "/citaspormedico",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getDatesByDocDTO,
    getDatesByDocController
  );
  router.get(
    "/citasporpaciente",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getDatesByPatientDTO,
    getDatesByPatientController
  );
  router.get(
    "/citasporfecha",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getDatesByDateDTO,
    getDatesByDateController
  );
  router.get(
    "/medicosyconsultorios",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDoctor,
    getDoctorsConsulController
  );
  router.get(
    "/contadordecitas",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getCountDatesByDocDateDTO,
    getCountDatesByDocDateController
  );
  router.get(
    "/consultoriosdepacientes",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getConsultorysPatientDTO,
    getConsultorysPatientController
  );
  router.get(
    "/citasporgenero",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getDatesByGenderDTO,
    getDatesByGenderController
  );
  router.get(
    "/citasrechazas",
    limitPets,
    limitSize,
    authorizationMiddleware,
    contentMiddlewareDateUsu,
    getDatesSuspendByMontDTO,
    getDatesSuspendByMontController
  );
  return router;
};

export { getInitRoute };
