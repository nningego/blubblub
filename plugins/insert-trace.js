module.exports = function ({types: t, template: template}) {
    const myImport = template(`const traceCallStack = require("../plugins/traceCallStack");`, {sourceType: "module"});

    return {
        visitor: {
            Program: {
                enter(path) {
                    const lastImport = path.get("body").filter(p => p.isImportDeclaration()).pop();

                    if (lastImport) {
                        lastImport.insertBefore(myImport())
                    } else {
                        path.unshiftContainer('body', myImport());
                    }

                    path.get("body").map(p => {
                        if (p.isFunctionDeclaration()) {
                            const functionName = p.node.id.name;
                            p.insertAfter(t.expressionStatement(
                                t.assignmentExpression(
                                    '=',
                                    t.identifier(functionName),
                                    t.callExpression(
                                        t.identifier("traceCallStack"),
                                        [
                                            t.identifier(functionName),
                                            t.memberExpression(
                                                t.identifier(functionName),
                                                t.identifier("name")
                                            )

                                        ]
                                    )
                                ),
                                ),
                            )
                        }
                    });
                }
            },
        },
    }
}
