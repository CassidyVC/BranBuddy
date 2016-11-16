
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
	const jsonobj = {name:name,age:age,location:location,destination:destination,time:time,cellphone:cellphone,email:email,date:date};
	Reserve.insert(jsonobj);
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
	buddylist: function(){return Reserve.find();}

})

Template.comments.helpers({


})

