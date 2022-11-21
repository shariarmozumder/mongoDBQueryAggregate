//Aggreate
db.student.aggregate([{$match:{$salary:{gte:4000}}}])


//normal match 
db.student.find({salary:{$gt:4000}})