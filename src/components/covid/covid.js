import './covid.css'

const Covid = () => {
    return (
        <section id="covid-clearance">
            <h2 >COVID-related flying info and Cheat Sheet for COVID clearance</h2>
            <h3 className='special-note'>Most recent update: 9/15/22. Double-check official COVID-clearance resources for the most accurate and up-to-date info.</h3>
                <h4 class="special-note">We are responsible for finding a facility that will conduct a PCR nucleic acid COVID test on us within 48 hours of the departure time of our HK flight. That facility must therefore be able to get you the report and results you need before you fly out. Airlines receive stiff penalties--thousands of dollars--if they do not adhere to these requirements. So you <em>will not be allowed on the plane</em> if your COVID clearance docs are not in order! Yes, this part is stressful! One of our sopranos in 2020 was not allowed onto the plane at LAX because her lab report did not use the exact phrasing HK's COVID clearance calls for. (She ended up getting another test in LA and joining us in quarantine 2 days later.)</h4>
                <h3>The HK govt policies regarding COVID clearance for overseas travellers is <a target="_blank" rel='noreferrer' href="https://www.coronavirus.gov.hk/eng/inbound-travel.html">here</a>. My cheat sheet version of this info is what follows below.</h3>
                <p>Short version - You need a vaccination record, a qualifying PCR test report within 48 hours of your HK flight, and a quarantine hotel confirmation (which Disney will provide).</p>
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
                    <li>A <strong>test report bearing your name exactly as it appears in your passport</strong> showing that:
                        <ol class="sub-list covid-ol">
                            <li>You received a "nucleic acid" test for COVID-19, and the <strong>test sample was taken within 48 hours</strong> of the leg of your flight bound for Hong Kong.</li>
                            <p className='special-note'>Take special note of the verbiage on the report. Please ensure that it indicates when your test sample was taken with one of the terms listed in the guidelines below (When our 2020 soprano was not allowed onto our flight, it was because her report said 'report date' instead of one of the more specific indicators listed below):</p>
                            <img className='list-pic' src='./assets/report_collection_time_acceptable_terms.jpg' alt='list of acceptable terms for sample collection date and time'/>
                            <li><strong>The test was a "PCR-based nucleic acid" test</strong> for COVID-19. (Other types of tests, such as RT-LAMP, do not fulfill this requirement.)
                            <br/><br/>
                            Apart from "COVID-19", "SARS-CoV-2" is also an acceptable term for the virus.
                            <br/><br/>

                            Antigen test (e.g. SARS Antigen FIA test) and Antibody test (e.g. IgG Antibody test) are NOT accepted.</li>
                            <li>You <strong>tested negative for COVID-19</strong>. Note: "Not detected" is not specific enough. It must say that you tested "negative."</li>
                        </ol>
                    </li>
                    <li>If, for some reason, your test report above does not include all the requested info, then you must produce a <strong>written confirmation from the lab or doctor's office of all the relevant info above</strong> (i.e. tested within 48 hours of flight, showed it was a PCR nucleic acid test, and you tested negative). That confirmation must <strong>include your name as it appears on your passport and clearly be from the lab or doctor's office</strong> (on their letterhead, ideally). Ideally it also includes a stamp or seal (or in Chinese terms, a "chop") from the lab or doctor's office. Again, this document is only required if doc #2 is incomplete.</li>
                    <li>ISO certification no longer required since June 2022.<br></br><s>
                        <strong>Document proving that the lab or doctor's office is ISO 15189 accredited or is recognized by the US or state health department.</strong> Every successful US-HK travel case I have researched indicates that lab certificates with a <strong><em>CLIA number</em></strong> satisfy this requirement. Here is an <a target="_blank" rel='noreferrer' href="https://ultimatedx.com/wp-content/uploads/2020/05/License-Certificate-2020.pdf">example of a certificate that includes a CLIA number</a>. Sometimes, if your facility cannot provide you a copy of their lab certification, you can find it online. However, if your facility is familiar with travel-related testing, they should understand why you need this document.
                            <p class="special-note">Here is the <a target="_blank" rel='noreferrer' href="https://www.cms.gov/Regulations-and-Guidance/Legislation/CLIA/CLIA_Laboratory_Demographic_Information">US govt website that allows you to search for labs that have CLIA certification. </a> Take note that the name of the lab your testing facility uses to analyze your test may not be the same as the name of the testing facility itself.</p>
                    </s></li>
                    <li><strong>Confirmation of a hotel reservation</strong> in HK for the quarantine period. <strong>Disney should provide this info to us</strong> once our flights and hotels are booked.</li>
                </ol>
                <h4>Considering the above requirements, the key questions to ask when looking for a testing facility are:</h4>
                <ul className='covid-ul'>
                    <li>Can they book you for a test within 48 hours of your HK flight?</li>
                    <li>Can they turnaround the results in less than 48 hours, so that you have the results before you depart? Also, how will they deliver the results to you? You may want time to print the report. While most airlines and authorities are accepting electronic versions of reports, a paper backup will be your best bet should you encounter technical problems.</li>
                    <li>Will the test be the right kind of test? Must be a “PCR-based nucleic acid” test, such as PCR, RT-PCR, real time PCR, etc.</li>
                    <li>Will they provide you a test report with the required information (#2 above)? (Again, #3 isn't necessary if they give you a complete version of #2.)</li>
                </ul>
                <h4>Facilities to consider, based mostly on recommendations from people who have either successfully traveled to HK or understand the requirements well. There should be <strong><em>many more options</em></strong> now that ISO lab certification is no longer required. Any PCR test that returns the required information (as noted above) within 48 hours should work, even from a drug store like a Walgreens or CVS. I'm mostly leaving these facilities from 2020 here in case anyone is totally lost on where to get an acceptable test:</h4>
                    <ul className='covid-ol'>
                        <li>in SF area:</li>
                            <ol className='covid-ol'>
                                <li><a target="_blank" rel='noreferrer' href="https://mydoctorsf.com/">MYDoctorSF</a>. Many successful travelers used this option.</li>
                                <li><a target="_blank" rel='noreferrer' href="https://www.chinesehospital-sf.org/covid19-resources">Chinese Hospital</a>. A highly recommended alternative to MYDoctorSF, also used by many successful travelers.</li>
                                <li><a target="_blank" rel='noreferrer' href="http://actionurgentcare.com/">Action Health</a>. Saw one recommendation for this office, but didn't find any actual successful travelers who had used it yet.</li>
                            </ol>
                        <li>in LA area:</li>
                            <ol className='covid-ol'>
                                <li><a target="_blank" rel='noreferrer' href="https://www.myconciergemd.com/">My Concierge MD</a>, Beverly Hills location. <s>Here is a link to <a target="_blank" rel='noreferrer' href="https://ultimatedx.com/wp-content/uploads/2020/05/License-Certificate-2020.pdf">their laboratory license</a> (which should satisfy required document #4)(The lab they use to process tests is called Ultimate DX)</s>. Many successful travelers to HK used this place for their testing. Sounds like they are well aware of the needs of travelers to HK.</li>
                                <li><a target="_blank" rel='noreferrer' href="https://www.neoanalyticslab.com/home">Neo Analytics Laboratory</a>. Not a lot of first-hand info on this one, but I did see at least one post from someone who used it before successfully traveling to HK.</li>
                            </ol>
                        <li>in Dallas area:</li>
                            <ol className='covid-ol'>
                                <li>Speak to Chelsea, who said she found a place in the area</li>
                                <li>After some research, we determined that <a target="_blank" rel='noreferrer' href="https://icare-er.com/">iCare ER & Urgent Care</a> (in Frisco or South Ft. Worth) should be able to satisfy your testing and reporting needs. <s>A lab with the same address and the name "ICARE EMERGENCY CENTERS" has the CLIA number #45D2101753, which we found after searching <a target="_blank" rel='noreferrer' href="https://www.cms.gov/Regulations-and-Guidance/Legislation/CLIA/CLIA_Laboratory_Demographic_Information">this link to search labs that have CLIA certification</a>. </s></li>
                            </ol>
                        <li>in NYC area:</li>    
                            <ol className='covid-ol'>
                                <li><a target="_blank" rel='noreferrer' href="https://nyulangone.org/locations/virtual-urgent-care">NYU Langone</a>, must schedule virtual urgent care appt to get a COVID test appt. <s>Here is a copy of <a target="_blank" rel='noreferrer' href="https://med.nyu.edu/pathology/sites/default/files/pathology/NYS-DOH-Clinical-Laboratory-Permit-June-30-21.pdf">their lab certification</a>.</s> Many successful travelers to HK used NYU Langone.</li>
                            </ol>
                        <li>in Nashville area:</li>
                            <ol className='covid-ol'>
                                <li>Still asking around to find a confirmed HK travel success from someone in the Nashville area, but <a target="_blank" rel='noreferrer' href="https://completehealthpartners.com/covid-19-testing-information/">this place, Complete Health Partners</a>, should work, provided they can deliver an acceptable report and lab certificate.</li>
                                <li><a target="_blank" href="www.ildp.com">Industry Lab Diagnostic Partners</a> may be an option. When I asked on the HK COVID Travel Facebook group if anyone knew of a place in Nashville, a kind person said that ILDP's main branch is in Nashville. The kind person had visited their Ohio branch, got a result in less than 24 hours and successfully transited to HK.</li>
                                <li>This option should no longer be necessary. <s>Traveling to Atlanta and <a href="http://www.buckheadmedicine.com" target="_blank" rel='noreferrer'>Buckhead Medicine</a> may be a painful but necessary alternative if no places in Nashville can deliver what we need.</s></li>
                            </ol>
                    </ul>
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