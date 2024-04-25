import { UserController } from "controllers/user.controller";
import { Router } from "express";

export class UserRoutes {
    constructor(
        private readonly userController: UserController,
        private readonly router: Router
    ){}

    registerRoutes(){
        this.router.post('/user/files', async (req, res) => {
            await this.userController.saveUserFiles(req, res);
            res.send('Files saved').status(200);
        });
    }
}