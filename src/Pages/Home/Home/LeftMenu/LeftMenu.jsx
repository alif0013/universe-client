import { FaHome } from 'react-icons/fa';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdQuestionAnswer } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const LeftMenu = () => {
    return (
        <div>
            <ul className=' p-5'>

                <>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <FaHome className='text-xl pt-1'></FaHome>
                                <div>
                                    Home
                                </div>
                            </div>
                            <hr className='mt-2 border-black' />
                        </NavLink>
                    </li>
                    <li className='my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <SiHomeassistantcommunitystore className='text-xl pt-1'></SiHomeassistantcommunitystore>
                                <div>
                                    Communities
                                </div>
                                
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <MdQuestionAnswer className='text-xl pt-1'></MdQuestionAnswer>
                                <div>
                                    Questions
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <MdGroups2 className='text-2xl pt-1'></MdGroups2>
                                <div>
                                    Groups
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <AiOutlineUsergroupAdd className='text-2xl pt-1'></AiOutlineUsergroupAdd>
                                <div>
                                    Add Groups
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <GrAnnounce className='text-xl pt-1'></GrAnnounce>
                                <div>
                                    Announcement
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <IoPricetags className='text-xl pt-1'></IoPricetags>
                                <div>
                                    Tags
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <GiAchievement className='text-2xl pt-1'></GiAchievement>
                                <div>
                                    Badges
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>
                    <li className=' my-5 rounded-lg'>
                        <NavLink to="/">
                            <div className='flex gap-2 hover:text-[#2D6FF7]'>
                                <IoMdHelp className='text-xl pt-1'></IoMdHelp>
                                <div>
                                    Help
                                </div>
                             
                            </div>
                            <hr className='mt-2 border-black'/>
                        </NavLink>
                    </li>




                </>



            </ul>
        </div>
    );
};

export default LeftMenu;