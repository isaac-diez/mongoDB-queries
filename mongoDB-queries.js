db.restaurants.find().pretty();
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, cuisine:1,_id:0});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, zipcode:1,_id:0});
db.restaurants.find({},{restaurant_id:1, name:1, borough:1, "address.zipcode":1,_id:0});
db.restaurants.find({borough:"Bronx"});
db.restaurants.find({borough:"Bronx"}).limit(5);
db.restaurants.find({borough:"Bronx"}).skip(5).limit(5);
db.restaurants.find({"grades.score": {$gt: 10} });
db.restaurants.find({grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } } });
db.restaurants.find({"address.coord.0": { $lt: -95.754168 } });
db.restaurants.find({"grades.score": {$gt: 70},"address.coord.0": { $lt: -65.754168 },"cuisine":{$ne:"American"}});
db.restaurants.find({"cuisine": {$ne:"American"}, "grades.grade" : "A", "borough":{$ne:"Brooklyn"}} );
db.restaurants.find({ "cuisine": {$ne:"American"}, "grades.grade" : "A", "borough":{$ne:"Brooklyn"} }).sort({ cuisine: -1 });
db.restaurants.find({ name: { $regex: "^Wil"  }}  ,{ restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });
db.restaurants.find({ name: { $regex: "ces$"  }}  ,{ restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });
db.restaurants.find({ $or: [ { cuisine:"American"}, {cuisine:"Chinese"  }]  });
db.restaurants.find({ borough: {$in: ["Staten Island","Queens","Bronx","Brooklyn"]  }});
db.restaurants.find({ borough: {$nin: ["Staten Island","Queens","Bronx","Brooklyn"]  }});
db.restaurants.find({ "grades.score": { $lte: 10  }}  ,{ restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });
db.restaurants.find({ $and: [{ name: { $regex: "fish", $options:"i"  }}, { $or: [{ cuisine: {$nin: ["American","Chinese"]} }, { name: { $regex: "^(?!.*Wil).+$" }} ]} ]}, { restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });
db.restaurants.find({ grades: {$elemMatch: {grade: "A", score: 11, "date.$date:1407715200000"} } } , { restaurant_id:1, name:1, grades: {$elemMatch: {grade: "A", score: 11, "date.$date:1407715200000"} }, _id:0 });
db.restaurants.find({ "grades.1.grade": "A", "grades.1.score": 9, "grades.1.date.$date": 1407715200000  }, { restaurant_id: 1, name: 1, "grades.1": 1, _id: 0  });
db.restaurants.find({"address.coord.1": {$gt: 42, $lte: 52}}, { restaurant_id: 1, name: 1, "address.coord": 1, _id: 0  });
db.restaurants.find().sort({ name: 1 });
db.restaurants.find().sort({ name: -1 });
db.restaurants.find({},{cuisine:1, borough:1, _id:0}).sort({cuisine: 1, borough:-1});

Escriu una consulta per organitzar el nom de la cuisine en ordre ascendent i pel mateix barri de cuisine. Ordre descendent.
Escriu una consulta per saber totes les direccions que no contenen el carrer.
Escriu una consulta que seleccionarà tots els documents en la col·lecció de restaurants on el valor del camp coord és Double.
Escriu una consulta que seleccionarà el restaurant_id, name i grade per a aquells restaurants que retornin 0 com a resta després de dividir el marcador per 7.
Escriu una consulta per trobar el name de restaurant, borough, longitud i altitud i cuisine per a aquells restaurants que contenen 'mon' com tres lletres en algun lloc del seu nom.
Escriu una consulta per trobar el name de restaurant, borough, longitud i latitud i cuisine per a aquells restaurants que contenen 'Mad' com primeres tres lletres del seu nom.
