import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        objectFit="cover"
        layout="fill"
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-xl">Not sure where to go? Perfect.</p>
        <button className="bg-white shadow-sm px-10 py-4 rounded-full my-5 font-bold hover:shadow-xl active:scale-95 transition-all">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F019C] to-[#C6017E]">
            I'm flexible
          </span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
