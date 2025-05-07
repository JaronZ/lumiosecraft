import type { $MinecraftServer } from "net.minecraft.server.MinecraftServer";
import type { $Player } from "net.minecraft.world.entity.player.Player";
import { Collection } from "../Collection";

lcminigames.minigames = new Collection();

(function (): void {
	let currentMinigame = null;
	let minigameTimer = null;

	function transformRewards(
		rewards: { item: unknown; chance: number }[]
	): unknown[] {
		return global.lcminigames.shuffle(
			global.lcminigames.flatArray(
				rewards.map((r) =>
					Array.from({ length: r.chance }).fill(r.item)
				)
			)
		);
	}

	function giveReward(winner: $Player): void {
		const rewards = transformRewards(currentMinigame.getRewards());

		if (!rewards || rewards.length === 0) {
			console.warn(`${currentMinigame.name} has no reward`);
			return;
		}

		const reward = global.lcminigames.pickRandom(rewards);
		winner.addItem(reward);
	}

	function timeLimit(server: $MinecraftServer): void {
		if (!currentMinigame) return;
		if (minigameTimer) minigameTimer.clear();
		minigameTimer = server.scheduleInTicks(
			currentMinigame.timeLimit,
			() => {
				global.lcminigames.endMinigame({ server: server });
			}
		);
	}

	global.lcminigames.shouldExecute = function (eventName: string): boolean {
		return currentMinigame?.events?.includes(eventName);
	};

	global.lcminigames.execute = function (data, onEnd): void {
		if (currentMinigame.shouldEnd(data)) {
			global.lcminigames.endMinigame({
				server: data.server,
				winner: data.player
			});
			if (onEnd) onEnd();
		}
	};

	global.lcminigames.endMinigame = function (data): void {
		if (!currentMinigame) {
			console.warn("There is currently no minigame");
			return;
		}
		currentMinigame.end(data);
		if (data.winner) giveReward(data.winner);
		minigameTimer.clear();
		minigameTimer = null;
		currentMinigame = null;
	};

	global.lcminigames.startMinigame = function (data): void {
		const keys = Array.from(lcminigames.minigames.keys());
		const pickedKey = global.lcminigames.pickRandom(keys);
		currentMinigame = lcminigames.minigames.get(pickedKey);

		timeLimit(data.server);

		currentMinigame.execute(data);
	};
})();
