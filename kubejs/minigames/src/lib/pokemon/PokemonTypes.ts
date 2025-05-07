lcminigames.Pokemon.Type = (function() {
    function Type(name: string) {
        Type.instances.push(this);
        this.name = name;
    }

    /** @type {Type[]} */
    Type.instances = [];

    Type.prototype.getName = function() {
        return this.name;
    }

    Type.Normal = new Type("Normal");
    Type.Fire = new Type("Fire");
    Type.Water = new Type("Water");
    Type.Electric = new Type("Electric");
    Type.Grass = new Type("Grass");
    Type.Ice = new Type("Ice");
    Type.Fighting = new Type("Fighting");
    Type.Poison = new Type("Poison");
    Type.Ground = new Type("Ground");
    Type.Flying = new Type("Flying");
    Type.Psychic = new Type("Psychic");
    Type.Bug = new Type("Bug");
    Type.Rock = new Type("Rock");
    Type.Ghost = new Type("Ghost");
    Type.Dragon = new Type("Dragon");
    Type.Dark = new Type("Dark");
    Type.Steel = new Type("Steel");
    Type.Fairy = new Type("Fairy");


    Type.Effectiveness = {
        Normal: {
            Fighting: 2, Ghost: 0
        },
        Fire: {
            Fire: 0.5, Water: 2, Grass: 0.5, Ice: 0.5, Bug: 0.5, Rock: 2, Steel: 0.5, Ground: 2
        },
        Water: {
            Fire: 0.5, Water: 0.5, Electric: 2, Grass: 2, Ice: 0.5, Steel: 0.5
        },
        Electric: {
            Electric: 0.5, Ground: 2, Flying: 0.5, Steel: 0.5
        },
        Grass: {
            Fire: 2, Water: 0.5, Electric: 0.5, Grass: 0.5, Ice: 2, Poison: 2, Ground: 0.5, Flying: 2, Bug: 2
        },
        Ice: {
            Fire: 2, Ice: 0.5, Fighting: 2, Rock: 2, Steel: 2
        },
        Fighting: {
            Flying: 2, Psychic: 2, Bug: 0.5, Rock: 0.5, Dark: 0.5, Fairy: 2
        },
        Poison: {
            Grass: 0.5, Fighting: 0.5, Poison: 0.5, Ground: 2, Psychic: 2, Bug: 0.5, Fairy: 0.5
        },
        Ground: {
            Water: 2, Grass: 2, Ice: 2, Poison: 0.5, Rock: 0.5
        },
        Flying: {
            Electric: 2, Grass: 0.5, Fighting: 0.5, Bug: 0.5, Rock: 2, Ground: 0
        },
        Psychic: {
            Fighting: 0.5, Psychic: 0.5, Bug: 2, Ghost: 2, Dark: 2
        },
        Bug: {
            Fire: 2, Grass: 0.5, Fighting: 0.5, Ground: 0.5, Flying: 2, Rock: 2
        },
        Rock: {
            Normal: 0.5, Fire: 0.5, Water: 2, Grass: 2, Fighting: 2, Poison: 0.5, Ground: 2, Steel: 2
        },
        Ghost: {
            Normal: 0, Fighting: 0, Poison: 0.5, Bug: 0.5, Ghost: 2, Dark: 2
        },
        Dragon: {
            Fire: 0.5, Water: 0.5, Electric: 0.5, Grass: 0.5, Ice: 2, Dragon: 2, Fairy: 2
        },
        Dark: {
            Fighting: 2, Psychic: 0, Bug: 2, Ghost: 0.5, Dark: 0.5, Fairy: 2
        },
        Steel: {
            Normal: 0.5, Grass: 0.5, Ice: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 0.5,
            Dragon: 0.5, Steel: 0.5, Fairy: 0.5, Fire: 2, Fighting: 2, Ground: 2, Poison: 0
        },
        Fairy: {
            Fighting: 0.5, Bug: 0.5, Dark: 0.5, Steel: 2, Poison: 2
        }
    };

    Type.getRandom = function(): string[] {
        if(Math.random() < 0.5){
        return [global.lcminigames.pickRandom(Type.instances).getName()];
    } else {
        let type1, type2
        do {
            type1 = Math.floor(Math.random() * this.instances.length);
            type2 = Math.floor(Math.random() * this.instances.length);
        } while (type1 === type2)
        return [Type.instances[type1].getName(), Type.instances[type2].getName()]
    }
    }

    Type.isEffective = function(attack: string, defending: string[]): boolean {
        const mult = defending.reduce((prev, curr) => {
            return prev * global.lcminigames.findVal(Type.Effectiveness[curr], attack, 1);
        }, 1);
        return mult >= 2;
    }

    return Type;
})();
