global.callchain$current = {node: undefined, arguments: [], children: []}
global.callchain$tree = [callchain$current];

module.exports = function traceCallStack(func, name) {
    return function () {
        const node = { node: name, arguments: arguments, children: [] };
        global.callchain$current.children.push(node);
        global.callchain$current = node;
        // console.log(JSON.stringify(callchain$tree, null, 2))

        func.apply(this, arguments);
    }
}
