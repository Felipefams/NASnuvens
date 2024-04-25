import { UserController } from "controllers/user.controller";
import { Router } from "express";
import { LocalFilesProvider } from "external/providers/files/local-files.provider";
import { UserRoutes } from "external/routes/user.routes";
import { HandleFilesUseCase } from "use-cases/files/handle-files.use-case";

export class UserFactory {
    constructor(private readonly router: Router) {
        const filesProvider = new LocalFilesProvider();
        const handleFilesUseCase = new HandleFilesUseCase(filesProvider);
        const userController = new UserController(handleFilesUseCase);

        new UserRoutes(
            userController, this.router
        ).registerRoutes();
    }
}