document.addEventListener("DOMContentLoaded", function(){
    const daySelect = document.getElementById("day");
    const activityOptions = document.getElementById("activity-options");
      ConstantSourceNode
      daySelect.addEventListener("change", function(){
        if (daySelect.value === "select") {
            activityOptions.style.dispaly = "none";
        } else{
            activityOptions.style.display = "block";
        }
      });

      const form = document.getElementById("activity-form");
      const logList = document.getElementById("log-list");

      form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const day = daySelect.value;
        const activity = document.getElementById("activity").value;
        const duration = document.getElementById("duration").value;

        if(day !== "select" && activity && duration){
            logActivity(day, activity, duration);
            form.reset();
        } else {
            alert("please fill in all fields.");
        }
      });
      function logActivity(day , activity,duration) {
        const li = document.createElement("li");
        li.textContent = `${day}: Activity: ${activity}, duration: ${duration} minutes`; 
        logList.appendChild(li);
      }
})