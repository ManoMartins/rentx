import { Router } from "express";

import authenticateRouter from "./authenticate.routes";
import carsRoutes from "./cars.routes";
import categoriesRouter from "./categories.routes";
import specificationRouter from "./specifications.routes";
import usersRouter from "./users.routes";

const router = Router();

router.use(authenticateRouter);
router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/specifications", specificationRouter);
router.use("/cars", carsRoutes);

export default router;
