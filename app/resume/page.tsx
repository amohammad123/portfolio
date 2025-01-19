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
			icon: <SiGit/>,
			name: 'git hub',
		},
		{
			icon: <SiPostgresql/>,
			name: 'postgresql',
		},
		{
			icon: <SiMongodb/>,
			name: 'mongodb',
		},
		{
			icon: <SiCelery/>,
			name: 'elery',
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
									<ul>
										{experience.items.map((item, index) => {
											return <li key={index}>
												<span>{item.duration}</span>
												<h3>{item.position}</h3>
												<div>
													<span></span>
													<p>{item.company}</p>
												</div>
											</li>
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/*    education */}
						<TabsContent className={'w-full'} value={'education'}>education</TabsContent>
						{/*    skills */}
						<TabsContent className={'w-full'} value={'skills'}>skills</TabsContent>
						{/*    about me */}
						<TabsContent className={'w-full'} value={'about me'}>about me</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;