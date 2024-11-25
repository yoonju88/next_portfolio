import { worksData } from '@/utils/worksData';
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Toggle from '@/components/works/Toggle';


export default async function projectDetailPage({ params }) {
    const { id } = params

    const project = worksData.find((item) => item.id === id)
    if (!project) {
        notFound()
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className=" mx-auto flex flex-wrap h-full w-auto overflow-hidden">
                    <Link href="#" className=" lg:w-[55%] overflow-hidden rounded-lg relative">
                        <Image
                            alt="ecommerce"
                            className="transform transition duration-300 rounded-lg w-full h-full object-cover object-center hover:scale-105"
                            src={project.image}
                        />
                    </Link>
                    <div className="lg:w-[45%] w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{project.type} à changer</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{project.title}</h1>
                        <p className="leading-relaxed mt-8">{project.description}</p>
                        <div className="flex mt-6 items-center border-gray-100 mb-5">
                            <div className="flex flex-col w-[95%] ">
                                <div className='flex items-center justify-between mb-3 pb-3 border-b-2 border-gray-300'>
                                    <h3 className='text-sm font-medium capitalize bb-2'>technics</h3>
                                    <Toggle tag={project.tags} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}
