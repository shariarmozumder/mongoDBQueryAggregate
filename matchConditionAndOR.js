//Aggreate
db.student.aggregate([
    {$match:{salary:{$gt:4000}}},
    {$match:{city:"dhaka"}}
])

//stage 1 salary 
//stage 2 city [match ]

//and //or
db.student.aggregate([
   {$match:{$and:[
    {salary:{$gt:40000}},
    {city:"Dhaka"},
   ]}}
])

//normal find
db.student.find({
    $and:[
        {salary:{$gt:40000}},
        {city:"Dhaka"},
    ]
})

