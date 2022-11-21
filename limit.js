//3 ta data Ashbe
db.student.find({}).limit(3) 
//Aggregate
db.student.aggregate([{$limit:4}])

//select first 5 and last 5 data
db.student.aggregate([
    {$sort:{_id:1}},
    {$limit:5}
])
