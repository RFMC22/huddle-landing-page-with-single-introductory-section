import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa6'
const Socials = () => {
  return (
    <div className='flex justify-end items-center gap-4 bottom-[40px] md:right-[80px] md:translate-x-[0] absolute left-1/2 translate-x-[-50%]'>
      <a href="https://www.facebook.com/" aria-label='enlace facebook' target='_blank' rel='noreferrer' className='border border-white rounded-[40px] w-[40px] h-[40px] text-white flex items-center justify-center hover:border-soft-magenta hover:text-soft-magenta'>
        <FaFacebookF/>
      </a>
      <a href="https://twitter.com/" aria-label='enlace twitter' target='_blank' rel='noreferrer' className='border border-white rounded-[40px] w-[40px] h-[40px] text-white flex items-center justify-center hover:border-soft-magenta hover:text-soft-magenta'>
        <FaTwitter/>
      </a>
      <a href="https://www.instagram.com/" aria-label='enlace instagram' target='_blank' rel='noreferrer' className='border border-white rounded-[40px] w-[40px] h-[40px] text-white flex items-center justify-center hover:border-soft-magenta hover:text-soft-magenta'>
        <FaInstagram/>
      </a>
    </div>
  )
}

export default Socials