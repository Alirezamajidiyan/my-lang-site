export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700">در حال بارگذاری...</h1>
        <div className="mt-4 w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
