import react from "react";
import ItemIMG from "../../../../assets/amenity_placeholder.png";
export default function UnitsTRow({ title, buildings, units }) {
  return (
    <tr className="hover:bg-grey-lighter">
      <td className="py-4 px-6 border-b border-grey-light">
        <input type="checkbox" className="w-[18px] h-[18px]" />
      </td>
      <td className="py-2 px-4 border-b border-grey-light min-w-[90px]">
        <img className="rounded-md" src={ItemIMG} alt="Item image" />
      </td>
      <td className="py-4 px-6 border-b border-grey-light w-full">{title}</td>
      <td className="py-4 px-6 border-b border-grey-light text-center">
        {buildings}
      </td>
      <td className="py-4 px-6 border-b border-grey-light">{units}</td>
    </tr>
  );
}
