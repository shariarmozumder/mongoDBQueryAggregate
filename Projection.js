//Aggregate
db.student.aggregate([
    {$project:{_id:0,name:1,designation:1}}
])

//find
db.student.find({},
    {_id:1,name:1,designation:1}
    )
