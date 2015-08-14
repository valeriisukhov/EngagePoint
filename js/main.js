function Order(date, id, status){
    var tmp = new Date(date);
    this.date = tmp.toLocaleDateString();
    this.id = id;
    this.status = status;
}

$(document).ready(function(){
    var order1 = new Order(new Date(2012,06,09), "#0507", "Canceled");
    var order2 = new Order(new Date(2012,06,03), "#МЕ0017681", "Shipping");
    var order3 = new Order(new Date(2012,05,17), "#0471", "Delivered");
    var order4 = new Order(new Date(2012,01,19), "#1001", "Delivered");
    var ordersArray = new Array();
    ordersArray.push(order1, order2, order3, order4);
    fillTable(ordersArray);
    statusColor();

    function fillTable(array){
        for (var i = 0; i < array.length; i++){
            $(".tr"+(i+1)+" .td1").html(array[i].date);
            $(".tr"+(i+1)+" .td2").html(array[i].id);
            $(".tr"+(i+1)+" .td3").html(array[i].status + " <span class='spanclick'>>></span>");
        }
    }

    function clearTable(){
        var clearArray = new Array();
        fillTable(clearArray);
    }

    function statusColor(){
        $("#table tr:has(td:contains('Delivered'))").removeClass("grey").addClass("green");
        $("#table tr:has(td:contains('Canceled'))").removeClass("grey").addClass("red");
    }

    function ordersVisible(){
        $("#order1").css("display", "table-row");
        $("#order1 tr").css("display", "table-row");
        $("#order2").css("display", "table-row");
        $("#order2 tr").css("display", "table-row");
        $("#order3").css("display", "table-row");
        $("#order3 tr").css("display", "table-row");
        $("#order4").css("display", "table-row");
        $("#order4 tr").css("display", "table-row");
    }

    function closeSpans(){
        $("#order1").css("display", "none");
        $("#order2").css("display", "none");
        $("#order3").css("display", "none");
        $("#order4").css("display", "none");
    }

    $("#navlist li").on("click", function(){
        $("#navlist li").removeClass("pushed");
        $(this).addClass("pushed");
        if($(this).html() == $("#menu1").html()){
            $("#table tr").css("display", "table-row");
            closeSpans();
        } else if ($(this).html() == $("#menu2").html()){
            $("#table tr").css("display", "table-row");
            $("#table tr:not(:has(td:contains('Shipping')))").css("display", "none");
            ordersVisible();
            closeSpans();
        } else if ($(this).html() == $("#menu3").html()){
            $("#table tr").css("display", "table-row");
            $("#table tr:not(:has(td:contains('Delivered')))").css("display", "none");
            ordersVisible();
            closeSpans();
        } else if ($(this).html() == $("#menu4").html()) {
            $("#table tr").css("display", "table-row");
            $("#table tr:not(:has(td:contains('Canceled')))").css("display", "none");
            ordersVisible();
            closeSpans();
        }
    });

    $(".spanclick").on("click", function() {
        var tmp = $(this).parent().parent();
        if (tmp.hasClass("tr1")){
            $("#order1").toggle("display");
        } else if (tmp.hasClass("tr2")){
            $("#order2").toggle("display");
        } else if (tmp.hasClass("tr3")){
            $("#order3").toggle("display");
        } else if (tmp.hasClass("tr4")){
            $("#order4").toggle("display");
        }
    })

    $("#table tr").on("click", function() {
        var tmp = $(this).parent().parent();
        if (tmp.hasClass("tr1")){
            $("#order1").toggle("display");
        } else if (tmp.hasClass("tr2")){
            $("#order2").toggle("display");
        } else if (tmp.hasClass("tr3")){
            $("#order3").toggle("display");
        } else if (tmp.hasClass("tr4")){
            $("#order4").toggle("display");
        }
    })

})