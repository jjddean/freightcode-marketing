const { startServer } = require("next/dist/server/lib/start-server");

startServer({
  dir: process.cwd(),
  port: 3000,
  allowRetry: true,
  isDev: true,
  hostname: "127.0.0.1",
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
