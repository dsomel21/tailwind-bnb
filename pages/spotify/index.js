import Image from "next/image";
import {
  PlayIcon,
  DownloadIcon,
  DotsHorizontalIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
function Spotify() {
  return (
    <div className="bg-black min-h-screen p-10">
      <header className="flex items-end">
        <Image
          src="https://placekitten.com/g/150/150"
          height="300"
          width="300"
        />
        <div className="text-white ml-8">
          <h4 className="uppercase font-medium tracking-wide">Playlist</h4>
          <h1 className="text-8xl font-bold">Light Rock</h1>
          <div className="flex space-x-2 mt-4">
            <p>DS</p>
            <p className="text-gray-400">14 songs, 58 min 57 sec</p>
          </div>
        </div>
      </header>

      {/* Action Buttons */}
      <div className="flex justify-between my-10">
        <div className="flex items-center space-x-8">
          <PlayIcon className="h-20 text-green-500 hover:scale-105 transition-all cursor-pointer" />
          <div className="border-gray-400 p-2 border-[1px] rounded-full">
            <DownloadIcon className="h-6 text-gray-400" />
          </div>
          <DotsHorizontalIcon className="h-6 text-gray-400" />
        </div>

        <div className="flex items-center space-x-8">
          <SearchIcon className="h-6 text-gray-400" />
          <p className="text-gray-400 flex">
            Custom Order <ChevronDownIcon className="h-6 ml-5" />
          </p>
        </div>
      </div>

      {/* Song List */}
    </div>
  );
}

export default Spotify;
