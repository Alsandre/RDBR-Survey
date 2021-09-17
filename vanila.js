$(document).ready(() => {
    $(".start-button").on('click', () => {
        $(".landing-page").css("display", "none");
        $(".survey-wraper").css("display", "unset");
        $(".cover").css("animation", "popUp 0.5s linear")
    })
    $(".first-page form .arrow-forward").click(()=>{
        // if($(".first-page form input[name='name']"))
        if(document.getElementById("name").value && 
           document.getElementById("lastName").value &&
           document.getElementById("email").value){
               $(".first-page").css("display", "none");
               $(".second-page").css("display", "unset");
           }
    })
    $(".second-page input[name='covid']").click(()=>{
        let covidValue = document.getElementsByName("covid");
        switch (true) {
            case covidValue[0].checked:
                $(".second-page .optional-covidPositive").css("display", "unset");
                break; 
            case covidValue[1].checked:
                $(".second-page .optional-covidPositive").css("display", "none");
                break; 
            case covidValue[2].checked:
                $(".second-page .optional-covidPositive").css("display", "none");
                break; 
            default:
                break;    
        }
    })
    $("input[name='antibody-test']").click(()=>{
        let pcrValue = document.getElementsByName("antibody-test");
        if(pcrValue[0].checked){
            $(".optional-pcrPositive").css("display", "unset");
        }
    })
})
