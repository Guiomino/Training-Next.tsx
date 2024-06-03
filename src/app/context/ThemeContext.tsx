// ThemeContext.tsx

"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextI {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextI | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const body = document.body;
        if (theme === 'light') {
            body.style.backgroundColor = '#ccc';
            body.style.color = '#333';
        } else {
            body.style.backgroundColor = '#333';
            body.style.color = '#ffffff';
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};


// - Définir le type Theme avec les valeurs possibles 'light' et 'dark'
// - Définir l'interface ThemeContextI avec les propriétés theme et toggleTheme

// - Créer le contexte ThemeContext avec une valeur initiale indéfinie

// - Définir le composant ThemeProvider pour fournir le contexte aux composants enfants
// - Gérer l'état du thème, initialisé à 'light'

// - Définir la fonction toggleTheme pour basculer entre 'light' et 'dark'

// - Utiliser useEffect pour appliquer les styles de thème au body du document à chaque changement de thème

// - Retourner le ThemeContext.Provider avec le contexte et les enfants

// - Définir le hook personnalisé useThemeContext pour accéder facilement au contexte
// - Vérifier que le contexte est défini avant de le retourner, sinon lancer une erreur