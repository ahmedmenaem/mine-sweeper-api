import { connect } from "mongoose";

export const connectToDB = async (CONNECTION_STRING: string) =>
  await connect(CONNECTION_STRING);
