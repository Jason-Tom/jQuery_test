$(document).ready(function($) {
    // $("[class]").click(function(event) {
    //     $("[class]").css("background-color","red");
    // });
    // $("[class='la']").click(function(event) {
    //     $("[class='la']").css("background-color","green");
    // });
    $("div[class!='ga']").click(function(event) {
        $("div[class!='ga']").css("background-color", "yellow");
        // 样式选择器
    });
    // 元素选择器和类名选择器混用
    // $("[class$='sdf']").click(function(event) {
    //     $("[class$='sdf']").css("background-color","blue");
    // });
});
