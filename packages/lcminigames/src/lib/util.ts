import type { $Component$$Type } from "net.minecraft.network.chat.Component";
import type { $MutableComponent } from "net.minecraft.network.chat.MutableComponent";

(function (): void {
	const { DefaultFontInfo } = lcminigames;
	const CENTER_PX = 154;

	global.lcminigames.pickRandom = function <T>(list: T[]): T {
		return list[Math.floor(Math.random() * list.length)];
	};

	global.lcminigames.scramble = function (word: string): string {
		return word
			.split("")
			.sort(() => 0.5 - Math.random())
			.sort(() => 0.5 - Math.random())
			.sort(() => 0.5 - Math.random())
			.sort(() => 0.5 - Math.random())
			.sort(() => 0.5 - Math.random())
			.join("");
	};

	global.lcminigames.shuffle = function <T>(array: T[]): T[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	global.lcminigames.centeredMessage = function (msg: string): string {
		if (msg === null || msg === "") return "";

		let messagePxSize = 0;
		let previousCode = false;
		let isBold = false;

		msg.split("").forEach((c) => {
			if (c === "§") {
				previousCode = true;
			} else if (previousCode) {
				previousCode = false;
				isBold = c === "l" || c === "L";
			} else {
				const dFI = DefaultFontInfo.getDefaultFontInfo(c);
				messagePxSize += isBold ? dFI.getBoldLength() : dFI.getLength();
				messagePxSize++;
			}
		});

		const halvedMessageSize = messagePxSize / 2;
		const toCompensate = CENTER_PX - halvedMessageSize;
		const spaceLength = DefaultFontInfo.SPACE.getLength() + 1;
		let compensated = 0;
		let sb = "";
		while (compensated < toCompensate) {
			sb += " ";
			compensated += spaceLength;
		}
		return sb + msg;
	};

	global.lcminigames.createChatFrame = function (
		title: string,
		content: $Component$$Type | $Component$$Type[]
	): $MutableComponent {
		return Text.join(
			Text.yellow(
				global.lcminigames.centeredMessage(`§m${" ".repeat(81)}`)
			),
			"\n",
			Text.green(global.lcminigames.centeredMessage(`§l${title}`)),
			"\n\n",
			content,
			"\n\n",
			Text.yellow(
				global.lcminigames.centeredMessage(`§m${" ".repeat(81)}`)
			)
		);
	};

	global.lcminigames.findVal = function (
		obj: NonNullable<unknown>,
		prop: string,
		defaultValue: unknown
	): unknown {
		prop = prop.toLowerCase();
		const p = Object.keys(obj).find(
			(k) =>
				Object.prototype.hasOwnProperty.call(obj, k) &&
				prop === k.toLowerCase()
		);
		return p ? obj[p] : defaultValue;
	};

	/**
	 * @param {any[]} array
	 * @param {number} [depth]
	 * @returns {any[]}
	 */
	global.lcminigames.flatArray = function <T>(array: T[], depth = 1): T[] {
		if (!Array.isArray(array)) return array;
		for (let i = 0; i < depth; i++) {
			if (!array.find((e) => Array.isArray(e))) break;
			array = ([] as T[]).concat(...array);
		}
		return array;
	};

	global.lcminigames.SECOND_TICKS = 20;
	global.lcminigames.MINUTE_TICKS = global.lcminigames.SECOND_TICKS * 60;
	global.lcminigames.HOUR_TICKS = global.lcminigames.MINUTE_TICKS * 60;
})();
