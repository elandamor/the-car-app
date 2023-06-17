"use client";

import { useRouter } from "next/navigation";
import { updateSearchParams } from "~/utils";
import Button from "./Button";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

export default function ShowMore({ pageNumber, isNext }: Props) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext ? (
        <Button
          text="Show More"
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      ) : null}
    </div>
  );
}
