db.student.aggregate([
    {$match:{Unit:1}},
    {$addFiels:{"ExtraField":"ExtraField"}}
])