const traceCallStack = require("./traceCallStack");

function g(v1, v2) {
    console.log(v1, v2)
}

function f(v1) {
    g(v1, "bar");
}


g = traceCallStack(g, g.name)
f = traceCallStack(f, f.name)

f("foo");
console.log(JSON.stringify(callchain$tree, null, 2))


