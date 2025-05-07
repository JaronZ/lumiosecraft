ServerEvents.recipes((event) => {
	const controllers = [
		"yellow",
		"lime",
		"pink",
		"gray",
		"light_gray",
		"cyan",
		"purple",
		"blue",
		"brown",
		"green",
		"red",
		"black",
		"white",
		"orange",
		"magenta"
	];
	controllers.forEach((con) => {
		event.shapeless(Item.of(`refinedstorage:${con}_creative_controller`), [
			"#refinedstorage:controllers",
			`minecraft:${con}_dye`
		]);
		event.shapeless(Item.of(`refinedstorage:${con}_creative_controller`), [
			"#refinedstorage:creative_controllers",
			`minecraft:${con}_dye`
		]);
	});
});
