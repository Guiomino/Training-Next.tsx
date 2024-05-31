// Authentification.tsx

"use client"

import React, { useEffect, useState } from "react";

const Authentification: React.FC = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (
            (mail !== "email@mail.com" && mail !== "") ||
            (password !== "0123" && password !== "")
        ) {
            setError(true);
        } else {
            setError(false);
        }
    }, [mail, password]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <h2>Authentification</h2>
            <div>
                {error && <h1>Error</h1>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="mail"
                        placeholder="email@mail.com"
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="0123"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button>Login</button>
                </form>
            </div>
            <hr />
        </>
    );
};

export default Authentification;

// Formulaire de connexion avec validation :
// Crée un formulaire de connexion avec des champs pour l'email et le mot de passe.
// Utiliser useState pour gérer les valeurs des champs du formulaire et les messages d'erreur.
// Utiliser useEffect pour valider les entrées et afficher des messages d'erreur
// lorsque l'utilisateur quitte un champ (onBlur).
