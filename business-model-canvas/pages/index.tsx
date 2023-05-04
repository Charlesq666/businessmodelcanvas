import Header from "@/components/Header";

export default function Home() {
  const containerClass = `p-4 bg-gray-300 rounded-md`;

  return (
    <div>
      <Header />
      <div className="">
        {/* Business Model Canvas */}
        <div className="grid grid-cols-10 grid-rows-4 gap-4 p-8">
          <div className={`col-span-2 row-span-2 ${containerClass}`}>
            <h3>Key Partnerships</h3>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Key Activities</h3>
          </div>

          <div className={`col-span-2 row-span-2 ${containerClass}`}>
            <h3>Value Propositions</h3>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Customer Relationships</h3>
          </div>

          <div className={`col-span-2 row-span-2 ${containerClass}`}>
            <h3>Customer Segments</h3>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Key Resources</h3>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Channels</h3>
          </div>

          <div className={`col-span-5 row-span-1 ${containerClass}`}>
            <h3>Revenue Streams</h3>
          </div>

          <div className={`col-span-5 row-span-1 ${containerClass}`}>
            <h3>Cost Structure</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
