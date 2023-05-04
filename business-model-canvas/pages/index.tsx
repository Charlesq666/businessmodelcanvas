import Header from "@/components/Header";
import Container from "@/components/Container";

export default function Home() {
  const containerClass = `p-4 bg-gray-300 rounded-md min-w-[100px] min-h-[120px] max-h-[600px]`;

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        {/* Business Model Canvas */}
        <div className="grid grid-cols-10 grid-flow-row gap-4 p-8">
          <div className={`col-span-2 row-span-2 ${containerClass}`}>
            <h3>Key Partnerships</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Key Activities</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-2 row-span-2 ${containerClass}`}>
            <h3>Value Propositions</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Customer Relationships</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-2 row-span-2 ${containerClass}`}>
            <h3>Customer Segments</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Key Resources</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-2 row-span-1 ${containerClass}`}>
            <h3>Channels</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-5 row-span-1 ${containerClass}`}>
            <h3>Revenue Streams</h3>
            <Container>
              hello
            </Container>
          </div>

          <div className={`col-span-5 row-span-1 ${containerClass}`}>
            <h3>Cost Structure</h3>
            <Container>
              hello
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
