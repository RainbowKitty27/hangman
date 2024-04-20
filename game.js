var words = [
    {
        "inputs": 5,
        "category": "sports",
        "word": "chess"
    },
    {
        "inputs": 6,
        "category": "Countries",
        "word": "France"
    }
]
$(document).ready(function(){fill_blanks()})
$(function(){$(".input_field").keyup(function(){
    let id=$(this).attr("id")
    let input_number=id.split("_")[1]
    $(".rep_input").eq(input_number).html($(this).val())
})
})
function fill_blanks(){
    const randomWord=words[Math.floor(Math.random()*words.length
        )]
var gameOver=false
$(".clickable").click(function(){
    var correctGuess=false
    let id=$(this).attr("id")
    var life=parseInt($("#life").text())
    for(var i=0;i<randomWord.word.length;i++){
        if(randomWord.word.charAt(i).toLowerCase()==id){
            if(life>0 && ($(".fill_blanks").eq(i).html()=="_"||$(".fill_blanks").eq(i).html()==id)){
                $(".fill_blanks").eq(i).html(id)
                correctGuess=true
                if($("#blanks").text()===randomWord.word.toLowerCase()){
                    $("#result").text("You Win!")
                    correctGuess=true
                    gameOver=true
                }
            }
            life--

        }
    }
})}