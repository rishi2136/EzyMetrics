
# EzyMetrics

A website on which you rae able to create campaign, retrive the campaigns and the lead generated from them, through this plaform you are also able to get the campaigns sales report in pdf format by download or direct print it.And also have the feature of email notification to your gmail whenever new campaign created.




## Documentation

Utitlise MERN stack for the implementation of the whole project with style with the bootstrap module files.

- FrontEnd: Implemented by utitlising React and bootstrap.
- Database: Use MONGODB as the Database.
- BackEnd: Built using NodeJS and ExpressJS with various packages
- Dummydata is given in the seperate folder for the re-initialization of Database.

Create the project with standard structure and the name conversion for the function and files are self explainary.


## Folder Structure Screenshot
![folder_structure](https://github.com/user-attachments/assets/3110e646-0b6b-4e86-b59a-23e062c5789d)

## PDF Generator
![pdf-generator](https://github.com/user-attachments/assets/f6437e71-5cef-4e75-a9c1-92f2c306ac83)

### BackEnd endpoints


```bash
  http://localhost:3012/lead/info
  Fetch the total lead generated yet
```

```bash
  http://localhost:3012/lead/:id
  Fetch the unique lead 
```

```bash
  http://localhost:3012/camp/info
  Fetch the total campaigns generated yet
```
```bash
  http://localhost:3012/camp/add
  To create new campaign
```
```bash
  http://localhost:3012/camp/:id
  To get individual campaign
```
    
## Installation
### FrontEnd

```bash
  cd frontend && npm intall
  npm run dev
```

### BackEnd
```bash
  cd backend && npm Install
  node app.js
```


## Appreciation
I appreciate that you read the document to the end, Thanks for reading the document contact me on my [@rishiagrahari36@gmail.com](@rishiagrahari36@gmail.com)
