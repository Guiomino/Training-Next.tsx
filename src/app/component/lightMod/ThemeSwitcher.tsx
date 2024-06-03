// ThemeSwitcher.tsx

"use client"

import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <>
            <div>
                <p>Current theme: {theme}</p>
                <button onClick={toggleTheme}>Switch</button>
            </div>
        </>
    );
};

export default ThemeSwitcher;

// Importer le hook personnalisé useThemeContext
// Créer un composant ThemeSwitcher
// il récupère les ThemeContext.Provider et le définit avec le hook personnalisé useThemeContext
// il retourne ensuite les éléments qui doivent s'afficher : le theme courant + le button de switch