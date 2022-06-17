import { motion } from "framer-motion"


export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full sm:w-10/12 justify-center mt-5 md:mt-10">
      
        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .8, duration: .3 }} className=" rounded-xl w-10/12 max-w-[700px]" layout='responsive' src='/sessi.jpg' alt='Sessi Blanchard portrait'></motion.img>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.1, duration: .3 }} href='#' className="flex flex-col items-center justif-center text-white font-[arial] tracking-[.3em] text-center mt-12 text-sm sm:text-lg w-8/12 "><strong className='tracking-wide'></strong> 
        
            DRUG-USER ACTIVIST
            <motion.div className='bg-white w-8/12 h-[1px] align my-4'></motion.div>
            HARM REDUCTIONIST
            <motion.div className='bg-white w-8/12 h-[1px] align my-4'></motion.div>
            JOURNALIST
            <motion.div className='bg-white w-8/12 h-[1px] align my-4'></motion.div> drugs & trans life.
            
        </motion.div>

        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.3, duration: .3 }} href='#' className='text-white text-left mt-28 text-sm xs:text-lg max-w-[720px] w-10/12 mb-20 '>
          Based in New York City, Sessi organizes to replace drug prohibition and the War on Drugs with both a socialist political economy of psychoactive substances and a system of guaranteed care that are coordinated by users and self-managed by workers.  Additionally, she reports on drugs—namely their political, economic,  and health considerations—and  writes about transgender life and culture.
          <br/> <br/>As an organizer, Sessi co-founded and currently serves as the lead organizer of the Socialist Drug Politics Organizing Committee (SDPOC), an affiliate of the NYC Democratic Socialists of America. Additionally, she co-founded and formerly served as the lead organizer of Do It Safe, Heaux! (DISH!), a discontinued harm reduction collective by and for trans women who use crystal methamphetamine. 
          <br/> <br/>As a journalist, she has published with <i>The Intercept, VICE, The Appeal,</i> and <i>ACLU Magazine</i>, among others. From 2018 to 2021, she was the staff writer at <i>FILTER</i>, one of the only online magazines dedicated to covering harm reduction. She also had a <i>VICE</i> sex column,<i> MTF & DTF</i>.  Sessi and her journalism has attracted the media attention of CBC, The Brian Lehrer Show, and even the far-right radio host Ben Shapiro.
          <br/> <br/>As a harm reductionist, Sessi works as a peer outreach work at the Lower East Side Harm Reduction Center. There, she provides harm reduction counseling as a Certified Peer Recovery Advocate, operates the exchange, and builds meaningful relationships with people who use drugs through street outreach. 
          <br/> <br/>Before all of this, Sessi graduated <i>cum laude</i> from Vassar College with degrees in philosophy and women’s studies.

        </motion.div>
    </div>
  )
}


