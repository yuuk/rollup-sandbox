import { simple } from "acorn-walk";
import escodegen from "escodegen";

export default function myPlugin() {
    return {
        name: "remove-class",
        transform(code, id) {
            const REG = /cq-[\w.:-]+(?:\[[^\]]+\])?/g;
            const comments = [];

            const ast = this.parse(code, { onComment: comments });

            simple(ast, {
                Property(node) {
                    // console.error(JSON.stringify(node), "\n");
                    if (node.key.name === "className") {
                        node.value.value = node.value.value
                            ?.replace(REG, "")
                            .trim();
                    }
                },
                CallExpression(node) {
                    // console.error(JSON.stringify(node), "\n");
                    if (node.callee?.name === "classNames") {
                        node.arguments = node.arguments.map((item) => {
                            item.value = item.value?.replace(REG, "").trim();
                            return item;
                        });
                    }
                },
                ObjectExpression(node) {
                    // console.error(JSON.stringify(node), "\n");
                    node.properties = node.properties
                        .map((item) => {
                            if (item.key.type === "Literal") {
                                item.key.value = item.key.value
                                    ?.replace(REG, "")
                                    .trim();
                            }
                            return item;
                        })
                        .filter((item) => {
                            if (item.key.type === "Literal") {
                                if (item.key.value === "") {
                                    return false;
                                }
                            }
                            return true;
                        });
                },
            });

            const newCode = escodegen.generate(ast);

            return {
                code: newCode,
                map: null,
            };
        },
    };
}
