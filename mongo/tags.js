var mapTags = function() {
	var values = {
		id: this._id,
		owner: this.owner,
		tagName: this.tagName,
		pri: this.pri,
		numberOfPeople: this.numberOfPeople
	};
	emit(this.owner, values);
};

var  mapTagMap = function() {
	var values = {
		id: this._id,
		tagId: this.tag,
		personId: this.person
	};
	emit(this.tag, values);
};

var reduceTags = function(key, values) {
    var results = {
        tags : []
    };
    
    print(key);
    
    values.forEach(function(value) {
       if(value.id === key) {
           results.tags.push({
               tagId : value.id,
               tagName : key.tagName,
               pri : key.pri,
               numberOfPeople : value.numberOfPeople
           });
       }
    });
    return results;
};

db.tags.mapReduce(mapTags, reduceTags, {"out": {"reduce": "userTags"}});
db.tagMaps.mapReduce(mapTagMap, reduceTags, {"out": {"reduce": "userTags"}});

db.userTags.find({owner: '56fa242ab6198b72ca3a386a'});

// db.tags.aggregate([
//     {
//         $match: {owner: ObjectId('56fa242ab6198b72ca3a386a')}
	
//     }
//     ])