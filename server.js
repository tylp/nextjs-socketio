const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// fake DB
const messages = [];

// socket.io server
io.on("connection", socket => {
	socket.on("hello-room", data => {
		console.log({ data });
		messages.push(data);
		socket.emit("hello-room", data);
	});
});

nextApp.prepare().then(() => {
	app.get("/messages/:chat", (req, res) => {
		res.json({ messages });
	});

	app.get("*", (req, res) => {
		return nextHandler(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});