db.student.aggregate([
    {$fact:
        {
            "A":[{}],
            "B":[{}]
        }
    
    
    }
])
db.student.aggregate([
    {$fact:
        {total:[{$count:"total"}],
        "walton":[{$match:{"BrandID":1546}}],
        "samsung":[{$match:{"BrandID":1546}}]
   
        }
    
    
    }
])
