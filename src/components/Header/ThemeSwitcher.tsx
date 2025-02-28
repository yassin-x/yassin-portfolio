"use client";
import useTheme from "@/hooks/useTheme";
import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Themes } from "@/constants/enums";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="p-4 rounded-full"
        variant={"ghost"}
      >
        {theme === Themes.DARK ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
}
