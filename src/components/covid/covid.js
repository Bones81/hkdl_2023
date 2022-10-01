import './covid.css'

const Covid = () => {
    return (
        <section id="covid-clearance">
            <h2 >COVID-related flying info and Cheat Sheet for arrival and COVID clearance</h2>
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
                    However, as long as we’ve received 3 doses, access to all of HK through the Vaccine Pass system should be relatively straightforward, as far as I can tell.</p></li>
                    <li>A <strong>green QR code</strong> from <a href="https://www.chp.gov.hk/hdf/" target="_blank" rel="noreferrer">the official HK Health Declaration form</a>.</li> 
                    <li>To obtain a green code, you will be asked to <strong>self-administer a RAT</strong> (rapid antigen test) and <strong>declare that you have tested negative within 24 hours</strong> of your HK flight. 
                    <p className="special-note">Having a picture of the negative RAT result next to your passport info page is recommended.</p>
                    <p className="special-note">It is not required that this RAT be supervised. However, some have reported that ill-informed airline staff are occasionally refusing passengers unless they have had a supervised test. Hopefully, by the time we need to fly, airlines will be more aware of the new policies. The vast majority of reports I have seen suggest that all the airlines will care about is a green QR code. And you get that code by self-reporting a negative RAT result.</p>
                    </li>
                </ol>
                
                
                <h4 class="special-note">And, same information one last time: A cheat sheet for what you must have before you can get on the plane (See <a href="#covid-clearance">above</a> for fuller descriptions of each item):
                    <ol className='covid-ol'>
                        <li>A vaccination record showing you're fully vaccinated.</li>
                        <li>A COVID test report that shows:</li>
                            <ul className='covid-ul'>
                                <li>Your full name, <strong>exactly as it appears on your passport</strong>. <em>Middle names matter!</em></li>
                                <li>The test is a <strong>PCR-based nucleic acid test</strong>. (PCR, RT-PCR, real time PCR, etc., see above #2b)</li>
                                <li>The <strong>date <em>and time</em></strong> that the test sample was taken, and that it was taken <strong>within 48 hours of the departure time of the leg of your flight that ends in HK</strong>.</li>
                                <li>You tested <strong>negative for COVID-19</strong>.</li> 
                            </ul>
                        <li><em>Only if #2 does not include all the required info</em>, you must provide: a letter from your lab or doctor's office that includes all the required COVID test report info, signed/stamped by the lab or office.</li>
                        <li>A <strong>lab certificate</strong> issued by your State Health Department that <em>includes a CLIA number</em>.</li>
                        <li><strong>Proof of a quarantine hotel reservation</strong> in HK. Disney should provide this to us.</li>
                        
                    </ol>
                </h4>
            <h3>Arrival in HK, COVID testing/protocol</h3>
                <h4 class="special-note">I recommend reading <a target="_blank" rel='noreferrer' href="./assets/Hong Kong Airport COVID Arrival Instructions (Aug 2020).pdf">this 3-page pdf file explaining in great detail the HK COVID-19 Travel Procedures</a>, though it is from 2020. It is filled with both instructions and useful recommendations for staying comfortable during the arrival testing process and waiting period. Here is <a target="_blank" rel='noreferrer' href="././assets/Pre Arrival and Arrival Instructions for Hong Kong as of 15 June 2020.pdf">another, smaller pdf file</a> (written up by a concerned mother of a teenaged traveler) noting the essential elements of the process.</h4>
                <p>As each of the above files mentions, you will need to download the <a target="_blank" rel='noreferrer' href="https://www.coronavirus.gov.hk/eng/stay-home-safe.html">StayHomeSafe app</a> onto the phone you intend to use in HK and fill out a <a target="_blank" rel='noreferrer' href="https://hdf.chp.gov.hk/dhehd/?lang=en-us">Health Declaration Form</a> within 24 hours of your arrival in HK.
                </p>
                <h4 class="special-note">It is possible you will have to spend one night in a hotel that is NOT your quarantine hotel. If you arrive to the airport so late that your COVID test cannot be analyzed before the end of the day, you will likely be taken to a separate hotel to spend the night and then will have to await your confirmed test results before you are taken to your next destination. Only after your test results are confirmed negative will you be guided to the quarantine hotel provided by Disney. (You are still required to have a reservation at the Disney hotel for that first night, even if you end up staying in the airport-provided hotel due to a late arrival. Yes, that's an unfair rule, but it doesn't really affect us, since Disney is paying for the hotel.)</h4>
                <p>Morgan's report via our friend in HK and former face character, Rachel Capp: "We will be at the airport for like 3-4 hours once we land in their facility hall to get tested, get our wellness app together and basically a house arrest bracelet for quarantine so just mentally prepare now it might be a long day. So I’d pack snacks and like things to make the waiting more comfortable."</p>
                <p>The waiting hall is well air conditioned, so be sure to have a sweater or light jacket in your carry-on luggage. Some have suggested bringing a yoga mat so that you can lie down, rather than sit in the same plastic chair for 3-4 hours.</p>
                <p>Other comments/recommendations for the waiting hall in HK: bring 1-2 fully charged power banks for your phone, as the availability of electrical outlets is limited. WiFi is "okay." They had a small selection of snack items (Oreos, peanut butter crackers, etc.), but other than that, you'll need your own food.</p>
        </section>
    )
}

export default Covid