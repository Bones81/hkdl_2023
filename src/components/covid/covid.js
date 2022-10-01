import './covid.css'

const Covid = () => {
    return (
        <section id="covid-clearance">
            <h2>COVID clearance: flight, arrival, and beyond</h2>
            <h3 className='special-note'>Most recent update: 10/1/22. Double-check official COVID-clearance resources for the most accurate and up-to-date info.</h3>
                <h4 class="special-note">As of Sept. 26th, HK has significantly reduced the COVID-related quarantine and testing requirements for international visitors. The good news is: no more quarantine! The bad news is: we are still subject to "medical surveillance, self-monitoring, and compulsory testing," meaning 3 days of limited clearance and a week of daily RATs (rapid antigen tests) and 4 PCR tests (upon arrival, and on days 2, 4, and 6 after arrival).</h4>
                <h3>The HK govt policies regarding COVID clearance for overseas travellers is <a target="_blank" rel='noreferrer' href="https://www.coronavirus.gov.hk/eng/inbound-travel.html">here</a>. My cheat sheet version of this info is what follows below.</h3>
                <p>Short version - You need your vaccination record and a green QR code from <a href="https://www.chp.gov.hk/hdf/" target="_blank" rel='noreferrer'>the official HK Health Declaration Form</a>, which expects you to have a negative result from a RAT within 24 hours of your HK flight.</p>
                <p>Longer version - In order to be allowed onto our flights to HK, we are required to provide to the airline (and later to HK Immigration) the following:</p>
                <ol className='covid-ol'>
                    <li>A <strong>vaccination record</strong> with your name as it appears on your passport, showing you are fully vaccinated with <a href="https://www.coronavirus.gov.hk/pdf/list_of_recognised_covid19_vaccines.pdf" target="_blank" rel='noreferrer'>approved vaccines</a>. If you received your vaccine jabs in the US, this almost certainly means we are talking about at least two doses of Pfizer or Moderna. 
                    <p class="special-note"><em><strong>IMPORTANT</strong> side note: A booster third dose of either vaccine is recommended, as the booster may be required by restaurants and bars before they will let you in!</em> 
                    <br/><br/>
                    While only 2 doses are required to enter HK and receive our 'Provisional Vaccine Pass,' I'm finding reports of people who were still denied entry to some restaurants, bars, and shops with their Provisional Vaccine Pass because their vaccination record did not reflect 3 doses, the number required for the normal Vaccine Pass. 
                    <br/><br/>
                    Apparently, the managers of these places are terrified of being fined if they break the laws surrounding this and err on the side of protecting themselves if there is any doubt about your status. 
                    <br/><br/>
                    However, as long as we’ve received 3 doses, access to all of HK through the Vaccine Pass system should be relatively straightforward, as far as I can tell. Here is <a href="https://www.coronavirus.gov.hk/eng/vaccine-pass.html" target="_blank" rel="noreferrer">the official Vaccine Pass webpage, with all the details you could ever want</a>.</p></li>
                    <li>A <strong>green QR code</strong> from <a href="https://www.chp.gov.hk/hdf/" target="_blank" rel="noreferrer">the official HK Health Declaration form</a>.</li> 
                    <li>To obtain a green code, you will be asked to <strong>self-administer a RAT</strong> (rapid antigen test) and <strong>declare that you have tested negative within 24 hours</strong> of your HK flight. 
                    <p className="special-note">Having a picture of the negative RAT result next to your passport info page is recommended.</p>
                    <p className="special-note">It is not required that this RAT be supervised. However, some have reported that ill-informed airline staff are occasionally refusing passengers unless they have had a supervised test. Hopefully, by the time we need to fly, airlines will be more aware of the new policies. The vast majority of reports I have seen suggest that all the airlines will care about is a green QR code. And you get that code by self-reporting a negative RAT result.</p>
                    </li>
                </ol>
                
            <h3>Arrival in HK, COVID testing/protocol</h3>
                <h4 className='special-note'>Upon arrival, we will submit our Health Declaration, undergo our 1st PCR test (day 0) and be released to immigration. Step-by-step details below.</h4>
                <ol className='covid-ol'>
                    <li>Upon arrival in HK, officials will scan the same green Health Declaration QR code you needed to board the plane, and then we will be given a PCR test.</li>
                    <li>We will not be required to wait for the test result at the airport. We will be able to go through immigration clearance, claim our baggage, find a Disney rep if one is there to meet us, and leave.</li>
                    <li>We will receive a Notification of Medical Surveillance and Provisional Vaccine Pass QR code electronically.</li>
                    <li>Here are the <a href="https://www.coronavirus.gov.hk/eng/tested-positive.html" target="_blank" rel="noreferrer">details for anyone who tests positive</a> at any point during the 7 days after we arrive.</li>
                    <li>You will need to <strong>download the <a target="_blank" rel='noreferrer' href="https://www.leavehomesafe.gov.hk/en/">LeaveHomeSafe app</a></strong> onto the phone you intend to use in HK. This contact-tracing app will store your Provisional Vaccine Pass QR code, which will give you access to restricted places in HK, like restaurants and bars. <strong>Be sure to associate your LeaveHomeSafe account with your Provisional Vaccine Pass</strong> and not your Vaccination Record, as the Provisional Vaccine Pass grants you more access than our Vaccination Record alone.
                    </li>
                </ol>
            <h3>The 7 days after arrival</h3>
                <h4 className='special-note'>We will be expected to undergo daily RATs for 7 days and undergo additional PCR tests <em>after</em> the RATs on days 2, 4, and 6.</h4>
                <p>For the first 3 days, we will have an Amber QR code on our Vaccine Pass. Amber basically means we are subject to some restrictions for those days and are not allowed to enter "high-risk premises involving mask-off or group activities." However, we will still be able to take public transport, go to work, and enter supermarkets/markets.</p>
                <p>As long as our tests stay negative, our Vaccine Pass should automatically update to Blue status via Internet connection after the required 3 days are complete. The Blue QR code is the highest access and clearance level, granting access to any place we would need or want to go. However, we still must submit the results of the remaining 4 days of RAT & PCR tests.</p>
                <p>It is not clear yet whether Disney will be arranging the RAT and PCR tests we must undergo during these 7 days after we arrive. It is possible we will have to utilize HK's "community testing centres" or "mobile specimen collection stations" to undergo some or all of these tests.</p>
                <p>Here is a graphic which nicely lays out the testing schedule after we arrive and summarizes most of the above info:</p>
                <img className="list-pic" src='assets/hk_arrival_testing.jpg' alt='infographic on HK arrival testing schedule' />
        </section>
    )
}

export default Covid