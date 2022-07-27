# Weak Set

## Example

```
let visitedSet = new WeakSet();
let john = { name: "John" };

visitedSet.add(john);
john = null;
```

## Usage

```
setTimeout(() => console.log(visitedSet),10000) // error
// we don't know when garbage collection will happen
```
