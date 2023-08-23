import { Router } from "express";
import { postPatientDTO } from "./DTO/postDTO.js";
import { postPatientController } from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post(
    "/agregarpaciente",
    limitPets,
    limitSize,
    postPatientDTO,
    postPatientController
  );
  return router;
};

export { postInitRoute };
