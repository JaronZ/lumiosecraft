import { join } from "node:path";
import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";

const baseDir = new URL("../", import.meta.url);
const envDir = new URL("environment/", baseDir);
const kubejsDir = join(process.cwd(), process.argv[2] ?? "", "kubejs");

console.log(`KubeJS directory to copy from: ${kubejsDir}`);

if (!existsSync(kubejsDir)) {
	console.error(`KubeJS directory not found: ${kubejsDir}`);
	process.exit(1);
}

if (!existsSync(envDir)) {
	console.error(`Environment directory not found: ${envDir}`);
	process.exit(1);
}

const clientEnvDir = new URL("client/", envDir);
const serverEnvDir = new URL("server/", envDir);

console.log(`Copying KubeJS files from ${kubejsDir} to ${envDir}`);
if (existsSync(clientEnvDir))
	await cp(kubejsDir, new URL("kubejs/", clientEnvDir), {
		preserveTimestamps: true,
		recursive: true,
		force: true,
		errorOnExist: false
	});

if (existsSync(serverEnvDir))
	await cp(kubejsDir, new URL("kubejs/", serverEnvDir), {
		preserveTimestamps: true,
		recursive: true,
		force: true,
		errorOnExist: false
	});
