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

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

function usage() {
  console.error('Usage: node src/calculator.js <operation> <a> <b>\n');
  console.error('Binary operations (require two operands): add, subtract, multiply, divide, mod, pow');
  console.error('Unary operations (require one operand): sqrt');
  console.error('Examples:');
  console.error('  node src/calculator.js add 2 3');
  console.error('  node src/calculator.js sqrt 16');
}

// CLI entry
if (require.main === module) {
  const [,, op, ...operandsRaw] = process.argv;
  if (!op) {
    usage();
    process.exit(1);
  }

  const opLower = op.toLowerCase();
  const isUnary = ['sqrt', 'squareroot'].includes(opLower);
  const expectedCount = isUnary ? 1 : 2;

  if (operandsRaw.length < expectedCount) {
    usage();
    process.exit(1);
  }

  const nums = operandsRaw.slice(0, expectedCount).map(Number);
  if (nums.some(Number.isNaN)) {
    console.error('Error: operands must be numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (opLower) {
      case 'add':
      case '+':
        result = add(nums[0], nums[1]);
        break;
      case 'subtract':
      case '-':
        result = subtract(nums[0], nums[1]);
        break;
      case 'multiply':
      case 'mul':
      case '*':
        result = multiply(nums[0], nums[1]);
        break;
      case 'divide':
      case 'div':
      case '/':
        result = divide(nums[0], nums[1]);
        break;
      case 'mod':
      case 'modulo':
      case '%':
        result = modulo(nums[0], nums[1]);
        break;
      case 'pow':
      case 'power':
      case '^':
        result = power(nums[0], nums[1]);
        break;
      case 'sqrt':
      case 'squareroot':
        result = squareRoot(nums[0]);
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
