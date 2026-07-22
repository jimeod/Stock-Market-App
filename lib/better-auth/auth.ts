import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import type { Connection } from "mongoose";
import { connectToDataBase } from "@/database/mongoose";

// Tipo real de mongoose.connection.db (usa la versión de "mongodb" 
// que trae mongoose internamente, sin ambigüedad de import)
type MongooseDb = NonNullable<Connection["db"]>;

// Tipo que espera mongodbAdapter (usa la versión de "mongodb" que trae better-auth)
type BetterAuthDb = Parameters<typeof mongodbAdapter>[0];

// Función NO genérica: aquí es donde TypeScript infiere el tipo
// concreto y completo de las opciones (adapter, plugins, etc.)
function createAuth(db: MongooseDb) {
  return betterAuth({
    database: mongodbAdapter(db as unknown as BetterAuthDb),

    secret: process.env.BETTER_AUTH_SECRET!,
    baseURL: process.env.BETTER_AUTH_URL!,

    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },

    plugins: [nextCookies()],
  });
}

// Tipo correcto, inferido desde una llamada real, no desde la genérica
type AuthInstance = ReturnType<typeof createAuth>;

let authInstance: AuthInstance | null = null;

export const getAuth = async (): Promise<AuthInstance> => {
  if (authInstance) return authInstance;

  const mongoose = await connectToDataBase();
  const db = mongoose.connection.db;

  if (!db) {
    throw new Error("MongoDB connection not found");
  }

  authInstance = createAuth(db);
  return authInstance;
};

export const auth = await getAuth();