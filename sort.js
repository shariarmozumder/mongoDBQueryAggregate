//sorting korvo asanding vs desanding

//normal
db.student.find({}).sort({salary:-1})
db.student.find({}).sort({salary:1})
//Aggregate
db.student.aggregate([{$sort:{salary:1}}])
db.student.aggregate([{$sort:{salary:-1}}])