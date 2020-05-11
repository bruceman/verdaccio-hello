# verdaccio-hello

A simple health check plugin for verdaccio

---

## Installation

```
npm install verdaccio-hello
```

## Usage
```yaml
middlewares:
  hello:
    path: /hello # optional, default value is /hello
    text: ok # optional, default value is ok
```

For example:
http://localhost:4873/hello  => ok



