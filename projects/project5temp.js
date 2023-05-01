const calculateTemp =  () =>{

    const numbertemp = document.getElementById('temp').value;
    const tempselect = document.getElementById('temp1');
    const valueselected=temp1.option[tempselect.SelecteIndex].value;

    const celTofah =(cel) =>{
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    const fahTocel =(fah) =>{
        let celsius = Math.round((fah -32) * 5/9);
        return celsius;
    }
    let result;
    if(valueselected=='cel')
    {
        result = celTofah(numbertemp);
        document.getElementById('resultcontainer').innerHTML=`= ${result} fahrenheit`;
    }else
    {
        result = fahTocel(numbertemp);
        document.getElementById('resultcontainer').innerHTML=`= ${result} celsius`;
    }
}
