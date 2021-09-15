import { Router } from "express";

import categoriesRouter from "./categories.routes";
import specificationRouter from "./specifications.routes";
import usersRouter from "./users.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);

export default router;
