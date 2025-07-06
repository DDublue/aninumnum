import BackButton from "./_components/BackButton";
import ServiceGrid from "./_components/ServiceGrid";

export default async function CreatePage() {
  return (
    <section className="min-h-svh">
      <div className="container mx-auto max-w-7xl min-h-full">
        <div className="px-4 py-4">
          <BackButton variant="default" href="/" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <ServiceGrid />
        </div>
      </div>
    </section>
  )
}
