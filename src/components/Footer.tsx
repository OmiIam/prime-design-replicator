
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">PrimeTrade</h3>
            <p className="text-muted-foreground mb-4">
              Everything taught within PrimeTrade is for education purposes only. It is up to each student to implement and do the work.
            </p>
            <p className="text-muted-foreground">
              The PrimeTrade team doesn't guarantee any profits or financial success.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">SUPPORT</p>
            <p className="mb-4">info@primetrade.finance</p>
            <Button variant="outline">Login</Button>
          </div>
        </div>
        <div className="border-t border-border/30 pt-8 mt-8 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>Owned and Managed by New Era Learning LLC</p>
              <p>Distributed by our partners:</p>
              <p>Thrifty Consulting LLC</p>
              <p>800 North State St Ste 403, Dover, DE 19901</p>
              <p>Legendary Courses, Inc</p>
              <p>221 N. Broad St Middletown, DE 19709</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary">Terms & Conditions</a>
              <a href="#" className="hover:text-primary">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
