import * as express from "express";

const error = {
  error: "Not Found",
  message: "error",
  status: 500,
  timestamp: new Date(),
};
export const errHandler = (err, req, res, next) => {
  res.send(error);
};
