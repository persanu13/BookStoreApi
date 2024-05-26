const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://stamateteodor23:Criminalu23@cluster0.ezvkxbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.error(err);
        return cb(err);
      });
  },
  getDb: () => {
    return dbConnection;
  },
};
