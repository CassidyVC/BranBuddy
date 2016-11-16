Template.comments.events({
"click #submitcomment": function(event){

	const comment = $("#comment").val();
	const date = new Date();
	const jsonobj = {comment:comment, date:date};
	Comments.insert(jsonobj);
}
})


Template.comments.helpers({
<<<<<<< Updated upstream
commentlist: function() {return Comments.find();}
=======


>>>>>>> Stashed changes
})