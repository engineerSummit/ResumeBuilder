import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import discord from '../assets/images/discord.png';

const Icons = () => {
    return (
        <div className="icons">
            <a href="https://www.youtube.com/channel/UCXuy8rldhATY0qxxvwglWbw"><YouTubeIcon style={{ color: "#FF0000" }} /></a>

            <a href="https://t.me/engineersummit"><TelegramIcon style={{ color: "#0088cc" }} /></a>

            <a href="https://www.instagram.com/engineer_summit/?igshid=nunf8nbv7agj"><InstagramIcon style={{ color: "red" }} /></a>

            <a href="https://www.linkedin.com/in/engineersummit-b20a02202/"><LinkedInIcon style={{ color: "#0e76a8" }} /></a>

            <a href="https://github.com/engineerSummit"><GitHubIcon style={{ color: "black" }} /></a>

            <a href="https://discord.com/invite/ZMZAEZ5NfA"><img className="discord" src={discord} alt="DiscordLogo" /></a>
        </div>
    )
}

export default Icons
