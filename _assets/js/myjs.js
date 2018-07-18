$(document).ready(function() {
    $(".images").on("click",".images__image" , function () {
        console.log(this);
        alert($(this).attr("alt"));
    })
})