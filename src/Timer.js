import React, { useState, useEffect } from 'react';
import { GiNextButton } from 'react-icons/gi'





const Timer = ({ backgroundColor, setbackgroundColor, setsmallbackround }) => {


    const [seconds, setSeconds] = useState(3)
    const [minutes, setMinutes] = useState(0)
    const [timer, setTimer] = useState(false)



    useEffect(() => {

        if (backgroundColor === 'bg-teal-600') {
            setMinutes(0)
            setSeconds(3)
            setTimer(false)

        }
        if (backgroundColor === 'bg-cyan-600') {
            setMinutes(15)
            setSeconds(0)
            setTimer(false)

        }
        if (backgroundColor === 'bg-red-500') {
            setMinutes(0)
            setSeconds(3)
            setTimer(false)

        }


        //  if (seconds < 10) {
        //      setSeconds( '0' + seconds)

        //  }
        //  if (minutes < 10) {
        //      setMinutes( '0' + minutes)

        //   }

        

    }, [backgroundColor])


    const [longBreak, setlongBreak] = useState(0);

    const forBreak = () => {


        if (backgroundColor === 'bg-red-500') {
            setMinutes(25)
            setSeconds(0)
            setlongBreak(longBreak + 1)
            console.log(longBreak)


            if (minutes === 0 && seconds === 0) {
                setbackgroundColor("bg-teal-600")
                setsmallbackround('bg-teal-300')
                setMinutes(5)
                setSeconds(0)

            }

        }

    }

    const nextButton = () => {
        if (backgroundColor === 'bg-red-500') {
            setbackgroundColor("bg-teal-600")
            setsmallbackround('bg-teal-300')
            setMinutes(5)
            setSeconds(0)

        }
        if (backgroundColor === "bg-teal-600") {
            setbackgroundColor('bg-red-500')
            setsmallbackround('bg-red-400')
            setMinutes(25)
            setSeconds(0)

        }

    }


    useEffect (()=>{
        if (longBreak == 4) {
            setMinutes(15)
            setSeconds(0)
            setbackgroundColor('bg-cyan-600')
            setsmallbackround('bg-cyan-400')

        }
    }


    )
        

    



    // (backgroundColor==='bg-teal-600')&& setMinutes(5) 
    // (backgroundColor==='bg-[#457CA3]')&& setMinutes(15)

    function start() {
        setTimer(!timer);
    }


    useEffect(() => {
        let interval;
        if (timer) {
            interval = setInterval(() => {
                clearInterval(interval);
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes => minutes - 1)

                    } else {
                        forBreak()
                        
                        

                    }
                } else {
                    setSeconds(seconds - 1);
                }

            }, 1000);
        }
        else if (!timer && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);

    }, [timer, seconds, minutes,forBreak]);







    return (



        <div className='relative'>
            
            <h1 className='font-bold text-8xl absolute mx-[5%] w-[90%] md:mx-[5%] md:w-[90%]  '>{minutes}:{seconds}</h1>


            <button className={`mb-1 bg-[white] px-10 py-0  rounded h-7 text-center my-40 text-2xl text-red-500`} onClick={start}>{!timer ? "START" : "STOP"}</button>{timer && <button className=' ml-4 text-2xl ' onClick={nextButton} ><GiNextButton /></button>}
        </div>
    );


}

export default Timer;