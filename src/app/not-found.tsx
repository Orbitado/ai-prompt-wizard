import Button from "@/components/common/Button";
export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-6xl text-primary">404</h1>
        <p className="text-2xl text-gray-600">Page not found</p>
        <p className="text-gray-600 text-xl">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
