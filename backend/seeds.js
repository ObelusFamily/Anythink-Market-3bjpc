var mongoose = require("mongoose");

if (!process.env.MONGODB_URI) {
    console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}
  
mongoose.connect(process.env.MONGODB_URI);
require("./models/User");
require("./models/Item");
require("./models/Comment");

var User = mongoose.model("User");
var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");

console.log("seeding the database with 100 users, items and comments")
range(0, 100, 1) 
    .map(i => {
        var rand = Math.random().toString(36).slice(2, 7);
        var user = new User();
        user.username = "u" + rand;
        user.email = user.username + "@fake.com";
        user.setPassword("hey " + user.username);

        var item = new Item();
        item.title = "i" + rand;
        item.seller = user;

        var comment = new Comment();
        comment.body = item.title + " is awesome!"
        comment.item = item;
        comment.seller = user;

        item.comments.concat([comment]);

        user.save();
        item.save();
        comment.save();
    });

function range (start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
}