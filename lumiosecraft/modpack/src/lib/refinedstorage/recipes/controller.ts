ServerEvents.recipes((event) => {
	event.remove([
		{ output: "refinedstorage:controller" },
		{ input: "refinedstorage:controller" }
	]);
	event.shaped(
		Item.of("refinedstorage:creative_controller"),
		["ABA", "CDC", "ACA"],
		{
			A: "refinedstorage:quartz_enriched_iron",
			B: "refinedstorage:advanced_processor",
			C: "refinedstorage:silicon",
			D: "refinedstorage:machine_casing"
		}
	);
	event.shapeless(Item.of("refinedstorage:creative_controller"), [
		"#refinedstorage:controllers",
		"minecraft:light_blue_dye"
	]);
	event.shapeless(Item.of("refinedstorage:creative_controller"), [
		"#refinedstorage:creative_controllers",
		"minecraft:light_blue_dye"
	]);
	event.shapeless(Item.of("refinedstorage:creative_controller"), [
		"refinedstorage:controller"
	]);
});
