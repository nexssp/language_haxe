class Main {
	public static function main() {
		var lines = Sys.stdin().readAll().toString().split("\n");
		// Then do something with them...
		// lines.whatev(...);
		for (line in lines) {
			Sys.println("> " + line);
		}
	}
}
