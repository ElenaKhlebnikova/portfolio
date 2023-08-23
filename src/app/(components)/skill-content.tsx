import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaJs, FaGit, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTestinglibrary } from 'react-icons/si'

const SkillContent = ({
    content,
}: {
    content: 'react' | 'html' | 'css' | 'js' | 'git' | 'node' | 'rtl' | 'next'
}) => {
    return (
        <div className="flex items-center justify-start ml-10">
            {content === 'react' && (
                <>
                    <FaReact className="w-14 h-16 mr-2" /> React
                </>
            )}
            {content === 'next' && (
                <>
                    <SiNextdotjs className="w-14 h-16 mr-2" /> Next.js v.13 (App
                    router)
                </>
            )}
            {content === 'css' && (
                <div className="flex items-center">
                    <FaCss3 className="w-14 h-16 mr-1" /> / Tailwind / Styled
                    components
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
                    Java Script
                </>
            )}
            {content === 'git' && (
                <>
                    <FaGit className="w-14 h-16 mr-2" />
                    Git / GitHub
                </>
            )}
            {content === 'rtl' && (
                <>
                    <SiTestinglibrary className="w-14 h-16 mr-2" />
                    RTL and MSW
                </>
            )}
        </div>
    )
}

export default SkillContent
