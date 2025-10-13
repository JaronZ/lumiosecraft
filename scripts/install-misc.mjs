import { existsSync } from "node:fs";
import { mkdir, cp } from "node:fs/promises";
import { join } from "node:path";

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

const clientDir = new URL("client/", envDir);
const serverDir = new URL("server/", envDir);

if (!existsSync(clientDir)) {
	console.log(`Creating client directory in ${envDir}`);
	await mkdir(clientDir, { recursive: true });
}

if (!existsSync(serverDir)) {
	console.log(`Creating server directory in ${envDir}`);
	await mkdir(serverDir, { recursive: true });
}

console.log(`Copying files from ${installDir} to ${envDir}/client`);
await Promise.all(
	[
		"both/config/",
		"both/defaultconfigs/",
		"both/resourcepacks/",
		"both/shaderpacks/",
		"client/config/",
		"client/defaultconfigs/",
		"client/resourcepacks/",
		"client/shaderpacks/a"
	].map(async (path) => {
		const url = new URL(path, installDir);
		if (existsSync(url)) {
			await cp(
				url,
				new URL(`client/${join(...path.split("/").slice(1))}`, envDir),
				{
					preserveTimestamps: true,
					recursive: true,
					force: true,
					errorOnExist: false
				}
			);
		}
	})
);

console.log(`Copying files from ${installDir} to ${envDir}/server`);
await Promise.all(
	[
		"both/config/",
		"both/defaultconfigs/",
		"both/resourcepacks/",
		"both/shaderpacks/",
		"server/config/",
		"server/defaultconfigs/",
		"server/resourcepacks/",
		"server/shaderpacks/"
	].map(async (path) => {
		const url = new URL(path, installDir);
		if (existsSync(url)) {
			await cp(
				url,
				new URL(`server/${join(...path.split("/").slice(1))}`, envDir),
				{
					preserveTimestamps: true,
					recursive: true,
					force: true,
					errorOnExist: false
				}
			);
		}
	})
);
