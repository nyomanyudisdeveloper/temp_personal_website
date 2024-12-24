import portofolioData from '../app/data/portofolio.json'

export function Portofolio () {
    return (
        <div className="lg:max-w-5xl lg:mx-auto">
            <h1 className="uppercase text-blue-500">Portofolio</h1>
            <h1 className="font-bold text-3xl mt-2">This is my project so far</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {portofolioData.map((item,index) => {
                    return(
                        <div className='flex flex-col justify-between bg-gray-100 px-10 py-5 my-5 rounded-md' key={index}>
                            <div>
                                <h1 className='text-xl font-semibold'>{item.icon}</h1>
                                <h1 className='text-xl font-semibold my-2'>{item.title}</h1>
                                <p className='my-2'>{item.description}</p>
                            </div>
                            <a 
                                href={item.linkProject}
                                className="w-full bg-[#D8E5F5] text-[#3C8CEA] flex justify-center items-center py-3 rounded-md">
                                <span className=" font-bold">Go to Project</span>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}