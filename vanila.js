let dictionary = [
    {pN: 1},
    {pN: 2},
    {pN: 3},
    {pN: 4}
]
let pageCounter = 1;
$(document).ready(() => {
    
    $(".start-button").on('click', () => {
        $(".landing-page").css("display", "none");
        $(".survey-wraper").css("display", "unset");
        $(".cover").css("animation", "popUp 0.5s linear")
        $(".page-number").html(`${pageCounter}/4`);
    })

    // forward arrow light-UP logic
    $("#user-info-form").on("change", () => {
        if($("input[name='name']").val().match(/[ა-ჰa-zA-z]{3,255}/) &&
           $("input[name='lastName']").val().match(/[ა-ჰa-zA-z]{3,255}/) &&
           $("input[name='email']").val().match(/[\w\.]{3,}@redberry.ge/)
          ){
            $("#first-arrow-forward").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            })
          }
    })
    $("#second-page-form").on("change", () => {
        
        if($("#covid-negative:checked").length || $("#covid-ongoing:checked").length){
            $("#second-arrow-forward").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            })
        }else if($("#covid-positive:checked").length && $("#antibody-negative:checked").length) {
            $("#second-arrow-forward").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            })
        }else if($("#covid-positive:checked").length && 
                 $("#antibody-positive:checked").length && 
                 $("#date-of-pcr").val() && 
                 $("#number-of-antibody").val())
            {
            $("#second-arrow-forward").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            })
            }
    })
    $("#third-page-form").on("change", () => {
        
        if($("#pcr-no:checked").length){
            $("#third-arrow-forward").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            })
        }else if($("#pcr-yes").length && $("#pcr-almostSecond").length || $("#pcr-firstStage").length || $("#pcr-complete").length) {
            $("#third-arrow-forward").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            })
        }
    })

    //forward-arrow logic
    $("#first-arrow-forward").click((e)=>{
        e.preventDefault();
        if(document.getElementById("name").value && 
           document.getElementById("lastName").value &&
           document.getElementById("email").value){
               $(".first-page").css("display", "none");
               $(".second-page").css("display", "flex");
               $("#first-arrow-back").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
                });
               pageCounter++
               $(".page-number").html(`${pageCounter}/4`);
           }
    })
    $("#second-arrow-forward").click((e)=>{
        e.preventDefault();
        if(document.getElementById("covid-negative").checked || document.getElementById("covid-ongoing").checked){
            $(".second-page").css("display", "none");
            $(".third-page").css("display", "flex");
            $("#second-arrow-back").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            });
            pageCounter++
            $(".page-number").html(`${pageCounter}/4`);
        }else if(document.getElementById("covid-positive").checked && document.getElementById("antibody-negative").checked){
            $(".second-page").css("display", "none");
            $(".third-page").css("display", "flex");
            $("#second-arrow-back").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            });
            pageCounter++
            $(".page-number").html(`${pageCounter}/4`);
        }else if(document.getElementById("covid-positive").checked &&
                 document.getElementById("antibody-positive").checked &&
                 document.getElementById("date-of-pcr").value &&
                 document.getElementById("number-of-antibody").value){
            $(".second-page").css("display", "none");
            $(".third-page").css("display", "flex");
            $("#second-arrow-back").css({
                "opacity": "1",
                "scale": "1.2",
                "cursor": "pointer"
            });
            pageCounter++
            $(".page-number").html(`${pageCounter}/4`);
        }
    })
    $("#third-arrow-forward").click((e)=>{
        e.preventDefault();
        if(document.getElementById("pcr-no").checked){
            $(".third-page").css("display", "none");
            $(".fourth-page").css("display", "flex");
            $("#third-arrow-back").css({
            "opacity": "1",
            "scale": "1.2",
            "cursor": "pointer"
            });
            pageCounter++
            $(".page-number").html(`${pageCounter}/4`);
        }else if(document.getElementById("pcr-yes").checked && 
                 document.getElementById("pcr-complete").checked || 
                 document.getElementById("pcr-almostSecond").checked ||
                 document.getElementById("pcr-firstStage").checked){
            $(".third-page").css("display", "none");
            $(".fourth-page").css("display", "flex");
            $("#third-arrow-back").css({
            "opacity": "1",
            "scale": "1.2",
            "cursor": "pointer"
            });
            pageCounter++
            $(".page-number").html(`${pageCounter}/4`);
        }
    })
    
    //back-arrow-logic
    $("#first-arrow-back").click(()=>{
        $(".first-page").css("display", "flex");
        $(".second-page").css("display", "none");
        pageCounter--
        $(".page-number").html(`${pageCounter}/4`);
    });
    $("#second-arrow-back").click(()=>{
        $(".second-page").css("display", "flex");
        $(".third-page").css("display", "none");
        pageCounter--
        $(".page-number").html(`${pageCounter}/4`);
    })
    $("#third-arrow-back").click(()=>{
        $(".third-page").css("display", "flex");
        $(".fourth-page").css("display", "none");
        pageCounter--
        $(".page-number").html(`${pageCounter}/4`);
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
