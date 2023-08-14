import React from 'react'
import Dash from './Dash'
import Image from 'next/image'
import grid__1 from '../../public/grid__1.png'
import grid__2 from '../../public/grid__2.png'
import grid__3 from '../../public/grid__2.png'


const cardData = [
    {
        title: "Garrlic paste Test",
        description: "Lore is a body of knowledge or tradition that is passed down among members of a culture", image: grid__1
    },
    {
        title: "Tomato paste Test",
        description: "Lore is a body of knowledge or tradition that is passed down among members of a culture", image: grid__2
    },
    {
        title: "Patato paste Test",
        description: "Lore is a body of knowledge or tradition that is passed down among members of a culture", image: grid__3
    },
]

const Features = () => {


    return (
        <div className='container pt-40'>
            <h1 className="text-6xl font-bold text-black">Our </h1>
            <h1 className="text-6xl  font-bold text-black pt-2">Feautures <span className="text-orange-900">Food</span></h1>

            <p className="max-w-[550px] pt-10 text-gray-700">Lore is a body of knowledge or tradition that is passed down among members of a culture, usually orally. It's the lore in "folklore," and responsible
             </p>

            <Dash />

            <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10  ">
                {cardData.map((data) => (
                    <div className="w-fit mx-auto self-end">
                        <Image
                            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                            src={data.image}
                            width={300}
                            height={600}
                            alt="grid"
                        />
                        <div className='space-y-4'>
                            <Dash />
                            <p className="font-bold text-3xl text-black ">{data.title}</p>
                            <p className="text-black text-[14px] ">{data.description}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Features