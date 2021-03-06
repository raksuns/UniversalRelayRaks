var mapUsers, mapComments, reduce;
db.users_comments.remove();

// setup sample data - wouldn't actually use this in production
db.users.remove();
db.comments.remove();
db.users.save({firstName:"Rich",lastName:"S",gender:"M",country:"CA",age:"18"});
db.users.save({firstName:"Rob",lastName:"M",gender:"M",country:"US",age:"25"});
db.users.save({firstName:"Sarah",lastName:"T",gender:"F",country:"US",age:"13"});
var users = db.users.find();
db.comments.save({userId: users[0]._id, "comment": "Hey, what's up?", created: new ISODate()});
db.comments.save({userId: users[1]._id, "comment": "Not much", created: new ISODate()});
db.comments.save({userId: users[0]._id, "comment": "Cool", created: new ISODate()});
// end sample data setup

mapUsers = function() {
	var values = {
		country: this.country,
		gender: this.gender,
		age: this.age
	};
	emit(this._id, values);
};
mapComments = function() {
	var values = {
		commentId: this._id,
		comment: this.comment,
		created: this.created
	};
	emit(this.userId, values);
};
reduce = function(k, values) {
	var result = {}, commentFields = {
		"commentId": '',
		"comment": '',
		"created": ''
	};
	values.forEach(function(value) {
		var field;
		if ("comment" in value) {
			if (!("comments" in result)) {
				result.comments = [];
			}
			result.comments.push(value);
		} else if ("comments" in value) {
			if (!("comments" in result)) {
				result.comments = [];
			}
			result.comments.push.apply(result.comments, value.comments);
		}
		for (field in value) {
			if (value.hasOwnProperty(field) && !(field in commentFields)) {
				result[field] = value[field];
			}
		}
	});
	return result;
};
db.users.mapReduce(mapUsers, reduce, {"out": {"reduce": "users_comments"}});
db.comments.mapReduce(mapComments, reduce, {"out": {"reduce": "users_comments"}});
db.users_comments.find().pretty(); // see the resulting collection

var mapTags = function() {
	var values = {
		id: this._id,
		owner: this.owner,
		tagName: this.tagName,
		pri: this.pri,
		numberOfPeople: this.numberOfPeople
	};
	emit(this._id, values);
};

var  mapTagMap = function() {
	var values = {
		id: this._id,
		tagId: this.tag,
		personId: this.person
	};
	emit(this.tag, values);
};
reduceCustZip =  function(k, values) {
	var result = {};
	values.forEach(function(value) {
		var field;
		if ("cust_id" in value) {
			if (!("cust_ids" in result)) {
				result.cust_ids = [];
			}
			result.cust_ids.push(value);
		} else {
			for (field in value) {
				if (value.hasOwnProperty(field) ) {
					result[field] = value[field];
				}
			};
		}
	});
	return result;
};
db.cust.mapReduce(mapCust, reduceCustZip, {"out": {"reduce": "cust_zip"}});
db.zip.mapReduce(mapZip, reduceCustZip, {"out": {"reduce": "cust_zip"}});
reduceTags = function(k, values) {
	var result = {}
	values.forEach(function(value) {
		var field;
		if ("comment" in value) {
			if (!("comments" in result)) {
				result.comments = [];
			}
			result.comments.push(value);
		} else if ("comments" in value) {
			if (!("comments" in result)) {
				result.comments = [];
			}
			result.comments.push.apply(result.comments, value.comments);
		}
		for (field in value) {
			if (value.hasOwnProperty(field) && !(field in commentFields)) {
				result[field] = value[field];
			}
		}
	});
	return result;
};

var mapDetails = function() {
	emit(this.studentid, {studentid: this.studentid, classes: this.classes, year: this.year, overall: 0, subscore: 0});
};

var mapGpas = function() {
	emit(this.studentid, {studentid: this.studentid, classes: [], year: 0, overall: this.overall, subscore: this.subscore});
};

var reduce = function(key, values) {
	var outs = { studentid: "0", classes_1: [], classes_2: [], overall: 0, subscore: 0};

	values.forEach(function(value) {
		if (value.year == 0) {
			outs.overall = value.overall;
			outs.subscore = value.subscore;
		}
		else {
			if (value.year == 1) {
				outs.classes_1 = value.classes;
			}
			if (value.year == 2) {
				outs.classes_2 = value.classes;
			}

			outs.studentid = value.studentid;
		}
	});

	return outs;

};

res = db.details.mapReduce(mapDetails, reduce, {out: {reduce: 'joined'}})
res = db.gpas.mapReduce(mapGpas, reduce, {out: {reduce: 'joined'}});

// mapReduce...............
db.userTags.drop();
var mapTag = function() {
	emit(this._id, this);
};

var  mapTagMap = function() {
	emit(this.tag, this);
};

var reduce = function(key, values) {
	var result = {};

	values.forEach(function(value) {
		for (var field in value) {
			if (value.hasOwnProperty(field) ) {
				result[field] = value[field];
			}
		};

	});

	return result;

};

db.tags.mapReduce(mapTag, reduce, {
	out: {
		reduce: "userTags"
	},
	query: {
		owner: {
			$eq: ObjectId("57bfcefaca27b0233600000c")
		},
		isDeleted:{'$ne':true}
	}
});

db.tagMaps.mapReduce(mapTagMap, reduce, {"out": {"reduce": "userTags"}});

db.userTags.find();

db.personTags.drop();

db.personTags.drop();

var tagMap = function() {
	emit(this._id, this);
}

var tagCount = function() {
	var res = {
		person: this.person,
		tag: this.tag,
		count: 1
	};
	emit(this.tag, res);
}

var tagReducer = function(key, values) {
	var results = {
		"keyId" : "",
		"tagId" : "",
		"tagName" : "",
		"priority" : "",
		"numberOfPeople": 0,
		"createdAt" : "",
		"isDeleted" : "",
		"updatedAt" : ""
	};

	values.forEach(function(value) {
		if(value.hasOwnProperty("owner")) {
			results.keyId = key;
			results.tagId = value._id;
			results.tagName = value.tagName;
			results.priority = value.pri;
			results.createdAt = value.createdAt;
			results.updatedAt = value.updatedAt;
			results.isDeleted = value.isDeleted;
		}

		if(value.count) {
			results.numberOfPeople += value.count;
		}

	});

	return results;
}

db.tags.mapReduce(tagMap, tagReducer, {query: {owner: {$eq: ObjectId("57bfcefaca27b0233600000c")}, isDeleted:{'$ne':true}}, out: {reduce : 'personTags'}});
db.tagMaps.mapReduce(tagCount, tagReducer, {out: {reduce : 'personTags'}});

db.personTags.find();