'use strict';

// Lodash
import _ from 'lodash';


// Chunk Array: Split array into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

let arr = [1,2,3,4,5,6,7,8];

console.log(_.chunk(arr, 1));
console.log(_.chunk(arr, 3));

// or direct
console.log((_.chunk(['a', 'b', 'c', 'd'], 2)));


// Compact Array: Creates an array with all falsy values removed. The values false, null, 0, "", undefined, and NaN are falsy.

console.log(_.compact([0, 1, false, 2, '', 3]));


// Imp: There is lot of method Lodash Library contains visit there documentation [https://lodash.com/docs/4.17.21]