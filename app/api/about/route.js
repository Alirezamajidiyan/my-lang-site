// /app/api/about/route.js

export async function GET(req) {
  // داده‌های پروفایل که می‌خواهید برگردانید
  const profileData = {
    name: "Alireza Majidian", // اسم
    description:
      "A passionate web developer specializing in Next.js, React, and Tailwind CSS.",
    skills: {
      nextJs: "Next.js",
      tailwind: "Tailwind CSS",
      MernStack: "Mern Stack",
      react: "React",
    },
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://www.linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
    },
  };

  return new Response(JSON.stringify(profileData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
