lcminigames.DefaultFontInfo = class DefaultFontInfo {
	public static readonly A = new DefaultFontInfo("A", 5);
	public static readonly a = new DefaultFontInfo("a", 5);
	public static readonly B = new DefaultFontInfo("B", 5);
	public static readonly b = new DefaultFontInfo("b", 5);
	public static readonly C = new DefaultFontInfo("C", 5);
	public static readonly c = new DefaultFontInfo("c", 5);
	public static readonly D = new DefaultFontInfo("D", 5);
	public static readonly d = new DefaultFontInfo("d", 5);
	public static readonly E = new DefaultFontInfo("E", 5);
	public static readonly e = new DefaultFontInfo("e", 5);
	public static readonly F = new DefaultFontInfo("F", 5);
	public static readonly f = new DefaultFontInfo("f", 4);
	public static readonly G = new DefaultFontInfo("G", 5);
	public static readonly g = new DefaultFontInfo("g", 5);
	public static readonly H = new DefaultFontInfo("H", 5);
	public static readonly h = new DefaultFontInfo("h", 5);
	public static readonly I = new DefaultFontInfo("I", 3);
	public static readonly i = new DefaultFontInfo("i", 1);
	public static readonly J = new DefaultFontInfo("J", 5);
	public static readonly j = new DefaultFontInfo("j", 5);
	public static readonly K = new DefaultFontInfo("K", 5);
	public static readonly k = new DefaultFontInfo("k", 4);
	public static readonly L = new DefaultFontInfo("L", 5);
	public static readonly l = new DefaultFontInfo("l", 1);
	public static readonly M = new DefaultFontInfo("M", 5);
	public static readonly m = new DefaultFontInfo("m", 5);
	public static readonly N = new DefaultFontInfo("N", 5);
	public static readonly n = new DefaultFontInfo("n", 5);
	public static readonly O = new DefaultFontInfo("O", 5);
	public static readonly o = new DefaultFontInfo("o", 5);
	public static readonly P = new DefaultFontInfo("P", 5);
	public static readonly p = new DefaultFontInfo("p", 5);
	public static readonly Q = new DefaultFontInfo("Q", 5);
	public static readonly q = new DefaultFontInfo("q", 5);
	public static readonly R = new DefaultFontInfo("R", 5);
	public static readonly r = new DefaultFontInfo("r", 5);
	public static readonly S = new DefaultFontInfo("S", 5);
	public static readonly s = new DefaultFontInfo("s", 5);
	public static readonly T = new DefaultFontInfo("T", 5);
	public static readonly t = new DefaultFontInfo("t", 4);
	public static readonly U = new DefaultFontInfo("U", 5);
	public static readonly u = new DefaultFontInfo("u", 5);
	public static readonly V = new DefaultFontInfo("V", 5);
	public static readonly v = new DefaultFontInfo("v", 5);
	public static readonly W = new DefaultFontInfo("W", 5);
	public static readonly w = new DefaultFontInfo("w", 5);
	public static readonly X = new DefaultFontInfo("X", 5);
	public static readonly x = new DefaultFontInfo("x", 5);
	public static readonly Y = new DefaultFontInfo("Y", 5);
	public static readonly y = new DefaultFontInfo("y", 5);
	public static readonly Z = new DefaultFontInfo("Z", 5);
	public static readonly z = new DefaultFontInfo("z", 5);
	public static readonly NUM_1 = new DefaultFontInfo("1", 5);
	public static readonly NUM_2 = new DefaultFontInfo("2", 5);
	public static readonly NUM_3 = new DefaultFontInfo("3", 5);
	public static readonly NUM_4 = new DefaultFontInfo("4", 5);
	public static readonly NUM_5 = new DefaultFontInfo("5", 5);
	public static readonly NUM_6 = new DefaultFontInfo("6", 5);
	public static readonly NUM_7 = new DefaultFontInfo("7", 5);
	public static readonly NUM_8 = new DefaultFontInfo("8", 5);
	public static readonly NUM_9 = new DefaultFontInfo("9", 5);
	public static readonly NUM_0 = new DefaultFontInfo("0", 5);
	public static readonly EXCLAMATION_POINT = new DefaultFontInfo("!", 1);
	public static readonly AT_SYMBOL = new DefaultFontInfo("@", 6);
	public static readonly NUM_SIGN = new DefaultFontInfo("#", 5);
	public static readonly DOLLAR_SIGN = new DefaultFontInfo("$", 5);
	public static readonly PERCENT = new DefaultFontInfo("%", 5);
	public static readonly UP_ARROW = new DefaultFontInfo("^", 5);
	public static readonly AMPERSAND = new DefaultFontInfo("&", 5);
	public static readonly ASTERISK = new DefaultFontInfo("*", 5);
	public static readonly LEFT_PARENTHESIS = new DefaultFontInfo("(", 4);
	public static readonly RIGHT_PARENTHESIS = new DefaultFontInfo(")", 4);
	public static readonly MINUS = new DefaultFontInfo("-", 5);
	public static readonly UNDERSCORE = new DefaultFontInfo("_", 5);
	public static readonly PLUS_SIGN = new DefaultFontInfo("+", 5);
	public static readonly EQUALS_SIGN = new DefaultFontInfo("=", 5);
	public static readonly LEFT_CURL_BRACE = new DefaultFontInfo("{", 4);
	public static readonly RIGHT_CURL_BRACE = new DefaultFontInfo("}", 4);
	public static readonly LEFT_BRACKET = new DefaultFontInfo("[", 3);
	public static readonly RIGHT_BRACKET = new DefaultFontInfo("]", 3);
	public static readonly COLON = new DefaultFontInfo(":", 1);
	public static readonly SEMI_COLON = new DefaultFontInfo(";", 1);
	public static readonly DOUBLE_QUOTE = new DefaultFontInfo('"', 3);
	public static readonly SINGLE_QUOTE = new DefaultFontInfo("'", 1);
	public static readonly LEFT_ARROW = new DefaultFontInfo("<", 4);
	public static readonly RIGHT_ARROW = new DefaultFontInfo(">", 4);
	public static readonly QUESTION_MARK = new DefaultFontInfo("?", 5);
	public static readonly SLASH = new DefaultFontInfo("/", 5);
	public static readonly BACK_SLASH = new DefaultFontInfo("\\", 5);
	public static readonly LINE = new DefaultFontInfo("|", 1);
	public static readonly TILDE = new DefaultFontInfo("~", 5);
	public static readonly TICK = new DefaultFontInfo("`", 2);
	public static readonly PERIOD = new DefaultFontInfo(".", 1);
	public static readonly COMMA = new DefaultFontInfo(",", 1);
	public static readonly SPACE = new DefaultFontInfo(" ", 3);
	public static readonly DEFAULT = new DefaultFontInfo("a", 4);
	private static instances: DefaultFontInfo[] = [];

	public constructor(
		public character: string,
		public length: number
	) {
		DefaultFontInfo.instances.push(this);
	}

	public static getDefaultFontInfo(c: string): DefaultFontInfo {
		return (
			DefaultFontInfo.instances.find((v) => v.character === c) ||
			this.DEFAULT
		);
	}

	public getCharacter(): string {
		return this.character;
	}

	public getLength(): number {
		return this.length;
	}

	public getBoldLength(): number {
		if (this === DefaultFontInfo.SPACE) return this.length;
		return this.length + 1;
	}
};
