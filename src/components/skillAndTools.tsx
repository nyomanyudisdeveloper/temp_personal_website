import skillsData from '../app/data/skills.json'

const SkillAndTools = () => {
    return(
        <section id="skill" className='lg:max-w-5xl lg:mx-auto'>
            <h1 className="uppercase text-blue-500">Skill & Tools</h1>
            <h1 className="dark:text-white font-bold text-3xl mt-2">My Toolbox & Skills</h1>
            {skillsData.map((item,index) => {
                return (
                    <div className='my-5' key={index}>
                        <h3 className='dark:text-white text-lg font-semibold'>{index+1}. {item.title}</h3>
                        <div >
                            {item.listSkill.map((item2,index2) => {
                                return (
                                    <div
                                        className={`bg-[#FFF3EB] dark:bg-slate-600 dark:text-white px-5 py-2 mx-3 rounded-md inline-block my-2`}
                                        key={index2}>
                                        {item2}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default SkillAndTools