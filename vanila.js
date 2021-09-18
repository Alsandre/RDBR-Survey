$(document).ready(() => {
    
    $(".start-button").on('click', () => {
        $(".landing-page").css("display", "none");
        $(".survey-wraper").css("display", "unset");
        $(".cover").css("animation", "popUp 0.5s linear")
    })
    $("#first-arrow-forward").click((e)=>{
        // if($(".first-page form input[name='name']"))
        e.preventDefault();
        if(document.getElementById("name").value && 
           document.getElementById("lastName").value &&
           document.getElementById("email").value){
               $(".first-page").css("display", "none");
               $(".second-page").css("display", "flex");
           }
    })
    $("#second-arrow-forward").click((e)=>{
        e.preventDefault();

        $(".second-page").css("display", "none");
        $(".third-page").css("display", "flex");
    })

    $(".second-page input[name='covid']").click(()=>{
        let covidValue = document.getElementsByName("covid");
        switch (true) {
            case covidValue[0].checked:
                $(".second-page .optional-covidPositive").css("display", "unset");
                break; 
            case covidValue[1].checked:
                $(".second-page .optional-covidPositive").css("display", "none");
                $(".second-page .optional-pcrPositive").css("display", "none");
                break; 
            case covidValue[2].checked:
                $(".second-page .optional-covidPositive").css("display", "none");
                $(".second-page .optional-pcrPositive").css("display", "none");
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

    $("input[name='pcr-test']").click(()=>{
        let pcrValue = document.getElementsByName("pcr-test");
        switch (true) {
            case pcrValue[0].checked:
                $(".third-page .optional-pcrLevel").css("display", "unset");
                break; 
            case pcrValue[1].checked:
                $(".third-page .optional-pcrLevel").css("display", "none");
                break;
            default:
                break;    
        }
    })
    $("input[name='pcr-test-stage']").click(()=>{
        let pcrLevelValue = document.getElementsByName("pcr-test-stage");
        if(pcrLevelValue[2].checked){
            $("#optional-pcrFirstOnly").css("display", "unset");
        }else{
            $("#optional-pcrFirstOnly").css("display", "none");
        }
    })

})
