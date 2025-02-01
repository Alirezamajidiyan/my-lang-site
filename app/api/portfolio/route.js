// app/api/portfolio/route.js

export async function GET() {
  return new Response(
    JSON.stringify({
      projects: [
        {
          id: 1,
          title: "Modern Web App",
          description: "A full-stack Next.js application with Tailwind CSS.",
          category: "Web",
          image: "https://uploadkon.ir/uploads/febb01_25download.png",
          link: "https://uploadkon.ir/uploads/febb01_25download.png",
        },
        {
          id: 2,
          title: "E-Commerce Platform",
          description:
            "A fast and secure e-commerce platform with React & Node.js.",
          category: "Web",
          image: "https://uploadkon.ir/uploads/f01201_25download-2-.jpg",
          link: "https://uploadkon.ir/uploads/f01201_25download-2-.jpg",
        },
        // More projects...
      ],
      categories: ["All", "Web", "Mobile", "Design"],
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
