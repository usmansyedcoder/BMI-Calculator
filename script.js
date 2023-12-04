function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var bmi = weight / (height * height);

    document.getElementById("result").innerHTML = bmi;
    
    if(bmi<18.6)
    {
        document.getElementById("message").innerHTML = document.getElementById("name").value+" you are Under weight";
        
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
        document.getElementById("message").innerHTML = document.getElementById("name").value+" you are Normal!";
        
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        document.getElementById("message").innerHTML = document.getElementById("name").value+" you are owerweight!";
        
    }
    else if(bmi>=30 && bmi<=34.9)
    {
        document.getElementById("message").innerHTML = document.getElementById("name").value+" you are obese!";
        
    }
    else if(bmi>=35)
    {
        document.getElementById("message").innerHTML = document.getElementById("name").value+" you are Extremely obese!";
        
    }

}