db.student.aggregate([
    {$skip:2},
    {$limit:2}
])
//find deya 
db.student.find({}).skip(2).limit(2)