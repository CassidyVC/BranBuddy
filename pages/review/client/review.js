Template.review.helpers({
	buddylist: function(){return BranBuddies.find();},
	approvelist:function(){return ToBeApproved.find()}
})

Template.review.events({
	'click .deleteRequest':function(event) {
	BranBuddies.remove({_id:this._id});
},
	'click .approveRequest':function(event) {
		BranBuddies.insert(this);
		ToBeApproved.remove({_id:this._id})
	}
})