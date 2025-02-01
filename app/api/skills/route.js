// app/api/skills/route.js

export async function GET() {
  return new Response(
    JSON.stringify({
      skills: [
        {
          id: 1,
          name: "Node.js",
          icon: "https://uploadkon.ir/uploads/8a3601_25nodejs-icon.svg", // مسیر آیکون
          progress: 80,
          description:
            "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        {
          id: 2,
          name: "Next.js",
          icon: "https://uploadkon.ir/uploads/f43d01_25nextjs-icon.svg",
          progress: 75,
          description:
            "A React framework for building server-side rendered apps and static websites.",
        },
        {
          id: 3,
          name: "React.js",
          icon: "https://uploadkon.ir/uploads/409f01_25reactjs-icon.svg",
          progress: 70,
          description: "A JavaScript library for building user interfaces.",
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
