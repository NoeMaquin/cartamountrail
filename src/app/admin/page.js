"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Auth from "@/components/Auth";
import AdminDashboard from "@/components/AdminDashboard";

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div className="p-10 text-center text-white h-screen bg-neutral-900 flex items-center justify-center">Cargando administrador...</div>;

  if (!session) {
    return <Auth supabase={supabase} />;
  }

  return <AdminDashboard supabase={supabase} session={session} />;
}
