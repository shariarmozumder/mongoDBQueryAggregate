db.student.aggregate([
    {$group:{

        _id:{designation:"$designation",city:"$city"},
        sum:{$sum:"$salary"}
    }

}
])

//Avg Sum 
db.student.aggregate([
    {$group:{

        _id:{designation:"$designation",city:"$city"},
        sum:{$sum:"$salary"},
        avg:{$avg:"$salary"},
        max:{$max:"$salary"},
        min:{$min:"$salary"}
    }

}
])