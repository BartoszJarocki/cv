"use client"

import {  FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/theme-context';
import { MoonIcon, SunIcon } from 'lucide-react';

const sections = [
  { key: 'aboutMe', label: 'About Me' },
  { key: 'workExperience', label: 'Work Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
  { key: 'projects', label: 'Projects' },
];

type HeaderButtonProps = {
  label: string;
  darkMode: boolean;
};

type DarkModeButtonProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const HeaderButton: FC<HeaderButtonProps> = ({ label, darkMode }) => (
  <ScrollLink
    to={label}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <button
      className={cn(
        'text-xs md:text-sm',
        darkMode ? 'text-white' : 'text-black hover:text-gray-800'
      )}
    >
      {label}
    </button>
  </ScrollLink>
);

const DarkModeButton: FC<DarkModeButtonProps> = ({ darkMode, toggleDarkMode }) => (
  <div className="cursor-pointer px-12" onClick={toggleDarkMode}>
    {darkMode ? <MoonIcon size={20} /> : <SunIcon size={20} />}
  </div>
);

export const Header: FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <header className="w-full bg-white flex justify-between items-center h-9 border-b z-50 sticky top-0 px-4 sm:px-0 md:px-0 lg:px-0">
        <div className="w-full max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {sections.map((section) => (
              <HeaderButton key={section.label} label={section.label} darkMode={darkMode} />
            ))}
          </div>

          <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>
      <div className="h-0.5 w-full border-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400"></div>
    </>
  );
};

