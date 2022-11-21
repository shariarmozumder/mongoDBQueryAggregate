db.student.aggregate([
    {$match:{name:/R/}}
])


//find
db.student.find({designation:/Engineer/})