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
