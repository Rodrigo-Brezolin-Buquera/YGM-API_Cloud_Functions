import * as admin from "firebase-admin";

const serviceAccount = require("../../yoga-mangala-firebase-adminsdk.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export class BaseInfrastructure {
  protected static admin = admin;
}
