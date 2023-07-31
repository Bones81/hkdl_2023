import './communication.css'

const Communication = () => {
    return (
        <section id='communication'>
            <h2 className='section-title'>Communication</h2>
            <h3>Mobile phone options</h3>
                <ol className="comm-ol phone-options">
                    <li className="phone-option">You can bring an "unlocked" smartphone and purchase a pay-as-you-go SIM card in HK, giving you an HK telephone number. I'm fairly certain that most, if not all, recent Verizon iPhones are "unlocked" by default. Otherwise, you'd have to do your research and possibly get some help from a technician or retailer to "unlock" your phone for use on other networks.</li>
                    <li className="phone-option">Or, if you have a T-Mobile unlimited data plan, you can likely use your existing phone and native SIM card, without any addtional hassle. I am strongly considering switching to T-Mobile for this reason alone.</li>
                    <li className="phone-option">Some people have brought two phones, one being their everyday cell phone and the other usually being an older model they happen to have that they can throw an HK SIM card into.</li>
                    <li className="phone-option">We did have one caroler whose phone of choice was an iPhone 4S! (Oh, Paul...) It worked, technically, but he ran into issues as we ended up downloading apps and generally using lots of bandwith and memory, straining his phone past the point of usefulness.</li>
                </ol>
            <h3>Apps to consider downloading</h3>    
                <ul className="comm-ul">
                    <li>WhatsApp, if you don't have it already. It is the primary way many in HK communicate.</li>
                    <li>Microsoft Teams. Boy this app was frustrating to use last year, but it's the one our stage managers insisted we had to use to communicate with them, so it will likely be necessary again this year.</li>
                    <li>Facebook Messenger, if you don't have it already.</li>
                    <li>An exchange rate app to compare USD and HKD amounts. I like a popular one called XE.</li>
                    <li>A Cantonese-learning app. I like one called "Nemo Cantonese."</li>
                    <li>City Mapper. A great app that is often easier to use than Apple or Google Maps. Will help you navigate the city's complex public transit system like a pro.</li>
                    <li>Eventually, you may want to download our bank's mobile banking app, SCHK Mobile.</li>
                    <li>At some point during rehearsals, we will be guided through signing up for KronosMobile, Disney's HR app. It will enable you to see your advance schedule and figure out whether you forgot to clock in/clock out (not that that EVER happens, ahem).</li>
                </ul>
            <h3>VPNs - do you need one?</h3>
                <p>For the most part, our wifi and internet access has been fairly solid in HK, both at our hotel and at Disney. That said, it is potentially a very useful investment to have a VPN on your device(s).</p>
                <p>VPNs are "virtual private networks" that mask your internet address so that it appears you are accessing a network from a different location: New York City instead of Hong Kong, for example.</p>
                <p>Using a VPN enables you to access sites that might otherwise be blocked in your location. For instance, the New York State Health Department website will not allow me to sign in if the computer has a network address currently originating in Hong Kong. I am only able to sign in on that website by using a VPN to mask my actual network address (HK) and instead mimic an address from somewhere within the US.</p>
                <p>A more common example we often encounter is that Netflix's offerings are different in different countries. So your favorite Netflix show might not be available on HK Netflix. If you use a VPN to mimic a US network address however, US Netflix offerings will be available again. (Of course, sometimes, HK Netflix has shows you <em>wish</em> were available on US Netflix, so it works both ways.)</p>
                <p><a href="https://proprivacy.com/vpn/comparison/best-hong-kong-vpn" target="_blank" rel='noreferrer'>Here is a good article on choosing a VPN for use in HK.</a></p> 
        </section>
    )
}

export default Communication