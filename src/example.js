function g(v1, v2) {
    console.log(v1, v2)
}

function f(v1) {
    g(v1, "bar");
}

f("foo")
