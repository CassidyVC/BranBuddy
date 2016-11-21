Template.Apply.events({
"click #submit": function(event){
	event.preventDefault();

	const name = $("#name").val();
	const age = $("#age").val();
	const cellphone = $("#cellphone").val();
	const bio = $("#bio").val();
	const Branbuddy = $("#Branbuddy").val();
	const date = new Date();
	const userId = Meteor.userId();

	if ($('#committed').attr('checked','checked')) {
		var committed = true;
	}
	else {
		var committed = false;
	}

	const jsonobj = {name:name, age:age, cellphone:cellphone, bio:bio, Branbuddy:Branbuddy, date:date, committed:committed,userId:userId};

	ToBeApproved.insert(jsonobj);
}
})


Template.comments.helpers({
commentlist: function() {return Comments.find();}
})