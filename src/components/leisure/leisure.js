import './leisure.css'

const Leisure = () => {
    return (
      <section id="leisure">
        <h2 className="section-title">Leisure/Time Off</h2>
        <div className="leisure">
          <img
            className="list-pic"
            src="./assets/Morganswirlchair.jpg"
            alt="Morgan in a novelty swirling chair"
            loading="lazy"
          />
          <img
            className="list-pic"
            src="./assets/daipaidong2018.jpg"
            alt="dai pai dong meal with friends"
            loading="lazy"
          />
        </div>
        <h4>
          We will usually have two full days off each work week. SO, what can we
          do with our down time?!?
        </h4>
        <h3 id="top-things-to-do">Good summary video</h3>
        <iframe
          width="560"
          height="315"
          loading="lazy"
          src="https://www.youtube.com/embed/PxPxiOrCkXs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3>The big tourist stuff</h3>
        <ul className="leisure-ul">
          <li>The Big Buddha and the Ngong Ping 360 gondola ride</li>
          <img
            className="list-pic"
            src="./assets/Big Buddha.jpg"
            alt="big buddha"
            loading="lazy"
          />
          <p className="img-caption">The Tian Tan (aka "Big") Buddha</p>
          <li>Victoria Peak/Peak Tram</li>
          <img
            className="list-pic"
            src="./assets/Victoria Peak Lookout Daytime.jpg"
            alt="victoria peak lookout"
            loading="lazy"
          />
          <p className="img-caption">
            The view from Victoria Peak's Lugard Road Lookout
          </p>
          <li>Star Ferry across Victoria Harbour</li>
          <li>Symphony of Lights at Victoria Harbour</li>
          <img
            className="list-pic"
            src="./assets/Symphony of Lights.jpg"
            alt="symphony of lights"
            loading="lazy"
          />
          <p className="img-caption">The Symphony of Lights</p>
          <li>Man Mo Temple</li>
          <li>The Ladies' Market</li>
          <li>Temple Street Night Market</li>
          <li>Chi Lin Nunnery/Nan Lian Gardens</li>
          <img
            className="list-pic"
            src="./assets/chilinnunnery.jpg"
            alt="chi lin nunnery"
            loading="lazy"
          />
          <p className="img-caption">The Chi Lin Nunnery</p>
          <li>Wong Tai Sin Sik Sik Yuen Temple</li>
          <img
            className="list-pic"
            src="./assets/Wong Tai Sin Temple.jpg"
            alt="wong tai sin temple"
            loading="lazy"
          />
          <p className="img-caption">Wong Tai Sin Sik Sik Yuen temple</p>
          <li>TST Promenade/Bruce Lee Statue</li>
          <img
            className="list-pic"
            src="./assets/Bruce Lee poser.jpg"
            alt="bruce lee statue and poser"
            loading="lazy"
          />
          <p className="img-caption">Bruce Lee Statue on the TST promenade</p>
          <li>HSBC Building</li>
          <li>High Tea at The Peninsula</li>
          <img
            className="list-pic"
            src="./assets/Peninsula High Tea.jpg"
            alt="high tea at The Peninsula"
            loading="lazy"
          />
          <p className="img-caption">
            Colonial British-style High Tea at The Peninsula Hotel in TST
          </p>
        </ul>
        <h3>Other attractions</h3>
        <ul className="leisure-ul">
          <li>
            Central - As the name implies, this district is 'central' to just
            about everything that happens in HK. Central is located on the
            southern side of Victoria Harbour, across from TST. It contains a
            transportation hub, government buildings, banks, restaurants/bars,
            cultural hotspots, street markets, trendy shopping, fancy
            hotels...basically one of HK's two "downtowns," with TST being the
            other.
          </li>
          <li>
            Tsim Sha Tsui, aka TST - loads of fun to be had in TST. Plus, our
            hotel offers a cheap, frequent shuttle that takes you directly
            to/from the district.
          </li>
          <li>
            Wan Chai/Causeway Bay - Wan Chai has some 'edgier' bars and
            restaurants, and Causeway Bay is a shopping/food epicenter. It even
            has its own "Times Square."
          </li>
          <li>
            Ocean Park - the other theme park in Hong Kong: part amusement park,
            part zoo, and part aquarium!
          </li>
          <img
            className="list-pic"
            src="./assets/ocean_park.jpeg"
            alt="ocean park"
            loading="lazy"
          />
          <p className="img-caption">Entrance to Ocean Park</p>
          <img
            className="list-pic"
            src="./assets/Ocean Park Panda.jpg"
            alt="ocean park panda"
            loading="lazy"
          />
          <p className="img-caption">See Pandas at Ocean Park</p>
          <li>
            Stanley - a neighborhood in the extreme southeastern part of HK that
            has great ocean views, promenades, shopping, restaurants, and a
            prison museum
          </li>
          <li>Lamma Island</li>
          <li>Cheung Chau Island</li>
          <li>Tai O fishing village</li>
          <li>
            Sai Kung - a beautiful region in the extreme northeast part of HK
            featuring beaches, epic hikes, and a lively port neighborhood
          </li>
          <li>
            Day trip to Macau - This one involves leaving HK, and I am hopeful
            we can do it this year! 🤞 Macau is the Vegas of the East. Walk a
            casino floor, have a Portuguese egg tart (or seven), and see The
            House of Dancing Water, one of the most amazing shows you'll ever
            see.
          </li>
        </ul>
        <h3>HK is one giant mall after another.</h3>
        <ul className="leisure-ul">
          <li>Elements</li>
          <li>YOHO Mall I & II</li>
          <li>IFC Mall</li>
          <li>Maritime Square in Tsing Yi</li>
          <li>K11 in TST</li>
          <li>iSquare in TST</li>
          <li>Pacific Place in Central</li>
          <li>ALL OF CAUSEWAY BAY</li>
          <li>Flower Market/Bird Market</li>
          <li>
            Basically every metro station is connected to a mall because the
            malls and the public transportation are owned by the same entity, or
            so I have heard.
          </li>
          <li>T-Town, close to our hotel</li>
          <li>
            Fortune Kingswood, <em>literally</em> connected to our hotel
          </li>
        </ul>
        <h3>Temples, Gardens, Parks</h3>
        <ul className="leisure-ul">
          <li>Hong Kong Park/Zoo</li>
          <li>Victoria Park</li>
          <li>Kowloon Park</li>
          <li>Ten Thousand Buddhas</li>
          <li>Wisdom Path/Po Lin Monastery (near Big Buddha)</li>
          <li>HKDL's very own Inspiration Lake</li>
        </ul>
        <h3>Restaurants</h3>
        <ul className="leisure-ul">
          <li>
            Baba's Station - incredible Indian food in the smallest restaurant
            you've ever seen. You go for the food (not so much the drinks). In
            Tsuen Wan
          </li>
          <img
            className="list-pic"
            src="./assets/babas.jpeg"
            alt="babas station"
            loading="lazy"
          />
          <p className="img-caption">2020 visit to Baba's Station</p>
          <li>
            Beef and Liberty - excellent burgers, one small location remained in
            2022 in Sheung Wan/Sai Ying Pun
          </li>
          <li>
            Tim Ho Wan - cheapest Michelin star restaurant in the world, great
            roast pork buns, multiple locations
          </li>
          <li>
            Dim Dim Sum - another favorite dim sum spot, multiple locations
          </li>
          <li>
            Mammy Pancake - best bubble waffles/egg puffs in town in the lower
            Temple Street area
          </li>
          <li>
            La Creperie - amazing French seaside resort-style crepes and
            galettes with delicious hard cider{" "}
          </li>
          <img
            className="list-pic"
            src="./assets/La Creperie.jpg"
            alt="la creperie restaurant"
            loading="lazy"
          />
          <p className="img-caption">
            A savory galette at La Creperie, multiple locations
          </p>
          <li>
            Little Bao - extremely cool contemporary Asian fusion in Causeway
            Bay
          </li>
          <li>Pici - fantastic upscale Italian chain, multiple locations</li>
          <li>
            Kebab House 23 - a great, if small, Turkish place, multiple
            locations
          </li>
          <li>Ichiran - insanely delicious ramen in TST</li>
          <img
            className="list-pic"
            src="./assets/ichiran.jpeg"
            alt="Nathan psyched for Ichiran ramen"
            loading="lazy"
          />
          <p className="img-caption">Nathan psyched for Ichiran ramen</p>
          <li>
            Divino Patio - excellent upscale Italian in Wan Chai near the
            harbour
          </li>
          <img
            className="list-pic"
            src="./assets/divino_patio.jpeg"
            alt="divino patio"
            loading="lazy"
          />
          <p className="img-caption">An awesome carpaccio from Divino Patio</p>
          <li>
            Chilli Lime - great Asian fusion in the YOHO Mall in Yuen Long
          </li>
          <li>11 Westside - fantastic Mexican food in Kennedy Town</li>
          <li>Green Common - excellent vegan restaurant in TST</li>
          <li>
            Hai Di Lao Hot Pot - we went there for our "Thanksgiving" meal in
            2022.
          </li>
          <li>Woodlands - vegetarian-friendly Indian food in TST</li>
          <li>MANY others!</li>
        </ul>
        <h3>Night Life</h3>
        <h4 className="special-note">
          Live music is allowed again in bars and pubs! A proper night life
          should be much easier to experience this year!!!
        </h4>
        <ul className="leisure-ul">
          <li>
            Ned Kelly's Last Stand - the bandleader, Colin, is one of our best
            friends in HK. The man loves music and will probably come to see us
            perform at Disney at some point. Hopefully we can go early and often
            to Ned Kelly's to see his band play. Some of our favorites nights of
            the whole contract have occurred at Ned's. He'll even let you get up
            and sing a jazz standard with the band. And we've been known to
            serenade the bar with a few Christmas carols during their Christmas
            big band show.
          </li>
          <img
            className="list-pic"
            src="./assets/ned_kellys_band.jpeg"
            alt="the band at Ned Kellys"
            loading="lazy"
          />
          <p className="img-caption">
            The band at Ned Kelly's in 2020 before live music in bars was
            restricted
          </p>
          <img
            className="list-pic"
            src="./assets/ColinPlus3_2022.jpeg"
            alt="the band at Ned Kellys"
            loading="lazy"
          />
          <p className="img-caption">
            As is tradition, Colin made sure to get a selfie with "Kowloon
            Carolers" Emilia, Ivory, Nathan, and Sean (in spirit) in 2022.
          </p>
          <li>
            Old Man - one of the very best cocktail bars in the world,
            Hemingway-themed, in the SoHo neighborhood.
          </li>
          <img
            className="list-pic"
            src="./assets/Cool_Cocktails_Old_Man_2022.jpeg"
            alt="Old Man cocktail"
            loading="lazy"
          />
          <p className="img-caption">
            Enjoy exquisitely crafted cocktails at The Old Man
          </p>
          <li>
            Ozone - the highest bar in the city, in the ICC building, with the
            Ritz-Carlton
          </li>
          <img
            className="list-pic"
            src="./assets/Ozone drinks 2016.jpg"
            alt="drinks at the Ozone bar"
            loading="lazy"
          />
          <p className="img-caption">
            Drink in the clouds at Ozone, the highest bar in the city
          </p>
          <li>
            Petticoat Lane - did someone say free vodka? (from 10p-11p, I think)
            Also, the site of former caroler Morgan's debut live performance of
            'Ho Lang, Bitch.'
          </li>
          <li>Lan Kwai Fong - the party district of HK</li>
          <img
            className="list-pic"
            src="./assets/Gollum and Ladies.jpg"
            alt="Gollum and the ladies"
            loading="lazy"
          />
          <p className="img-caption">
            If you're lucky, you just might get a pic with the Lan Kwai Fong
            "Gollum"!
          </p>
          <li>
            Knutsford Terrace / Miraplace in TST - cool strip of restaurants and
            live music clubs
          </li>
          <li>
            COA, Hong Kong's most recent entry on CNN's list of the Best Bars in
            the World. Get your tequila on in fancy ways!
          </li>
        </ul>
        <h4 id="top-bars-and-clubs">
          The following video shares some more nightlife options, as well as
          showing some of the ones already mentioned above, like Ozone, Lan Kwai
          Fong, and Knutsford Terrace:
        </h4>
        <iframe
          width="560"
          height="315"
          loading="lazy"
          src="https://www.youtube.com/embed/2IEnUFqFENg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3>Hiking</h3>
        <p>
          Hiking in Hong Kong is one of the most rewarding activities you can
          do! Fresh air, exercise, exotic plants, occasional monkeys, and the
          views...oh man, the views.
        </p>
        <h4 id="best-hiking-trails" className="special-note">
          Check out{" "}
          <a href="https://www.timeout.com/hong-kong/sport-and-fitness/best-hikes-hong-kong">
            the 13 best hiking trails in Hong Kong
          </a>
          , many of which are mentioned in the list below!
        </h4>
        <ul className="leisure-ul">
          <li>Dragon's Back</li>
          <img
            className="hiking-pic"
            src="./assets/Dragon's Back view.jpg"
            alt="Dragon\'s Back"
            loading="lazy"
          />
          <p className="img-caption">One of the views from Dragon's Back</p>
          <li>Lantau Peak</li>
          <img
            className="hiking-pic"
            src="./assets/Lantau Peak trail.jpg"
            alt="lantau peak trail"
            loading="lazy"
          />
          <p className="img-caption">The Lantau Peak trail</p>
          <li>Victoria Peak</li>
          <img
            className="hiking-pic"
            src="./assets/Victoria Peak walk view.jpg"
            alt="Victoria Peak view"
            loading="lazy"
          />
          <p className="img-caption">The view from atop Victoria Peak</p>
          <li>Lion Rock</li>
          <img
            id="sunset-peak-view"
            src="./assets/Lion Rock View.jpg"
            alt="Lion Rock view"
            loading="lazy"
          />
          <p className="img-caption">The view from Lion Rock</p>
          <li>Tai Tong - Sweet Gum Woods</li>
          <img
            className="hiking-pic"
            src="./assets/Tai Tong Ancient Heritage Trail.jpg"
            alt="tai tong trail"
            loading="lazy"
          />
          <p className="img-caption">
            Part of the Ancient Heritage Trail on the Tai Tong hike
          </p>
          <li>Sunset Peak</li>
          <img
            className="hiking-pic"
            src="./assets/Hiking panorama.jpg"
            alt="hiking panorama"
            loading="lazy"
          />
          <p className="img-caption">The view from Sunset Peak</p>
          <li>Pineapple Dam Nature Trail - An easy one! With monkeys!</li>
          <video
            controls
            height="500"
            width="300"
            preload="none"
            poster="https://i.imgur.com/63JASD7.jpg"
          >
            <source src="./assets/Monkeys at Shing Mun.m4v" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="img-caption">
            Monkeys hanging out at the start of the Pineapple Dam trail
          </p>
          <li>Ng Tung Chai, waterfalls!</li>
          <img
            className="hiking-pic"
            src="./assets/NgTungChai_2022.jpeg"
            alt="waterfall hike"
            loading="lazy"
          />
          <p className="img-caption">One of the Ng Tung Chai wateralls</p>
          <li>Mui Wo, on Lantau Island</li>
          <img
            className="hiking-pic"
            src="./assets/mui_wo_hike.jpeg"
            alt="Mui Wo hike"
            loading="lazy"
          />
          <p className="img-caption">The Mui Wo hike view</p>
          <li>
            Plus so many more. HK is simply an incredible city for hiking.
          </li>
          {/* Include link to Hike HK site/apps */}
        </ul>
        <h3>Celebrating Holidays</h3>
        <h4 className="holiday-title">Halloween 🎃</h4>
        <p>
          Those carolers who start work on Oct. 30 will get to see HKDL with all
          its Halloween decor. Sadly, they will promptly tear down that decor
          and start preparing for Christmas decorations on Nov. 1.
        </p>
        <p>
          However! The HKDL Halloween season show "Let's Get Wicked" should be
          extended through early Nov., so hopefully we'll all be able to see it!
          It's held in the Theater in the Wild where The Festival of the Lion
          King show runs for the majority of the year. (We should be able to see
          LK as well after it reopens in late Nov. or early Dec.)
        </p>
        <img
          className="list-pic"
          src="./assets/halloween_2020.jpeg"
          alt="Halloween 2020"
          loading="lazy"
        />
        <p className="img-caption">The 2020 crew at Halloween.</p>
        {/* <p>We are often invited to a Halloween party. Often, we just hold our own so that we aren't out partying far from home.</p>
                <p>Trick-or-Treating is not so much a thing in Hong Kong, but that doesn't have to stop us from tricking-or-treating with each other! </p>
                <p>Halloween spirit may be quite suppressed this year, at the park especially (since all the Halloween shows were cancelled). Again, that doesn't have to stop us if we want to celebrate a little.</p> */}
        <h4 className="holiday-title">Thanksgiving 🦃</h4>
        <img
          className="list-pic"
          src="./assets/thanksgiving_2020.jpeg"
          alt="Thanksgiving 2020"
          loading="lazy"
        />
        <p className="img-caption">
          The 2020 crew ready to eat individual pumpkin pies at Thanksgiving
          2020
        </p>
        <p>
          We have historically coordinated a group Thanksgiving get-together. In
          2019, we even included our stage managers who brought fun local foods
          and desserts to add to the potluck dinner.
        </p>
        <img
          className="list-pic"
          src="./assets/Thanksgiving 2019.jpg"
          alt="Thanksgiving 2019"
          loading="lazy"
        />
        <p>
          Everyone chooses a classic Thanksgiving item (or two) to contribute.
          Given the lack of ovens, the main course has been either IKEA
          meatballs or KFC! But all the other usual classics have appeared:
          mashed potatoes, cranberry sauce, stuffing, sweet potatoes, mini
          pumpkin pies, green beans, brussels sprouts, wine, cocktails, etc.!
        </p>
        <p>
          With 8 of us again this year, perhaps we can resurrect this caroler
          tradition. That said, there's no shame at all in letting someone else
          do the cooking and the dishes. In 2022 we went to Hai Di Lao Hot Pot
          and had an absolute feast!
        </p>
        <h4 className="holiday-title">Christmas 🎁</h4>
        <p>
          By the time Christmas rolls around, we are usually pretty pooped. We
          have historically worked six-day (overtime) weeks during the two weeks
          leading up to Christmas.
        </p>
        <p>
          We have always done small group gifts for the stage managers from the
          carolers, and in 2020 we did a secret Santa white elephant gift
          exchange with each other. But there's certainly no pressure or
          expectation. Some years we would coordinate to have Christmas lunch
          together at one of the park's restaurants and take advantage of our
          cast member holiday coupons.
        </p>
        <p>
          In all likelihood, we will be working on Christmas Day, which falls on
          a Monday this year (2023).
        </p>
        <h4 className="holiday-title">New Year's Eve 🎉🥂🎉</h4>
        <p>
          New Year's celebrating is going to be very tough this year, as Jan 1
          is our last day of work. In all likelihood, we will all be packing and
          tying up whatever last ends remain so that we will be able to depart
          as smoothly as possible on Jan 2. Nonetheless, some have managed to
          enjoy New Year's Eve celebrations despite juggling work and
          end-of-contract obligations. I have rung in several new years with
          Colin and the band at Ned Kelly's Last Stand. Last year, Sean went on
          a cruise in Victoria Harbour while the rest of us stayed home and
          played Nintendo Switch! How you celebrate New Year's will be entirely
          up to you as the priority will be ensuring that you are ready to
          depart Hong Kong less than 48 hours later.
        </p>
      </section>
    );
}

export default Leisure