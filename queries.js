db.bios.find({"awards":{$exists:true}}).pretty()
​
db.bios.find({"awards":{$exists:false}}).pretty()
​
db.bios.find({$or:[{"contribs":"OOP"},{"contribs":"Unix"}]}).pretty()
​
db.bios.find({awards:{$elemMatch:{award:"Turing Award"}}}).pretty()
​
db.bios.find({"_id":{$gt: 3, $lt: 7}}).pretty()
​
db.bios.find({"awards":{$exists:true}}, {awards:{$elemMatch:{"year":{$lt:2000}}}}).pretty()
​
db.bios.find({$and:[{"birth":{$exists:true}}, {"death":{$exists:false}}]}).pretty()
