db.tags.aggregate(
	{ $lookup: }
{
	$match: {owner: ObjectId('56fa242ab6198b72ca3a386a')}
},
{ $unwind : "$people" },
)

db.countryCode.insert([{code: 1}, {code: 20}, {code: 30}])
db.countryCodeLookup.insert([{code: 1, name: "United States"}, {code: 20, name: "Egypt"}, {code: 30, name: "Greece"}])

// One to Many Join
db.countryCode.aggregate([
	{ $lookup: {from: "countryCodeLookup", localField: "code", foreignField: "code", as: "countryName"} },
	{ $project: {"code":1, "countryName.name":1, "_id":0} }
])


// One to One Join
db.countryCode.aggregate([
	{ $lookup: {from: "countryCodeLookup", localField: "code", foreignField: "code", as: "countryName"} },
	{ $unwind: "$countryName"},
	{ $project: {"code":1, "countryName.name":1, "_id":0} }
])


db.Person.insert({ID: 1, LastName: "Clifton", FirstName: "Marc"})
db.Person.insert({ID: 2, LastName: "Wagers", FirstName: "Kelli"})

db.Phone.insert({ID: 1, Number: "518-555-1212"})
db.Phone.insert({ID: 2, Number: "518-123-4567"})

db.PersonPhone.insert({ID: 1, PersonID: 1, PhoneID: 1})
db.PersonPhone.insert({ID: 2, PersonID: 2, PhoneID: 1})
db.PersonPhone.insert({ID: 3, PersonID: 2, PhoneID: 2})

// Many To Many Joins
db.PersonPhone.aggregate([
	{ $lookup: { from: "Person", localField: "PersonID", foreignField: "ID", as: "PersonName" } },
	{ $lookup: { from: "Phone", localField: "PhoneID", foreignField: "ID", as: "PersonPhone" } },
	{ $unwind: "$PersonName"},
	{ $unwind: "$PersonPhone"},
	{$project: {"LastName":"$PersonName.LastName", "FirstName":"$PersonName.FirstName", "PhoneNumber":"$PersonPhone.Number", _id:0}} ])

db.tags.aggregate([
	{ $match: {	owner: ObjectId('56fa242ab6198b72ca3a386a') }}, // { from: "TagMap", localField: "tag", foreignField: "tag", as: "tag" }
	{ $unwind: "$tag"},
	{ $project: {"$tag.name":1} }
]);


// Nested Lookups
db.phone.aggregate([
	{ $lookup: {from: "countryCode", localField: "countryCode", foreignField: "code", as: "countryCode"} },
	{ $unwind: "$countryCode"},
	{ $lookup: {from: "countryCodeLookup", localField: "countryCode.code", foreignField: "code", as: "country"} }
])

db.phone.aggregate([
	{ $lookup: {from: "countryCode", localField: "countryCode", foreignField: "code", as: "countryCode"} },
	{ $unwind: "$countryCode"},
	{ $lookup: {from: "countryCodeLookup", localField: "countryCode.code", foreignField: "code", as: "country"} },
	{ $unwind: "$country"},
	{ $project: {"number": "$number", "countryCode": "$countryCode.code", "country": "$country.name", "_id":0} }
])
