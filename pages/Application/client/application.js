Template.Apply.events({
"click #submit": function(event){

	const name = $("#name").val();
	const age = $("#age").val();
	const cellphone = $("#cellphone").val();
	const bio = $("#bio").val();
	const Branbuddy = $("#Branbuddy").val();
	const date = new Date();

	const jsonobj = {name:name, age:age, cellphone:cellphone, bio:bio, Branbuddy:Branbuddy, date:date};

	BranBuddies.insert(jsonobj);
}
})


Template.comments.helpers({
commentlist: function() {return Comments.find();}
})