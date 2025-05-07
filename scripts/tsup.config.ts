import { relative, resolve as resolveDir } from "node:path";
import { defineConfig, type Options } from "tsup";

const baseOptions: Options = {
	clean: true,
	dts: false,
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: false,
	target: "es5",
	keepNames: true,
	treeshake: true,
	format: "cjs"
};

function createTsupConfig(
	baseDir: string,
	options: EnchancedTsupOptions,
	packName = ""
) {
	return [
		defineConfig({
			...baseOptions,
			entry: [`${baseDir}/src/client.ts`],
			outDir: `${baseDir}/kubejs/client_scripts/${packName}`,
			tsconfig: relative(
				__dirname,
				resolveDir(process.cwd(), baseDir, "src", "tsconfig.json")
			),
			...options.clientOptions
		}),
		defineConfig({
			...baseOptions,
			entry: [`${baseDir}/src/server.ts`],
			outDir: `${baseDir}/kubejs/server_scripts/${packName}`,
			tsconfig: relative(
				__dirname,
				resolveDir(process.cwd(), baseDir, "src", "tsconfig.json")
			),
			...options.serverOptions
		}),
		defineConfig({
			...baseOptions,
			entry: [`${baseDir}/src/startup.ts`],
			outDir: `${baseDir}/kubejs/startup_scripts/${packName}`,
			tsconfig: relative(
				__dirname,
				resolveDir(process.cwd(), baseDir, "src", "tsconfig.json")
			),
			...options.startupOptions
		})
	];
}

export function createKubeJSPackTsupConfig(
	packName: string,
	options: EnchancedTsupOptions = {}
) {
	return createTsupConfig(".", options, packName);
}

export function createModpackTsupConfig(options: EnchancedTsupOptions = {}) {
	return createTsupConfig("modpack", options);
}

interface EnchancedTsupOptions {
	clientOptions?: Options;
	serverOptions?: Options;
	startupOptions?: Options;
}
