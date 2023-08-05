import './performance.css'

const Performance = () => {
    return (
      <section id="performance">
        <h2 className="section-title">Performing-Related Stuff</h2>
        <h3>Links to Performance Video</h3>
        <h4 className="special-note">
          While we are no longer utilized in the "Mickey and Friends
          Christmastime Ball," I have left in the footage of that show to
          demonstrate the tone and style of shows at HKDL.
        </h4>
        <p>
          Here is footage of the daytime show, "Mickey and Friends Christmastime
          Ball," from 2018. The show has largely remained the same each year,
          though the choreography and staging always changes a bit. It is
          certainly possible this year's incarnation could be signficantly
          different. This show used the carolers in the vocalist roles from
          2017-2020.
        </p>
        <div className="video-holder">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mJgOeaqr7iQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="xmas-ball-2018"
          ></iframe>
        </div>
        <h4>
          The following photos and clips are more directly related to our duties
          this year, i.e. the "A Holiday Wish Come True Tree Lighting Ceremony'
          and <em>a cappella</em> sets on Main Street, in Fantasyland, or in the
          Disneyland Hotel.
        </h4>
        <p>
          Our evening show is called "A Holiday Wish Come True Tree Lighting
          Ceremony," though you may find it listed on YouTube as simply "HKDL
          Tree Lighting" or something like that. Here is the version from 2019.
          Like the daytime show, this show has not changed enormously over the
          years, though changes are of course possible.
        </p>
        <div className="video-holder">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/di1Xh0MFqPc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="tree-lighting-2019"
          ></iframe>
        </div>
        <p>
          <a
            href="https://youtu.be/EhtzCbTI7tQ"
            target="_blank"
            rel="noreferrer"
          >
            Here is a better shot video from a 2016 performance.
          </a>{" "}
          The owner of the video has made it so that I can't embed this video,
          but it still gives you another perspective on this show. There are
          several other versions on YouTube as well.
        </p>
        <img
          src="./assets/tree_lighting_2020.jpeg"
          className="list-pic"
          alt="Tree Lighting 2020"
        />
        <p className="img-caption">Tree Lighting ceremony in 2020</p>
        <img
          src="./assets/tree_lighting_2020_b.jpeg"
          className="list-pic"
          alt="Tree Lighting 2020"
        />
        <p className="img-caption">
          Tree Lighting ceremony in 2020 with a different quartet
        </p>
        <p>
          Here are some clips of the carolers doing <em>a cappella</em> sets
          from previous years. A major upgrade that you'll notice in most 2022
          footage is that they finally gave us a microphone for our daytime
          caroling sets! Hallelujer!
        </p>
        <p>The first one is from 2017, outdoors, on Main Street:</p>
        <video controls width="600" height="400">
          <source src="./assets/Sleigh Ride Main Street.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          Here is another clip from 2022, with the carolers in a different
          location on Main Street, known simply as the "Blue House". We did the
          majority of our Main Street sets in this location last year:
        </p>
        <video controls width="500" height="280">
          <source src="./assets/Holly_Ivy_2022.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          Here is footage from our newest location, as of 2022, in front of the
          "It's A Small World" ride in Fantasyland. You may notice the intrusive
          tick-tock sound of the Small World clock. Yes, we had to sing through
          it every time, and no, they were not able to turn it off for our sets.
          It's distracting, for sure, but we quickly get used to it, and the
          guests seem able to tune it out as well.
        </p>
        <video controls width="500" height="280">
          <source src="./assets/Hark_FL.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>
          In 2020, we were safely ensconced in the balcony of the Disneyland
          Hotel for much of our contract, thanks to intense social distancing.
          Technically, you weren't even allowed to have a gathering of more than
          2 people, so we had to put some distance between the soprano and alto!
          We could barely hear each other! But fortunately, the acoustics down
          below were fantastic.
        </p>
        <img
          className="list-pic"
          src="./assets/balcony_set_2020.jpeg"
          alt="balcony set 2020"
        />
        <p className="img-caption">
          Singing in the lovely Disneyland Hotel lobby balcony.
        </p>
        <p>The next clip is from a Disneyland Hotel set in 2019:</p>
        <video controls width="400" height="500">
          <source
            src="./assets/Hi To You - Intro at Hotel.m4v"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p>
          Because we don't know yet whether we will have any hotel sets this
          year, or what format any hotel sets might take, here is an example of
          a hotel set from 2016. Different costumes, the ability to sit while
          singing, and microphones made this a very comfortable experience:
        </p>
        <video controls width="500" height="300">
          <source src="./assets/I'll Be Home Hotel 2016.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3>Quartets</h3>
        <div id="quartets">
          <img
            className="list-pic"
            id="hotel-set-2016"
            src="./assets/Xmastime Ball 2017.jpg"
            alt="castle show"
          />
          <img
            className="list-pic"
            id="HK-MS-2016"
            src="./assets/HK Main Street 2016 Carolers.jpg"
            alt="main street show"
          />
        </div>
        <p>
          As you are probably aware, there are 8 total carolers divided into 2
          quartets this year.
          <ul>
            One quartet is slated to be:
            <li>S: Katie</li>
            <li>A: Emilia</li>
            <li>T: Nathan</li>
            <li>B: Sean</li>
            <br />
            And the other is:
            <li>S: Sarah</li>
            <li>A: Chelsea</li>
            <li>T: Omar</li>
            <li>B: Johnny</li>
          </ul>
        </p>
        <p>
          In previous years, they wouldn't decide quartets until after
          rehearsals had started. It's entirely possible they could decide to
          change the groupings after we arrive. Just know that's a possibility.
        </p>
        <p>
          That said, whomever you end up being grouped with, your fellow quartet
          members are the carolers you will spend time with most often. When one
          group has a day off, the other group is working. Occasionally, if
          someone is sick, Disney may rotate in that person's counterpart from
          the other quartet for a shift or two.
        </p>
        <p>
          It is worth noting that - if one of us is sick and the other quartet's
          counterpart is not available - we may still be expected to perform
          caroling sets as a trio! In that case, we do our best to plan to sing
          songs that still (mostly) work without the missing caroler. I know
          that 'Santa Claus Is Coming' can work without a bass, for instance,
          and that often the tenor or alto can take over a soprano melody if the
          soprano is out. <br />
          <br /> But this scenario is incredibly rare. When an illness spread
          through the carolers last year and we were down a person, the other
          three still had to report to work, but the SMs just kept us on
          "standby" all day. "Standby" is a fancy word for "we don't have
          anything for you to do, but we can't let you stay home because you're
          being paid for these hours, and we have to make you feel like we may
          have work for you at any moment." What we actually did was hang out in
          the park and visit the Disneyland Hotel and Inspiration Lake. 😜
        </p>
        <p>
          A quick anecdote about trying to change quartet arrangements: During
          my first year, we had one bass-tenor duo who wanted to perform
          together but were assigned to different quartets. They requested that
          the quartets be changed so that they could be in the same quartet, but
          Disney did not agree to it. What Disney did agree to, however, were
          two weeks when the tenor switched his two days off with his
          counterpart in the other group. This effectively gave the bass-tenor
          duo four shifts when they could perform together.
        </p>

        <h3>
          Rehearsals, Performance Decisions, Authority/Working Together, Goode
          Time Rep, & Disney Christmas Shows
        </h3>
        <h4>Who's in charge of us, vocally??</h4>
        <p>
          While HK Disney's music director, Ceejay, and his associate Felix, are
          our music directors, they will usually focus much more on the Disney
          shows (Tree-Lighting and Christmastime Ball, for instance) and give us
          only limited guidance on our Goode Time repetoire. Maybe they'll tune
          pitch or fix the blend in obvious problem areas, but we are generally
          expected to know our rep very well and be ready with it at a moment's
          notice. Some years, maybe only one week into the contract, we will
          sing a song or two for Disney executives as a treat for them as they
          discuss the upcoming Christmas season. So, ideally, you are ready and
          comfortable with the Goode Time rep from the moment we arrive.
        </p>
        <p>
          We usually have a good amount of "self-rehearsal" time baked into our
          schedule. We can use that time to work on any material we feel we need
          to rehearse, and that is when most of our work on the Goode Time rep
          occurs.
        </p>
        <p>
          One issue that can arise is that we want to devote lots of
          self-rehearsal time to the Tree-Lighting or to any other music Disney
          may have given us. And as well we should: without a doubt Disney cares
          more about the shows they've written than any of the atmosphere work
          we do performing <em>a cappella</em> sets on Main Street, in
          Fantasyland, or in the Disneyland Hotel.
        </p>
        <p>
          However, the trap that results is that we sometimes end up not
          rehearsing our Goode Time rep enough, despite having lots of
          'self-rehearsal' time. This has caused challenges in the past, where
          the material just isn't as performance-ready as it should be. It's up
          to us to use our 'self-rehearsal' time to rehearse all of our Goode
          Time material, as well as the Tree-Lighting or any other music Disney
          may assign us. Find time at Disney to warm up together, at least for a
          song or two. And take advantage of self-rehearsal opportunities. Last
          year, we would often rehearse at least one song before every set,
          until we were sure we were comfortable with the entire rep.
        </p>
        <p>
          Because the music director Ceejay (and his associate Felix) are fairly
          hands off when it comes to our Goode Time rep, we are generally
          trusted to monitor ourselves when it comes to quality and set
          selection. While we will always have a Disney 'lead' or 'greeter' with
          us when we carol on Main Street, in Fantasyland, or in the Disneyland
          Hotel, and while we will know the length of our sets, they won't
          dictate what we sing or, frankly, care how we sound. It will be up to
          us what we choose to sing and to ensure it is Disney-standard quality.
        </p>
        <p className="special-note">
          Take Note: On the other hand, there is MUCH attention paid to our
          vocals when we are performing anything that isn't the Goode Time rep.
          Ceejay or Felix will usually give us notes after every run or
          rehearsal of the Tree Lighting, and sometimes even after the first
          week or two of shows!
        </p>
        <p>
          There is no "vocal captain" responsible for keeping us at a high
          standard when we sing Goode Time material. In the end, WE are in
          charge of us, vocally. This means any one of us may need to speak up
          if we hear that something is off or clearly needs improvement.
        </p>
        <p>
          Now, this can get tricky quickly. Most professional performers believe
          that we shouldn't give each other notes. In almost every performing
          situation, there is a director or music director who gives the notes.
          But we're operating essentially without a director when we perform
          Goode Time material. So, sometimes it falls to us to say something
          when our performance needs improvement. Because we are all proud
          performers who have to work in close quarters all day long, it's a
          good policy to be as respectful and sensitive as possible if you have
          a point to offer at any time during the process. Whenever possible,
          phrase your suggestion in a way that doesn't seem accusatory,
          attacking, or belittling: "Nathan, I don't think you're hitting the
          right pitch in that bar." vs. "Hey, can we sing through these two
          bars? I'm seeing something different in the music from what I'm
          hearing," for instance. And like any good performer receiving a note,
          try to understand and take the suggestion if it applies to you and
          resist the urge to complain or defend yourself. (I'm absolutely guilty
          of this!)
        </p>
        <h4 className="special-note">
          This merits an important side-bar about checking your pride at the
          door and remembering the bigger picture. This gig MUST be approached
          in the spirit of teamwork. Our goal is not to pad our resume or
          impress higher ups at Disney with a stellar individual HKDL
          performance. Our goal is to embody and spread Christmas spirit, as
          envisioned by Disney. We are not the stars, even though we may feel
          like it at times. Mickey and Minnie are the stars. The giant Christmas
          tree is the star. The atmosphere we help to create that enables guests
          to escape reality for a few hours is the star. <strong>Not us</strong>
          . Always, always, always keep that in the back of your mind. Humility
          with this gig goes a LONG, LONG way. If you're the kind of performer
          who NEEDS an extra spotlight, this gig will disappoint you. Disney
          really values the experience (the 'magic') above all else. In that
          same vein, everyone at HKDL is working so hard and dealing with so
          much more than we see (and often being paid less than we are). They
          all deserve our respect and patience, even when we sometimes think
          they don't know how to do their job well (Again, totally guilty of
          this.) Stay grateful and humble and remember the bigger picture all
          the time!
        </h4>
        <h4>Dividing Duties</h4>
        <p>
          Different quartets handle our unique performance duties differently.
          My first year, our bass took charge of almost all the ancillary
          duties: set selection, blowing the correct starting pitch, &
          intros/outros, only occasionally soliciting opinions from the rest of
          the quartet. We all went with it, and it worked very well.
        </p>
        <p>
          Other groups usually split the duties a little more cooperatively. One
          male usually handles blowing the pitch for all the songs. One person
          (possibly the same person) generally does the intro after the first
          song of the set. (Sets often start with cold openers.) Sometimes that
          person intros all the songs, and sometimes other members will take on
          the intro duty for the next song(s). Often there's no intro into the
          next song. Maybe your quartet comes up with an intro "bit" that
          involves multiple people or a guest. You get the idea.
        </p>
        <p>
          Regarding set selection, I think it works well to have one person, or
          the group, set a few "template" set lists of 5-8 songs each that you
          can rotate through regularly so that you don't end up singing the same
          songs every day. Then, changes can be made as necessary prior to a
          given set if people want to sing something different. And often,
          changes have to occur on the fly! (Your lead just told you your set
          has been cut from 20 minutes to 5 minutes. So much for set planning!)
        </p>
        <p>
          Or, you can decide on a set list five minutes before every set by
          everyone shouting out the first song that pops into their head! (I
          seriously don't recommend that.) The point is, it's up to you and your
          quartet to decide how to handle that part of the job.
        </p>
        <h4>Set List Ideas</h4>
        <p>
          I personally love the art of crafting a great <em>a cappella</em> set.
          Your choices can dramatically shape the audience experience, so I
          think it's worth making a few suggestions here.
        </p>
        <ul className="performance-ul">
          <li>
            Great openers are often shorter, uptempo, ensemble songs and start
            and finish with strong moments. I also like to use songs that aren't
            as well known in this slot since the very fact that you're singing
            will capture their focus. (e.g. O What a Merry Christmas Day, Hi to
            You, Here We Come A'Caroling, Caroling Caroling)
          </li>
          <li>
            Intro time! Say something like, "Hello everyone, and Merry
            Christmas! We are the Disneyland Main Street Carolers. We are here
            today because we want to share Christmas music with all of you! Do
            you want to hear Christmas music today? Fantastic! Our next song
            will be ..."{" "}
          </li>
          <li>
            You got their attention with the opener! Now change gears (without
            dropping the energy) and show them your musical restraint and
            control. This slot is often where I like to put one of our classic
            traditional or religious carols. (e.g. Angels We Have Heard On High,
            Hark the Herald Angels Sing, God Rest Ye, Good King Wenceslas)
          </li>
          <li>
            Third song: if you went slower on the second song, bring the tempo
            back up with this one. If the second song was still relatively
            uptempo, dial the tempo back here. Maybe this song is more
            recognizable or includes a fun solo to focus their attention on a
            new aspect of the performance. (Practically anything can go here,
            depending on the situation. e.g. Frosty, Rudolph, Holly Jolly,
            Hippopotamus, All I Want for Christmas, Sleigh Ride, Most Wonderful
            Time, I Saw Mommy Kissing, etc.)
          </li>
          <li>
            Depending on how long the set is, you get a lot more flexibility to
            mix in solo numbers, sillier songs, traditional songs, etc., always
            seeking to create an ebb and flow to the energy of the set and hence
            the audience. Filler songs, if you will. (e.g. Happy Holiday,
            Toyland, Here Comes Santa Claus, Let It Snow, O Tannenbaum, Carol of
            the Drum, Midnight Clear, Silver Bells, Up on the Housetop, etc.)
          </li>
          <li>
            Not every song needs an intro. Intros definitely give everyone an
            opportunity to breathe between songs, but they can also disrupt the
            momentum of a set if they happen before every song. After the first
            intro, probably a rule of thumb is to do an intro every other song
            or so. Sometimes you have a good intro for a specific song, so
            you'll want to intro that one regardless of where it falls in the
            set. Use your judgment. In a short set, maybe you only intro the
            opener and the closer. It will depend on your set's circumstances.
          </li>
          <li>
            Penultimate song of the set: Ideally a powerhouse number or an
            energy-builder to the final song of the set. Either a fantastic
            arrangement or fun solo, or it's just unabashedly joyful. (e.g.
            Carol of the Bells, Joy to the World, Rudolph, I'll Be Home, White
            Christmas){" "}
          </li>
          <li>
            Closing song intro: Usually lets the audience know this is your last
            song and that you've loved sharing Christmas cheer with them and
            that you hope they have an amazing rest of their day at Hong Kong
            Disneyland. If appropriate, you can also let them know that the
            carolers will be doing a short meet and greet for photos immediately
            after the last song.
          </li>
          <li>
            Closers are often short and/or familiar and uptempo. Should
            definitely have a strong final moment to end the set strongly. (e.g.
            Winter Wonderland, Jingle Bells, We Wish You a Merry Christmas,
            Jingle Bell Rock, Merry Christmas Round)
          </li>
        </ul>
        <h4>Photo Moment</h4>
        <img
          className="photo-moment"
          src="./assets/Photo Moment 2016.jpg"
          alt="fan moment"
        />
        <img
          className="photo-moment"
          src="./assets/Photo Moment.jpg"
          alt="fan moment"
        />
        <img
          className="photo-moment"
          src="./assets/Caroler Photo Moment.jpg"
          alt="fan moment"
        />
        <h4 className="special-note">
          In both 2020 and 2022, amid full COVID restrictions, we did not do
          photo moments or meet-n-greets. With COVID restrictions largely
          eliminated in 2023 and HKDL allowing face characters to touch and hug
          guests again, I expect we may be encouraged to do photo moments again!
          In any case, if we do have them, here's what you can expect!
        </h4>
        <p>
          Guests at HKDL love meet-and-greets! If we do those this year, we will
          invite them to form a queue at the end of our set. Then we pose for
          photos with them until it is time for us to leave.
        </p>
        <p>
          Be ready for people who do not respect the queue and try to get their
          photo in before someone who is waiting patiently in line. Try not to
          be too annoyed by it, even though it is monumentally obnoxious
          behavior. We have to remain cheerful, no matter what happens. Improv
          your way around awkward situations. Disney notoriously values
          preserving the magic at all costs. (Cue the video of{" "}
          <a
            href="https://www.youtube.com/embed/juFEwdN_de8"
            target="_blank"
            rel="noreferrer"
          >
            Shellie May literally passing out
          </a>{" "}
          from heat exhaustion during a parade but not being allowed to take off
          her character head.)
        </p>
        <h3 id="song-list">Our Song List</h3>
        <p>
          For several years, we have operated on a slightly reduced song list
          from the standard Goode Time rep. Here are the Goode Time rep songs we
          are expected to know (as these are the songs Disney have technically
          approved):
        </p>
        <div className="song-lists">
          <img
            className="list-pic song-list"
            width="400"
            src="https://i.imgur.com/6bPbf76.jpg"
            alt="list of songs approved by Disney HK"
          />
          <img
            className="list-pic song-list"
            width="480"
            src="https://i.imgur.com/xfZKEhq.jpg"
            alt="list of songs approved by Disney HK"
          />
        </div>
        <p>
          While the songs above are the songs we are contractually expected to
          be ready to perform at a moment's notice, the reality is that we
          almost never sing:
        </p>
        <ul>
          <li>Grandma Got Run Over By a Reindeer</li>
          <li>Mele Kelikimaka</li>
          <li>Lights of Hannukah</li>
        </ul>
        <p>
          You will likely have ample opportunities to sing everything else from
          that list. Admittedly, you probably won't do many sets with more than
          1 or 2 slower songs. Uptempo, higher energy songs will form the vast
          majority of our rep at Disney. I can count on one hand the number of
          times we sang certain slower songs last year (But we DID sing them!),
          like:
        </p>
        <ul>
          <li>Away in a Manger</li>
          <li>Coventry Carol</li>
          <li>It Came Upon a Midnight Clear</li>
          <li>
            Still, Still, Still (a lot of us love this song, but it's long and
            often hard to hear well on busy days)
          </li>
        </ul>
        <p>
          There will be slower, quieter days in the park (but not many!) when
          you can break out slower songs like those listed above a little more
          liberally.
        </p>
        <p>
          Take advantage of those days because most of the time we'll be singing
          the uptempo stuff, although your quartet has freedom to choose its own
          sets. Some of the songs we performed most often in 2022 were:
        </p>
        <ul>
          <li>Carol of the Bells</li>
          <li>Carol of the Drum</li>
          <li>Deck the Halls</li>
          <li>God Rest Ye Merry, Gentlemen</li>
          <li>Here We Come A'Caroling</li>
          <li>Jingle Bells (basically every day, sometimes twice a day)</li>
          <li>Joy to the World</li>
          <li>Rockin' Around the Christmas Tree</li>
          <li>Rudolph the Red Nosed Reindeer</li>
          <li>Toyland/Nuttin' For Christmas</li>
          <li>We Wish You A Merry Christmas</li>
          <li>Winter Wonderland</li>
        </ul>
        <p className="special-note">
          The best policy will be to know everything from <a href="#song-list">the "approved" list above</a> by the
          date you start your contract, just in case Disney requests specific
          songs at any point. You might be scheduled to perform a special event
          in front of Disney executives, one of whom happens to love Mele
          Kelikimaka and has requested it. In theory, we need to be able to
          deliver that song. <br />
          <br />
          The above comments about the song list are offered mostly to help you
          prioritize what songs you may need to learn or review as you prepare
          for the contract.
        </p>
        <h3>Modifications to Goode Time carols</h3>
        <h4>
          We will sometimes cut/alter some of the Goode Time carols for the sake
          of a better performance in the HK Disney environment.
        </h4>
        <p>
          Below are some of the songs we have historically modified to play
          better for the HKDL caroling audiences. I'll include a brief
          explanation of the change(s), but of course, you'll have to ensure you
          and your quartet have learned the modifications, rehearsed them, and
          are comfortably ready to perform them, if your quartet has chosen to
          do so.
        </p>
        <ul className="performance-ul">
          <li>
            All I Want for Xmas -- No whistling 'fail' moment. Just let the bass
            lead into the next verse. (You're welcome for the epic starting
            frame. 🤣)
            <video controls width="500" height="280">
              <source
                src="./assets/All_I_Want_FL.mp4#t=30,55"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              All I Want For Xmas in Fantasyland, 2022
            </p>
          </li>
          <li>
            Grandma Got Run Over -- We don't do the rap, cutting straight to the
            next section. But really, we don't ever do this song. I'm just
            saying, IF we ever do it, there's no rap. For the love of Mickey,
            please omit the cringe-worthy rapping.
          </li>
          <li>
            Happy Birthday -- Sometimes we cut the opening oohs. Generally we
            keep it fast too.
          </li>
          <li>
            Here Comes Santa Claus -- For this one we change the ending to one
            that's less abrupt. Definitely consult with a vet. It's kind of a
            similar change, stylistically, to what we do at the end of Rudolph.
            I'll try to find video footage.
          </li>
          <li>
            Hi to You -- Sooo, funny thing is, in Cantonese, the sound of "Hi"
            on a sustained high tone means "p**sy." As a result, we try not to
            say "Hi" at the end of the song. We usually say the same sentiment
            as "Hello" in Cantonese, which sounds like "Lei Ho" or "Nei Ho." Or you can
            just say "Hello!" It's not a big deal, ultimately, and no one's ever
            been offended that we know of. But now that we know it could be
            heard as vulgar, we made this adjustment.
            <video controls width="500" height="280">
              <source src="./assets/Hi_To_You.mov#t=35" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">Hi To You in Fantasyland, 2022</p>
          </li>
          <li>
            Holly Jolly Christmas -- Tempo changes that are more easily
            demonstrated than explained, and we simplify the ending by not
            including the repeated jazzy "this year".
            <video controls width="500" height="280">
              <source src="./assets/Holly_Jolly_DLH.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">Holly Jolly at DLH, 2020</p>
          </li>
          <li>
            Here We Come A’Caroling -- change the line to “but we are{" "}
            <em>Disney</em> carolers whom you have seen before”
            <video controls width="500" height="280">
              <source
                src="./assets/Here We Come A'Caroling 2017.mp4#t=20,29"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              Here We Come A'Caroling on Main Street, 2017
            </p>
          </li>
          <li>
            I Saw Mommy Kissing -- We don't do the spoken interlude. We skip
            straight to the coda after "Oh what a laugh it would have been if
            Daddy had only seen Mommy kissing Santa Claus last--"
            <video controls width="500" height="280">
              <source src="./assets/I_Saw_Mommy_FL.mov#t=35" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              I Saw Mommy Kissing Santa Claus in Fantasyland, 2022
            </p>
          </li>
          <li>
            Jingle Bells -- Sometimes, we'll sing this with just one verse,
            especially if it's a closing song and we're short on time.
          </li>
          <li>
            Jingle Bell Rock -- Tempo changes, some added syncopation, and
            inserted snaps/claps. Like Holly Jolly, it's nothing too crazy, but
            it's easier heard/rehearsed than explained.
            <video controls width="500" height="280">
              <source src="./assets/JBR_FL.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">Jingle Bell Rock in Fantasyland, 2022</p>
          </li>

          <li>
            Joy to the World -- Once in a blue moon, we get the opportunity to
            do the second verse as a beatbox'd remix. This is from 2016's
            version of the Christmas Cabaret, a cast member-only holiday event
            they produce each year.
            <video controls width="500" height="280">
              <source
                src="./assets/Xmas_Cabaret_2016.mov#t=0,70"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              Joy to the World, remix. Christmas Cabaret 2016
            </p>
          </li>
          <li>
            Most Wonderful Time -- "It's the hap (clap, clap or snap, snap),
            happiest season of all."
          </li>
          <li>
            Rockin' Around the Christmas Tree -- The bass generally tones down
            the Elvis stylings, and we alter the ending slightly. Instead of the
            final jazzy "Oooh," we just pulse then hold the final word "tree" so
            that it kinda sounds like: "yeah we're rockin' round the Christmas
            tree-ee!"
            <video controls width="500" height="280">
              <source src="./assets/Rockin_FL.mp4#t=60,85" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              Rockin' Around the Christmas Tree in Fantasyland, 2022
            </p>
          </li>
          <li>
            Rudolph -- We change the ending to make it a little more
            tradtional-sounding and less of a jazzy, chromatic downward death
            spiral. The change starts on "you'll go down in history." Easier
            seen/rehearsed than explained.
            <video controls width="500" height="280">
              <source src="./assets/Rudolph_MS.mov#t=40" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">Rudolph at the Blue House, 2022</p>
          </li>
          <li>
            Santa Baby -- We used to sing this as "Santa Goofy" while Santa
            Goofy would show up and perform with us. As a result, we sometimes
            will still perform this song subbing in 'Santa Goofy' for 'Santa
            Baby.' It's not as creepy as you might think! 😂
            <video controls width="360" height="600">
              <source src="./assets/Santa_Goofy_2018.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              Santa Goofy as part of the Kiss Goodnight show on the train steps,
              2018
            </p>
          </li>
          <li>
            Santa Claus is Coming to Town -- Same idea here. You can totally do
            this song as "Santa Goofy's Coming to Town."
          </li>
          <li>
            Up on the Housetop/Jolly Ol' St. Nick - after "Don't you tell a
            single soul / What I'm going to say," the bass can add a fun little
            descending "It's a secret" counter phrase.
            <video controls width="300" height="500">
              <source
                src="./assets/Housetop_MS_alternate.mp4#t=10"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p className="img-caption">
              Up on the Housetop/Jolly Ol' St. Nick on Main Street, 2022
            </p>
          </li>
        </ul>
        {/* <p className="special-note">Vets, let me know if you can think of any other songs we alter.</p> */}
      </section>
    );
}

export default Performance