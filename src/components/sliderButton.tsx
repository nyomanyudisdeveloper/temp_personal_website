import Image from "next/image";

export default function SliderButton ({value=false,setValue=() => {}}) {
    return (
        <div onClick={setValue} className="relative flex flex-row justify-between bg-white border-black border-2 w-24 h-10 rounded-full">
            <div className={`${value ? 'translate-x-11' : ''} transition-transform absolute left-0 top-0 w-12 bg-slate-600 h-9 rounded-full`}></div>
            <Image
                alt="Moon"
                src={"/moon.svg"}
                width={20}
                height={20}
                className="ml-2"
            />
            <Image
                alt="Sun"
                src={"/sun.svg"}
                width={20}
                height={20}
                className="mr-2 yellow-200"
            />
        </div>
    )
}