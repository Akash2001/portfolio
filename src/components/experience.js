import { experiences } from "../data"

export const Experience = () => {
    return (
        <div id="mySkills">
            Experience : <br />
            {
                experiences.map((experience, i) => {
                    return (
                        <div key={i}>
                            <div className="bold-txt">
                                <div>{experience.org} - {experience.role}</div>
                            </div>
                            <div className="text-small bold-txt">
                                {experience.location}
                                {' | '}
                                {experience.duration}
                            </div>
                            <ul>
                                {experience.details.map((item, j) => {
                                    return <li key={i + j}>{item}</li>
                                })}
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}