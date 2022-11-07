// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const prompt = require(`prompt-sync`)();
let head = prompt("please enter the Head string: ");
head = head.split("");
let i;
 if (head.length%2 == 0){
    i = Math.floor(head.length/2);
} else {
    i = Math.floor(head.length/2);
}

let newHead = head.slice(i);
console.log(newHead);