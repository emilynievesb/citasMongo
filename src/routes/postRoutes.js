import { Router } from "express";
import { postPatientDTO } from "./DTO/postDTO.js";
import { postPatientController } from "../controllers/postControllers.js";

const postInitRoute = () => {
  const router = Router();
  router.post("/agregarpaciente", postPatientDTO, postPatientController);
  return router;
};

export { postInitRoute };
