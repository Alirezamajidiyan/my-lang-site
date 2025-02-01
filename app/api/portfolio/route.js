// app/api/portfolio/route.js

export async function GET() {
  return new Response(
    JSON.stringify({
      projects: [
        {
          id: 1,
          title: "Lenela Panel",
          description: "A Panel Admin for Lenela Application",
          categories: ["Web", "React"], // Multiple categories
          image:
            "https://uploadkon.ir/uploads/d3ad01_25photo-2025-02-01-21-04-57.jpg",
          link: "https://uploadkon.ir/uploads/d3ad01_25photo-2025-02-01-21-04-57.jpg",
        },
        {
          id: 2,
          title: "E-Commerce Platform",
          description:
            "A fast and secure e-commerce platform with React & Node.js.",
          categories: ["Web", "NextJs"], // Multiple categories
          image: "https://uploadkon.ir/uploads/f01201_25download-2-.jpg",
          link: "https://uploadkon.ir/uploads/f01201_25download-2-.jpg",
        },
        // More projects...
      ],
      categories: [
        { name: "All", icon: "" },
        { name: "Web", icon: "https://uploadkon.ir/uploads/76eb01_25vitejsdev-icon.svg" },
        { name: "React", icon: "https://uploadkon.ir/uploads/409f01_25reactjs-icon.svg" },
        { name: "NextJs", icon: "https://uploadkon.ir/uploads/f43d01_25nextjs-icon.svg" },
        // Add more categories with icons
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
