import type { $MinecraftServer } from "net.minecraft.server.MinecraftServer";
import type { $Player } from "net.minecraft.world.entity.player.Player";

lcminigames.minigames = new lcminigames.Collection();

(function() {
    let currentMinigame = null;
    let minigameTimer = null;

    function transformRewards(rewards: { item: unknown; chance: number }[]) {
        return global.lcminigames.shuffle(
            global.lcminigames.flatArray(rewards.map(r => Array.from({ length: r.chance }).fill(r.item))));
    }

    function giveReward(winner: $Player) {
        const rewards = transformRewards(currentMinigame.getRewards());

        if (!rewards || rewards.length == 0) {
            console.warn(`${currentMinigame.name} has no reward`);
            return;
        }

        const reward = global.lcminigames.pickRandom(rewards);
        winner.addItem(reward);
    }

    function timeLimit(server: $MinecraftServer) {
        if (!currentMinigame) return;
        if (minigameTimer) minigameTimer.clear();
        minigameTimer = server.scheduleInTicks(currentMinigame.timeLimit, () => {
            global.lcminigames.endMinigame({ server: server });
        });
    }

    global.lcminigames.shouldExecute = function(eventName: string): boolean {
        return currentMinigame && currentMinigame.events && currentMinigame.events.includes(eventName);
    }

    global.lcminigames.execute = function(data, onEnd) {
        if (currentMinigame.shouldEnd(data)) {
            global.lcminigames.endMinigame({
                server: data.server,
                winner: data.player
            });
            if (onEnd) onEnd();
        }
    }

    global.lcminigames.endMinigame = function(data) {
        if (!currentMinigame) {
            console.warn("There is currently no minigame");
            return;
        }
        currentMinigame.end(data);
        if (data.winner) giveReward(data.winner);
        minigameTimer.clear();
        minigameTimer = null;
        currentMinigame = null;
    }

    global.lcminigames.startMinigame = function(data) {
        const keys = Array.from(lcminigames.minigames.keys());
        const pickedKey = global.lcminigames.pickRandom(keys);
        currentMinigame = lcminigames.minigames.get(pickedKey);

        timeLimit(data.server);

        currentMinigame.execute(data);
    }
})();
