import { initMongo } from "../../util/mongodb.conifig";
import { NextApiRequest, NextApiResponse } from "next";
import UserModel from "../../models/user.model";
export default async (request: NextApiRequest, response: NextApiResponse) => {
  initMongo();
  UserModel.findOne({ email: "praveshisawesome2017@gmail.com" }).then((res) => {
    response.send(res);
  });
};
