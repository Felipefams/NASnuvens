import express, { Express } from "express";


export const startExpress = () => {
  const app = express();
  app.use(express.json());
  return app;
};

export const listenExpress = (app: Express, port: number) => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    return console.log(`Express is listening at http://localhost:${port}`);
  });
};