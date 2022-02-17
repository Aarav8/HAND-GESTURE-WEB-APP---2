prediction="";

Webcam.set(
    {
        width:300,
        height:300,
        image_format:'png',
        png_quality:90
    });

camera=document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot() 
{
    Webcam.snap(function (data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri +'"/>';
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uzd6A1i2W/model.js" , modelLoaded());

function modelLoaded()
{
    console.log("modelLoaded");
}


function speak()
{
    var synth=window.speechSynthesis;
    data="The prediction is"+prediction;
    utterthis=new SpeechSynthesisUtterance(data);
    synth.speak(utterthis);
}
