lcminigames.Pokemon.Type = class Type {
	public static readonly Normal = new Type("Normal");
	public static readonly Fire = new Type("Fire");
	public static readonly Water = new Type("Water");
	public static readonly Electric = new Type("Electric");
	public static readonly Grass = new Type("Grass");
	public static readonly Ice = new Type("Ice");
	public static readonly Fighting = new Type("Fighting");
	public static readonly Poison = new Type("Poison");
	public static readonly Ground = new Type("Ground");
	public static readonly Flying = new Type("Flying");
	public static readonly Psychic = new Type("Psychic");
	public static readonly Bug = new Type("Bug");
	public static readonly Rock = new Type("Rock");
	public static readonly Ghost = new Type("Ghost");
	public static readonly Dragon = new Type("Dragon");
	public static readonly Dark = new Type("Dark");
	public static readonly Steel = new Type("Steel");
	public static readonly Fairy = new Type("Fairy");
	public static readonly Effectiveness = {
		Normal: {
			Fighting: 2,
			Ghost: 0
		},
		Fire: {
			Fire: 0.5,
			Water: 2,
			Grass: 0.5,
			Ice: 0.5,
			Bug: 0.5,
			Rock: 2,
			Steel: 0.5,
			Ground: 2
		},
		Water: {
			Fire: 0.5,
			Water: 0.5,
			Electric: 2,
			Grass: 2,
			Ice: 0.5,
			Steel: 0.5
		},
		Electric: {
			Electric: 0.5,
			Ground: 2,
			Flying: 0.5,
			Steel: 0.5
		},
		Grass: {
			Fire: 2,
			Water: 0.5,
			Electric: 0.5,
			Grass: 0.5,
			Ice: 2,
			Poison: 2,
			Ground: 0.5,
			Flying: 2,
			Bug: 2
		},
		Ice: {
			Fire: 2,
			Ice: 0.5,
			Fighting: 2,
			Rock: 2,
			Steel: 2
		},
		Fighting: {
			Flying: 2,
			Psychic: 2,
			Bug: 0.5,
			Rock: 0.5,
			Dark: 0.5,
			Fairy: 2
		},
		Poison: {
			Grass: 0.5,
			Fighting: 0.5,
			Poison: 0.5,
			Ground: 2,
			Psychic: 2,
			Bug: 0.5,
			Fairy: 0.5
		},
		Ground: {
			Water: 2,
			Grass: 2,
			Ice: 2,
			Poison: 0.5,
			Rock: 0.5
		},
		Flying: {
			Electric: 2,
			Grass: 0.5,
			Fighting: 0.5,
			Bug: 0.5,
			Rock: 2,
			Ground: 0
		},
		Psychic: {
			Fighting: 0.5,
			Psychic: 0.5,
			Bug: 2,
			Ghost: 2,
			Dark: 2
		},
		Bug: {
			Fire: 2,
			Grass: 0.5,
			Fighting: 0.5,
			Ground: 0.5,
			Flying: 2,
			Rock: 2
		},
		Rock: {
			Normal: 0.5,
			Fire: 0.5,
			Water: 2,
			Grass: 2,
			Fighting: 2,
			Poison: 0.5,
			Ground: 2,
			Steel: 2
		},
		Ghost: {
			Normal: 0,
			Fighting: 0,
			Poison: 0.5,
			Bug: 0.5,
			Ghost: 2,
			Dark: 2
		},
		Dragon: {
			Fire: 0.5,
			Water: 0.5,
			Electric: 0.5,
			Grass: 0.5,
			Ice: 2,
			Dragon: 2,
			Fairy: 2
		},
		Dark: {
			Fighting: 2,
			Psychic: 0,
			Bug: 2,
			Ghost: 0.5,
			Dark: 0.5,
			Fairy: 2
		},
		Steel: {
			Normal: 0.5,
			Grass: 0.5,
			Ice: 0.5,
			Flying: 0.5,
			Psychic: 0.5,
			Bug: 0.5,
			Rock: 0.5,
			Dragon: 0.5,
			Steel: 0.5,
			Fairy: 0.5,
			Fire: 2,
			Fighting: 2,
			Ground: 2,
			Poison: 0
		},
		Fairy: {
			Fighting: 0.5,
			Bug: 0.5,
			Dark: 0.5,
			Steel: 2,
			Poison: 2
		}
	};
	private static instances: Type[] = [];

	public constructor(public name: string) {
		Type.instances.push(this);
	}

	public static getRandom(): string[] {
		if (Math.random() < 0.5) {
			return [global.lcminigames.pickRandom(Type.instances).getName()];
		} else {
			let type1, type2;
			do {
				type1 = Math.floor(Math.random() * this.instances.length);
				type2 = Math.floor(Math.random() * this.instances.length);
			} while (type1 === type2);
			return [
				Type.instances[type1].getName(),
				Type.instances[type2].getName()
			];
		}
	}

	public static isEffective(attack: string, defending: string[]): boolean {
		const mult = defending.reduce((prev, curr) => {
			return (
				prev *
				global.lcminigames.findVal(Type.Effectiveness[curr], attack, 1)
			);
		}, 1);
		return mult >= 2;
	}

	public getName(): string {
		return this.name;
	}
};
