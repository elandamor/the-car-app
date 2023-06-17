import { Car } from "~/types";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}

export default function CarDetails({ isOpen, closeModal, car }: Props) {
  return null;
}
