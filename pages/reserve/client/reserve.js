Template.reserve.events({
"click #submitreserve": function(event){
	
	console.log("hey we clicked it");
	alert("yay!");
	const name = $("#name").val();
	const age = $("#age").val();
    const location = $("#location").val();
    const destination = $("destination").val();
    const time = $("time").val();
	const date = new Date();
	const jsonobj = {name:name,age:age,location:location,destination:destination,time:time,date:date};
	Reserve.insert(jsonobj);
}
})


Template.reserve.helpers({

})