import Image from "next/image"

function MediumCard({img, title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
            <Image src={img} layout="fill" className="rounded-xl"/>
        </div>
        <div className="text-2xl mt-3">{title}</div>
      
    </div>
  )
}

export default MediumCard;
