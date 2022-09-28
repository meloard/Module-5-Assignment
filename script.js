var btn = $(".saveBtn")

function init () {
    var date = moment().format("dddd MMMM Do")
    
    $("#currentDay").text(date)

    function bColor() {
        var currentTime = moment().hours();
        var timeBlock = $(".time-block");
        timeBlock.each(function() {
            var currentHour = parseInt($(this).attr("id"))

            if(currentHour === currentTime) {
                $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
            }else if(currentHour < currentTime) {
                $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
            }else {
                $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
            }
        })
    }
    bColor();

    btn.on("click", function(event) {
        event.preventDefault()
        var description = $(this).siblings(".col-sm-10").val().replace(parentEl)
        var parentEl = $(this).parent().attr("id")

        localStorage.setItem(parentEl, JSON.stringify(description))
    })

    $("#9 textarea").val(JSON.parse(localStorage.getItem("9")))
    $("#10 textarea").val(JSON.parse(localStorage.getItem("10")))
    $("#11 textarea").val(JSON.parse(localStorage.getItem("11")))
    $("#12 textarea").val(JSON.parse(localStorage.getItem("12")))
    $("#13 textarea").val(JSON.parse(localStorage.getItem("13")))
    $("#14 textarea").val(JSON.parse(localStorage.getItem("14")))
    $("#15 textarea").val(JSON.parse(localStorage.getItem("15")))
    $("#16 textarea").val(JSON.parse(localStorage.getItem("16")))
    $("#17 textarea").val(JSON.parse(localStorage.getItem("17")))

}

init()
