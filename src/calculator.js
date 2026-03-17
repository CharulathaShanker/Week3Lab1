#!/usr/bin/env node

// Node.js CLI calculator
// Supported operations: addition, subtraction, multiplication, division

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function usage() {
  console.error('Usage: node src/calculator.js <operation> <a> <b>\n');
  console.error('Operations: add, subtract, multiply, divide');
  console.error('Example: node src/calculator.js add 2 3');
}

// CLI entry
if (require.main === module) {
  const [,, op, aRaw, bRaw] = process.argv;
  if (!op || aRaw === undefined || bRaw === undefined) {
    usage();
    process.exit(1);
  }

  const a = Number(aRaw);
  const b = Number(bRaw);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: both operands must be numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (op.toLowerCase()) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case 'mul':
      case '*':
        result = multiply(a, b);
        break;
      case 'divide':
      case 'div':
      case '/':
        result = divide(a, b);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        usage();
        process.exit(1);
    }

    // Print result to stdout
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };
