/******************************
  a boilerplate for PolyBlocks
*******************************/

// Just replace all the text here with the ones in the file under `src/boilerplates`

console.log(pb.hash);

// The hash becomes a seed of a random number generator.
// We strongly recommends that all artists use pb.random() to feed all of their project's randomness.
console.log(pb.random()); // Getting a random value ranging between 0 and 1 (0 < r < 1)
console.log(pb.random()); // another value will be returned.

console.log(pb.randrange(0, 100)); // Getting a random number between two values (a < r < b)

console.log(pb.randint(0, 100)); // Getting a random integer between two values (a <= r <= b)