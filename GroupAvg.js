db.student.aggregate([
    {$group:{_id:"$city",avg:{$avg:"$salary"}}}
])