import { useState } from "react";

export default function Auth({ supabase }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert("Error: " + error.message);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900 font-sans">
      <form onSubmit={handleLogin} className="bg-neutral-800 p-8 rounded-xl shadow-xl w-full max-w-sm flex flex-col gap-5 text-white">
        <div className="flex justify-center mb-2">
            <img src="/assets/logo.png" alt="Logo" className="h-20" />
        </div>
        <h2 className="text-2xl font-bold text-center text-teal-400">Admin Login</h2>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          required 
          className="p-3 rounded bg-neutral-700 outline-none border border-neutral-600 focus:border-teal-500" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          required 
          className="p-3 rounded bg-neutral-700 outline-none border border-neutral-600 focus:border-teal-500" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <button 
          disabled={loading} 
          className="bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 rounded mt-2 transition-colors disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
