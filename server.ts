import express = require('express');
import signer = require('./signer');

let expressApp: express.Express;

main();

async function main(): Promise<void> {
    expressApp = express();
    await signer.init();

    setupRoutes();

    expressApp.listen(4000);
}

function setupRoutes(): void {
    expressApp.use(express.json());

    expressApp.post('/api/sign/', signURL);
}

async function signURL(req: express.Request, res: express.Response): Promise<void> {
    res.status(200).send(
        {
            signature: await signer.getSignature(req.body.url),
            token: await signer.getVerifyToken()
        }
    ).end();
}