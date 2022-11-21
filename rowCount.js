db.getCollection("").find({}).count("total")
//Aggreate
db.product.aggregate([
{$count:"total"}
])
//Total row 