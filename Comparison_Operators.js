db.student.aggregate([
    {$addFields:{"NewFeild":{$eq:["$salary",30000]}}}
])