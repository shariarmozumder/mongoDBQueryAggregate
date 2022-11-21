db.student.aggregate([
    {$group:{_id:"$city",min:{$min:"$salary"}}}
])