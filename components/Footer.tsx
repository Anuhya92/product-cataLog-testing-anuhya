export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-600 text-white py-6 mt-8" role="contentinfo">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xl font-bold mb-2">
          © {year}  Your First Shopping Partner. All rights reserved.

        </p>
        
      </div>
    </footer>
  );
}
