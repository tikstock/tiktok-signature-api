const Signer = require('tiktok-signature');

const signerSingleton = new Signer();

export async function init() {
    return signerSingleton.init();
}

async function close() {
    return signerSingleton.close();
}

export async function getSignature(url: string): Promise<string> {
    return await signerSingleton.sign(url);
}

export async function getVerifyToken(): Promise<string> {
    return await signerSingleton.getVerifyFp();
}