//AND
db.student.aggregate([
    {$addFields:{"NewFeild":{

        $and:[
            {$eq:["$salary",35000]},
            {$eq:["$city","Dhaka"]}
        ]
    }}}
])
//NOT
db.student.aggregate([
    {$addFields:{"NewFeild":{

        $not:[
            {$eq:["$salary",35000]},
            {$eq:["$city","Dhaka"]}
        ]
    }}}
])