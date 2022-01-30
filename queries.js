// 1.)sort names of pilots
db.pilots.aggregate({$sort:{name:1}})
//2.)No . of planes working
db.planes.find({status:"working"}).count();
//3.)Pilots whose fit to fly was recent
db.pilots.find().sort({Fit_for_fly:-1}).limit(1);
//4.)No. of flights of the same plane model
db.flights.aggregate([{ "$group": {_id:"$flight","count":{"$sum":1}}}] )
//5.)Pilots from the same city 
db.pilots.aggregate(
    {$match: {address: {$exists: true}}},
    { $project: { 
    name:1,
    address: 1 }},
    { $group: {
    _id: "$address.city", pilots : {$push:"$name"} }}
    )
//6.)Booking IDs for bookings on a specific date
db.journeybookings.aggregate({
    $project: {
    year: {$year: "$bookedon"},
    month: {$month: "$bookedon"},
    dayOfMonth: {$dayOfMonth: "$bookedon"},
    flight: "$flights"
    }},
    { $match:{$and: [{"year":{$eq:2021}}, {"month":{$eq:12}}, {"dayOfMonth":{$eq:10}} ]}},
    { $group: {
    _id: { date: {$concat: [ {$toString:"$year"}, "-", {$toString:"$month"},"-", {$toString:"$dayOfMonth"}] }},
    flights: { $push: "$flight"}}},
    { $unwind: "$flights"},
    { $lookup: {from: "journeybookings", localField: "flights", foreignField: "flights", as: "journeybookings"}},
    { $unwind: "$journeybookings"},
    { $project: { _id: "$journeybookings.bid",name:"$journeybookings.passengers" }})
        
//7.)Total salaries given from a department
db.airline_employees.aggregate([{ "$group": {_id:"$department",sumSalary: { $sum: "$salary" } } } ,{ $sort: { sumSalary: -1 } } ] )    

//8.)3 New Latest employees joined
db.airline_employees.aggregate(
    {$match: {doj: {$exists: true}}},
    { $project: { 
    name : "$name",
    doj: 1 }},
    { $sort: {"doj": -1}},
    { $limit: 3}
    )
//9.) Top2 costliest bookings
db.journeybookings.aggregate({ $project: {bid: 1,bookedby:1,totalcost:1}},{ $sort: {"totalcost": -1}},{ $limit: 2})

//10.)Male Airline Employee with the highest salary
db.airline_employees.find( { gender: "Male"}).sort({salary:-1}).limit(1)

//11.) Pilot with largest salary that joined earlier than the others
db.pilots.find({}).sort({"Employment_Record.Date_of_join":1, "Employment_Record.salary":-1}).limit(1)

//12.)No. of days between booking date and departure date
db.journeybookings.aggregate([
    { "$project": {
    "from": "$bookedon",
    "to": "$deptat",
    _id:0,
      "difference": {
        "$divide": [
          { "$subtract": ["$deptat", "$bookedon"] },
          60 * 1000 * 60 * 24
        ]}}
    }])

    db.journeybookings.find({$where:"this.bid"}).explain("executionStats")

    db.pilots.find({$where:"this.id"}).explain("executionStats")




    
db.setProfilingLevel(0)

db.system.profile.drop()

db.createCollection( "system.profile", { capped: true, size:4000000 } )

db.setProfilingLevel(1)