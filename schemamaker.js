//Schema for pilots Collection:
db.createCollection("pilots", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "id", "name", "contact", "address", "Employment_Record", "Fit_for_fly" ],
		 properties: {
			id: { bsonType: "double" },
			name: { bsonType: "string"},
            contact: { bsonType: "string"},
            address:{ 
                bsonType: "object",
                required:["postCode","streetName","civicNo","city"],
                properties: {
                    postCode: { bsonType: "String"},
                    streetName: { bsonType: "String"},
                    civicNo: { bsonType: "Double"},
                    city: { bsonType: "String"},
                }

            },
            Employment_Record:{
                bsonType: "object",
                required:["Date_of_join","educational_bg","salary"],
                properties: {
                    Date_of_join: { bsonType: "date"},
                    educational_bg: { bsonType: "string"},
                    salary: { bsonType:"string"}
                }
            },
            Fit_for_fly: {bsonType: "date" }

		 }
	}
	}
})
//Schema for Planes Collection: 
db.createCollection("planes", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "details","model", "flying_range", "length_of_service", "status","seating"],
		 properties: {
			details: { bsonType: "string" },
			model: { bsonType: "string" },
			flying_range: { bsonType: "string" },
			length_of_service: { bsonType: "double" },
			status: { bsonType: "string" },
			seating: { bsonType: "string" },
        
	 }
	}
	}
})
//Schema for flights Collection: 
db.createCollection("flights", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "flight", "flightid", "startAt", "destAt", "startTime", "DesttTime","pilot","copilot","length","staffsal"],
		 properties: {
			flight: { bsonType: "string" },
			flightid: { bsonType: "double"},
			startAt: { bsonType: "string" },
			destAt: { bsonType: "string" },
			startTime: { bsonType: "date" },
			DesttTime: { bsonType: "date" },
            pilot: { bsonType: "string"},
            copilot: { bsonType: "string"},
            length: { bsonType: "string" },
            staffsal: { bsonType: "double"}
        }
	}
	}
})
//Schema for journeybookings Collection: 
db.createCollection("journeybookings", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "bid", "bookedon", "deptat", "bookedby", "passengers", "flights","totalcost"],
		 properties: {
            bid: { bsonType: "double"},
            bookedon: { bsonType: "date" },
            deptat: { bsonType: "date"},
            bookedby: { bsonType: "string"},
            passengers: { bsonType: "object"},
            flights: { bsonType: "object"},
            totalcost: { bsonType: "double"}
        }
        }
	}
	}
)
//Schema for airports Collection: 
db.createCollection("airports", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: [ "Airport", "location", "Cost of use"],
		 properties: {
			Airport: { bsonType: "string" },
			location: { bsonType: "string"},
			Cost_of_use: { 
                bsonType: "object",
                required:["plane_stop_per_hour","refuelling"],
                properties: {
                    plane_stop_per_hour: { bsonType: "double"},
                    refuelling: { bsonType: "double"}
                }
            },
        }
	}
	}
})
//Schema for airline_employees Collection: 
db.createCollection("airline_employees", {
	validator: {
	$jsonSchema: {
		 bsonType: "object",
		 required: ["name","contact","address","dob","department","salary","doj","gender"],
		 properties: {
			name: { bsonType: "string"},
            contact: { bsonType: "string"},
            address: { 
                bsonType: "object",
                required: [ "postcode","city","street"],
                postcode: { bsonType: "string"},
                city: { bsonType: "string"},
                street: { bsonType: "string"}
            
            },
            dob:{ bsonType: "string"},
            department: { bsonType: "string"},
            salary: { bsonType: "double"},
            doj:{ bsonType: "string"},
            gender: { bsonType: "string"},
        }
	}
	}
})



