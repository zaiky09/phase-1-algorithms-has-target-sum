function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;

    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

  // 0(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

// 0(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}


/* 
  Add your pseudocode here

  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }
  Create object to keep track of numbers we have already seen
  iterate through each number in the array
    for current number, identify a complement that adds to the target (comp = target - num)
    check if any key on our object is the complement
      if so, return true
      else, add that number to the object
  if I reach end of array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
