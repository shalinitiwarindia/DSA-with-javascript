//Enter code here
function processStackOperations(operations) {
  let stack = [];
  let result = [];

  operations.forEach(operation => {
    let parts = operation.split(' ');
    let queryType = parseInt(parts[0]);

    if (queryType === 1) {
      // Push operation
      let x = parseInt(parts[1]);
      stack.push(x);
    } else if (queryType === 2) {
      // Pop operation
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (queryType === 3) {
      // Print top operation
      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push("Empty!");
      }
    }
  });

  return result;
}

// Example usage
let operations = [
  "1 15",
  "1 20",
  "2",
  "3",
  "2",
  "3"
];

let results = processStackOperations(operations);
results.forEach(res => console.log(res));
