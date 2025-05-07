lcminigames.Pokemon = class Pokemon {
	private static instances: Pokemon[] = [];

	public name: string;
	public gen: number;

	public constructor({ name, gen }: { name: string; gen: number }) {
		this.name = name;
		this.gen = gen;
		Pokemon.instances.push(this);
	}

	public static getRandom(): Pokemon {
		return global.lcminigames.pickRandom(Pokemon.instances);
	}

	public getName(): string {
		return this.name;
	}
};

Object.keys(JsonIO.read("kubejs/config/lcminigames/pokemon.json")).forEach(
	(k) => {
		lcminigames.Pokemon[k] = new lcminigames.Pokemon(pokemon[k]);
	}
);
