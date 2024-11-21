const { json } = require("stream/consumers");

const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE


//Then-Catch
let file1, file2, file3, file4;
fs.readFile('firstname.txt', 'utf-8')
  .then(data1 => {
    file1 = data1 
    return fs.readFile('lastname.txt', 'utf-8')
     
  })

  .then(data2 => {
    file2 = data2 
    return fs.readFile('age.txt', 'utf-8')
  })
  .then(data3 => {
    file3 = data3 
    return fs.readFile('hobbies.txt', 'utf-8')
  })
  .then(data4 => {
    hobbies = JSON.parse(data4)
    console.log(`${file1} ${file2} is ${file3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`)
  })

  .catch(err => {
    console.error(err)
  })







// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const readFiles = async () => {
    try {
      const fileContent1 = await fs.readFile('firstname.txt', 'utf-8')
      const fileContent2 = await fs.readFile('lastname.txt', 'utf-8')
      const fileContent3 = await fs.readFile('age.txt', 'utf-8')
      const fileContent4 = await fs.readFile('hobbies.txt', 'utf-8')
      const hobbies = JSON.parse(fileContent4);  

      console.log(` ${fileContent1} ${fileContent2} is ${fileContent3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`)
    } catch(err) {
      console.error(err)
    }
  }
  readFiles()
  