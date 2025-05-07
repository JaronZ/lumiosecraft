//requires: cobblemon

lcminigames.minigames.set("generation", {
	name: "generation",
	type: "chat",
	generation: null,
	events: ["chat"],
	timeLimit: global.lcminigames.MINUTE_TICKS * 0.5,
	getRewards() {
		return [
			{ item: Item.of("cobblemon:poke_ball", 3), chance: 5 },
			{ item: Item.of("cobblemon:citrine_ball", 3), chance: 3 },
			{ item: Item.of("cobblemon:verdant_ball", 3), chance: 3 },
			{ item: Item.of("cobblemon:azure_ball", 3), chance: 3 },
			{ item: Item.of("cobblemon:roseate_ball", 3), chance: 3 },
			{ item: Item.of("cobblemon:slate_ball", 3), chance: 3 },
			{ item: Item.of("cobblemon:premier_ball"), chance: 2 },
			{ item: Item.of("cobblemon:great_ball"), chance: 1 },
			{ item: Item.of("cobblemon:exp_candy_xs", 2), chance: 2 },
			{ item: Item.of("cobblemon:potion"), chance: 5 }
		];
	},
	shouldEnd({ message }: $PlayerChatReceivedKubeEvent_): boolean {
		return message.toLowerCase() === this.generation;
	},
	execute({ server }: $ServerKubeEvent_) {
		const pokemon = lcminigames.Pokemon.getRandom();
		this.generation = pokemon.gen.toString();
		server.tell(
			global.lcminigames.createChatFrame("Server Minigame", [
				`${global.lcminigames.centeredMessage("From what generation is the following pokémon")}\n`,
				Text.aqua(global.lcminigames.centeredMessage(pokemon.getName()))
			])
		);
	},
	end({ server, winner }) {
		const message = winner
			? `§2${winner.displayName.string}§r guessed the generation`
			: "No one managed to guess the generation";
		server.tell(
			global.lcminigames.createChatFrame("Server Minigame", [
				`${global.lcminigames.centeredMessage(message)}\n`,
				global.lcminigames.centeredMessage(
					`§bGeneration ${this.generation}`
				)
			])
		);
		this.currentWord = null;
	}
});
