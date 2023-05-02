function solution(matrix) {
  let sum = 0;
  let hauntedRooms = new Set(); // use a set to keep track of haunted rooms
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hauntedRooms.add(j); // add haunted room to set
      } else if (!hauntedRooms.has(j)) {
        sum += matrix[i][j]; // add cost of room to sum if it's not haunted or below a haunted room
      }
    }
  }
  
  return sum;
}

matrix = [[1,1,1,0], 
[0,5,0,1], 
[2,1,3,10]]


console.log("SOLUTION", solution(matrix))