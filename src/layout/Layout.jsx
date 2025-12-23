import SidebarLeft from "../sidebar/SidebarLeft.jsx";
import MainContent from "../main/MainContent.jsx";
import SidebarRight from "../sidebar/SidebarRight.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <div className="flex-1 p-4">
        <div className="grid grid-cols-[260px_1fr_320px] gap-4">
          <SidebarLeft />
          <MainContent />
          <SidebarRight />
        </div>
      </div>
      <Footer />
    </div>
  );
}
