function floralCensor(input){

    var cusswords = /(damn|crap|bloody|sod|bugger|arse|git|bint|munter|minger|balls|arsehole|ass|asshole|shit|piss|christ|bitch|bollocks|bellend|tit|snatch|clunge|gash|prick|twat|punani|pussy|minge|cock|knob|dick|bastard|fuck|wanker|cunt)/g;

    var floralArray = ["lilium", "rosa", "tulipa", "phalaenopsis", "dianthus", "freesia", "alstroemeria", "chrysanthemum", "gladiolus", "anemone", "narcissus", "papaver", "helianthus"];

    function floralShuffle(i){
        return i[Math.floor(Math.random() * i.length)];
    }

    function locateCussword(){
        cusswords.test(input);
    } //returnerer true/false

    while(locateCussword(input)){
        //mens resultatet er true skal den blive ved med at loope, indtil den returnerer false
    }

    console.log(input.replace(cusswords, floralShuffle(floralArray)));

}

module.exports = floralCensor;