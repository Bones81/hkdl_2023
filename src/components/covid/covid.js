import './covid.css'

const Covid = () => {
    return (
      <section id="covid-clearance">
        <h2 className="section-title">
          COVID clearance
        </h2>
        <h4 class="special-note">
          As of May 2023, Hong Kong no longer has any COVID-related vaccine or
          testing requirements restricting entry.
        </h4>
        <h3>
          The <a
            target="_blank"
            rel="noreferrer"
            href="https://www.coronavirus.gov.hk/eng/inbound-travel.html"
          >
            official HK govt policies
          </a> regarding COVID clearance for overseas
          travellers confirms this!
        </h3>
      </section>
    );
}

export default Covid