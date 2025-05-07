ServerEvents.recipes((event) => {
	event.remove({ id: "refinedstorage:wireless_grid" });
	event.shaped(
		Item.of("refinedstorage:creative_wireless_grid"),
		["ABA", "ACA", "ADA"],
		{
			A: "refinedstorage:quartz_enriched_iron",
			B: "minecraft:ender_pearl",
			C: "#refinedstorage:grids",
			D: "refinedstorage:advanced_processor"
		}
	);
	event.shapeless(Item.of("refinedstorage:creative_wireless_grid"), [
		"refinedstorage:wireless_grid"
	]);
});
