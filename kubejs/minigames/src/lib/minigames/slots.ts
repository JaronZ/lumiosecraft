import type { $ArgumentTypeWrappers } from "dev.latvian.mods.kubejs.command.ArgumentTypeWrappers";
import type { $Commands } from "net.minecraft.commands.Commands";

lcminigames.minigames.set("slots", {
    name: "slots",
    type: "command",
    registerCommand(Commands: typeof $Commands, Arguments: $ArgumentTypeWrappers) {
        return Commands.literal(this.name)
            .executes(c => this.execute(c.source.playerOrException))
    },
    /**
     * @param {import("net.minecraft.server.level.ServerPlayer").$ServerPlayer} player
     * @returns {number}
     */
    execute(player) {
        const slotsMenu = new global.lcminigames.MenuType("Slots");
        slotsMenu.show(player);
        return 1;
    }
});
