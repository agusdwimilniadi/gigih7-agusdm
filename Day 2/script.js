let students = [{ name: 'Alice' }];
try {
  //   console.log(students[0].name);
  if (students[0].name == undefined) {
    throw Error;
  }
  console.log(students[0].name);
} catch (error) {
  console.log(error.message);
}
