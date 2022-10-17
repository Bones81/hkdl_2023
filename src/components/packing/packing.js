import './packing.css'

const Packing = () => {
    return (
        <section id='packing'>
            <h2>Packing! What to bring/leave at home?</h2>     
        <h3>Some non-obvious items you may want to <strong>CONSIDER PACKING</strong></h3>
                <h4>Many of these items you can also purchase in HK, but consider packing your own if you'd rather have the item from the start of the contract and don't mind the extra weight in your luggage.</h4>
            <ul className='packing-ul'>
                <li>A thermometer</li>
                <li>Plastic/Reusable forks/spoons</li>
                <li>Kitchen towels/dish drying mat (none are provided)</li>
                <li>Preferred soap/dish soap, if you have one. A single, tiny bathroom bar soap is all that is provided by the hotel, and only at the beginning of your stay. All other soap you have to provide.</li>
                <li>Preferred pain/cold meds</li>
                <li>Voice remedies like Singer’s Saving Grace, etc.</li>
                <li>Along the same lines, if you like to steam your vocal passages, consider bringing your own small steamer, but be aware of any electrical concerns (see <a href="#electric">Electrical Concerns</a>)</li>
                <li>Dried spices/herbs, if you cook a lot</li>
                <li>Non-electric coffee-maker option, like a french press or a pourover, for those who need coffee from the get-go. The hotel provides an electric water kettle but not a coffee maker. (You can also purchase cheap, single-cup/multi-cup coffee makers in HK, if you are willing to wait until quarantine is done.)</li>
                <li>Lightweight bowl(s)/mixing bowl (The ones the hotel provides are pretty small.)</li>
                <li>Can opener</li>
                <li>Wine opener</li>
                <li>Coin purse/pouch (Coins are useful and accumulate quickly in HK)</li>
                <li>Laundry detergent pods, if you have a strong preference in detergent</li>
                <li>Preferred vitamins/supplements/protein powder</li>
                <li>Paper copy of your Passport/Birth Certificate/SS Card/Driver’s License. In the unfortunate event you lose your passport, copies of these items can help speed up your process of getting a replacement at an embassy/consulate.</li>
                <li>Extra passport photos and US cash. Originally these were useful for traveling in the area either during or after the contract, but that is probably not an option this year. That said, extra photos (and a copy of your ID docs, see previous item) could be helpful if you lose your passport. And US cash is still a very valuable commodity. Always have some extra US cash for an emergency.</li>
                <li>HDMI cable for connecting laptop to TV to watch Netflix etc.</li>
                <li>Not just good but GREAT walking shoes. You will walk all over the place.</li>
                <li>Compact grocery bags or totes (plastic bags cost extra at most grocery stores)</li>
                <li>Small tupperware (for packing meals/leftovers)</li>
                <li>Extra stick deodorant, if that is your preferred style of deodorant. It is hard to find in HK, for whatever reason.</li>
                <li>If you have 3D glasses for viewing IMAX or RealMAX movies, bring them! HK cinemas charge a small fee for 3D glasses unless you bring your own.</li>
            </ul>

        <h3>Some items you should probably <strong>LEAVE AT HOME</strong></h3>
            <ul className='packing-ul'>
                <li>Chromecasts/Apple TV/Amazon Fire Sticks/Roku/Etc. (They can’t connect over our foreign- & hotel-based WiFi)</li>
                <li>Playstation, XBox, or other large electronic items (power and compatibility issues, even with a converter)</li>
                <li>Heavy winter wear. It will be in the 60s-80s during October/November and will be 50s-70s in December. Leave the snow parka at home. But bring layers, a warm scarf, gloves, and a compact fleece or light coat for those late December nights when it can still get pretty chilly.</li>
                <li>Mass quantities of dress clothes/shoes. Unless you plan to hit the clubs in Lan Kwai Fong on the regular or just love wearing nice things, you likely won’t wear nice clothes much on this contract. 98% of the time, we wear comfy, casual clothes--or our costumes. (DO BRING at least one 'business-casual,' outfit you can wear on the very few occasions when Disney Look is required. Basically anything that's not jeans or flip-flops.) So, bring 1-2 nicer outfits, but that’s likely all you’ll need.</li>
                {/* All this said, if Morgan comes up with another 'Ho Lang, Bitch' to perform at Petticoat Lane, FIERCE LEWKS will be encouraged 💃🕺. */}
                {/* <li>We have managed to see some Halloween costumes broken out in previous years. Like everything this year, I'm sure Halloween will look different, but if you have a creative costume idea that you can pack, you may well get the opportunity to show it off. 🎃</li> */}
            </ul>
                <h3 id="electric">Electrical concerns -- Adapters vs. Converters: what do you need?</h3>
                    <h4 className="special-note">What follows is a bit of a crash course in electrics. It is admittedly a confusing subject. The tl;dr version is: Save yourself heartache by buying cheap HK versions of any appliances you might be thinking of bringing. If you must bring your American appliance, you risk frying it if is not dual-voltage or if it is not plugged into a capable electric converter. Beyond that, you almost certainly want an adapter (or two) with USB ports, but know that adapters and converters are not the same thing, though you can buy adapter/converter combos.</h4>
                    <p>HK electrical outlets deliver 220V of electrical current and require plugs with the UK-style three-prong design.</p>
                    <img id="outlet-plug" src="./assets/UK-outlet-plug.jpg" alt="HK/UK-standard electrical outlets and plugs" />
                    <p className="img-caption">This is the style of electrical outlet and plug you will find in HK.</p>
                    <p>Via use of a travel adapter, you can plug American electric devices into these sockets. BUT unless the device is dual-voltage (meaning it can handle 220V) you run the risk of overloading it with more voltage than the device can handle, potentially frying your item, rendering it trash. This is because American single-voltage devices are only built to handle the American standard of 110V.</p>
                    {/* <!--<p>How do you determine whether a device is single- or dual-voltage? You have to look for the electric specs somewhere on the device. Here is what the specs look like on my Magic Bullet blender:</p>
                    <img id="blender" src="" alt="Picture of Magic Bullet Blender">--> */}
                    <p>You will likely need at least one travel adapter, and adapters are easily purchased in many places that sell electronics. An adapter:</p>
                        <ul className='packing-ul'>
                            <li>adapts your plug so that it will physically fit into a different style socket.</li>
                            <li>does NOT alter voltage.</li>
                        </ul>
                    <p>Therefore, simply using an adapter will not protect your American device from potentially roasting when it is plugged into the higher voltage Hong Kong electical outlet.</p>
                    <p>A voltage converter, on the other hand:</p>
                        <ul className='packing-ul'>
                            <li>changes voltage from 220V to the American standard of 110V, thereby protecting your devices, if the device is within the converter's power rating (measured in W, meaning 'watts')</li>
                            <li>are usually heavier, bulkier, and more expensive than adapters.</li>
                        </ul>
                    <p>If finding an acceptable converter sounds like a pain in the butt, you're not wrong. I found one in Hong Kong my first year. I used it for multiple contracts, but really I was only using it to convert voltage for my American-made Magic Bullet blender. Turned out I didn't need the converter for my laptop or phone charger, both of which were dual-voltage and needed only an adapter. Because I used my blender very little last year, I eventually gave away my voltage converter so that I wouldn't have to keep lugging around the extra ten pounds each contract. Sure, the converter did the job, but it was ten pounds!</p>
                    <p>Appliances are plentiful in HK, and they are easy for us to dispose of/give away when the contract is done. There is a glorious store called Mini So where I plan to purchase a cheap personal blender this year. Single-cup coffee maker, alarm clock, personal scale, bluetooth speakers, all manner of small appliances--already calibrated for HK voltage--they can all be found in HK fairly easily.</p>
                    <p>So, after going down the converter route for multiple contracts, I have decided to go adapter-only this year.</p>
                    <p>That said, here are some Amazon links to converter/adapter combos that some vets have suggested:</p>
                    <ul className='packing-ul'>
                        <li><a href="https://www.amazon.com/2000W-Travel-Adapter-Converter-Combo/dp/B088WQ1VNB/ref=mp_s_a_1_7?dchild=1&keywords=power%20converter%20doace&qid=1595986488&sr=8-7&fbclid=IwAR0ZJX9JWxrIURPxjJPNpyOaNBsYUx3m7s8ByDEBqeCfeX97hUys6NUQXlg" target="_blank" rel="noreferrer">This one</a> should handle single-voltage electric items with a power rating of 26-2000W. That covers a lot of hair dryers, but according to its safety information, it "CAN NOT work with electronic controlled devices that are controlled by digital chips Which has auto shut-off, timer, temperature control, pulse, touch screen function such as Hair Straightener, Flat Iron, Curling iron, CPAP machine, Drill Battery, Coffee Machine, Blender, Heating Pad and so on. ###Converter Mode Can Not be used with low-wattage appliances (0-25W). Such as Hair Clipper, Electric Shaver, Electric Toothbrush and Dental Flossing Machine." </li>
                        <li><a href="https://www.amazon.com/BESTEK-Universal-Converter-Charging-Worldwide/dp/B01E140XWA/ref=mp_s_a_1_5?dchild=1&keywords=power%20converter&qid=1595986712&sr=8-5&fbclid=IwAR3Kh-AUpSHL3jrm8FJxZzEvK_x1p6yhDlcsDO-IF2dTGRVSfxVrBlr8orc" target="_blank" rel="noreferrer">Here is another</a> that has USB ports, but it specifically states that it is not compatible with hair dryers or any other device that is above 200W. That rules out a lot of medium-to-heavy-duty devices.</li>
                    </ul>
                    <p className="special-note">Deciding whether you need an electrical converter or merely a travel adapter depends on what devices you intend to bring with you from the US. If they can handle 220V, then an adapter is all you need. If they can't handle 220V, you'd have to use a converter that can accommodate your device. This means the converter's power rating (26W-2000W, for instance) includes that of your device (For instance, my Magic Bullet blender generates 150W, meaning it would work with a converter with a power rating of 26W-2000W.) You have to check your device's electrical label to know how many W it generates.</p>
        </section>
    )
}

export default Packing