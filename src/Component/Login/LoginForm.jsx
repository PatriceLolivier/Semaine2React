import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            setError('Email ou mot de passe incorrect');
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Vous devez être connecté pour voir les posts des utilisateurs !</h1>
            <div className="flex mt-5 border border-red-500 rounded-md p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
                    {error && <p className="text-red-500">{error}</p>}
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" 
                        className="border border-red-500 rounded-md p-2" 
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe" 
                        className="border border-red-500 rounded-md p-2" 
                    />
                    <button 
                        type="submit"
                        className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
