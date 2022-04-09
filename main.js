Prediction_1 ="";
Prediction_2 ="";


Webcam.set
({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("Webcam");
Webcam.attach('#Webcam');

function CaptureImage()
{
  Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
});
}
console.log('ml5 Version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded');
}

function Speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first Prediction is"+ Prediction_1;
    speak_data_2 = "The Second prediction is"+ Prediction_2;
    var utterThis = new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function Prediction()
{
    img = document.getElementById("captured_image")
    console.log(img, gotResult)
}

function gotResult(error, results)
{
   if(error)
   {
       console.error(error);
     } 
     else
     {
        console.log(results);
        document.getElementById("emotion-name1").innerHTML = result[0].label;
        document.getElementById("emotion-name2").innerHTML = result[1].label;
        Prediction_1 = result[0].label;
        Prediction_2 = result[1].label;

        if (result[0].label=="happy")
        {
           document.getElementById("emoji1").innerHTML = "&#128522";
        }
        if (result[0].label=="sad")
        {
           document.getElementById("emoji1").innerHTML = "&#128532";
        }
        if (result[0].label=="angry")
        {
           document.getElementById("emoji1").innerHTML = "&#128545";
        }

        if (result[1].label=="happy")
        {
           document.getElementById("emoj2").innerHTML = "&#128522";
        }
        if (result[1].label=="sad")
        {
           document.getElementById("emoji2").innerHTML = "&#128532";
        }
        if (result[1].label=="angry")
        {
           document.getElementById("emoji2").innerHTML = "&#128545";
        }
     }
    
}