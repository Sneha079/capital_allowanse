export default function ClientsideBar() {
  const menuItems = [
    "General",
    // "Address and Contact",
    // "Administration",
    // "Personal",
    // "Work Schedule",
  ];

  return (
    <div className="w-[300px] bg-white border border-gray-100 rounded-md overflow-hidden shadow-sm">
      {menuItems.map((item, index) => (
        <div
          key={item}
          className={`flex items-center justify-between px-5 py-5 border-b cursor-pointer transition
            ${
              index === 0
                ? "bg-teal-50 text-teal-700 font-medium"
                : "text-gray-500 hover:bg-gray-50"
            }`}
        >
          <span>{item}</span>
          <span>›</span>
        </div>
      ))}
    </div>
  );
}
