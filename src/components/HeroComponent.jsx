import { Button } from "@/components/ui/button"

const HeroComponent = () => {
  return (
    <div className="relative bg-[url('/art.jpg')] bg-center bg-cover text-white py-20 px-24">
       <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="flex items-center gap-10">
        <div className="relative">
      <h1 className="w-[60%] font-bold text-[62px]">First <span className="text-blue-500">AI</span> Job Application and Support Platform</h1>
      <p className="mt-8 w-[60%] text-lg leading-8">Learn your dream job with personalized preparation and expert guidance aided with our AI-powered job processing platform</p>
     <Button className='mt-8 text-lg py-8 px-12 hover:bg-white hover:text-main bg-main text-white'>Start Here</Button>
    </div>
    <div className="relative">
        <img src="/robot.png" alt="robot" />
    </div>
    </div>
    </div>
  )
}

export default HeroComponent
