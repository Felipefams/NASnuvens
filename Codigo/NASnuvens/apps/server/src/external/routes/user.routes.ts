import { UserController } from "controllers/user.controller";
import { Request, Response, Router } from "express";
import { UserPaths } from "@repo/types";
import { RestRequest } from "controllers/types";

export class UserRoutes {
    constructor(
        private readonly userController: UserController,
        private readonly router: Router
    ) {
    }

    registerRoutes() {
        this.router.post(UserPaths.FILES, async (req: Request, res: Response) => {
            await this.userController.saveUserFiles(req as RestRequest);
            res.send('Files saved').status(200);
        });
    }
}