export default function MenuItem({ text, icon: Icon }) {
  return (
    <div
      className={`flex flex items-center rounded-lg cursor-pointer text-[15px] py-3 px-2`}
    >
      <Icon color={"#4B4B4B"} />
      <div className={`ml-2 color-gray text-primary`}>{text}</div>
    </div>
  );
}
