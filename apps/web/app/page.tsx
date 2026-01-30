export default function RootPage() {
  return (
    <main>
      <section className="section-block">
        <div className="container">
          <h1 className="section-title">RADCOM</h1>
          <p className="section-lead">
            Choose your language to continue.
          </p>
          <div className="hero-actions">
            <a className="primary" href="/en">
              English
            </a>
            <a className="secondary" href="/ro">
              Română
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
