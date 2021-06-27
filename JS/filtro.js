(function(){
    $(document).ready(function(){
        
        $(".btnmenu").click(function(){

                var filtro = $(this).attr("data_filter");
                console.log(filtro);

                if (filtro == "all") {
                    $(".box-img").show(1000);
                }else {
                    $(".box-img").not("."+filtro).hide(00);
                    $(".box-img").filter("."+filtro).show(00);
                }       
            
        });
        $("ul li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });
    
}())

//barra busqueda 
const search = document.getElementById("search");

search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.Value.toLowerCase().trim();

    
})