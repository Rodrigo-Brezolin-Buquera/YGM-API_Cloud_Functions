import * as functions from "firebase-functions";
// import { TokenService } from "./common/aplication/common.Token.service";
// import { PlanApplication } from "./modules/plans/application/plans.Application";
// import { PlanInfrastructure } from "./modules/plans/infrastructure/plans.Infrastructure";
// import { PlanPresentation } from "./modules/plans/presentation/plans.Presentation";
import {authRouter} from "./modules/auth/presentation/auth.Routes";
import {bookingRouter} from "./modules/booking/presentation/booking.Routes";
import {calendarRouter} from "./modules/calendar/presentation/calender.Routes";
import {contractsRouter} from "./modules/contracts/presentation/contracts.Routes";
import {planRouter} from "./modules/plans/presentation/plans.Routes";
import "express-async-errors";
import {Request, Response} from "express";
// import express from "express"
// import cors from "cors"
import {AddressInfo} from "net";
const express = require("express");
const cors = require("cors");


export const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});


// Sem usar o router

// const planInfrastructure = new PlanInfrastructure();
// const planApplication = new PlanApplication(planInfrastructure, new TokenService());
// const planPresentation = new PlanPresentation(planApplication);

// app.get("/list", (req, res) => planPresentation.findPlans(req, res));

// app.post("/", (req, res) => planPresentation.createPlan(req, res));

// app.put("/:id", (req, res) => planPresentation.editPlan(req, res));

// app.delete("/:id", (req, res) => planPresentation.deletePlan(req, res));

app.use("/auth", authRouter );
app.use("/contracts", contractsRouter );
app.use("/plans", planRouter );
app.use("/calendar", calendarRouter );
app.use("/booking", bookingRouter );



app.use((err:any, req: Request, res: Response, _:any) => {
  res.status(err.statusCode || 500).send(err.message || err.sqlMessage);
});

export const api = functions.https.onRequest(app);

// exports.api = functions.https.onRequest(app);

