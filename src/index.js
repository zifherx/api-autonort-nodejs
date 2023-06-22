import app from "./app";
import { connectSCIDB, connectSGLDB } from "./config/database";

async function main() {
    await app.listen(app.get("port"));
    console.log("Server on port:", app.get("port"));
    console.log(`Database ${(await connectSCIDB.asPromise()).db.namespace} is`, (await connectSCIDB).readyState);
    console.log(`Database ${(await connectSGLDB.asPromise()).db.namespace} is`, (await connectSGLDB).readyState);
}

main();
