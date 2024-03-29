"use client";

import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CustomFilterProps } from "~/types";
import { updateSearchParams } from "~/utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateSearchParams = (title: string, value: string) => {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    router.push(newPathname);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          handleUpdateSearchParams(title, e.value);
          setSelected(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="chevron-up-down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
