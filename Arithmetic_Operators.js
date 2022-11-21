db.student.aggregate([
    {$match:{Unit:1}},
    {$addFiels:{"NewField":{$divide:[10,2]}}}
])