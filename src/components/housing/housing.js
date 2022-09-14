import './housing.css'

const Housing = () => {
    return (
        <section id='housing'>
            <h2>Housing</h2>
            <h3>Potential one-night stay in airport-provided hotel while you wait for your COVID test results.</h3>
                <p>If you arrive too late in the day for your COVID test results to be available before the end of the day, you will be assigned to a hotel for one night and have to wait until your test results are confirmed. Note that this will not be your quarantine hotel and that you must still have a reservation at your quarantine hotel for the night you arrive, even if you end up staying in the airport-provided hotel instead.</p>
            <h3>Unknown hotel, our quarantine home</h3>
                <p>Won't be able to leave the room for any reason for 3 days, with the possibility that quarantine could be lifted early. After those 3 days, we will be expected to self-isolate for 4 days.</p>
                <p>A key moment will be when we first arrive into this "quarantine home." Almost immediately upon arrival, we will have to activate our StayHomeSafe app, which will give us one minute--or possibly even less--to walk the perimeter of our hotel room so that the GPS knows where we will be for the next 3 days. Yikes! Make sure you cover the entire perimeter of your room quickly without running (Apparently the GPS doesn't work right if you run because it measures data every few steps.), or else you'll have to contact someone to help you reset your perimeter.</p>
                <p>When we quarantined in 2020, 3 meals were delivered to our room each day, but we had the option to order delivery on our own dime from a variety of restaurants via FoodPanda (which is like GrubHub).</p>
                <p>Additionally, in 2020 Disney provided us with a care package in our room that had a ton of snacks (including copious amounts of whole fruit) and some basic cleaning supplies. Since our quarantine is much shorter this year, we may not get such a substantial care package, if any at all.</p>
                <p>We will likely have to take and record our temperature daily. My understanding is that we will be issued a thermometer during our airport HK COVID test. However, if the thermometer stops working, we are still expected to record our temperature, so it is not a bad idea to have your own thermometer handy so that you don't have to explain why you didn't record your temperature.</p>
                <p>My understanding is also that we will have to take another COVID test at some point.</p>
                <p>If you need to do laundry during quarantine, you will probably have to do it by hand in your bathtub, or else it's not happening. Consider bringing some soap or laundry detergent pods.</p>
                <p>I've read differing reports on wifi quality in quarantine hotels. In 2020, our wifi was pretty good. Hopefully this year our wifi is also good enough that we can Zoom and Facetime without much worry.</p>
                <p><a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.theprincessdiaries.me%2F2020%2F05%2Fyou-are-dancing-queen-young-and-sweet.html%3Fm%3D1%26fbclid%3DIwAR1X0mls0rofkUEmOiQX3gjWvxI1tbrFPtpaz3oHWzpINxFRRq3PymWe4so&h=AT0pa9NkZWDA3INgyqeTGAMdtUvpd_Gb7h59NthgJj8ca0TR-pGVlBpeIs5qPcZbK8D1rQAblKYo9Z3qvXrt_i4LtkwaohFr2ywLD1R1sh5pX-7cM3w0cZfc1ZaThQFIq61S07g" target="_blank" rel='noreferrer'>Here is a link</a> to a blog by one of the princesses at HKDL, detailing her experience with the 14-day quarantine period in 2020. She discusses temperature checks, meals, and her accommodations. <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.theprincessdiaries.me%2F2020%2F05%2Fi-am-kind-of-starting-to-understand-why.html%3Fm%3D1%26fbclid%3DIwAR3cIHH4Cu1OKJC8XPIcwe0fS2unbaLAst4YFIO83WReDgvfCwacUVuspFw&h=AT0pa9NkZWDA3INgyqeTGAMdtUvpd_Gb7h59NthgJj8ca0TR-pGVlBpeIs5qPcZbK8D1rQAblKYo9Z3qvXrt_i4LtkwaohFr2ywLD1R1sh5pX-7cM3w0cZfc1ZaThQFIq61S07g" target="_blank" rel='noreferrer'>Here is another.</a> Ours may be the same hotel, or it may not.</p>
            <h3 id="HPRC"><a href="https://www.harbour-plaza.com/resortcity/Index-en.htm">Harbour Plaza Resort City, or HPRC</a></h3>
                <img id="HPRC-lobby" src="./assets/HPRC lobby.jpg" alt="The lobby of HPRC" />
                <p className="img-caption">The lobby of our HK home, HPRC.</p>
                <p>Located in the Tin Shui Wai neighborhood, very close to the border with mainlaind China and the 12.5 million-person city Shenzhen, <a target="_blank"  rel='noreferrer'href="https://www.harbour-plaza.com/resortcity/Index-en.htm">HPRC</a> is our home in HK. All of HKDL's expats are housed there.</p>
                <img id="viewfromHPRC" src="./assets/viewfromHPRC.jpg" alt="The view from a room at Harbour Plaza Resort City" />
                <p className="img-caption">The view from a room at Harbour Plaza Resort City, where we live for the majority of the contract.</p>
                <h4>Accommodations</h4>
                    <video id="HPRC-room-tour" width= "400" height="500" controls>
                        <source src="./assets/HPRC room first look.m4v" type="video/mp4"/>
                    Your browswer does not support the video tag.
                    </video>
                    <p className="img-caption">This was how my first room at HPRC looked.</p>  
                    <p>We are assigned our own studio-style "serviced apartment." It usually has a queen-size bed (that is VERY firm); a kitchenette with two electric burners, a microwave, a sink, and a half-size refrigerator; a Western-style bathroom with a bathtub and shower; a small dining table; a small couch/sitting area; a television with local channels; a wifi router; a large closet; a small night table on either side of the bed; and a varying number of cabinets, drawers, and other surfaces, depending on the room.</p>
                    <p>"Serviced Apartment" basically means that you get hotel-style housekeeping twice a week on the same days each week, for example, always on Tuesdays and Saturdays. They will empty your trash, clean your bathroom/shower area, make your bed, and vacuum, but they will NOT do your dishes!</p>
                    <p>The video above shows an example of how your room might be set up. There are a few different layouts you could have in your HPRC room. It just depends on the room's location in the hotel's floorplan. But, for the most part, the rooms look like what you see in the video.</p>
                <h4>Services</h4>
                    <ul className='housing-ul'>
                        <li>Coin-operated laundry rooms are available 24 hours on floors 16, 20, 26, & 27. (Save your HK$10 coins, or just exchange for them at the front desk.)</li>
                        <li>Hotel shuttle services to TST, the airport, and even HKDL</li>
                        <li>Starbucks in the lobby</li>
                        <li>Gym, with sauna/steam room (Note: there is also gym equipment at Disney)</li>
                    </ul>
        </section>
    )
}

export default Housing