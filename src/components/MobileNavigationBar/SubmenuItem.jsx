export default function SubMenuItem({ text, icon: Icon }) {
  return (
    <div
      className={`flex items-center rounded-lg cursor-pointer text-[15px] py-3 px-2`}
    >
      <div className={`flex items-center ml-7 color-gray text-primary`}>
        {/* <div className="mr-2">
          <svg
            width="9"
            height="3"
            viewBox="0 0 9 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.703125 2.03646V0.953125H8.28646V2.03646H0.703125Z"
              fill="#626262"
            />
          </svg>
        </div> */}
        {`${text}`}
      </div>
    </div>
  );
}
