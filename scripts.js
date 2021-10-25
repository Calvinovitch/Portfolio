let application =
{

    init:()=>
    {   

        var nav = document.getElementById("nav");

        window.onscroll = function() {menu()};

         function menu() {
             if (window.pageYOffset >= window.innerHeight-40)
             {
               nav.classList.add("sticky");
             } 
             else 
             {
               nav.classList.remove("sticky");
             }
           }

        // window.onscroll = function(){application.menu()};
    },

    // menu:(sticky)=>
    // {
    //     if(window.pageYOffset >= sticky)
    //     {
    //         nav.classList.add("sticky");
    //     }
    //     else
    //     {
    //         console.log("test");
    //         nav.classList.remove("sticky");
    //     }      
    // }
}