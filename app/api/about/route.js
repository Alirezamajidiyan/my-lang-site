import { supabase } from "@/lib/supabaseClient";

export async function GET(req) {
  try {
    // دریافت داده‌های پروفایل از جدول profiles
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
    console.log(data);
    
    if (error){
      throw error
      console.log(error);
      
    };

    // فرمت‌دهی داده‌ها به شکلی که مد نظر است
    const profileData = {
      name: data.name,
      profilePhoto: data.profilephoto,
      description: data.description,
      skills: data.skills || {},
      socialLinks: data.sociallinks || {},
    };

    return new Response(JSON.stringify(profileData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
    
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
