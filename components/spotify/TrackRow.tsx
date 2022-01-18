import Image from "next/image";

type TrackProps = {
  num: number;
  imgSrc: string;
  title: string;
  album: string;
  artist: string;
  dateAdded: string;
  length: string;
};

function TrackRow(props: TrackProps) {
  return (
    <div className="flex text-gray-500 items-center">
      <div className="p-2 w-8 flex-shrink-0">{props.num}</div>
      <div className="p-2 w-full flex items-center">
        <Image src={props.imgSrc} height="52" width="52" />
        <div className="ml-4">
          <p className="text-white">{props.title}</p>
          <p className="text-gray-500">{props.artist}</p>
        </div>
      </div>
      <div className="p-2 w-full">{props.album}</div>
      <div className="p-2 w-full">{props.dateAdded}</div>
      <div className="p-2 w-8 flex-shrink-0">{props.length}</div>
    </div>
  );
}

export default TrackRow;
