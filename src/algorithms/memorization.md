# Memorization

## Example

```
const memorize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};
```

## Usage

```
const someFunc = memorize((num) => {
  // function code
  return 2 * num
});

someFunc(2); // not from cache
someFunc(2); // from cache
```


