db.student.aggregate([
 {$project:{
    _id:0,
    salaryMargin:{
        $cond:{if:{$lte:["$salary",30000]},then:"Low salary",else:"Standard salary"},

    },
    salary:1,
    city:1
 }}
])