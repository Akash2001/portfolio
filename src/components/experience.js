import { useState } from "react"
import { experiences } from "../data"

export const Experience = () => {
    const [areDetailsCollapsed, setAreDetailsCollapsed] = useState(Array.from({ length: experiences.length }, (_, i) => true));
    
    const handleToggleCollapse = (index) => {
        let temp = [...areDetailsCollapsed];
        temp[index] = !temp[index];
        setAreDetailsCollapsed(temp);
    }

    return (
        <div id="mySkills">
            Experience : <br />
            {
                experiences.map((experience, i) => {
                    return (
                        <div className="mb-2" key={i}>
                            <div className="mb-1 cursor-pointer" onClick={(e)=> handleToggleCollapse(i)}>
                                <div className="bold-txt">
                                    <div>{experience.org} - {experience.role}</div>
                                </div>
                                <div className="text-small bold-txt">
                                    {experience.location}
                                    {' | '}
                                    {experience.duration}
                                </div>
                            </div>
                            {!areDetailsCollapsed[i] ? (<ul>
                                {experience.details.map((item, j) => {
                                    return <li key={i + j}>{item}</li>
                                })}
                            </ul>) : (<></>)}
                        </div>
                    )
                })
            }
        </div>
    )
}