

db.pilots.remove({});
db.planes.remove({});
db.plane_flights.remove({});
db.journey_bookings.remove({});
db.airports.remove({});
db.airline_employees.remove({});
db.revenue.remove({});

db.pilots.insertMany([
    {"id": 1, "name": "Jean", "contact": "07894566123", "address": {"postCode": "E3 4LB", "streetName": "Upham Street", "civicNo": 78, "city": "London"}, "Employment_Record":{"Date_of_join":new Date("2005-09-26T01:17:34Z"), "educational_bg": "masters","salary":"50,000"}, "Fit_for_fly": new Date("2004-09-26T01:17:34Z")},
    {"id": 2, "name": "Jake", "contact": "07854123692", "address": {"postCode": "E3 4JY", "streetName": "eric Street", "civicNo": 71, "city": "London"}, "Employment_Record":{"Date_of_join":new Date("2003-09-26T01:17:34Z"), "educational_bg": "bachelors","salary":"70,000"}, "Fit_for_fly": new Date("2002-09-26T01:17:34Z")},
    {"id": 3, "name": "Johny", "contact": "05789463125", "address": {"postCode": "E3 4WR", "streetName": "Rhods Street", "civicNo": 28, "city": "London"}, "Employment_Record":{"Date_of_join":new Date("2010-04-26T01:20:34Z"), "educational_bg": "masters","salary":"90,000"}, "Fit_for_fly": new Date("2009-04-26T01:17:34Z")},
    {"id": 4, "name": "Alex", "contact": "09856321457", "address": {"postCode": "SE3 4LB", "streetName": "Fed Street", "civicNo": 73, "city": "Liverpool"}, "Employment_Record":{"Date_of_join":new Date("2005-09-26T01:17:34Z"), "educational_bg": "bachelors","salary":"50,000"}, "Fit_for_fly": new Date("2004-09-26T01:17:34Z")},
    {"id": 5, "name": "Mike", "contact": "07824896524", "address": {"postCode": "W3 4FD", "streetName": "Kiako Street", "civicNo": 35, "city": "Belfast"}, "Employment_Record":{"Date_of_join":new Date("2018-11-26T01:17:34Z"), "educational_bg": "masters","salary":"100,000"}, "Fit_for_fly": new Date("2010-11-27T01:17:34Z")},
    {"id": 6, "name": "Murphy", "contact": "09856391457", "address": {"postCode": "N2 4QE", "streetName": "Lund Street", "civicNo": 23, "city": "Belfast"}, "Employment_Record":{"Date_of_join":new Date("2011-09-26T01:17:34Z"), "educational_bg": "bachelors","salary":"50,000"}, "Fit_for_fly": new Date("2010-09-26T01:17:34Z")},
    {"id": 7, "name": "Johnson", "contact": "07345896524", "address": {"postCode": "NE3 4EB", "streetName": "Loki Street", "civicNo": 34, "city": "Manchester"}, "Employment_Record":{"Date_of_join":new Date("2006-11-26T01:17:34Z"), "educational_bg": "masters","salary":"100,000"}, "Fit_for_fly": new Date("2003-11-27T01:17:34Z")},
]);

db.planes.insertMany([
    {"details":"long-range, wide-body","model":"Airbus350","flying_range":"15,000 km / 8,100 nautical miles","length_of_service":"16H","status":"working","seating":"400"},
    {"details":"narrow-body","model":"Boeing 737 MAX","flying_range":" 6,690 km / 4,150 nautical miles","length_of_service":"8H","status":"working","seating":"200"},
    {"details":"short-range,wide-body","model":"Boeing 747-8","flying_range":"8,000 km / 3,100 nautical miles","length_of_service":"6H","status":"upgraded","seating":"200"},
    {"details":"long-range, wide-body","model":"Boeing 767-300F","flying_range":"15,000 km / 8,100 nautical miles","length_of_service":"20H","status":"being repaired","seating":"400"},
    {"details":"long-range, wide-body","model":"Boeing 787-9","flying_range":"15,400 km / 9,550 nautical miles","length_of_service":"17H","status":"working","seating":"290"},
    {"details":"wide-body, double-deck","model":"Airbus380","flying_range":"14,800 km / 8,000 nautical miles","length_of_service":"16H","status":"working","seating":"853"}
    
])

db.flights.insertMany([
    {"flight":"Airbus350","flightid":1,"startAt":"London Heathrow Airport","destAt":"Rajhiv Gandhi International Airport","StartTime":new Date("2019-09-26 12:00:00 UTC"),"DesttTime":new Date("2019-09-26 22:00:00 UTC"),"pilot":"Mokshith","copilot":"Jean","length":"8,000 Km","staffsal":10000},
    {"flight":"Boeing 747-8","flightid":2,"startAt":"London Heathrow Airport","destAt":"Indira Gandhi International Airport","StartTime":new Date("2019-09-26 12:00:00 UTC"),"DesttTime":new Date("2019-09-26 22:00:00 UTC"),"pilot":"Harsha","copilot":"Jake","length":"10,000 Km","staffsal":9000},
    {"flight":"Airbus350","flightid":3,"startAt":"Indira Gandhi International Airport","destAt":"Rajhiv Gandhi International Airport","StartTime":new Date("2019-09-26 12:00:00 UTC"),"DesttTime":new Date("2019-09-26 22:00:00 UTC"),"pilot":"Sameer","copilot":"Johny","length":"15,000 Km","staffsal":11000},
    {"flight":"Boeing 747-8","flightid":4,"startAt":"Sardar Vallabhbhai Patel International Airport","destAt":"Cochin International Airport","StartTime":new Date("2019-07-26 12:00:00 UTC"),"DesttTime":new Date("2019-07-26 22:00:00 UTC"),"pilot":"Sai","copilot":"Alex","length":"20,000 Km","staffsal":12000},
    {"flight":"Airbus350","flightid":5,"startAt":"Cochin International Airport","destAt":"Kempegowda International airport","StartTime":new Date("2019-09-06 08:00:00 UTC"),"DesttTime":new Date("2019-09-06 20:00:00 UTC"),"pilot":"Sid","copilot":"Mike","length":"18,000 Km","staffsal":11500},
  ])

db.journeybookings.insertMany([
    {"bid":11,"bookedon":new Date("2021-12-20 12:00:00 UTC"),"deptat":new Date("2021-12-25 12:00:00 UTC"),"bookedby":"raj","passengers":["Emily"],"flights":[1],"totalcost":800,},
    {"bid":22,"bookedon":new Date("2021-3-18 10:00:00 UTC"),"deptat":new Date("2021-12-20 12:00:00 UTC"),"bookedby":"sam","passengers":["Josh","Nissan"],"flights":[1,2],"totalcost":1200},
    {"bid":33,"bookedon":new Date("2021-3-10 14:00:00 UTC"),"deptat":new Date("2021-11-20 12:00:00 UTC"),"bookedby":"aaron","passengers":["Emily","Roy","Jackob"],"flights":[3,4],"totalcost":1000},
    {"bid":44,"bookedon":new Date("2021-10-10 12:00:00 UTC"),"deptat":new Date("2021-12-20 12:00:00 UTC"),"bookedby":"ram","passengers":["Eric"],"flights":[4],"totalcost":850},
    {"bid":55,"bookedon":new Date("2021-1-08 10:00:00 UTC"),"deptat":new Date("2021-12-20 12:00:00 UTC"),"bookedby":"kriti","passengers":["Mack","Eric"],"flights":[5,1],"totalcost":1300},    
    ])

db.airports.insertMany([
    {"Airport":"Rajhiv Gandhi International Airport","location":"Hyderabad","Cost of use":{"plane stop per hour":100,"refuelling":1500}},
    {"Airport":"Shivaji International Airport","location":"Mumbai","Cost of use":{"plane stop per hour":80,"refuelling":1300}},
    {"Airport":"Indira Gandhi International Airport","location":"Delhi","Cost of use":{"plane stop per hour":120,"refuelling":1700}},
    {"Airport":"Kempegowda International airport","location":"Bangalore","Cost of use":{"plane stop per hour":110,"refuelling":1800}},
    {"Airport":"Cochin International Airport","location":"Kochi","Cost of use":{"plane stop per hour":100,"refuelling":1550}},
    {"Airport":"Sardar Vallabhbhai Patel International Airport","location":"Ahmedabad","Cost of use":{"plane stop per hour":70,"refuelling":1100}},
    {"Airport":"Chennai International Airport","location":"Chennai","Cost of use":{"plane stop per hour":130,"refuelling":1700}},
    {"Airport":"London Heathrow Airport","location":"London","Cost of use":{"plane stop per hour":200,"refuelling":2000}},
])

db.airline_employees.insertMany([
    {"name":"Gary","contact":"07824566259","address":{"postcode":"E34JD","city":"london","street":"lanja street"},"dob":"28-03-2000","department":"booking clerks","salary":10000,"doj":"20-02-2005","gender":"Male"},
    {"name":"michael","contact":"07880116545","address":{"postcode":"E34JR","city":"london","street":"Munda street"},"dob":"26-08-1998","department":"booking clerks","salary":12000,"doj":"25-03-2005","gender":"Male"},
    {"name":"pam","contact":"08125659270","address":{"postcode":"Nj4KJ","city":"london","street":"puku street"},"dob":"19-08-1998","department":"maintenance staff","salary":12500,"doj":"25-09-2004","gender":"Female"},
    {"name":"phyllis","contact":"0796541354","address":{"postcode":"E1KJ7","city":"london","street":"suli street"},"dob":"14-05-1997","department":"maintenance staff","salary":20000,"doj":"25-10-2006","gender":"Female"},
    {"name":"stanley","contact":"07880116541","address":{"postcode":" E8KJI","city":"london","street":"mal street"},"dob":"29-08-2001","department":"pilots","salary":23000,"doj":"25-03-2004","gender":"Male"},
    {"name":"dwight","contact":"08500619280","address":{"postcode":"e45gh","city":"london","street":"nala street"},"dob":"09-06-1999","department":"pilots","salary":30000,"doj":"14-06-2004","gender":"Male"},
    {"name":"kelly","contact":"07800116542","address":{"postcode":"E3IJF","city":"london","street":"nala munda street"},"dob":"06-12-1998","department":"cabin staff","salary":11000,"doj":"15-06-2004","gender":"Female"},
    {"name":"jan","contact":"0796541325","address":{"postcode":"E34JG","city":"london","street":"athu street"},"dob":"19-05-1999","department":"cabin staff","salary":25000,"doj":"20-09-2003","gender":"Female"},

    
])

