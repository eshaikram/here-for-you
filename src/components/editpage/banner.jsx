"use client";
import Image from "next/image";
import PageSettings from "@/app/sidebar/page";
import { useState } from "react";

export default function Bannar({ showButtons = true }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="my-layout">
      <div className="bannar">
        <Image src="/images/background.jpg" width={1350} height={500} alt="#" />
      </div>

      {showButtons && (
        <div className="fixed-buttons">
          <button className="btn6" onClick={() => setIsSidebarOpen(true)}>
            <i className="fa-solid fa-sliders"></i> Page Setting
          </button>
          {isSidebarOpen && <PageSettings isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}
          <button className="btn6">
            <i className="fa fa-arrow-left"></i> Back To Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
