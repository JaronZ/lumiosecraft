import { existsSync } from "node:fs";
import { rm, cp } from "node:fs/promises";

const baseDir = new URL("../", import.meta.url);
const installDir = new URL("install/", baseDir);
const modpackDir = new URL("modpack/", `file:///${process.cwd()}/`);

console.log(`Copying configs from ${modpackDir} to ${installDir}`);

const bothConfig = new URL("both/config/", installDir);
const bothDefaultConfigs = new URL("both/defaultconfigs/", installDir);

if (existsSync(bothConfig))
	await rm(bothConfig, { recursive: true, force: true });
if (existsSync(bothDefaultConfigs))
	await rm(bothDefaultConfigs, { recursive: true, force: true });

const modpackConfig = new URL("config/", modpackDir);
const modpackDefaultConfigs = new URL("defaultconfigs/", modpackDir);

if (existsSync(modpackConfig)) {
	await cp(modpackConfig, bothConfig, {
		preserveTimestamps: true,
		recursive: true,
		force: true,
		errorOnExist: false
	});
}

if (existsSync(modpackDefaultConfigs)) {
	await cp(modpackDefaultConfigs, bothDefaultConfigs, {
		preserveTimestamps: true,
		recursive: true,
		force: true,
		errorOnExist: false
	});
}
