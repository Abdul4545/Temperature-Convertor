const calculateTemp = () => {

    const numberTemp = document.getElementById("temp").value;

    const tempSelected = document.getElementById("temp_diff");

    const tempValue = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahToCel = (fahren) => {
        let celcius = Math.round((fahren - 32) * 5/9);
        return celcius;
    }

    let result;

    if(tempValue == 'cel') {
        result = celToFah(numberTemp);
        console.log(result);
        document.getElementById("resultContainer").innerHTML = `${result} Fahrenheit`;
    }

    else {
        result = fahToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML = `${result} °Celsius`;
    }
}