
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="flex items-center justify-between py-4 border-b">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="ADH Painting Logo" className="h-12" />
          <h1 className="text-2xl font-bold">ADH Painting LLC</h1>
        </div>
        <div className="text-right">
          <p className="text-sm">Call: <a href="tel:2159135762" className="text-blue-600">215-913-5762</a></p>
          <p className="text-sm">Email: <a href="mailto:Anthony@adhpainting.org" className="text-blue-600">Anthony@adhpainting.org</a></p>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Professional Painting Services</h2>
        <p className="mb-2 font-medium text-green-700">Veteran Owned & Operated</p>
        <p className="mb-6 max-w-3xl">
          At ADH Painting LLC, we specialize in residential and commercial painting services across Pennsylvania and New Jersey. Whether it’s interior, exterior, or specialty painting, we deliver high-quality results with a professional touch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Interior Painting" description="Walls, ceilings, trim, and more—all finished with clean lines and premium products." />
          <ServiceCard title="Exterior Painting" description="Boost your curb appeal with weather-resistant finishes and sharp detailing." />
          <ServiceCard title="Cabinet & Trim Refinishing" description="We restore the beauty of your cabinetry and trim work with precision and care." />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <p className="mb-4">Stay connected for updates, tips, and project highlights:</p>
        <div className="flex gap-6 text-blue-600">
          <a href="https://facebook.com/adhpainting" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/adhpainting" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>

      <footer className="mt-16 border-t pt-6 text-sm text-center">
        &copy; {new Date().getFullYear()} ADH Painting LLC. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="border rounded-2xl shadow p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
