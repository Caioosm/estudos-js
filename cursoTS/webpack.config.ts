import path from "node:path";
import { fileURLToPath } from "url";
import webpack from "webpack";

// in case you run into any TypeScript error when configuring `devServer`
// import "webpack-dev-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  mode: 'development',
  entry: "./src/A018-webpack/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig-frontend',
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "frontend", "assets", "js"),
  },
  devtool: 'source-map',
};

export default config;
