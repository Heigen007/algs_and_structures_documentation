# Weak Map

## Example

```
const map = new WeakMap()
var objKey2 = {name:"Heigen007"}
map.set(objKey2, "Heigen007")
objKey2 = null
```

## Usage

```
setTimeout(() => console.log(map),10000) // error
// we don't know when garbage collection will happen
```