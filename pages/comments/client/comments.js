Template.comments.events({
"click #submitComment": function(event){

	const comment = $("#comment").val();
	const date = new Date();
	const jsonobj = {comment:comment, date:date};
	Comments.insert(jsonobj);
},
'click .deleteRequest':function(event) {
	console.log(event.target);
	Comments.remove({_id:this._id});
	}
})



Template.comments.helpers({

commentlist: function() {return Comments.find();}

})