import { Router } from "express";
import { getDocBySpecialityController } from "../controllers/getControllers.js";
import { getDocBySpecialityDTO } from "./DTO/getDTO.js";

const getInitRoute = () => {
  const router = Router();
  router.get(
    "/medicosporespecialidad",
    getDocBySpecialityDTO,
    getDocBySpecialityController
  );
  return router;
};

export { getInitRoute };
