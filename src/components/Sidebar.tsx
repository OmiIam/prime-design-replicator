
import React, { useState, useEffect } from "react";
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
  Moon,
  Menu,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";

const Sidebar = () => {
  // State for mobile sidebar visibility
  const [isOpen, setIsOpen] = useState(false);
  
  // State for desktop sidebar collapsed/expanded state
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // State for theme (though we won't implement full theme functionality yet)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Close sidebar when screen size changes to prevent layout issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden text-foreground"
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-sidebar z-50 transition-all duration-300 ease-in-out shadow-xl 
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "w-20" : "w-64"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and collapse button */}
          <div className={`flex items-center p-4 ${isCollapsed ? "justify-center" : "justify-between"}`}>
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/655cd7a9-fd81-4011-b207-e204804c2e4d.png" alt="PrimeTrade Logo" className="w-8 h-8" />
                <span className="text-sidebar-foreground font-bold text-lg">PrimeTrade</span>
              </div>
            )}
            {isCollapsed && (
              <img src="/lovable-uploads/655cd7a9-fd81-4011-b207-e204804c2e4d.png" alt="PrimeTrade Logo" className="w-8 h-8" />
            )}
            
            {/* Desktop collapse button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleCollapse}
              className="hidden md:flex text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          {/* Theme toggle */}
          <div className={`px-4 py-3 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
            {!isCollapsed && <span className="text-sidebar-foreground text-sm">Theme</span>}
            <div className="flex items-center space-x-2">
              {!isCollapsed && <Sun className="w-4 h-4 text-sidebar-foreground" />}
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={setIsDarkMode} 
                className="data-[state=checked]:bg-sidebar-primary"
              />
              {!isCollapsed && <Moon className="w-4 h-4 text-sidebar-foreground" />}
            </div>
          </div>

          {/* Language selector - simplified for now */}
          {!isCollapsed && (
            <div className="px-4 py-2">
              <div className="text-sidebar-foreground text-xs mb-1">LANGUAGE</div>
              <div className="flex items-center">
                <Toggle variant="outline" className="bg-sidebar-accent text-sidebar-foreground text-sm rounded-md">
                  English
                </Toggle>
              </div>
            </div>
          )}
          
          {/* Divider */}
          <div className="my-2 border-t border-sidebar-border opacity-30" />
          
          {/* Menu items */}
          <div className="flex-1 overflow-y-auto scrollbar-none">
            <nav className="px-2">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`flex items-center rounded-md transition-colors ${
                        isCollapsed 
                          ? "justify-center p-3 hover:bg-sidebar-accent" 
                          : "px-4 py-2.5 hover:bg-sidebar-accent"
                      }`}
                    >
                      <item.icon className={`${isCollapsed ? "w-5 h-5" : "w-5 h-5 mr-3"} text-sidebar-foreground`} />
                      {!isCollapsed && <span className="text-sidebar-foreground text-sm">{item.label}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            {!isCollapsed && (
              <div className="text-xs text-sidebar-foreground/70 text-center">
                © 2024 PrimeTrade
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content spacer - creates space for sidebar when expanded */}
      <div className={`transition-all duration-300 md:block hidden ${isCollapsed ? "w-20" : "w-64"}`}></div>
    </>
  );
};

export default Sidebar;

