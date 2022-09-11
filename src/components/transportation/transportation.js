import './transportation.css'

const Transportation = () => {
    return (
        <section id='transportation'>
            <h2 id="transportation">Transportation within HK</h2>
            <img className="list-pic" src="Assets/HK street scene.jpg" />
            <p className="img-caption">Red mini-buses in Mong Kok</p>
            <h3>MTR, Buses, Ferries, Light Rail, Trams, oh my!</h3>
                <h4>HK has some of the most efficient and reliable public transportation in the entire world.</h4>
                <p>The train system is known as the 'MTR.' It is extremely modern and very easy to navigate, with lots of clear signage and color-coded train lines. <a href="http://www.mtr.com.hk/en/customer/tourist/index.php">Here is a link</a> to the MTR's website.</p>
                <p>HK also has a robust public bus system that operates all over the territory. There are mulitple bus companies that operate different styles of bus routes. Some are large double decker vehicles that operate local and express routes covering large sections of HK. Some are 14-seat mini-buses that operate more confined routes. And some are direct service from one district to another. <a href="https://www.travelchinaguide.com/cityguides/hongkong/transportation/town-bus.htm">Here is a link</a> providing a broad overview of the HK bus system.</p>
                <p>Ferries are a popular way to move across HK's many waterways. Perhaps the most popular one is the Star Ferry across Victoria Harbour, which takes you from Central to TST and vice-versa. The cost is stupid cheap, and the view is great. You can also use ferries to visit some of the popular outlying islands, like Lamma Island or Cheung Chau Island.</p>
                <p>The light rail system is another "lighter" train network (almost a cross between trains and trams) that we will encounter a lot near our hotel in Tin Shui Wai. It stops more frequently than the MTR trains and connects our neighborhood to the nearest MTR station. It is also quite cheap and accepts Octopus card payment. Our hotel is located adjacent to the 'Ginza' light rail station. From there, it is a short trip on the light rail to 'Tin Shui Wai,' where we can connect to the larger Tin Shui Wai MTR station.
                </p>
                <p>There is a fun tram system known as the 'Ding Ding' that operates along the northern end of Hong Kong Island. It is extremely cheap, and it can be a very fun way to see this vibrant part of HK. Highly recommend taking at least one ride on the Ding Ding.</p>
            <h3><a href="https://www.tripsavvy.com/hong-kong-taxi-guide-1535884">Taxis</a></h3>
                    <h4 className="special-note">No one uses the term 'cab' in HK. Only 'taxi.'</h4>
                    <h4>HK taxis come in three varieties: blue, green, and red.</h4>
                        <ul className="trans-ul">
                            <li>Blue taxis operate only within Lantau Island (where Disney and the airport are).</li>
                            <li>Green taxis operate only within the New Territories (basically anywhere that isn't on Hong Kong Island, where Central is).</li>
                            <li>Red taxis operate anywhere in Hong Kong. </li>
                                <p>Some taxis prefer to stay near Central and will sometimes refuse to take your fare if you want to cross the Harbour. My understanding is that this practice is technically illegal, so it often helps to get into the taxi before announcing your destination so that they are more committed to your fare before they know where they are taking you. Even so, some particularly difficult drivers will tell you to get out if they really don't want to go to your destination. Again, technically illegal, but I leave it up to you how much you want to fight with them about it.</p>
                        </ul>
                    <p>Taxis in HK accept cash, and like many vendors, they will often round down to the nearest HK Dollar. They sometimes can be short on change, so best to have small bills or coins handy so that you can complete your transaction. I have never seen a credit card used in an HK cab.</p>
                    <p>When we have early morning or late night rehearsals or performances, there will not be a Disney-provided bus to transport us to/from work. In those situations, we will take taxis. We generally take turns paying the full cab fare. <em><strong>Always get a receipt from the driver if you pay for a taxi ride.</strong></em> Then you can submit a reimbursement form for that taxi ride. You may well submit receipts for several taxi fares at the same time.</p>    
            <h3>Uber/Ride Share</h3>
                    <p>While Uber and other ride-share companies operate in HK, they are not as popular as they are in other major cities. This is because HK has one of the best public transportation networks in the world and also because taxis in HK are relatively cheap compared to taxis in other major cities.</p>
                    <p>One advantage to using an Uber/ride-share app is that your route is pre-determined. There are definitely taxi drivers in HK who will try to take advantage of your foreigner naivete by taking an extended route to inflate your fare. Using an Uber avoids this potential pitfall.</p>
            <h3>Walking in HK</h3>
                <p>Walking in HK is a workout! Particularly in Central, where the streets can be quite steep, good shoes are extremely important.</p>
                <p>Pedestrian overpasses take a little while to get used to in HK. Ultimately, they keep pedestrians from clogging major vehicle-heavy thoroughfares, so they are a huge benefit to the city's overall flow. But until you've learned to locate and navigate them, you will occasionally find yourself trying to cross an uncrossable street. You might have to backtrack until you find the staircase that leads to the appropriate pedestrian overpass or 'subway' (which is the term they use for a literal 'way underneath something.' Trains are not really referred to as 'subways' in HK). Alternatively, you may have to walk far away from your intended path to find a crosswalk.</p>
                <img src="Assets/Footbridge Help.jpg" id="footbridge" />
                <p className="img-caption">A helpful sign indicating the presence of a footbridge for crossing the street.</p>
        </section>
    )
}

export default Transportation