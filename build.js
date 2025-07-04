const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["functions/bot.ts"],
  outfile: "netlify/functions/bot.js",
  bundle: true,
  platform: "node",
  target: "node18",
  sourcemap: true,
  external: ["pg-native"], // optional: if sequelize complains
}).catch(() => process.exit(1));

