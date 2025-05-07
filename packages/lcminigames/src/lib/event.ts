PlayerEvents.chat((event) => {
	if (!global.lcminigames.shouldExecute("chat")) return;
	global.lcminigames.execute(
		{ server: event.server, player: event.player, message: event.message },
		() => event.cancel()
	);
});
