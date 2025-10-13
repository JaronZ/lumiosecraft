import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";

const baseDir = new URL("../", import.meta.url);
const installDir = new URL("install/", baseDir);
const envDir = new URL("environment/", baseDir);

if (!existsSync(installDir)) {
	console.error(`Install directory ${installDir} does not exist.`);
	process.exit(1);
}

if (!existsSync(envDir)) {
	console.error(`Environment directory ${envDir} does not exist.`);
	process.exit(1);
}

console.log(`Installing mods from ${installDir} to ${envDir}`);

const bothModsSrc = new URL("both/mods/", installDir);
const clientModsSrc = new URL("client/mods/", installDir);
const serverModsSrc = new URL("server/mods/", installDir);

const clientModsDest = new URL("client/mods/", envDir);
const serverModsDest = new URL("server/mods/", envDir);

if (existsSync(bothModsSrc)) {
	await cp(bothModsSrc, clientModsDest, { recursive: true });
	await cp(bothModsSrc, serverModsDest, { recursive: true });
}

if (existsSync(clientModsSrc)) {
	await cp(clientModsSrc, clientModsDest, { recursive: true });
}

if (existsSync(serverModsSrc)) {
	await cp(serverModsSrc, serverModsDest, { recursive: true });
}
