window.addEventListener("load",() =>{
    let lat,long;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            degree = document.querySelector('.degree');
            description = document.querySelector('.description');
            timeZone = document.querySelector('.location');
            console.log(lat,long);
            
            const proxy = `https://cors-anywhere.herokuapp.com/`
            const api = `${proxy}https://api.darksky.net/forecast/534fe15b03bc4f6b9935022c25d43933/21.1069,79.1231` ; 
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const {temperature,summary} = data.currently;
                    const timezone = data.timezone;
                    timeZone.textContent = timezone;
                    let cel = ((temperature - 32) * 5 / 9).toFixed(2);
                    degree.textContent = cel;
                    description.textContent = summary;
                })
        });
        

    }
    else{
        h1.textContent = "Not Working";
    }

});
// console.log("Hello");