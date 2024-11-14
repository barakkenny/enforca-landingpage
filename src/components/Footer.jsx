import { address } from "@/utils/data";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { IoBasketballOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-main mt-24 pb-8">
        <div className="px-24 pt-20 lg:px-16 xl:px-24 md:px-12 sm:px-16 xxs:px-4 xs:px-8 pt-8  flex justify-between xxs:flex-wrap sm:flex-nowrap text-white">
            <div className='xxs:hidden lg:block'>
                <img src='/robot-job.png' alt="robot" />
            </div>
            <div>
                <h3 className="xxs:text-sm xs:text-lg font-medium">We are an Artificial intelligence platform that helps talents get decent jobs.</h3>
                <div className="flex items-center gap-4 mt-6 text-xl">
                <RiFacebookCircleFill />
                <IoLogoInstagram />
                <FaTwitter />
                <IoLogoGithub />
                <IoBasketballOutline />

                </div>
                <h1 className="mt-8 xxs:text-2xl sm:text-4xl md:text-6xl font-bold font-play">Enforca</h1>
            </div>
            <div>
            <h3 className="xxs:mt-8 sm:mt-0 text-lg font-medium">Get in touch</h3>
            <div className="xxs:mt-4 sm:mt-8 flex flex-col gap-6">
                {address.map(({id, text}) => (
                    <div key={id}>
                    <p className="xxs:text-sm xs:text-lg">{text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="mt-5 border-2 border-white"></div>
        <p className="text-center text-white mt-4 xxs:text-sm xs:text-lg">© 2024.Enforca technologies All rights reserved.</p>
    </div>
  )
}

export default Footer
