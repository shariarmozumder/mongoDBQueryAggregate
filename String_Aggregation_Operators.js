//concat
db.student.aggregate([
    {$match:{Unit:1}},
    {$addFiels:{"NewField":{$concat:["S","H","A","R"]}}}
])

//split
db.student.aggregate([
    {$match:{Unit:1}},
    {$addFiels:{"NewField":{$split:["$Name"," "]}}}
])