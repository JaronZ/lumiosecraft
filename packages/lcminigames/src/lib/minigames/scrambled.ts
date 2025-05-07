//requires: cobblemon

lcminigames.minigames.set("scrambled", {
	name: "scrambled",
	type: "chat",
	currentWord: null,
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
		return message.toLowerCase() === this.currentWord;
	},
	execute({ server }: $ServerKubeEvent_) {
		this.currentWord = lcminigames.Pokemon.getRandom()
			.getName()
			.toLowerCase();
		const scrambled = global.lcminigames.scramble(this.currentWord);
		server.tell(
			global.lcminigames.createChatFrame("Server Minigame", [
				`${global.lcminigames.centeredMessage("Unscramble the following pokémon")}\n`,
				Text.aqua(global.lcminigames.centeredMessage(scrambled))
			])
		);
	},
	end({ server, winner }) {
		const message = winner
			? `§2${winner.displayName.string}§r unscrambled the word`
			: "No one managed to unscrambled the word";
		server.tell(
			global.lcminigames.createChatFrame("Server Minigame", [
				`${global.lcminigames.centeredMessage(message)}\n`,
				global.lcminigames.centeredMessage(`§b${this.currentWord}`)
			])
		);
		this.currentWord = null;
	}
});
