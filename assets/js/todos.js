$("ul").on("click","li",function(){
    $(this).toggleClass("completed")
});

$("ul").on("click","span",function(event){
    $(this).fadeOut(500,function(){
        $(this).parent().remove()
    })
    event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
    if(event.which==13){
        var newtodo=$(this).val()
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +newtodo + "</li>")
        $(this).val("")
    }
}) 

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});