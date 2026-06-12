import Banner from "@/components/shared/Banner";

const reports = [
  { year: "2025", href: "/pdf/2025.pdf" },
  { year: "2024", href: "/pdf/2024.pdf" },
  { year: "2023", href: "/pdf/2023.pdf" },
  { year: "2022", href: "/pdf/2022.pdf" },
];

const page = () => {
  return (
    <>
      <Banner title="Ֆինանսական հաշվետվություններ" bgImage="home-4-hero-1.webp" />
      <section className="service-details pt-80 pb-80">
        <div className="container">
          <div className="row g-3 g-xl-4 position-relative">
            <div className="col-lg-8 m-auto">
              <div className="details-left">
                <div className="details-content pt-3 mt-xl-4">
                  <h5>Ֆինանսական հաշվետվություններ</h5>
                  <p>Ընկերության ֆինանսական հաշվետվությունները կարող եք դիտել ստորև:</p>
                  <ul className="list-unstyled d-grid gap-3 mb-0">
                    {reports.map(({ year, href }) => (
                      <li key={year}>
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          Դիտել {year} թվականի ֆինանսական հաշվետվությունը
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
