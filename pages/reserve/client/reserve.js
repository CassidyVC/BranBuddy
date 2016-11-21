
Template.reserve.events({
"click #submitreserve": function(event){
	event.preventDefault();
	console.log("hey we clicked it");
	alert("yay!");
	const name = $("#name").val();
	const age = $("#age").val();
    const location = $("#location").val();
    const destination = $("#destination").val();
    const time = $("#time").val();
    const cellphone = $("#cellphone").val();
    const email = $("#email").val();
	const date = new Date();
	const userId = Meteor.userId();
	const jsonobj = {name:name,age:age,location:location, destination:destination,time:time, date:date, cellphone:cellphone, userId:userId};
	Reserve.insert(jsonobj);
},
'click .deleteRequest':function(event) {
	console.log(event.target);
	Reserve.remove({_id:this._id});
}
})

Template.comments.events({
"click #submitcomment": function(event){
	
	console.log("hey we clicked it");
	alert("yay!");
	const comment = $("#comment").val();
	const date = new Date();
	const jsonobj = {comment:comment, date:date};
	Comments.insert(jsonobj);

}
})



Template.reserve.helpers({
	isBranBuddy: function(){
		const myId = Meteor.userId();
		const bb = BranBuddies.findOne({userId:myId});
		console.log(bb)
		return bb;
	},

	buddylist: function(){return Reserve.find();},

	myReserveRequests:function() {
		return Reserve.find({userId:Meteor.userId()});
	},
	sameUser:function() {
		if (Meteor.userId() == this.userId) {
			return '<a href="#" class="deleteRequest">Delete</a>'
		}
	}

})

Template.comments.helpers({


})

