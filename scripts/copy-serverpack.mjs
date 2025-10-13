import { join, relative } from "node:path";
import { existsSync } from "node:fs";
import { glob, copyFile } from "node:fs/promises";

const baseDir = new URL("../", import.meta.url);
const envDir = new URL("environment/server/", baseDir);
const serverpackDir = join(process.cwd(), "serverpack");

console.log(`Serverpack directory to copy from: ${serverpackDir}`);

if (!existsSync(serverpackDir)) {
	console.error(`Serverpack directory not found: ${serverpackDir}`);
	process.exit(1);
}

if (!existsSync(envDir)) {
	console.error(`Environment directory not found: ${envDir}`);
	process.exit(1);
}

console.log(`Copying Serverpack files in ${serverpackDir} to ${envDir}`);
for await (const file of glob(`${serverpackDir}/**/*`, { nodir: true })) {
	const relativePath = relative(serverpackDir, file);
	const targetPath = new URL(relativePath, envDir);

	console.log(`Copying ${file} to ${targetPath}`);
	await copyFile(file, targetPath);
}
