import { Button } from "@/components/ui/button"


const NavbarComponent = () => {

    return(
        <div className="flex items-center justify-between px-24">
            <img className='w-[6%]' src="/enforca.png" alt="logo" />
            <ul className="flex items-center gap-5">
                <li className='font-bold text-lg'>For Mentorship</li>
                <li className='font-bold text-lg'>For Job Seekers</li>
            </ul>
        <div className="space-x-4">
        <Button className='py-2 px-6 hover:border-2 hover:border-main text-white bg-main hover:text-blue hover:bg-white hover:text-main'>Login</Button>
        <Button className='py-2 px-6 border-2 border-main text-main bg-white hover:text-white hover:bg-main'>Sign up</Button>
        </div>
        </div>
    )
}

export default NavbarComponent