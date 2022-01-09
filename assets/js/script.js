//set up current date
var currentDate= document.querySelector("#currentDay");
currentDate.textContent= moment().format("DD, MMM YYYY");

//main variables for manipulation
var hour= $(".hour-set");
var planner= $(".planner");
var saveBtn= $(".save-btn");


//save to local storage
var savePlan= function(input){
    localStorage.setItem("event", JSON.stringify(input));
};

//load from local storage, needs fine tuning
var loadPlan= function(){
    return JSON.parse(localStorage.getItem("event"));
};

//function call
loadPlan();

//event listener for entering events, needs fine tuning
planner.on("click", function(event){
    event.target.innerHTML= "<input class= 'rounded bg-light planner planner-edit col-12'></input>";
    
});

//event listener for saving an event, needs fine tuning
saveBtn.on("click", "i", function(){
    
    var text= $(".planner-edit").val();
        
    $(".planner-edit").replaceWith("<p class= 'rounded bg-light planner'>"+ text +"</p>");
    $(".planner .planner-edit").removeClass("planner-edit");
    
    console.log(text);
    savePlan(text);
    
});

