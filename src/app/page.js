import { supabaseServer } from "@/utils/supabase/server";
import MenuClient from "@/components/MenuClient";

export const revalidate = 0;

export default async function Home() {
  // Fetch categories
  const { data: categories } = await supabaseServer
    .from("categories")
    .select("*")
    .order("order", { ascending: true });

  // Fetch products
  const { data: products } = await supabaseServer
    .from("products")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <MenuClient 
      categories={categories || []} 
      products={products || []} 
    />
  );
}
