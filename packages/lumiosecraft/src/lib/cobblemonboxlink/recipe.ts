ServerEvents.recipes((event) => {
	event.remove({ id: "cobblemonboxlink:box_link" });
	event.shaped(Item.of("cobblemonboxlink:box_link"), ["ACA", "BDB", "ACA"], {
		A: "minecraft:redstone",
		B: "minecraft:iron_ingot",
		C: "minecraft:chest",
		D: "cobblemon:pc"
	});
});
