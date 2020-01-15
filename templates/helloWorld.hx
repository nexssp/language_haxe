class HelloWorld {
	static function main() {
		var lines = Sys.stdin().readAll().toString().split("\n");

		for (line in lines) {
			var o = haxe.Json.parse(line);
			o.helloFromHaxe = haxe.macro.Compiler.getDefine("haxe_ver");

			var s = haxe.Json.stringify(o);
			Sys.println(s);
		}
	};
}
