global.callchain$current = {node: undefined, arguments: [], children: []}
global.callchain$tree = [callchain$current];

function traceCallStack(func, name) {
    return function () {
        const node = { node: name, arguments: arguments, children: [] };
        global.callchain$current.children.push(node);
        global.callchain$current = node;

        func.apply(this, arguments);
    }
}


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


