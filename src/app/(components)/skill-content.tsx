import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaJs, FaGit, FaNodeJs } from 'react-icons/fa'
const SkillContent = ({
    content,
}: {
    content: 'react' | 'html' | 'css' | 'js' | 'git' | 'node' | 'rtl'
}) => {
    return (
        <div className="flex items-center justify-start ml-10">
            {content === 'react' && <FaReact className="w-14 h-16" />}
            {content === 'css' && (
                <div className="flex items-center">
                    <FaCss3 className="w-14 h-16 mr-1" /> / Tailwind / Styled
                    components
                </div>
            )}
            {content === 'html' && <FaHtml5 className="w-14 h-16" />}
            {content === 'node' && (
                <div className="flex items-center">
                    <FaNodeJs className="w-14 h-16 mr-1" /> / Express
                </div>
            )}
            {content === 'js' && <FaJs className="w-14 h-16" />}
            {content === 'git' && <FaGit className="w-14 h-16" />}
            {content === 'rtl' && <div>React testing library</div>}
        </div>
    )
}

export default SkillContent
