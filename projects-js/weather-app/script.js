//wait until html loads....
// wait until the whole html page is loaded then run in js 
document.addEventListener('DOMContentLoaded', () => {
    // in this we will grap the html element....!
    const cityName = document.getElementById('city-input')  //this storing different thing it store the html input element iteself

    const btn = document.querySelector('.btn-w')
    const information = document.getElementById('info')
    const display = document.getElementById('city-name')
    const tempDisplay = document.getElementById('temp')
    const discription = document.getElementById('details')
    const errorMsg = document.getElementById('error')
    const loader = document.querySelector('#loading')
    //this is the api what we are using for the weather app with this we can add into env in future to clean the main js  
    const API_KEY = "5e6b1c41faf572f7babf4708e57e92a5"

    //click events will go here
    btn.addEventListener('click', async () => {
        // and this storing diff thing  this is where we use the actual logic part with the strings 
        const city = cityName.value.trim() // this will trim the reamining part     
        if (!city) return;
        // this will run the "try" and "catch"  "method" "try" runnning the code 
        loader.classList.remove('hidden') // this is the loading file where we have to show the loading screen
        try {
            const weather_data = await fetch_mode(city)
            display_data(weather_data)
            //will handle it this error if anything get wrong 
        } catch (error) {
            showError()
        }
        finally {
            loader.classList.add('hidden') // and in this after the delay of 1s we will hide the loader again
        }

    })
    //  this is for using the entering key
    cityName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            btn.click()
        }
    })


    //server may through an error
    //server database in other continent
    // the fetch method will go  here 
    // this will fetch the data from the weather api..... 
    async function fetch_mode(city) {
        // why we add this beacuse we have to use the spinning loader and this will help to make the delay to the loader  
        await new Promise((resolve) => {
            setTimeout(() => {
                setTimeout(resolve, 1000)
            });
        })
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        const response = await fetch(url)
        console.log(typeof (response));
        console.log("response coming from the fetch api: ", response);
        if (!response.ok) {
            console.log("error coming", response);
            // this will throw the if u put wrong input or wrong keyes 
            throw new Error("city not found here !!")


        }
        const data = await response.json()
        return data

    }
    loader.classList.add('hidden') // thhis will hide the  loader again
    //here we get the the data from the user 

    function display_data(info) {
        // here we show how data works 
        console.log(info);
        const { name, main, weather } = info
        display.textContent = name
        // unlock the display mode which is hidden in html 


        information.classList.remove('hidden')
        errorMsg.classList.add('hidden')
        tempDisplay.textContent = `temperature  : ${main.temp}°C`
        discription.textContent = `weather forecast   : ${weather[0].description}`


    }
    function showError() {
        errorMsg.classList.remove('hidden')
        information.classList.add('hidden')
        loader.classList.remove('hidden')
    }

})

