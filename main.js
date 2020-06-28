var links = document.getElementsByClassName("action");
  var btn = document.getElementById("btn-predict");
  btn.addEventListener('click',foo1);
  for(let i=0;i<links.length;i++)
      {
        links[i].addEventListener('click', foo);
      }
      
      function foo()
      {
        for(let i=0;i<links.length;i++)
        {
          links[i].classList.remove("active");
        }
        this.classList.add("active");
      }
      function foo1()
      {
        var str = "<div class='w3-container w3-card-4 w3-light-grey'>"+
                  "<h3>Price Predictor:</h3>"+
                  "<select class='w3-select w3-margin-bottom' name='option' id='source' onchange='foo2()'><option value='' disabled selected>Choose your source</option><option value='1'>North Station</option><option value='2'>Back bay</option><option value='3'>South Station</option><option value='4'>West end</option><option value='5'>North end</option><option value='6'>Beacon hill</option><option value='7'>Haymarket square</option></select>"+
                  "<select class='w3-select w3-margin-bottom' name='option' id='destination' onchange='foo2()'><option value='' disabled selected>Choose your destination</option><option value='1'>North Station</option><option value='2'>Back bay</option><option value='3'>South Station</option><option value='4'>West end</option><option value='5'>North end</option><option value='6'>Beacon hill</option><option value='7'>Haymarket square</option></select>"+
                  "<p id='error-msg' style='color:red;'></p>"+
                  "<select class='w3-select w3-margin-bottom' name='option' id='cabs' onchange='foo3()'><option value='' disabled selected>Choose your Cab-types</option><option value='uber'>UBER</option><option value='lyft'>LYFT</option></select>"+
                  "<p id='insert-veh'></p>"+
                  "<button onclick='foo4()'>Predict</button>"+
                  "<div id='result' class='w3-margin-top'>"
                  "</div>";
        document.getElementsByClassName("hero-text")[0].innerHTML = str;
      }
      function foo2()
      {
        var s = document.getElementById("source").value;
        var d = document.getElementById("destination").value;
        if(s === d)
        {
          document.getElementById("error-msg").innerHTML = "Source and Destination can't be same"
          document.getElementById("sub").disabled = true;
        }
        else
        {
          document.getElementById("error-msg").innerHTML = "";
        }

      }
      function foo3()
      {
        var cab = document.getElementById("cabs").value;
        if(cab === "uber")
        document.getElementById("insert-veh").innerHTML = "<select class='w3-select w3-margin-bottom' name='option' id='uber'><option value='' disabled selected>Choose your Uber-types</option><option value='uberxl'>Uber XL</option><option value='black'>BLACK</option><option value='uberx'>Uber X</option><option value='blacksuv'>Black SUV</option><option value='uberpool'>Uber Pool</option></select>";
        else
        document.getElementById("insert-veh").innerHTML = "<select class='w3-select w3-margin-bottom' name='option' id='lyft'><option value='' disabled selected>Choose your Lyft types</option><option value='lux'>Lux</option><option value='luxblackxl'>Lux Black XL</option><option value='luxb'>Lux Black</option><option value='lyftxl'>Lyft XL</option><option value='shared'>Shared</option></select>";
      }
      function foo4()
      {
        var source = document.getElementById("source").value;
        var destination = document.getElementById("destination").value;
        var cab = document.getElementById("cabs").value;
        var carmodel;
        if(cab == "uber")
        carmodel = document.getElementById("uber").value;
        else
        carmodel = document.getElementById("lyft").value;

        var res = document.getElementById("result");
        /* write your if else  */


        if( (source == "1" && destination == "2") || (source == "2" && destination == "1"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=10;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=8;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        
        else if((source == "1" && destination == "3")||(source == "3" && destination == "1"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=7;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=6;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }
        
        else if((source == "1" && destination == "4")||(source == "4" && destination == "1"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=15;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=16;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "1" && destination == "5")||(source == "5" && destination == "1"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=20;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=22;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

       
        else if((source == "1" && destination == "6")||(source == "6" && destination == "1"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=5;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=4;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

       else if((source == "1" && destination == "7")||(source == "7" && destination == "1"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=18;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=19;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        
//Source 2

        else if((source == "2" && destination == "3")||(source == "3" && destination == "2"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=7;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=6.5;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "2" && destination == "4")||(source == "4" && destination == "2"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=15;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=14;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "2" && destination == "5")||(source == "5" && destination == "2"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=8;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=7.5;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "2" && destination == "6")||(source == "6" && destination == "2"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=12;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=11;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }
    
        else if((source == "2" && destination == "7")||(source == "7" && destination == "2"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=25;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=24;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        
//Source 3

else if((source == "3" && destination == "4")||(source == "4" && destination == "3"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=11;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=12;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "3" && destination == "5")||(source == "5" && destination == "3"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=16;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=17;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "3" && destination == "6")||(source == "6" && destination == "3"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=13;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=12.5;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "3" && destination == "7")||(source == "7" && destination == "3"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=19;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=20;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

//Source 4

else if((source == "4" && destination == "5")||(source == "5" && destination == "4"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=22;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=21;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "4" && destination == "6")||(source == "6" && destination == "4"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=25;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=24;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "4" && destination == "7")||(source == "7" && destination == "4"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=28;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=29;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

//Source 5

else if((source == "5" && destination == "6")||(source == "6" && destination == "5"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=6;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=6.5;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else if((source == "5" && destination == "7")||(source == "7" && destination == "5"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=13;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=14;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

//Source 6

else if((source == "6" && destination == "7")||(source == "7" && destination == "6"))
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          var uber=3;
          var uberxl=2.2;var black=1.25;var uberx=1.6;var blacksuv=1.9;var uberpool=1; 
          var lyft=3.5;
          var lyftxl=1.9;var luxblackxl=2.2;var luxb=1.6;var lux=1.25;var shared=0.8;

          if(carmodel == "uberxl")
          var p=uber*uberxl;
          else if(carmodel=="black")
          var p=uber*black;
          else if(carmodel == "uberx")
          var p=uber*uberx;
          else if(carmodel=="blacksuv")
          var p=uber*blacksuv;
          else if(carmodel == "uberpool")
          var p=uber*uberpool;

          else if(carmodel == "lyftxl")
          var p=lyft*lyftxl;
          else if(carmodel=="luxblackxl")
          var p=lyft*luxblackxl;
          else if(carmodel == "luxb")
          var p=lyft*luxb;
          else if(carmodel=="lux")
          var p=lyft*lux;
          else if(carmodel == "shared")
          var p=lyft*shared;

          p=p.toFixed(2);
          res.innerHTML = "The predicted price is $"+p;
        }

        else
        {
          document.getElementById("error-msg").innerHTML = "";
          res.style.backgroundColor = "green";
          res.innerHTML = "The predicted price is $"+12.5;
        }

      }
