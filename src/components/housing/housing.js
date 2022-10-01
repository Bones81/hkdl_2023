import './housing.css'

const Housing = () => {
    return (
        <section id='housing'>
            <h2>Housing</h2>
            <h3 id="HPRC"><a href="https://www.harbour-plaza.com/resortcity/Index-en.htm">Harbour Plaza Resort City, or HPRC</a></h3>
                <img id="HPRC-lobby" src="./assets/HPRC lobby.jpg" alt="The lobby of HPRC" />
                <p className="img-caption">The lobby of our HK home, HPRC.</p>
                <p>Located in the Tin Shui Wai neighborhood, very close to the border with mainlaind China and the 12.5 million-person city Shenzhen, <a target="_blank"  rel='noreferrer'href="https://www.harbour-plaza.com/resortcity/Index-en.htm">HPRC</a> is our home in HK. All of HKDL's expats are housed there.</p>
                <img id="viewfromHPRC" src="./assets/viewfromHPRC.jpg" alt="The view from a room at Harbour Plaza Resort City" />
                <p className="img-caption">The view from a room at Harbour Plaza Resort City, where we live during the contract.</p>
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