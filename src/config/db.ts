export const DB_PORT = process.env.DB_PORT || "27017";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_NAME = process.env.DB_NAME || "games";
export const DB_USERNAME = process.env.DB_USERNAME || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const CONNECTION_STRING = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
