export default function NotFound() {
  return (
    <main>
      <section className="section-block">
        <div className="container">
          <h1 className="section-title">Pagina nu a fost găsită</h1>
          <p className="section-lead">
            Link-ul accesat nu există. Înapoi la homepage.
          </p>
          <a className="product-cta" href="/">
            Acasă
          </a>
        </div>
      </section>
    </main>
  );
}
