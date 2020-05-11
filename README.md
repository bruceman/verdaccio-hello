# verdaccio-hello

A simple health check plugin for verdaccio

---

## Installation

```
npm install verdaccio-hello
```

## Usage
The plugin will register two new routes: /hello and /-/hello, and return 'ok' text when request these two urls.

For example:
http://localhost:4873/hello
or 
http://localhost:4873/-/hello 

Both return 'ok'



