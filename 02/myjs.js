$(document).ready(function () {
    $(".article:nth-child(5) li:last-child a").attr("href", "http://pinterest.com").text("Pinterest");
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    })
    $(".header__main h2").css("font-size", "3em")
})