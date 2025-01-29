'use client'

import {FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'
import {
	SiDjango,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiPostgresql,
	SiMongodb,
	SiGit,
	SiLinux,
	SiDocker,
	SiCelery
} from 'react-icons/si'

// about data
const about = {
	title: 'About me',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis corporis debitis deserunt' +
		' ducimus eos fugiat harum inventore iusto',
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Mohammad Akhavi',
		},
		{
			fieldName: 'Phone',
			fieldValue: '0910 078 72 03',
		},
		{
			fieldName: 'Exprience',
			fieldValue: '2+ Years',
		},
		{
			fieldName: 'Telegram',
			fieldValue: 'amohammad97',
		},
		{
			fieldName: 'Nationality',
			fieldValue: 'Iran',
		},
		{
			fieldName: 'Email',
			fieldValue: 'm.h.akhavi@gmail.com',
		},
		{
			fieldName: 'Freelance',
			fieldValue: 'Available',
		},
		{
			fieldName: 'Language',
			fieldValue: 'Persian, English',
		},

	]
}

// experience data
const experience = {
	icon: '/assets/resume/badge.svg',
	title: 'My experience',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis corporis debitis deserunt' +
		' ducimus eos fugiat harum inventore iusto',
	items: [
		{
			company: 'Expo',
			position: 'Back-End Developer',
			duration: '2024 - present'
		},
		{
			company: 'Binazir Chart',
			position: 'Full Stack Developer',
			duration: 'summer 2024'
		},
		{
			company: 'Smart City',
			position: 'Back-End Developer',
			duration: '2023 - 2024'
		},
		{
			company: 'Smart City',
			position: 'Intern Back-End Developer',
			duration: 'winter 2022'
		},
	]

}

// education data
const education = {
	icon: '/assets/resume/cap.svg',
	title: 'My educations',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis corporis debitis deserunt' +
		' ducimus eos fugiat harum inventore iusto',
	items: [
		{
			institution: 'Maktabkhone',
			degree: 'Advance django',
			duration: '2023'
		},
		{
			institution: 'Azad University',
			degree: 'Clinical Psychology',
			duration: '2020 - 2024'
		},
		{
			institution: 'Kashan University',
			degree: 'Psychology',
			duration: '2016 - 2020'
		},
	]

}

// skills data
const skills = {
	title: 'My skills',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis corporis debitis deserunt' +
		' ducimus eos fugiat harum inventore iusto',
	skillList: [
		{
			icon: <FaPython/>,
			name: 'python',
		},
		{
			icon: <FaJs/>,
			name: 'javascript',
		},
		{
			icon: <FaHtml5/>,
			name: 'html 5',
		},
		{
			icon: <FaCss3/>,
			name: 'css',
		},
		{
			icon: <SiDjango/>,
			name: 'django Rest Framework',
		},
		{
			icon: <SiReact/>,
			name: 'react.js',
		},
		{
			icon: <SiNextdotjs/>,
			name: 'next.js',
		},
		{
			icon: <SiTailwindcss/>,
			name: 'tailwind.css',
		},
		{
			icon: <SiLinux/>,
			name: 'linux',
		},
		{
			icon: <SiDocker/>,
			name: 'docker',
		},
		{
			icon: <SiPostgresql/>,
			name: 'postgreSQL',
		},
		{
			icon: <SiMongodb/>,
			name: 'mongoDB',
		},
		{
			icon: <SiGit/>,
			name: 'gitHub',
		},
		{
			icon: <SiCelery/>,
			name: 'celery',
		},
	]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'

import {ScrollArea} from '@/components/ui/scroll-area'

import {motion} from 'framer-motion'

const Resume = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
			}}
			className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
		>
			<div className={'container mx-auto '}>
				<Tabs defaultValue={'experience'} className={'flex flex-col xl:flex-row gap-[60px]'}>
					<TabsList className={'flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'}>
						<TabsTrigger value={'experience'}>Experience</TabsTrigger>
						<TabsTrigger value={'education'}>Education</TabsTrigger>
						<TabsTrigger value={'skills'}>Skills</TabsTrigger>
						<TabsTrigger value={'about me'}>About me</TabsTrigger>
					</TabsList>

					{/*  content  */}
					<div className={'min-h-[70vh] w-full'}>
						{/*	experience */}
						<TabsContent className={'w-full'} value={'experience'}>
							<div className={'flex flex-col gap-[30px] text-center xl:text-left'}>
								<h3 className={'text-4xl font-bold'}>{experience.title}</h3>
								<p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>{experience.description}</p>
								<ScrollArea className={'h-[400px]'}>
									<ul className={'grid grid-cols-1 lg:grid-cols-2 gap-[30px]'}>
										{experience.items.map((item, index) => {
											return <li key={index} className={'bg-[#232329] h-[184px] py-6  px-10' +
												' rounded-xl flex flex-col justify-center items-center' +
												' lg:items-start gap-1'}>
												<span className={'text-accent'}>{item.duration}</span>
												<h3 className={'text-xl max-w-[260px] min-h-[60px] text-center' +
													' lg:text-left'}>{item.position}</h3>
												<div className={'flex items-center gap-3'}>
													{/* dot */}
													<span className={'w-[6px] h-[6px] rounded-full bg-accent'}></span>
													<p className={'text-white/60'}>{item.company}</p>
												</div>
											</li>
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/*    education */}
						<TabsContent className={'w-full'} value={'education'}>
							<div className={'flex flex-col gap-[30px] text-center xl:text-left'}>
								<h3 className={'text-4xl font-bold'}>{education.title}</h3>
								<p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>{education.description}</p>
								<ScrollArea className={'h-[400px]'}>
									<ul className={'grid grid-cols-1 lg:grid-cols-2 gap-[30px]'}>
										{education.items.map((item, index) => {
											return <li key={index} className={'bg-[#232329] h-[184px] py-6  px-10' +
												' rounded-xl flex flex-col justify-center items-center' +
												' lg:items-start gap-1'}>
												<span className={'text-accent'}>{item.duration}</span>
												<h3 className={'text-xl max-w-[260px] min-h-[60px] text-center' +
													' lg:text-left'}>{item.degree}</h3>
												<div className={'flex items-center gap-3'}>
													{/* dot */}
													<span className={'w-[6px] h-[6px] rounded-full bg-accent'}></span>
													<p className={'text-white/60'}>{item.institution}</p>
												</div>
											</li>
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/*    skills */}
						<TabsContent className={'w-full h-full'} value={'skills'}>
							<div className="flex flex-col gap-[30px]">
								<div className={'flex flex-col gap-[30px] text-center xl:text-left'}>
									<h3 className={'text-4xl font-bold'}>{skills.title}</h3>
									<p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>{skills.description}</p>
								</div>
								<ul className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'}>
									{skills.skillList.map((item, index)=>{
										return <li key={index}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className={'w-full h-[150px] bg-[#232329]' +
														' rounded-xl flex' +
														' justify-center items-center group'}>
														<div className={'text-6xl group-hover:text-accent' +
															' transition-all duration-300'}>{item.icon}</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className={'capitalize'}>{item.name }</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									})}
								</ul>
							</div>
						</TabsContent>
						{/*    about me */}
						<TabsContent className={'w-full text-center xl:text-left'} value={'about me'}>
							<div className={'flex flex-col gap-[30px]'}>
								<h3 className={'text-4xl font-bold'}>{about.title}</h3>
								<p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>{about.description}</p>
								<ul className={'grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'}>
									{about.info.map((item, index)=>{
										return <li key={index} className={'flex items-center justify-center' +
											' xl:justify-start gap-4'}>
											<span className={'text-white/60'}>{item.fieldName}</span>
											<span className={'text-xl'}>{item.fieldValue}</span>
										</li>
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;