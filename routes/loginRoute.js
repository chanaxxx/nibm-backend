import express from "express";
import SaveLogin from "../controllers/saveLogin.js";

const loginRoute = express.Router();

loginRoute.post("/save-login", SaveLogin);

export default loginRoute;
