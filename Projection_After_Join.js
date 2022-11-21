db.student.aggregate([

    {$lookup:{from:"categories",localField:"CategoryID",foreignField:"CategoryID",as:"Category"}},
    {$lookup:{from:"brands",localField:"BrandID",foreignField:"BrandID",as:"Brand"}},
    {
        $project:{
            _id:0,
            name:1,
            Price:{$toDouble:"$Price"},
            Unit:1,
            Details:1,
            ProductId:1,
            Category:{$first:"$Category.Name"},
            Brand:{$first:"$Brand.Name"}
        }
    }

])