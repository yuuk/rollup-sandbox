import recast from "recast";

export default function myPlugin() {
    return {
        name: "rollup-remove-classnames",
        transform(code) {
            const REG = /cq-[\w.:-]+(?:\[[^\]]+\])?/g;

            const ast = recast.parse(code, { tokens: false });

            recast.visit(ast, {
                visitProperty(path) {
                    const { node } = path;
                    if (node.key.name === "className") {
                        node.value.value = node.value.value
                            ?.replace(REG, "")
                            .trim();
                    }
                    this.traverse(path);
                },
                visitCallExpression(path) {
                    const { node } = path;
                    if (node.callee?.name === "classNames") {
                        node.arguments = node.arguments.map((item) => {
                            item.value = item.value?.replace(REG, "").trim();
                            return item;
                        });
                    }
                    this.traverse(path);
                },
                visitObjectExpression(path) {
                    const { node } = path;
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
                    this.traverse(path);
                },
            });

            const newCode = recast.print(ast).code;

            return {
                code: newCode,
            };
        },
    };
}
