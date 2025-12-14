import { config } from "dotenv";

config()

const appconfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXT_APP_URL: process.env.NEXTAUTH_SECRET
};

export default appconfig;
