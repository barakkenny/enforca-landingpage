import { Button } from "@/components/ui/button"

const HeroComponent = () => {
  return (
    <div className="relative font-sans bg-[url('/art.jpg')] bg-center bg-cover text-white lg:px-16 xl:px-24 md:px-12 sm:px-16 xxs:px-4 xs:px-8 py-24">
       <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="flex items-center gap-10">
        <div className="relative">
      <h1 className="xxs:w-[80%] xxs:text-[30px] md:w-[70%] xs:w-[80%] xs:text-4xl sm:text-[50px] lg:w-[70%] font-bold lg:text-[62px] xs:leading-[70px] sm:leading-[80px]">First <span className="text-blue-500">AI</span> Job Application and Support Platform</h1>
      <p className="mt-8 xxs:w-[80%] sm:w-[60%] xxs:text-base xs:w-[80%] sm:text-lg">Learn your dream job with personalized preparation and expert guidance aided with our AI-powered job processing platform</p>
     <Button className='mt-12  sm:text-lg xxs:py-4 xxs:px-8 sm:py-8 sm:px-12 hover:bg-white hover:text-main bg-main text-white'>Start Here</Button>
    </div>
    <div className="relative xxs:hidden xl:block">
        <img src="/robot.png" alt="robot" />
    </div>
    </div>
    </div>
  )
}

export default HeroComponent
