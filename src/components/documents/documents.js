import './documents.css'

const Documents = () => {
    // When ready to add toggle functionality, add onClick={handleToggle} to desired elements
    // const handleToggle = () => {
    //     const docContentEl = document.querySelector('.documents-content')
    //     docContentEl.classList.toggle('docs-open')
    // }

    return (
      <section id="documents">
        <h2 className="section-title toggle-section">
          Documents: a cheat sheet.
        </h2>
        <h3 className="special-note">
          ⭐️⭐️⭐️ By this point, all of us should have received,
          signed, and completed our contracts and mailed off our visa
          application materials to Fragomen, the agency handling our immigration
          cases. The visas take 4-6 weeks to process and approve, and as of this
          update (9/13/23), in 6 weeks it will be the Wednesday before we start
          our contract. And, of course, we must have approved visas by
          then!!! ⭐️⭐️⭐️
        </h3>
        <div>
          <p>
            In the work <strong>visa application</strong> and{" "}
            <strong>contract</strong> completion process, you will be asked to
            submit many documents: some as digital files, others as hard copies,
            and some in both forms.
          </p>
          <p>
            You will likely have to submit documents to both HKDL's HR
            department and a company called Fragomen that helps us get our work
            visas from the Immigration Dept.
          </p>
          <p>
            Eventually, when you FedEx your visa application materials to HK,
            make sure you <em>save your receipt(s)</em>, and make sure you{" "}
            <em>bring those receipts with you to HK</em> so that Disney can
            reimburse you.
          </p>
          <p>
            Here is a cheat sheet to help you collect the appropriate paperwork,
            even before you receive the official emails from HK Disney's HR
            peeps requesting all these items. Especially for newbies, it may
            take a hot minute to collect everything, so I recommend starting to
            collect these materials now so that you have them somewhat ready
            when it's time to mail them or email them. You'll have to plan for
            at least 4-6 weeks processing time from the date you mail off your
            visa application materials.
          </p>
          <h4 className="special-note">
            As of 2022, Hong Kong has been issuing digital e-visas instead of
            mailing us hard copies. These e-visas come with a QR code you should
            print and also save digitally.
            <br />
            <br />
            Additionally, as of 2022, HKDL now allows you to complete your
            contract signing electronically. You may still need to print a hard
            copy of the signed contract to include with your visa application.
          </h4>
          <h3>
            Items you'll likely need in <strong>digital form</strong>:
          </h3>
          <ol className="documents-ol">
            <li>
              <span>Copy of your passport info and signature page(s)</span>
            </li>
            <li>
              (Returning carolers only){" "}
              <span>
                Copy of your previous Hong Kong visa(s) and landing slip(s).
              </span>
            </li>
            <li>
              <span>Copy of your updated CV/resume</span>
            </li>
            <li>
              <span>Copy of your driver's license</span> (if you have one)
            </li>
          </ol>
          <h3>
            Items you'll likely need <strong>hard copies</strong> of:
          </h3>
          <ol className="documents-ol">
            <li>
              <span>Passport-style photos</span>{" "}
              <em>
                You may have to purchase and take these photos at FedEx/Kinko's
                or any place that takes passport photos.
              </em>
            </li>
            <li>
              <span>
                Copy of your university degree/diploma(s) or academic
                transcript(s)
              </span>
              .{" "}
              <em>
                (This was one of the ones that took me a hot minute to find.)
              </em>
            </li>
            <li>
              If you have obtained a degree or higher qualifications in a
              full-time and locally-accredited programme in Hong Kong, please
              provide evidence and copies of your Hong Kong student visa.{" "}
              <em>(Probably doesn't apply to any of us.)</em>
            </li>
            <li>
              <span>
                Copy of your relevant training or professional certificate(s)
              </span>{" "}
              (if any).
            </li>
            <li>
              <span>Signed reference letters,</span> or copies of your signed
              employment contracts, staff identity cards, brochures, newspaper
              articles or pamphlets, etc. with your name or photos evidencing
              your relevant experience. John Hartmann has written recommendation
              letters for carolers, if you need one.
            </li>
            <li>
              <span>
                Copies of a few of your performance photos with identifying info
              </span>{" "}
              (3 to 4 is sufficient).
            </li>
            <li>
              <span>The visa application form ID990A (original required)</span> 
              <em>
                (They will provide a link to this file, arguably the most
                important document of the bunch.)
              </em>
            </li>
            <li>
              <span>Copy of your signed HKITP employment contract.</span> 
            </li>
          </ol>
          <h4 class="special-note">
            All of this is of course subject to change, and the info offered
            here is simply what previous carolers have experienced. Don't @ me
            if this year they suddenly require stuff that isn't listed on this
            webpage. 😜
          </h4>
        </div>
        <h4 className="special-note">
          Don't forget to bring your passport (Duh.), your visa QR code (both
          electronic and printed), hard copies of all your contract materials,
          and your receipt from mailing your visa application materials.
        </h4>
      </section>
    );
}

export default Documents