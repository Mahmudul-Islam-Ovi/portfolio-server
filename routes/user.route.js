const router = require('express').Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
 require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.imuxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
      await client.connect();
      const database = client.db("messages");
      const messageCollection = database.collection("MessageDetails");
      const projectCollection = database.collection("ProjectDetails");
        router.get('/users',(req, res) => {
          res.send('Get request')
        })
         
      // file downloader
      router.get('/files',(req, res) => {
        res.download('./cv.docx')
      })

       // post  message database
        router.post('/message', async (req, res) => {
           const newMessage = req.body;
           const results = await  messageCollection.insertOne(newMessage);
          console.log('Got new user', req.body);
        //    console.log('Added user',results);
          res.json(results);
       })

       // Get Message from database

       router.get('/message',async (req, res) => {
        const message = messageCollection.find({});
        const allMessage = await message.toArray();
        res.json(allMessage);
      })

       // post project in  database

       router.post('/project',async(req, res) => {
         const projectName = req.body.projectName;
         const projectDescription = req.body.projectDescription;
         const projectLink = req.body.projectLink;
         const pic = req.files.image;
         const picData = pic.data;
         const encodedPic = picData.toString('base64');
         const imgBuffer = Buffer.from(encodedPic, 'base64');
        const project ={
          projectName,
          projectDescription,
          projectLink,
          image: imgBuffer
        }
         const results = await projectCollection.insertOne(project);
         res.json(results);
       })

       // Get project from database

       router.get('/project',async (req, res) => {
         const project = projectCollection.find({});
         const allProjects = await project.toArray();
         res.json(allProjects);
       })
       

    } finally {
     // await client.close();
    }
  }
  run().catch(console.dir);


module.exports = router;