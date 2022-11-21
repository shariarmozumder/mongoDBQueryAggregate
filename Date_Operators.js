db.student.aggregate([
    {$match:{Unit:"lt"}},
    {$addFields:{"NewField":{$dayOfYear:"$CreatedDate"}}}
])
//DayOf Month
db.student.aggregate([
    {$match:{Unit:"lt"}},
    {$addFields:{"NewField":{$dayOfMonth:"$CreatedDate"}}}
])
//DayOf Week
db.student.aggregate([
    {$match:{Unit:"lt"}},
    {$addFields:{"NewField":{$dayOfWeek:"$CreatedDate"}}}
])
//Year
db.student.aggregate([
    {$match:{Unit:"lt"}},
    {$addFields:{"NewField":{$year:"$CreatedDate"}}}
])
//Month
db.student.aggregate([
    {$match:{Unit:"lt"}},
    {$addFields:{"NewField":{$month:"$CreatedDate"}}}
])
//week
db.student.aggregate([
    {$match:{Unit:"lt"}},
    {$addFields:{"NewField":{$week:"$CreatedDate"}}}
])

