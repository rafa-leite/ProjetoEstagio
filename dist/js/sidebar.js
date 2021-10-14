$(document).ready(function () {
    var winWith = $(window).width()
    initResize(winWith)
    $(window).resize(function () {
        winWith = $(window).width()
        changemenu(winWith)
    });
});
function initResize(value) {
    changemenu(value);
}
function changemenu(response) {
    if (response < 768) {
        $(".menu .menu-list").appendTo(".sidebar .menu")
        $('.sidebar-btn').show(100)
    } else {
        $('.sidebar-btn').hide(100)
        $(".sidebar .menu .menu-list").appendTo("nav .menu")
    }
}
function sidebarClose() {
    $('.sidebar').addClass('hidden')
    $('.sidebar').removeClass('active')
}
function sidebar() {
    
    $('.sidebar .item a').on('click', function() { 
        var href = $(this).attr('href')
        console.log(href)
        if(href != '#') {
            console.log('passou')
            $('.sidebar').removeClass('active')
            $('.sidebar').addClass('hidden')        
        }
    })
    
    $('.item.dropdown').on('click', function() {
        var hasClass = $(this).hasClass('hidden') 
        $(this).siblings().removeClass('active').addClass('hidden')
        if(hasClass) {
           $(this).addClass('active')
           $(this).removeClass('hidden')
        }else {         
            $(this).addClass('hidden')
            $(this).removeClass('active')
        }
     
    })
   
    $('.dropdown > a').attr('href' , '#')
    var checkOpen = $(".sidebar").hasClass('hidden');
    if (checkOpen) {
        $('.sidebar').addClass('active')
        $('.sidebar').removeClass('hidden')

    } else {
        $('.sidebar').removeClass('active')
        $('.sidebar').addClass('hidden')
    }

}