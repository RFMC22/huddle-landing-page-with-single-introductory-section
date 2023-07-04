import mockup from '../assets/illustration-mockups.svg'
const Section = () => {
  return (
    <section className='h-[600px] container m-auto lg:px-[80px] md:px-[0px] px-[40px] flex items-center flex-wrap justify-between lg:justify-between md:justify-center md:mt-0 mt-[25px]'>
      <img src={mockup} alt="imagen de un mockup" className='m-auto lg:m-0 lg:px-0 md:px-[180px]'/>
      <div className='w-[520px] h-[300px] flex flex-col lg:justify-between lg:mt-[-120px] lg:gap-0 md:gap-4 justify-end gap-6'>
        <h2 className='text-white font-poppins font-semibold md:text-[40px] text-[24px] lg:text-start text-center'>Build The Community Your Fans Will Love</h2>
        <p className='text-white font-open-sans font-normal md:text-[18px] text-[16px] lg:text-start text-center md:px-0 px-[27.6px]'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        <button className='w-[200px] md:h-[56px] h-[40px] bg-white text-violet hover:bg-soft-magenta hover:text-white rounded-full mx-auto block lg:m-0'>Register</button>
      </div>
    </section>
  )
}

export default Section