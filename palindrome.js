//----------------------------------------------LeetCode----------------------------------------------------------------//
//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false


let head = [1 ,3 ,5 ,7 ,9 ,9 ,7 ,5 ,3 ,1]
//let length = array.length;
let each = head.length / 2 ;
let first = head.slice( 0 , each);
let second = head.slice(each , head.length)

let char = [];
for (let i=second.length-1 ; ~i ; i--){
    char.push(second[i])
}

//---------------- Bellow code , also works. --------------------//
// let strfirst = first.toString();
// let strchar = char.toString();
// if (strfirst == strchar){
    //     console.log(`true`)
    // } else {
        //     console.log(`false`)
        //}
        
        function check(a,b){
            return Array.isArray(first) && Array.isArray(char) && first.length == char.length && first.every((val , index) => val === char[index]);
            
        }
console.log(first);
console.log(second);
console.log(char);
console.log(check(first , char));
