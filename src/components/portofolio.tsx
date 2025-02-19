import portofolioData from '../app/data/portofolio.json'

export function Portofolio () {
    return (
        <section id="portofolio" className="lg:max-w-5xl lg:mx-auto">
            <h2 className="uppercase text-blue-500">Portofolio</h2>
            <h3 className="dark:text-white font-bold text-3xl mt-2">This is my project so far</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {portofolioData.map((item,index) => {
                    return(
                        <div className='flex flex-col justify-between bg-gray-100 dark:bg-gray-700 px-10 py-5 my-5 rounded-md' key={index}>
                            <div>
                                <h4 className='dark:text-white text-xl font-semibold my-2'>{item.title}</h4>
                                <p className='dark:text-white my-2'>{item.description}</p>
                            </div>
                            <a 
                                href={item.linkProject}
                                target='_blank'
                                className="w-full bg-[#D8E5F5]  text-[#3C8CEA] flex justify-center items-center py-3 rounded-md">
                                <span className=" font-bold">Go to Project</span>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}