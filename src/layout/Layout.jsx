import SidebarLeft from "../sidebar/SidebarLeft.jsx";
import MainContent from "../main/MainContent.jsx";
import SidebarRight from "../sidebar/SidebarRight.jsx";

export default function Layout() {
  return (
    <div className="grid grid-cols-[260px_1fr_320px] min-h-screen gap-4 p-4">
      <SidebarLeft />
      {/* <MainContent /> */}
      {/* <SidebarRight /> */}
    </div>
  );
}
