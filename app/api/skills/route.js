import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase.from("skills").select("*");

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ message: "No data found in skills table" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ skills: data }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
