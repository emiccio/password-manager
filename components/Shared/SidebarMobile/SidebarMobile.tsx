"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { Sidebar } from "../Sidebar/Sidebar";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="bg-slate-800 text-white">
        <SheetHeader className="text-left">
          <SheetTitle className="text-white">Password manager</SheetTitle>
          <SheetDescription>
            Create and manage all of your Password
          </SheetDescription>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
