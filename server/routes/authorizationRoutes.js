
import { Router } from "express";
import { createAuthorizationRequest,getAuthorizationRequests } from "../controllers/authorizationController.js";
const router = Router();

router.post('/', createAuthorizationRequest);
router.get('/:id', getAuthorizationRequests);

export default router;