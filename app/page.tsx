import {Button} from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'

export default function Home() {
  return (
    <section className={'h-full'}>
      <div className={'container mx-auto'}>
        <div className={'flex flex-col xl:flex-row items-center justify-between xl:py-8 xl:pb-24'}>

          {/* text */}
          <div className={'text-center xl:text-left'}>
            <span className={'text-xl'}>Software Developer</span>
            <h1 className={'h1 mb-6'}>Hello i'm <br/><span className={'text-accent'}>Mohammad Akhavi</span></h1>
            <p className={'max-w-[500px] mb-9 text-white/80'}>
              I exel at crafting elegant digital experiences and I am  proficient in various programming language
              and technologies.
            </p>
          {/* btn and socials */}
            <div>
              <Button className={'uppercase flex items-center gap-2'}
              size='lg'
              variant={'outline'}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
