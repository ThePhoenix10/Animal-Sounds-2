function classify(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JDgAwiCdp/model.json", modelLoaded)
}
function modelLoaded(){
    console.log("Model loaded.")
    classifier.classify(gotResult)
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}