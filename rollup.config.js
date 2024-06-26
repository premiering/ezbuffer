import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/byffer.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json" ,
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
  },
  {
    input: "dist/esm/byffer.d.ts",
    output: [{ file: "dist/byffer.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
];