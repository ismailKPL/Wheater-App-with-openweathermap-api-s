const container = document.querySelector(".container");
const search = document.querySelector(".search-box");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const magicbutton = document.querySelector(".magicbutton");

    const APIKey = 'Your api key';



    let apiCall = function(city) {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=fr`;


    fetch(url).then((response) =>
         response.json().then((data) => {
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".desc").innerHTML = data.weather[0].description;
            let temp = Math.round(data.main.temp); 
            document.querySelector(".temperature").innerHTML = `${temp}°C`;
            document.querySelector(".humidityP").innerHTML = `<svg class="SVGhum svgde" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M339.7 882.5C196.6 882.5 80.2 766.1 80.2 623c0-133.2 204.8-395.1 228.2-424.5 5.8-7.3 14.5-11.6 23.8-11.7 9.4-0.1 18.1 3.9 24.1 11 1.5 1.8 37.7 44.8 82.2 105.2 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-21.3-29-40.9-54-55.3-72.1-69.2 92-191.2 271.5-191.2 355.4 0 108.9 88.6 197.6 197.6 197.6S537.3 731.9 537.3 623c0-17.1 13.9-31 31-31s31 13.9 31 31c-0.1 143.1-116.5 259.5-259.6 259.5z" fill="#ffffff"></path><path d="M363.7 468.8c-27.9 59.7-46.8 115.7-46.8 158.4 0 164.6 133.4 298 298 298s298-133.4 298-298c0-12.8-1.9-26.9-5.5-41.9-327.2 33.9-284.9-194.9-543.7-116.5z" fill="#ffffff"></path><path d="M333.6 567.6c-38.2 239.9 123 357.7 287.3 357.7 92.8 0 144.9-12.1 199.6-78.6-261.5 20.7-428.7-99.2-486.9-279.1z" fill="#ffffff"></path><path d="M614.9 956.1C433.5 956.1 286 808.5 286 627.2c0-173.4 283.4-532.4 295.5-547.6 5.8-7.3 14.5-11.6 23.8-11.7 9.3-0.1 18.1 3.9 24.1 11 2 2.3 49 58.2 106.8 136.6 10.1 13.8 7.2 33.2-6.6 43.3-13.8 10.1-33.2 7.2-43.3-6.6-31.8-43.2-60.6-79.8-79.9-103.7C517 266.1 347.9 512.3 347.9 627.2c0 147.2 119.8 267 267 267s267-119.8 267-267c0-29.7-13.2-87.9-76.4-196.2-8.6-14.8-3.6-33.7 11.2-42.3 14.8-8.6 33.7-3.6 42.3 11.2 57.1 97.9 84.8 172.2 84.8 227.4 0 181.3-147.6 328.8-328.9 328.8z" fill="#ffffff"></path></g></svg> Humidité : ${data.main.humidity}%`;
            document.querySelector(".windP").innerHTML = `<svg class="SVGwind svgde" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 9H9.31C10.8 9 12 7.79 12 6.31C12 4.82 10.79 3.62 9.31 3.62C7.82 3.62 6.62 4.83 6.62 6.31V6.69" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> Vitesse du vent : ${data.wind.speed} Km/h`;
            let Mintemp = Math.round(data.main.temp_min);
            document.querySelector(".Tmin").innerHTML = `<svg class="SVGmin svgde" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>temperature-arrow-down</title> <path d="M12.75 6.008c0-6.246-9.5-6.246-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM8 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.111-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029c0 0.014 0.006 0.024 0.008 0.038 0.016 0.19 0.101 0.358 0.23 0.479l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM8.75 21.367v-1.367c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 1.367c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM30.531 21.469c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-4.719 4.719v-22.188c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 22.189l-4.719-4.721c-0.136-0.136-0.324-0.22-0.531-0.22-0.415 0-0.751 0.336-0.751 0.751 0 0.207 0.084 0.395 0.22 0.531v0l5.999 6c0.136 0.135 0.324 0.219 0.531 0.219h0c0.104-0.001 0.202-0.021 0.292-0.059l-0.005 0.002c0.062-0.026 0.098-0.083 0.149-0.123 0.029-0.021 0.069-0.013 0.095-0.039l6-6c0.135-0.136 0.218-0.324 0.218-0.531s-0.083-0.395-0.218-0.531l0 0z"></path> </g></svg> Min : ${Mintemp}°C`;
            let Maxtemp = Math.round(data.main.temp_max);
            document.querySelector(".Tmax").innerHTML = `<svg class="SVGmax svgde" fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>temperature-arrow-up</title> <path d="M12.75 6.008c0-6.246-9.5-6.246-9.5 0v13.238c-1.235 1.224-2 2.921-2 4.796 0 3.728 3.022 6.75 6.75 6.75s6.75-3.022 6.75-6.75c0-1.875-0.765-3.572-2-4.796l-0.001-0zM8 29.25c-2.9-0-5.25-2.351-5.25-5.251 0-1.553 0.674-2.948 1.745-3.909l0.005-0.004 0.006-0.012c0.13-0.122 0.215-0.29 0.231-0.477l0-0.003c0.001-0.014 0.007-0.024 0.008-0.038l0.006-0.029v-13.52c-0.003-0.053-0.005-0.115-0.005-0.178 0-1.704 1.381-3.085 3.085-3.085 0.060 0 0.12 0.002 0.179 0.005l-0.008-0c0.051-0.003 0.111-0.005 0.17-0.005 1.704 0 3.085 1.381 3.085 3.085 0 0.063-0.002 0.125-0.006 0.186l0-0.008v13.52l0.006 0.029c0 0.014 0.006 0.024 0.008 0.038 0.016 0.19 0.101 0.358 0.23 0.479l0 0 0.006 0.012c1.076 0.966 1.75 2.361 1.75 3.913 0 2.9-2.35 5.25-5.25 5.251h-0zM8.75 21.367v-15.367c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 15.367c-1.164 0.338-2 1.394-2 2.646 0 1.519 1.231 2.75 2.75 2.75s2.75-1.231 2.75-2.75c0-1.252-0.836-2.308-1.981-2.641l-0.019-0.005zM30.531 9.47l-6-6c-0.025-0.025-0.064-0.017-0.092-0.038-0.052-0.041-0.089-0.099-0.152-0.125-0.050-0.013-0.108-0.020-0.168-0.020-0.010 0-0.020 0-0.030 0.001l0.001-0c-0.041-0.009-0.088-0.014-0.136-0.014-0.004 0-0.008 0-0.012 0h0.001c-0.184 0.006-0.351 0.079-0.475 0.197l0-0-5.999 6c-0.135 0.136-0.218 0.322-0.218 0.528 0 0.414 0.336 0.75 0.75 0.75 0.206 0 0.393-0.083 0.529-0.218l4.719-4.72v22.189c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-22.188l4.719 4.719c0.136 0.135 0.323 0.218 0.529 0.218 0.415 0 0.751-0.336 0.751-0.751 0-0.206-0.083-0.393-0.218-0.528l0 0z"></path> </g></svg> Max : ${Maxtemp}°C`;
            let feelslike = Math.round(data.main.feels_like);
            document.querySelector(".ress").innerHTML = `<svg class="SVGress svgde" fill="#ffffff" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(0)" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <path d="M26,30H22a2.0059,2.0059,0,0,1-2-2V21a2.0059,2.0059,0,0,1-2-2V13a2.9465,2.9465,0,0,1,3-3h6a2.9465,2.9465,0,0,1,3,3v6a2.0059,2.0059,0,0,1-2,2v7A2.0059,2.0059,0,0,1,26,30ZM21,12a.9448.9448,0,0,0-1,1v6h2v9h4V19h2V13a.9448.9448,0,0,0-1-1Z" transform="translate(0 0)"></path> <path d="M24,9a4,4,0,1,1,4-4h0A4.0118,4.0118,0,0,1,24,9Zm0-6a2,2,0,1,0,2,2h0a2.0059,2.0059,0,0,0-2-2Z" transform="translate(0 0)"></path> <path d="M10,20.1839V12H8v8.1839a3,3,0,1,0,2,0Z" transform="translate(0 0)"></path> <path d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z" transform="translate(0 0)"></path> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect> </g></svg> Ressenti : ${feelslike}°C`


            
              let iconCode = data.weather[0].icon;
              let iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
  
      
              let iconImg = document.querySelector(".weathericon"); 
              iconImg.innerHTML = `<img class="Iweathericon" src="${iconUrl}">`;
              weatherBox.appendChild(iconImg);
        }));
    }




    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); 
        let ville = document.querySelector(".inputSearch").value; 

        apiCall(ville);
   })


magicbutton.addEventListener("click", () => {
    if (weatherDetails.style.display === "grid") {
      weatherDetails.style.display = "none";
      magicbutton.style.transform = "rotate(0deg)";
    } else {
      weatherDetails.style.display = "grid";
      magicbutton.style.transform = "rotate(90deg)";
    }
  });


   apiCall("Marseille");