lcminigames.Pokemon = (function() {
    function Pokemon({ name, gen }: { name: string; gen: number; }) {
        Pokemon.instances.push(this);
        this.name = name;
        this.gen = gen;
    }

    /** @type {Pokemon[]} */
    Pokemon.instances = [];

    const pokemon = JsonIO.read("kubejs/config/lcminigames/pokemon.json");
    Object.keys(pokemon).forEach(k => {
        Pokemon[k] = new Pokemon(pokemon[k]);
    });

    /**
     * @returns {Pokemon}
     */
    Pokemon.getRandom = function() {
        return global.lcminigames.pickRandom(Pokemon.instances);
    }

    Pokemon.prototype.getName = function() {
        return this.name;
    }

    return Pokemon;
})();
