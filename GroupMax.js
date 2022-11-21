db.student.aggregate([
    {$group:{_id:"$designation",max:{$max:"$salary"}}}
])