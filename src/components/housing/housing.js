import './housing.css'

const Housing = () => {
    return (
      <section id="housing">
        <h2 className="section-title">Housing</h2>
        <h3 id="HPRC">
          <a href="https://www.harbour-plaza.com/resortcity/Index-en.htm">
            Harbour Plaza Resort City, or HPRC
          </a>
        </h3>
        <img
          id="HPRC-lobby"
          src="./assets/HPRC lobby.jpg"
          alt="The lobby of HPRC"
          loading="lazy"
        />
        <p className="img-caption">The lobby of our HK home, HPRC.</p>
        <p>
          Located in the Tin Shui Wai neighborhood, very close to the border
          with mainlaind China and the 12.5 million-person city Shenzhen,{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.harbour-plaza.com/resortcity/Index-en.htm"
          >
            HPRC
          </a>{" "}
          is our home in HK. All of HKDL's expats are housed there. HPRC
          consists of two towers, and we are housed in Tower 1.
        </p>
        <img
          id="HPRC-map"
          src="https://i.imgur.com/GPWYW1Z.jpg"
          alt="map of HPRC, annotated with key locations"
          loading="lazy"
        />
        <p className="img-caption">
          Area map of HPRC and surrounding locations
        </p>
        <img
          id="viewfromHPRC"
          src="./assets/viewfromHPRC.jpg"
          alt="The view from a room at Harbour Plaza Resort City"
          loading="lazy"
        />
        <p className="img-caption">
          The view from a room at Harbour Plaza Resort City, where we live
          during the contract.
        </p>
        <h4>Accommodations</h4>
        <video
          id="HPRC-room-tour"
          preload="none"
          poster="https://i.imgur.com/BMzUBvx.jpg"
          width="400"
          height="500"
          controls
        >
          <source src="./assets/HPRC room first look.m4v" type="video/mp4" />
          Your browswer does not support the video tag.
        </video>
        <p className="img-caption">
          This was how my first room at HPRC looked.
        </p>
        <p>
          We are assigned our own studio-style "serviced apartment." It usually
          has:
          <ul>
            <li>a queen-size bed (that is VERY firm)</li>
            <li>a modestly supplied kitchenette with two electric burners</li>
            <li>a microwave</li>
            <li>a sink</li>
            <li>a half-size refrigerator</li>
            <li>a Western-style bathroom with a bathtub and shower</li>
            <li>a small dining table</li>
            <li>a small couch/sitting area</li>
            <li>a television, ~32", with HDMI input and local channels</li>
            <li>a wifi router</li>
            <li>a large closet</li>
            <li>a small night table on either side of the bed</li>
            <li>a small vanity nook/area</li>
            <li>
              a varying number of cabinets, drawers, and other surfaces,
              depending on the room
            </li>
          </ul>
        </p>
        <p>
          "Serviced Apartment" basically means that you get hotel-style
          housekeeping twice a week on the same days each week, for example,
          always on Tuesdays and Saturdays. They will empty your trash, clean
          your bathroom/shower area, make your bed, and vacuum, but they will
          NOT do your dishes!
        </p>
        <p>
          The video above shows an example of how your room might be set up.
          There are a few different layouts you could have in your HPRC room. It
          just depends on the room's location in the hotel's floorplan. But, for
          the most part, the rooms look like what you see in the video. That
          said, this one was among the smaller rooms I've had at HPRC.
        </p>
        <h4>Services and Amenities</h4>
        <ul className="housing-ul">
          <li>
            Coin-operated laundry rooms are available 24 hours on floors 16, 20,
            26, & 27. (Save your HK$10 coins, or just exchange for them at the
            front desk.)
          </li>
          <li>Hotel shuttle services to TST, the airport, and even HKDL</li>
          <li>Starbucks in the lobby</li>
          <li>
            Gym, with sauna/steam room (Note: there is also gym equipment at
            Disney)
          </li>
          <li>
            The hotel bar "New York" is located in Tower 2. Now and then expats
            may arrange gettogethers there. In the past there have been
            occasional happy hour or discount options.
          </li>
        </ul>
      </section>
    );
}

export default Housing