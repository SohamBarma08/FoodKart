const mongoose = require("mongoose");
mongoURI =
  "mongodb+srv://sohambarma483:Soham2003@cluster0.4d4h9ko.mongodb.net/foodkart?retryWrites=true&w=majority";
const mongoDB = async () => {
  await mongoose.connect(mongoURI, { UseNewUrlParser: true }, async (err, result) => {
    if (err) console.log("---", err);
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function(err,data){
        const foodCategory = await mongoose.connection.db.collection("food_category");

        // if (err) console.log("---", err);
        // else {
        //   global.food_items = data;
        // }
      })
    }
  });
};

mongoose.set("strictQuery", false);
module.exports = mongoDB;
