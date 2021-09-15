import { Router } from "express";

import authenticateRouter from "./authenticate.routes";
import categoriesRouter from "./categories.routes";
import specificationRouter from "./specifications.routes";
import usersRouter from "./users.routes";

const router = Router();

router.use(authenticateRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);

export default router;
