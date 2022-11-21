db.student.aggregate([
    {$group:{_id:"$designation",total:{$sum:"$salary"}}}
])