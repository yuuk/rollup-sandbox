import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import removeClassName from "./rollup-plugin-remove-classnames.mjs";

export default defineConfig([
    {
        input: "src/index.tsx",
        output: {
            dir: "dist",
            format: "es",
        },
        external: [],
        plugins: [
            peerDepsExternal(), // 避免声明在peerDependencies中的依赖被打进bundle
            nodeResolve(), // 能够让 rollup 中的文件 import node_modules 中的包
            commonjs(), // 让 rollup 支持解析 commonjs 模块
            swc(defineRollupSwcOption({})),
            removeClassName(),
        ],
    },
]);
