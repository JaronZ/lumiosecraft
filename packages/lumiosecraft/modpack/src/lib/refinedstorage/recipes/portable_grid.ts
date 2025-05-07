ServerEvents.recipes((event) => {
	event.shaped(
		Item.of("refinedstorage:creative_portable_grid"),
		["ABA", "ACA", "ABA"],
		{
			A: "refinedstorage:quartz_enriched_iron",
			B: "#refinedstorage:grids",
			C: "#refinedstorage:creative_controllers"
		}
	);
	event.shaped(
		Item.of("refinedstorage:creative_portable_grid"),
		["ABA", "ACA", "ABA"],
		{
			A: "refinedstorage:quartz_enriched_iron",
			B: "#refinedstorage:grids",
			C: "#refinedstorage:controllers"
		}
	);
	event.shapeless(Item.of("refinedstorage:creative_portable_grid"), [
		"refinedstorage:portable_grid"
	]);
});
