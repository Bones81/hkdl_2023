import './covid.css'

const Covid = () => {
    return (
        <section id="covid-clearance">
            <h2 >COVID-related flying info and Cheat Sheet for COVID clearance</h2>
            <h3 className='special-note'>This section is only partially updated for 2022. Double-check all official COVID-clearance information for the most accurate and up-to-date info.</h3>
                <h4 class="special-note">We are responsible for finding a facility that will give us a "nucleic acid" COVID test within 48 hours of the departure time of our HK flight. That facility must therefore be able to get you the report and results you need before you fly out. Airlines receive stiff penalties--thousands of dollars--if they do not adhere to these requirements. So you <em>will not be allowed on the plane</em> if your COVID clearance docs are not in order! Yes, this part is stressful! One of our sopranos in 2020 was not allowed onto the plane at LAX because her lab report did not use the exact phrasing HK's COVID clearance calls for. (She ended up getting another test in LA and joining us in quarantine 2 days later.)</h4>
                <h3>The original HK govt document about COVID clearance is <a target="_blank" href="https://www.coronavirus.gov.hk/eng/high-risk-places.html">here</a>. My cheat sheet version of this info is what follows below.</h3>
                <p>Short version - You need a qualifying test report, a qualifying lab certificate, and a 14-day hotel confirmation (which Disney will provide).</p>
                <p>Longer version - In order to be allowed onto our flights to HK, we are required to provide to the airline (and later to HK Immigration) the following:</p>
                <ol className='covid-ol'>
                    <li>A <strong>test report bearing your name exactly as it appears in your passport</strong> showing that:
                        <ol class="sub-list covid-ol">
                            <li>You received a "nucleic acid" test for COVID-19, and the <strong>test sample was taken within 48 hours</strong> of the leg of your flight bound for Hong Kong.</li>
                            <li><strong>The test was a "nucleic acid" test</strong>. This means it could be a test with <em>any</em> of the following names: "Polymerase chain reaction" ("PCR"), "reverse-transcription polymerase chain reaction" ("RT-PCR"), "real time RT-PCR", "real-time PCR", "nucleic test", “nucleic acid amplification test" ("NAAT"), "TrueNAT", "CBNAAT", "Loop-mediated isothermal amplification" ("LAMP"), "Molecular diagnostics/test". 
                            Apart from "COVID-19", "SARS-CoV-2" is also an acceptable term for the virus.
                            Antigen test (e.g. SARS Antigen FIA test) and Antibody test (e.g. IgG Antibody test) are NOT accepted.</li>
                            <li>You <strong>tested negative for COVID-19</strong>. Note: "Not detected" is not specific enough. It must say that you tested "negative."</li>
                        </ol>
                    </li>
                    <li>If, for some reason, your test report above does not include all the requested info, then you must produce a <strong>written confirmation from the lab or doctor's office of all the relevant info above</strong> (i.e. tested within 48 hours of flight, showed it was a nucleic acid test, and you tested negative). That confirmation must <strong>include your name as it appears on your passport and clearly be from the lab or doctor's office</strong> (on their letterhead, ideally). Ideally it also includes a stamp or seal (or in Chinese terms, a "chop") from the lab or doctor's office. Again, this document is only required if doc #1 is incomplete.</li>
                    <li><strong>Document proving that the lab or doctor's office is ISO 15189 accredited or is recognized by the US or state health department.</strong> Every successful US-HK travel case I have researched indicates that lab certificates with a <strong><em>CLIA number</em></strong> satisfy this requirement. Here is an <a target="_blank" href="https://ultimatedx.com/wp-content/uploads/2020/05/License-Certificate-2020.pdf">example of a certificate that includes a CLIA number</a>. Sometimes, if your facility cannot provide you a copy of their lab certification, you can find it online. However, if your facility is familiar with travel-related testing, they should understand why you need this document. 
                        <p class="special-note">Here is the <a target="_blank" href="https://www.cms.gov/Regulations-and-Guidance/Legislation/CLIA/CLIA_Laboratory_Demographic_Information">US govt website that allows you to search for labs that have CLIA certification. </a> Take note that the name of the lab your testing facility uses to analyze your test may not be the same as the name of the testing facility itself.</p></li>
                    <li><strong>Confirmation of a 14-day hotel reservation</strong> in HK for quarantining. <strong>Disney has said they will provide this info to us</strong> once our flights and hotels are booked.</li>
                </ol>
                <h4>Considering the above requirements, the key questions to ask when looking for a testing facility are:</h4>
                <ul className='covid-ul'>
                    <li>Can they book you for a test within 48 hours of your HK flight?</li>
                    <li>Can they turnaround the results in 24-48 hours, so that you have the results before you depart? Also, how will they deliver the results to you? You need time to print the report, if necessary.</li>
                    <li>Will the test be the right kind of test? Must be a “nucleic acid” test with one of the names listed above in #1b. (PCR, RT-PCR, NAAT, etc.)</li>
                    <li>Will they provide you a test report with the required information (#1 above) and an acceptable laboratory certificate? (#3 above)? (Again, #2 isn't necessary if they give you complete versions of #1 and #3.)</li>
                </ul>
                <h4>Facilities to consider, based mostly on recommendations from people who have either successfully traveled to HK or understand the requirements well:</h4>
                    <ul className='covid-ol'>
                        <li>in SF area:</li>
                            <ol className='covid-ol'>
                                <li><a target="_blank" href="https://mydoctorsf.com/">MYDoctorSF</a>. Many successful travelers used this option.</li>
                                <li><a target="_blank" href="https://www.chinesehospital-sf.org/covid19-resources">Chinese Hospital</a>. A highly recommended alternative to MYDoctorSF, also used by many successful travelers.</li>
                                <li><a target="_blank" href="http://actionurgentcare.com/">Action Health</a>. Saw one recommendation for this office, but didn't find any actual successful travelers who had used it yet.</li>
                            </ol>
                        <li>in LA area:</li>
                            <ol className='covid-ol'>
                                <li><a target="_blank" href="https://www.myconciergemd.com/">My Concierge MD</a>, Beverly Hills location. Here is a link to <a target="_blank" href="https://ultimatedx.com/wp-content/uploads/2020/05/License-Certificate-2020.pdf">their laboratory license</a> (which should satisfy required document #3)(The lab they use to process tests is called Ultimate DX). Many successful travelers to HK used this place for their testing. Sounds like they are well aware of the needs of travelers to HK.</li>
                                <li><a target="_blank" href="https://www.neoanalyticslab.com/home">Neo Analytics Laboratory</a>. Not a lot of first-hand info on this one, but I did see at least one post from someone who used it before successfully traveling to HK.</li>
                            </ol>
                        <li>in Dallas area:</li>
                            <ol className='covid-ol'>
                                <li>Speak to Chelsea, who said she found a place in the area</li>
                                <li>After some research, we determined that <a target="_blank" href="https://icare-er.com/">iCare ER & Urgent Care</a> (in Frisco or South Ft. Worth) should be able to satisfy your testing and reporting needs. A lab with the same address and the name "ICARE EMERGENCY CENTERS" has the CLIA number #45D2101753, which we found after searching <a target="_blank" href="https://www.cms.gov/Regulations-and-Guidance/Legislation/CLIA/CLIA_Laboratory_Demographic_Information">this link to search labs that have CLIA certification</a>. </li>
                            </ol>
                        <li>in NYC area:</li>    
                            <ol className='covid-ol'>
                                <li><a target="_blank" href="https://nyulangone.org/locations/virtual-urgent-care">NYU Langone</a>, must schedule virtual urgent care appt to get a COVID test appt. Here is a copy of <a target="_blank" href="https://med.nyu.edu/pathology/sites/default/files/pathology/NYS-DOH-Clinical-Laboratory-Permit-June-30-21.pdf">their lab certification</a>. Many successful travelers to HK used NYU Langone.</li>
                            </ol>
                        <li>in Nashville area:</li>
                            <ol className='covid-ol'>
                                <li>Still asking around to find a confirmed HK travel success from someone in the Nashville area, but <a target="_blank" href="https://completehealthpartners.com/covid-19-testing-information/">this place, Complete Health Partners</a>, should work, provided they can deliver an acceptable report and lab certificate.</li>
                                <li><a target="_blank" href="www.ildp.com">Industry Lab Diagnostic Partners</a> may be an option. When I asked on the HK COVID Travel Facebook group if anyone knew of a place in Nashville, a kind person said that ILDP's main branch is in Nashville and is CLIA certified. The kind person had visited their Ohio branch, got a result in less than 24 hours and successfully transited to HK.</li>
                                <li>Traveling to Atlanta and <a href="http://www.buckheadmedicine.com" target="_blank">Buckhead Medicine</a> may be a painful but necessary alternative if no places in Nashville can deliver what we need.</li>
                            </ol>
                    </ul>
                <h4 class="special-note">And, same information one last time: A cheat sheet for what you must have before you can get on the plane (See <a href="#covid-clearance">above</a> for fuller descriptions of each item):
                    <ol className='covid-ol'>
                        <li>A COVID test report that shows:</li>
                            <ul className='covid-ul'>
                                <li>Your full name, <strong>exactly as it appears on your passport</strong>. <em>Middle names matter!</em></li>
                                <li>The test is a <strong>nucleic acid test</strong>. (PCR, RT-PCR, NAAT, Molecular test, etc., see above #1b)</li>
                                <li>The <strong>date <em>and time</em></strong> that the test sample was taken, and that it was taken <strong>within 48 hours of the departure time of the leg of your flight that ends in HK</strong>.</li>
                                <li>You tested <strong>negative for COVID-19</strong>. 
                                    <li><em>Only if your COVID test report does not include all the required info</em>, you must provide: a letter from your lab or doctor's office that includes all the required COVID test report info, signed/stamped by the lab or office.</li></li>
                            </ul>
                        
                        <li>A <strong>lab certificate</strong> issued by your State Health Department that <em>includes a CLIA number</em>.</li>
                        <li><strong>Proof of a 14-day hotel reservation</strong> in HK. Disney will provide this to us.</li>
                        
                    </ol>
                </h4>
            <h3>Arrival in HK, COVID testing/protocol</h3>
                <h4 class="special-note">I <em><strong>highly recommend</strong></em> printing and reading <a target="_blank" href="./assets/Hong Kong Airport COVID Arrival Instructions (Aug 2020).pdf">this 3-page pdf file explaining in great detail the HK COVID-19 Travel Procedures</a>. It is filled with both instructions and useful recommendations for staying comfortable during the arrival testing process and waiting period. Here is <a target="_blank" href="././assets/Pre Arrival and Arrival Instructions for Hong Kong as of 15 June 2020.pdf">another, smaller pdf file</a> (written up by a concerned mother of a teenaged traveler) noting the essential elements of the process.</h4>
                <p>As each of the above files mentions, you will need to download the <a target="_blank" href="https://www.coronavirus.gov.hk/eng/stay-home-safe.html">StayHomeSafe app</a> onto the phone you intend to use in HK and fill out a <a target="_blank" href="https://hdf.chp.gov.hk/dhehd/?lang=en-us">Health Declaration Form</a> within 24 hours of your arrival in HK.
                </p>
                <h4 class="special-note">It is possible you will have to spend one night in a hotel that is NOT your quarantine hotel. If you arrive to the airport so late that your COVID test cannot be analyzed before the end of the day, you will likely be taken to a separate hotel to spend the night and then will have to return to the waiting room the next day to await your confirmed test results. Only after your test results are confirmed will you be guided to the quarantine hotel provided by Disney. (You are still required to have a reservation at the Disney hotel for that first night, even if you end up staying in the airport-provided hotel due to a late arrival. Yes, that's an unfair rule, but it doesn't really affect us, since Disney is paying for the hotel.)</h4>
                <p>Morgan's report via our friend in HK and former face character, Rachel Capp: "We will be at the airport for like 3-4 hours once we land in their facility hall to get tested, get our wellness app together and basically a house arrest bracelet for quarantine so just mentally prepare now it might be a long day. So I’d pack snacks and like things to make the waiting more comfortable."</p>
                <p>I've also seen many people report that the waiting hall is heavily air conditioned, so be sure to have a sweater or light jacket in your carry-on luggage. Some have suggested bringing a yoga mat so that you can lie down, rather than sit in the same plastic chair for 3-4 hours.</p>
                <p>Other comments/recommendations for the waiting hall in HK: bring 1-2 fully charged power banks for your phone, as the availability of electrical outlets is limited. WiFi is "okay." They had a small selection of snack items (Oreos, peanut butter crackers, etc.), but other than that, you'll need your own food.</p>
        </section>
    )
}

export default Covid