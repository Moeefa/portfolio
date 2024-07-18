import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import Icons from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center justify-center min-h-screen h-full w-full">
      <div className="bg-secondary rounded-3xl shadow-box h-[36rem] w-96 flex flex-col p-6 gap-1 items-center relative">
        <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-t from-stone-700 to-slate-500 rounded-t-3xl shadow-box"></div>
        <Avatar className="size-16 border-4">
          <AvatarImage src="/avatar.jpeg" alt="avatar" />
          <AvatarFallback className="bg-black">LH</AvatarFallback>
        </Avatar>

        <div className="mt-4 w-full flex items-center justify-center gap-3">
          <Link
            href="https://open.spotify.com/user/9mi9fvoe3ejw9uwiruxtw0iir?si=02587d62b0744ccd"
            className="hover:scale-105 transition-all"
          >
            <Image
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
              alt="spotify"
              width={32}
              height={32}
              unoptimized
            />
          </Link>

          <Link
            href="https://www.instagram.com/schneider_com_x/"
            className="hover:scale-105 transition-all"
          >
            <Image
              src="/icons/instagram.png"
              alt="spotify"
              width={32}
              height={32}
              unoptimized
            />
          </Link>

          <Link
            href="https://github.com/Moeefa"
            className="hover:scale-105 transition-all"
          >
            <Icons.Github size="32" />
          </Link>
        </div>
      </div>
    </div>
  );
}
