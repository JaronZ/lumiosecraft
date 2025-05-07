lcminigames.DefaultFontInfo = (function() {
    function DefaultFontInfo(character: string, length: number) {
        DefaultFontInfo.instances.push(this);
        this.character = character;
        this.length = length;
    }

    /** @type {DefaultFontInfo[]} */
    DefaultFontInfo.instances = [];

    DefaultFontInfo.prototype.getCharacter = function() {
        return this.character;
    }

    DefaultFontInfo.prototype.getLength = function() {
        return this.length;
    }

    DefaultFontInfo.prototype.getBoldLength = function() {
        if(this == DefaultFontInfo.SPACE) return this.length;
        return this.length + 1;
    }

    /**
     * @param {string} c
     * @returns {DefaultFontInfo}
     */
    DefaultFontInfo.getDefaultFontInfo = function(c) {
        return DefaultFontInfo.instances.find(v => v.character === c) || this.DEFAULT;
    }

    DefaultFontInfo.A = new DefaultFontInfo("A", 5);
    DefaultFontInfo.A = new DefaultFontInfo('A', 5);
    DefaultFontInfo.a = new DefaultFontInfo('a', 5);
    DefaultFontInfo.B = new DefaultFontInfo('B', 5);
    DefaultFontInfo.b = new DefaultFontInfo('b', 5);
    DefaultFontInfo.C = new DefaultFontInfo('C', 5);
    DefaultFontInfo.c = new DefaultFontInfo('c', 5);
    DefaultFontInfo.D = new DefaultFontInfo('D', 5);
    DefaultFontInfo.d = new DefaultFontInfo('d', 5);
    DefaultFontInfo.E = new DefaultFontInfo('E', 5);
    DefaultFontInfo.e = new DefaultFontInfo('e', 5);
    DefaultFontInfo.F = new DefaultFontInfo('F', 5);
    DefaultFontInfo.f = new DefaultFontInfo('f', 4);
    DefaultFontInfo.G = new DefaultFontInfo('G', 5);
    DefaultFontInfo.g = new DefaultFontInfo('g', 5);
    DefaultFontInfo.H = new DefaultFontInfo('H', 5);
    DefaultFontInfo.h = new DefaultFontInfo('h', 5);
    DefaultFontInfo.I = new DefaultFontInfo('I', 3);
    DefaultFontInfo.i = new DefaultFontInfo('i', 1);
    DefaultFontInfo.J = new DefaultFontInfo('J', 5);
    DefaultFontInfo.j = new DefaultFontInfo('j', 5);
    DefaultFontInfo.K = new DefaultFontInfo('K', 5);
    DefaultFontInfo.k = new DefaultFontInfo('k', 4);
    DefaultFontInfo.L = new DefaultFontInfo('L', 5);
    DefaultFontInfo.l = new DefaultFontInfo('l', 1);
    DefaultFontInfo.M = new DefaultFontInfo('M', 5);
    DefaultFontInfo.m = new DefaultFontInfo('m', 5);
    DefaultFontInfo.N = new DefaultFontInfo('N', 5);
    DefaultFontInfo.n = new DefaultFontInfo('n', 5);
    DefaultFontInfo.O = new DefaultFontInfo('O', 5);
    DefaultFontInfo.o = new DefaultFontInfo('o', 5);
    DefaultFontInfo.P = new DefaultFontInfo('P', 5);
    DefaultFontInfo.p = new DefaultFontInfo('p', 5);
    DefaultFontInfo.Q = new DefaultFontInfo('Q', 5);
    DefaultFontInfo.q = new DefaultFontInfo('q', 5);
    DefaultFontInfo.R = new DefaultFontInfo('R', 5);
    DefaultFontInfo.r = new DefaultFontInfo('r', 5);
    DefaultFontInfo.S = new DefaultFontInfo('S', 5);
    DefaultFontInfo.s = new DefaultFontInfo('s', 5);
    DefaultFontInfo.T = new DefaultFontInfo('T', 5);
    DefaultFontInfo.t = new DefaultFontInfo('t', 4);
    DefaultFontInfo.U = new DefaultFontInfo('U', 5);
    DefaultFontInfo.u = new DefaultFontInfo('u', 5);
    DefaultFontInfo.V = new DefaultFontInfo('V', 5);
    DefaultFontInfo.v = new DefaultFontInfo('v', 5);
    DefaultFontInfo.W = new DefaultFontInfo('W', 5);
    DefaultFontInfo.w = new DefaultFontInfo('w', 5);
    DefaultFontInfo.X = new DefaultFontInfo('X', 5);
    DefaultFontInfo.x = new DefaultFontInfo('x', 5);
    DefaultFontInfo.Y = new DefaultFontInfo('Y', 5);
    DefaultFontInfo.y = new DefaultFontInfo('y', 5);
    DefaultFontInfo.Z = new DefaultFontInfo('Z', 5);
    DefaultFontInfo.z = new DefaultFontInfo('z', 5);
    DefaultFontInfo.NUM_1 = new DefaultFontInfo('1', 5);
    DefaultFontInfo.NUM_2 = new DefaultFontInfo('2', 5);
    DefaultFontInfo.NUM_3 = new DefaultFontInfo('3', 5);
    DefaultFontInfo.NUM_4 = new DefaultFontInfo('4', 5);
    DefaultFontInfo.NUM_5 = new DefaultFontInfo('5', 5);
    DefaultFontInfo.NUM_6 = new DefaultFontInfo('6', 5);
    DefaultFontInfo.NUM_7 = new DefaultFontInfo('7', 5);
    DefaultFontInfo.NUM_8 = new DefaultFontInfo('8', 5);
    DefaultFontInfo.NUM_9 = new DefaultFontInfo('9', 5);
    DefaultFontInfo.NUM_0 = new DefaultFontInfo('0', 5);
    DefaultFontInfo.EXCLAMATION_POINT = new DefaultFontInfo('!', 1);
    DefaultFontInfo.AT_SYMBOL = new DefaultFontInfo('@', 6);
    DefaultFontInfo.NUM_SIGN = new DefaultFontInfo('#', 5);
    DefaultFontInfo.DOLLAR_SIGN = new DefaultFontInfo('$', 5);
    DefaultFontInfo.PERCENT = new DefaultFontInfo('%', 5);
    DefaultFontInfo.UP_ARROW = new DefaultFontInfo('^', 5);
    DefaultFontInfo.AMPERSAND = new DefaultFontInfo('&', 5);
    DefaultFontInfo.ASTERISK = new DefaultFontInfo('*', 5);
    DefaultFontInfo.LEFT_PARENTHESIS = new DefaultFontInfo('(', 4);
    DefaultFontInfo.RIGHT_PARENTHESIS = new DefaultFontInfo(')', 4);
    DefaultFontInfo.MINUS = new DefaultFontInfo('-', 5);
    DefaultFontInfo.UNDERSCORE = new DefaultFontInfo('_', 5);
    DefaultFontInfo.PLUS_SIGN = new DefaultFontInfo('+', 5);
    DefaultFontInfo.EQUALS_SIGN = new DefaultFontInfo('=', 5);
    DefaultFontInfo.LEFT_CURL_BRACE = new DefaultFontInfo('{', 4);
    DefaultFontInfo.RIGHT_CURL_BRACE = new DefaultFontInfo('}', 4);
    DefaultFontInfo.LEFT_BRACKET = new DefaultFontInfo('[', 3);
    DefaultFontInfo.RIGHT_BRACKET = new DefaultFontInfo(']', 3);
    DefaultFontInfo.COLON = new DefaultFontInfo(':', 1);
    DefaultFontInfo.SEMI_COLON = new DefaultFontInfo(';', 1);
    DefaultFontInfo.DOUBLE_QUOTE = new DefaultFontInfo('"', 3);
    DefaultFontInfo.SINGLE_QUOTE = new DefaultFontInfo('\'', 1);
    DefaultFontInfo.LEFT_ARROW = new DefaultFontInfo('<', 4);
    DefaultFontInfo.RIGHT_ARROW = new DefaultFontInfo('>', 4);
    DefaultFontInfo.QUESTION_MARK = new DefaultFontInfo('?', 5);
    DefaultFontInfo.SLASH = new DefaultFontInfo('/', 5);
    DefaultFontInfo.BACK_SLASH = new DefaultFontInfo('\\', 5);
    DefaultFontInfo.LINE = new DefaultFontInfo('|', 1);
    DefaultFontInfo.TILDE = new DefaultFontInfo('~', 5);
    DefaultFontInfo.TICK = new DefaultFontInfo('`', 2);
    DefaultFontInfo.PERIOD = new DefaultFontInfo('.', 1);
    DefaultFontInfo.COMMA = new DefaultFontInfo(',', 1);
    DefaultFontInfo.SPACE = new DefaultFontInfo(' ', 3);
    DefaultFontInfo.DEFAULT = new DefaultFontInfo('a', 4);

    return DefaultFontInfo;
})();
