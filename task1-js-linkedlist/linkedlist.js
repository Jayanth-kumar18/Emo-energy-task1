const readline = require('readline');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createLinkedList(numbers) {
  let head = new Node(numbers[0]);
  let current = head;

  for (let i = 1; i < numbers.length; i++) {
    current.next = new Node(numbers[i]);
    current = current.next;
  }

  return head;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function findSecondLargest(head) {
  if (!head || !head.next) {
    return null;
  }

  let firstMax = secondMax = Number.NEGATIVE_INFINITY;
  let current = head;

  while (current) {
    if (current.data > firstMax) {
      secondMax = firstMax;
      firstMax = current.data;
    } else if (current.data > secondMax && current.data < firstMax) {
      secondMax = current.data;
    }

    current = current.next;
  }

  return secondMax;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a list of numbers separated by spaces: ", function(user_input) {
  const numbers = user_input.split(' ').map(Number);
  const linkedList = createLinkedList(numbers);
  const reversedLinkedList = reverseLinkedList(linkedList);
  const secondLargest = findSecondLargest(reversedLinkedList);

  // Print the reversed linked list and second-largest number
  console.log("Reversed Linked List:");
  
  let current = reversedLinkedList;
  while (current) {
    console.log(current.data);
    current = current.next;
  }

  console.log("Second Largest Number:", secondLargest);

  // Close the readline interface
  rl.close();
});

// Event listener for the close event
rl.on('close', function() {
  process.exit(0);
});
