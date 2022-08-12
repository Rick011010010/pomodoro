import { BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsFillPersonFill} from 'react-icons/bs';
const Header = ({smallbackround, backgroundColor}) => {
    return (
        <div className='flex justify-between md:justify-around py-4  text-white md:w-[54%] md:mx-[23%]'>
            <div className={` flex justify-between ${backgroundColor}   `}>
            <button className='flex'><BsCheckCircleFill/>Pomofocus</button>
           </div>
            <div className='flex'>
            <button className={`mr-2 flex  ${smallbackround} rounded h-7`}><AiOutlineBarChart/>Report</button>
            <button className={`mr-2 flex ${smallbackround} rounded h-7`}><FiSettings/>Setting</button>
            <button className={`mr-2 flex  ${smallbackround} rounded h-7`}><BsFillPersonFill/>Login</button>
            
            </div>

            
            
        </div>
        
      );
}
 
export default Header;