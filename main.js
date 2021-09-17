Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded()
{
    console.log("model Loaded!");
}

function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,got_result);
}

function got_result(error,result)
{
if(error)
{
    console.error(error);
}
else{console.log(result)
document.getElementById("object_name").innerHTML=result[0].label
}
}