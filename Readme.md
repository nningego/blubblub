npx babel src/example.js
npx babel-node src/example.js

```
function g() {
}

function f() {
g();
}

f();
```

---

```
[
  {
    "children": [
      {
        "node": "f",
        "children": [
          {
            "node": "g",
            "children": []
          }
        ]
      }
    ]
  }
]

```
---
