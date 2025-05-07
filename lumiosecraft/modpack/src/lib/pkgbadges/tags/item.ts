ServerEvents.tags("item", (event) => {
	event.remove(
		"minecraft:chest_armor",
		"pkgbadges:ash_ketchum_cloth_chestplate"
	);
	event.remove("minecraft:foot_armor", "pkgbadges:ash_ketchum_cloth_boots");
	event.remove("minecraft:head_armor", "pkgbadges:alians_scraf_helmet");
	event.remove("minecraft:leg_armor", "pkgbadges:ash_ketchum_cloth_leggings");

	event.add(
		"minecraft:chest_armor",
		"pkgbadges:ash_ketchum_cloth_chestplate"
	);
	event.add("minecraft:foot_armor", "pkgbadges:ash_ketchum_cloth_boots");
	event.add("minecraft:head_armor", "pkgbadges:alians_scraf_helmet");
	event.add("minecraft:leg_armor", "pkgbadges:ash_ketchum_cloth_leggings");
});
