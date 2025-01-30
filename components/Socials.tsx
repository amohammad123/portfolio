import Link from "next/link";

import {FaGithub, FaLinkedin, FaTelegram, FaPhone} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path: ''},
    {icon: <FaLinkedin/>, path: ''},
    {icon: <FaTelegram/>, path: ''},
    {icon: <FaPhone/>, path: ''},
]

const Socials = ({containerStyles, iconStyles}:{containerStyles:string, iconStyles:string}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
            })}

        </div>
    );
};

export default Socials;