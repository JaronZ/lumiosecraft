ServerEvents.recipes((event) => {
	event.remove({ id: "refinedstorage:wireless_autocrafting_monitor" });
	event.shaped(
		Item.of("refinedstorage:creative_wireless_autocrafting_monitor"),
		["ABA", "ACA", "ADA"],
		{
			A: "refinedstorage:quartz_enriched_iron",
			B: "minecraft:ender_pearl",
			C: "#refinedstorage:autocrafting_monitors",
			D: "refinedstorage:advanced_processor"
		}
	);
	event.shapeless(
		Item.of("refinedstorage:creative_wireless_autocrafting_monitor"),
		["refinedstorage:wireless_autocrafting_monitor"]
	);
});
