import Timer from "./Timer";





const Countdown = ({ backgroundColor, setbackgroundColor, smallbackround, setsmallbackround, changeColor, selectBackground, setSelectBackground }) => {







    return (

        <div>

            <div className={` ${smallbackround}   text-center text-white  max-h-96 w-[90%] mx-[5%] mb-2 md:w-[40%] md:mx-[30%] rounded  `}>
                <div className=" ">
                    <button onClick={() => changeColor('bg-red-500', 'bg-red-400',)} className={`p-2 md:p-5 focus:bg-red-600 rounded-2xl`} >Pomodoro</button>

                    <button onClick={() => changeColor('bg-teal-600', 'bg-teal-300',)} className={`p-2 md:p-5 focus:bg-teal-700 rounded-2xl`} >Short Break</button>

                    <button onClick={() => changeColor('bg-cyan-600', 'bg-cyan-400',)} className={`p-2 md:p-5 focus:bg-cyan-700 rounded-2xl`} >Long Break</button>



                </div>

                <div className="text-center  flex flex-col justify-center">
                    <Timer backgroundColor={backgroundColor} setbackgroundColor={setbackgroundColor} setsmallbackround={setsmallbackround} />





                </div>




            </div>


        </div>
    );
}

export default Countdown;