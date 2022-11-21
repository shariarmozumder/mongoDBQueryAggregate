db.student.aggregate([
    {$lookup:{from:"catagories",localField:"CategoryID",foreignField:"CategoryID",as:"carDetails"}}
])