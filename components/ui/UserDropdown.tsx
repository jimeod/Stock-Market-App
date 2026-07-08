"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import { Logout01Icon } from "@hugeicons/core-free-icons";
import NavItems from "./NavItems";

const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = async (): Promise<void> => {
    router.push("/sign-in");
  };

  const user = {
    name: "John",
    email: "contact@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://i.pinimg.com/736x/0b/6c/44/0b6c44a2bb3e369362c57911c66fbcc9.jpg" />
          <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>

        <div className="hidden md:flex flex-col items-start">
          <span className="text-base font-medium text-gray-400">
            {user.name}
          </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-gray-400">
        <div className="flex relative items-center gap-3 py-2 px-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://i.pinimg.com/736x/0b/6c/44/0b6c44a2bb3e369362c57911c66fbcc9.jpg" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>

            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <HugeiconsIcon
            icon={Logout01Icon}
            className="h-4 w-4 mr-2 hidden sm:block"
          />
          Logout
        </DropdownMenuItem>

        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />

        <nav>
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
