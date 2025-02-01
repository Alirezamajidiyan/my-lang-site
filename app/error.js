"use client"; // مهم است که از این دستور استفاده کنید

import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // اینجا می‌توانید کدهای مربوط به خطا را که می‌خواهید نمایش دهید بنویسید.
    setErrorMessage("a error in develope mode");
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Error</h1>
        <p className="text-lg text-gray-700">{errorMessage}</p>
      </div>
    </div>
  );
}
