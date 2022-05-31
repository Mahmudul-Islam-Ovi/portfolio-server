
// const { MongoClient, ServerApiVersion } = require('mongodb');

// // password = apBUdRZa6ixAtjRZ
// // user = message

// const uri = "mongodb+srv://message:apBUdRZa6ixAtjRZ@cluster0.imuxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run() {
//     try {
//       await client.connect();
//       const database = client.db("messages");
//       const messageCollection = database.collection("MessageDetails");

//       const getAllUsers = (req, res) => {
//         res.send('This is home')
//     };
    
//     const postMessage = (req, res) => {
//         res.send('This is home')
//     };

//     //   const doc = {
//     //     name: "Ovi islam", 
//     //     email: "ovi@gmail.com",
//     //     message: "Hello sir"
//     //   }
//     //   const result = await messageCollection.insertOne(doc);
//     //   console.log(`A document was inserted with the _id: ${result.insertedId}`);

//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);




// module.exports = {getAllUsers,postMessage};