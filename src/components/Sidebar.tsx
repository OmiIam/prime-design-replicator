
import React, { useState } from "react";
import { 
  Home, 
  HelpCircle, 
  UserPlus, 
  User, 
  Mail, 
  Users, 
  Copy, 
  FileText, 
  Bitcoin, 
  BarChart3, 
  Sun,
  Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: HelpCircle, label: "FAQs" },
    { icon: User, label: "Sign In" },
    { icon: UserPlus, label: "Sign Up" },
    { icon: Mail, label: "Contact" },
    { icon: Users, label: "About Us" },
    { icon: Copy, label: "Copy Trading" },
    { icon: FileText, label: "Cookie Policy" },
    { icon: Bitcoin, label: "Crypto Mining" },
    { icon: BarChart3, label: "Forex Trading" },
    { icon: FileText, label: "Privacy Policy" },
    { icon: Bitcoin, label: "Bitcoin Mining" },
    { icon: Bitcoin, label: "Crypto Trading" },
    { icon: BarChart3, label: "Stocks Trading" },
    { icon: Bitcoin, label: "Dogecoin Mining" }
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </Button>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:relative md:z-0 overflow-y-auto`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Logo area */}
          <div className="flex items-center justify-center mb-8 mt-4">
            <div className="text-primary text-xl font-bold">
              <img src="/lovable-uploads/655cd7a9-fd81-4011-b207-e204804c2e4d.png" alt="PrimeTrade Logo" className="w-16 h-16 mb-2" />
              <div>LANGUAGE: EN</div>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="flex items-center mb-6 px-4">
            <Sun className="w-5 h-5 mr-2" />
            <span>Light</span>
          </div>

          {/* Menu items */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm hover:bg-secondary/20 rounded-md transition-colors"
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
