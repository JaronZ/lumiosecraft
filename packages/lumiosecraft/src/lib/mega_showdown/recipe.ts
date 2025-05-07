ServerEvents.recipes((event) => {
	event.shaped(Item.of("mega_showdown:wishing_star"), [" A ", "ABA", " A "], {
		A: "minecraft:obsidian",
		B: "cobblemon:life_orb"
	});
});
