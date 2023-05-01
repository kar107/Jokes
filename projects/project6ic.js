const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    counter.innerHTML= 0;

    const updatecounter = () => {
        const targetcount = +counter.getAttribute('data-target');

        const startingcount = Number(counter.innerHTML);

        const incr = targetcount/100;
        if(startingcount<targetcount){
            counter.innerHTML = `${startingcount+incr}`;
            setTimeout(updatecounter,10)
        }else{
            counter.innerHTML=targetcount;
        }
    }
    updatecounter();
})
