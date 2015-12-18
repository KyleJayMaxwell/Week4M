$(document).ready(function(){
	// Question 1
	$("#hover").mouseenter(function(){
		$(this).css("background-color", "red");
	});
	$("#hover").mouseleave(function(){
		$(this).css("background-color", "#39B7CD")
	});
	$("#hover").click(function(){
		$(this).toggleClass("green");
	});

	// Question 2

	$(".hideMe").click(function(){
		$(this).remove();
	});

	// Question 3

	$(".changeColor").click(function(){
		$("ul li:nth-child(3)").css("color", "#8A2BE2");
	});

	// Question 4

	$("#removeLi").click(function(){
		$("ul li:nth-child(2)").remove();
	});

	// Question 5

	$("ul li:nth-child(4)").click(function(){
		$(this).append("<li>Fuck</li>")
	});

	// Question 6

	$("ul li:last-child").click(function(){
		$(this).css("font-size", "40px");
		$(this).siblings().hide();
	});

	// Question 7

	$('.cute').click(function(){
		for(i=0;i<20;i++){
			$(this).clone().insertAfter(this);
		}
	});

});