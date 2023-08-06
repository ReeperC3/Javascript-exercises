const findTheOldest = function(arr) {
  return arr.reduce((oldest, next) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const nextAge = getAge(next.yearOfBirth, next.yearOfDeath);
    return oldestAge < nextAge ? next : oldest;
  });
};

let getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
