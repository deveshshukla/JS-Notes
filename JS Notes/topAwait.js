console.log('\nTop Level AsyncAwait in a Sync way -->');

// Note: This top level Await only works in a 'type=module', not simple JS.

// In this way we can skip the Async nature of a AsyncAwait, and use them in a code like a sync. code. 
// But this will lead to slow load time because in a sync way everything load in a sync. manner one by one.

console.log('\ntask-1');
console.log('fetching start...');

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

console.log('fetching end!');