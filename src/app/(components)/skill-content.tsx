import React from 'react'

import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'
import { FaCss3 } from '@react-icons/all-files/fa/FaCss3'
import { FaJs } from '@react-icons/all-files/fa/FaJs'
import { FaGit } from '@react-icons/all-files/fa/FaGit'
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs'



import {
    SiNextdotjs,
    SiTestinglibrary,
    SiTypescript,
    SiVercel,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiGithubactions,
    SiPostman,
    SiLinux,
    SiSocketdotio
  
} from 'react-icons/si'

const SkillContent = ({
    content,
}: {
    content:
        | 'ts'
        | 'react'
        | 'mysql'
        | 'postgresql'
        | 'docker'
| 'rest'
| 'githubactions'
| 'postman'
| 'ssh'
| 'linux'
| 'socket'
        | 'html'
        | 'css'
        | 'js'
        | 'git'
        | 'node'
        | 'rtl'
        | 'next'
        | 'vercel'
}) => {
    return (
        <div className="flex items-center justify-start lg:ml-10 ml-3">
            {content === 'ts' && (
                <>
                    <SiTypescript className="w-14 h-16 mr-2" />
                    Typescript
                </>
            )}

            {content === 'react' && (
                <>
                    <FaReact className="w-14 h-16 mr-2" /> React
                </>
            )}
            {content === 'next' && (
                <>
                    <SiNextdotjs className="w-14 h-16 mr-2" /> Next.js v.13
                </>
            )}
            {content === 'css' && (
                <div className="flex items-center">
                    <FaCss3 className="w-14 h-16 mr-1" /> CSS3 / Tailwind
                </div>
            )}
                 {content === 'mysql' && (
                <div className="flex items-center">
                    <SiMysql className="w-14 h-16 mr-1" /> MySQL
                </div>
            )}
                 {content === 'postgresql' && (
                <div className="flex items-center">
                    <SiPostgresql className="w-14 h-16 mr-1" /> PostgreSQL
                </div>
            )}

{content === 'githubactions' && (
                <div className="flex items-center">
                    <SiGithubactions className="w-14 h-16 mr-1" /> Github Actions
                </div>
            )}

{content === 'postman' && (
                <div className="flex items-center">
                    <SiPostman className="w-14 h-16 mr-1" /> Postman
                </div>
            )}

{content === 'rest' && (
                <div className="flex items-center">
                    REST API
                </div>
            )}
            {content === 'html' && (
                <>
                    <FaHtml5 className="w-14 h-16 mr-2" />
                    HTML5
                </>
            )}
            {content === 'node' && (
                <div className="flex items-center">
                    <FaNodeJs className="w-14 h-16 mr-2" /> Node.js / Express
                </div>
            )}
            {content === 'js' && (
                <>
                    <FaJs className="w-14 h-16 mr-2" />
                    JavaScript
                </>
            )}
             {content === 'docker' && (
                <>
                    <SiDocker className="w-14 h-16 mr-2" />
                    Docker
                </>
            )}
            {content === 'git' && (
                <>
                    <FaGit className="w-14 h-16 mr-2" />
                    Git / GitHub
                </>
            )}
                {content === 'socket' && (
                <>
                    <SiSocketdotio className="w-14 h-16 mr-2" />
                   Socket.io
                </>
            )}
                 {content === 'ssh' && (
                <>
                 
                 SSH
                </>
            )}

{content === 'linux' && (
                <>
                    <SiLinux className="w-14 h-16 mr-2" />
                  Linux
                </>
            )}
            {content === 'rtl' && (
                <>
                    <SiTestinglibrary className="w-14 h-16 mr-2" />
                    RTL and MSW
                </>
            )}
            {content === 'vercel' && (
                <>
                    <SiVercel className="w-14 h-16 mr-2" />
                    Netlify / Vercel
                </>
            )}
        </div>
    )
}

export default SkillContent
