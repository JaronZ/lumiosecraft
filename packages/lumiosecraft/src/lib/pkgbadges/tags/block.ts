ServerEvents.tags("block", (event) => {
	event.remove("minecraft:mineable/pickaxe", "pkgbadges:league_cup");
	event.add("minecraft:mineable/pickaxe", "pkgbadges:league_cup");
});
