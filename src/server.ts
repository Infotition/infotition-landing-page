//* -----------------------------------------------------------------------------
//* DEPENDENCIES
//* -----------------------------------------------------------------------------

//* Node modules
import express, { Request, Response, Application } from 'express';

//* -----------------------------------------------------------------------------
//* CONFIGURATION
//* -----------------------------------------------------------------------------

const PROTOCOL: string = process.env.PROTOCOL || 'http';
const HOST: string = process.env.HOST || 'localhost';
const PORT: string = process.env.PORT || '3000';

const app: Application = express();

//* -----------------------------------------------------------------------------
//* MIDDLEWARES
//* -----------------------------------------------------------------------------

app.use(express.static('../public'));

//* -----------------------------------------------------------------------------
//* START SERVER
//* -----------------------------------------------------------------------------

//* Default page not found route
app.use((_req: Request, res: Response) =>
  res.status(404).json({ success: false, message: 'page not found' })
);

//* -----------------------------------------------------------------------------
//* START SERVER
//* -----------------------------------------------------------------------------

app.listen(PORT, () =>
  console.info(`server listening on ${PROTOCOL}://${HOST}:${PORT}`)
);
