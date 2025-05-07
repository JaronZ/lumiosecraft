import type { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent";

(function (): void {
	let endMinigameTimer: $ScheduledEvents$ScheduledEvent;
	let minigameTimer: $ScheduledEvents$ScheduledEvent;

	ServerEvents.loaded((event) => {
		const INTERVAL_TICKS = global.lcminigames.MINUTE_TICKS * 5;

		endMinigameTimer = event.server.scheduleRepeatingInTicks(
			INTERVAL_TICKS - 1,
			() => {
				global.lcminigames.endMinigame({ server: event.server });
			}
		);

		minigameTimer = event.server.scheduleRepeatingInTicks(
			INTERVAL_TICKS,
			() => {
				global.lcminigames.startMinigame(event);
			}
		);
	});

	ServerEvents.unloaded(() => {
		endMinigameTimer.clear();
		minigameTimer.clear();
	});
})();
