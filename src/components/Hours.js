
const Hours = ()=>{
    const handleHour = () =>{
        const date = new Date()
        const day = date.getDay()
        const hour = date.getHours()
    
        if ((day >= 1 && day <= 5) && (hour >=10 && hour<=15)){
            return "El refugio está abierto de 10:00am a 4:00pm"
        } 
        if ((day >= 6 && day <= 7) && (hour >=9 && hour<=20)) {
            return "El refugio está abierto de 9:00am a 8:00pm"
        }
        else{
            return "El refugio está cerrado"
        }
    
    }
    return (
        <>
        {handleHour()}
        
        </>
    )
}

export default Hours