import { Response } from "express";
const generateCookie = (
  name: string,
  payload: any,
  experation: Date,
  secure: boolean,
  httpOnly: boolean,
  res: Response
) => {
  return res.cookie(name, payload, {
    expires: experation,
    secure: secure,
    httpOnly: httpOnly,
  });
};

export default { generateCookie };
