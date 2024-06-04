document.getElementById("convertBtn").addEventListener("click", function() {
    var ageYears = document.getElementById("age").value;
    var ageDays = ageYears * 365; // Assuming an average year has 365 days

    document.getElementById("result").innerHTML = "Your age in days is: " + ageDays + " days.";
});