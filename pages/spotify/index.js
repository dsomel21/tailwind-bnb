import Image from "next/image";
import {
  PlayIcon,
  DownloadIcon,
  DotsHorizontalIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import TrackRow from "../../components/spotify/TrackRow";

const tracks = [
  {
    title: "Everyone Comes to Life",
    artist: "Goonies Never Say Die",
    album: "In A Forest Without Trees",
    dateAdded: "June 24, 2021",
    length: "4:16",
    imgSrc:
      "https://img.discogs.com/3Z-6dlq0j6DgpsbbmAc5pWRAEdU=/fit-in/595x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2792091-1301230726.jpeg.jpg",
  },
  {
    title: "Wake Me Up When September Ends",
    artist: "Green Day",
    album: "American Idiot",
    dateAdded: "June 24, 2021",
    length: "4:46",
    imgSrc:
      "https://img.discogs.com/AXZRAwcNYdqqbhPeUWChPx4e4Tw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-973706-1488163916-8517.jpeg.jpg",
  },
  {
    title: "I Know, I Know, I Know",
    artist: "Goonies Never Say Die",
    album: "In A Forest Without Trees",
    dateAdded: "June 24, 2021",
    length: "6:00",
    imgSrc:
      "https://img.discogs.com/3Z-6dlq0j6DgpsbbmAc5pWRAEdU=/fit-in/595x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2792091-1301230726.jpeg.jpg",
  },
  {
    title: "How to Save a Life",
    artist: "The Fray",
    album: "How To Save A Life",
    dateAdded: "June 24, 2021",
    length: "4:23",
    imgSrc:
      "https://img.discogs.com/dxbHl3e_JOcp5TNqhd7CXg_3dnk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3975798-1502408865-8742.jpeg.jpg",
  },
  {
    title: "Hey There Delilah",
    artist: "Plain White T's",
    album: "All That We Needed",
    dateAdded: "July 7, 2021",
    length: "3:53",
    imgSrc:
      "https://img.discogs.com/v-P_AT05g5cHGGKtT5ulaUdyED4=/100x100/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-764842-1591398632-3180.jpeg.jpg",
  },
  {
    title: "Santa Monica",
    artist: "Theory Of A Deadman",
    album: "Gasoline (Special Edition)",
    dateAdded: "July 7, 2021",
    length: "4:07",
    imgSrc:
      "https://img.discogs.com/p1FpFyC44d6Mf3uWV2JPirfayqk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1835789-1246716350.jpeg.jpg",
  },
  {
    title: "Your Love Is a Lie",
    artist: "Simple Plan",
    album: "Simple Plan",
    dateAdded: "July 8, 2021",
    length: "3:42",
    imgSrc:
      "https://img.discogs.com/IGePVnPTGxd6NaEttLxLMi09g48=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7352616-1459051024-4879.jpeg.jpg",
  },
  {
    title: "Californication",
    artist: "Red Hot Chilli Peppers",
    album: "Californication (Deluxe Edition)",
    dateAdded: "August 4, 2021",
    length: "5:30",
    imgSrc:
      "https://img.discogs.com/Z8EVk0ZnqwUaIglUDuxTzWpV_Mw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1266804-1461290216-7010.jpeg.jpg",
  },
  {
    title: "Scar Tissue",
    artist: "Red Hot Chilli Peppers",
    album: "Californication (Deluxe Edition)",
    dateAdded: "August 4, 2021",
    length: "3:36",
    imgSrc:
      "https://img.discogs.com/Z8EVk0ZnqwUaIglUDuxTzWpV_Mw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1266804-1461290216-7010.jpeg.jpg",
  },
  {
    title: "By The Way",
    artist: "Red Hot Chilli Peppers",
    album: "By The Way (Deluxe Edition)",
    dateAdded: "August 4, 2021",
    length: "4:42",
    imgSrc:
      "https://img.discogs.com/qI9Fcf12P9J8FXZMkkfFwJIkmqg=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-681721-1149476525.jpeg.jpg",
  },
  {
    title: "Vana",
    artist: "Jatinder Singh Durhailay, Suren Seneviratane",
    album: "Petit Oiseau",
    dateAdded: "Sep 3, 2021",
    length: "3:32",
    imgSrc:
      "https://img.discogs.com/qI9Fcf12P9J8FXZMkkfFwJIkmqg=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-681721-1149476525.jpeg.jpg",
  },
  {
    title: "Come Clean",
    artist: "Hilary Duff",
    album: "Metamorphosis",
    dateAdded: "Oct 29, 2021",
    length: "3:35",
    imgSrc:
      "https://img.discogs.com/qI9Fcf12P9J8FXZMkkfFwJIkmqg=/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-681721-1149476525.jpeg.jpg",
  },
];

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
      <div>
        {/* Table Heading */}
        <div className="flex text-gray-600">
          <div className="p-2 w-8 flex-shrink-0">#</div>
          <div className="p-2 w-full">Title</div>
          <div className="p-2 w-full">Album</div>
          <div className="p-2 w-full">Date</div>
          <div className="p-2 w-8 flex-shrink-0">Time</div>
        </div>

        {/* 10 Tracks Below */}
        {tracks.map((track, index) => {
          return (
            <TrackRow
              num={index + 1}
              title={track.title}
              imgSrc={track.imgSrc}
              artist={track.artist}
              album={track.album}
              dateAdded={track.dateAdded}
              length={track.length}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Spotify;
