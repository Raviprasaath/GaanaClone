import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import action from "../../action";



function Footer() {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

  const dispatch = useDispatch();


  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth > 960);
    };
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  const handleSongSelection = (selectedItem) => {    
    dispatch(action.setActiveItem(selectedItem));
  }



  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/SpotifyIndia/?brand_redir=6243987495",
      "_blank"
    );
  };
  const handleTwitterClick = () => {
    window.open("https://twitter.com/spotifyindia?lang=en", "_blank");
  };

  const handleSiteMap = () => {
    window.open("https://gaana.com/sitemap/sitemap.html", "_blank");
  };

  return (
    <>
      <div className="footer">
        {screenSize ? (
          <div className="footer-section">
            <div className="footer-intro">
              <h2>Bas Bajna Chahiye Gaana</h2>
              <p className="intro-tag">
                Gaana is the one-stop solution for all your music needs. Gaana
                offers you free, unlimited access to over 30 million Hindi
                Songs, Bollywood Music, English MP3 songs, Regional Music &
                Mirchi Play.
              </p>
              <dir className="divide-line"></dir>
              <div className="social-media-icons">
                <SocialIcon
                  network="facebook"
                  className="social-icon"
                  fgColor="white"
                  bgColor="#3c5c9c"
                  style={{ cursor: "pointer" }}
                  onClick={handleFacebookClick}
                />
                <SocialIcon
                  network="twitter"
                  className="social-icon"
                  fgColor="white"
                  bgColor="#00acee"
                  style={{ cursor: "pointer" }}
                  onClick={handleTwitterClick}
                />
              </div>
              <dir className="divide-line"></dir>
              <div className="footer-terms-condition">

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">Terms of Use</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        The Privacy Policy for Columbia's ishere This Privacy
                        Policy explains our policy regarding the collection,
                        use, disclosure and transfer of your information by
                        Gamma Gaana Ltd. and/or its subsidiary(ies) and/or
                        affiliate(s) (collectively referred to as the Company ),
                        which operates the website (“Site”), applications and
                        other services including but not limited to delivery of
                        music and related content via the site¸ any mobile or
                        internet connected device or otherwise (collectively the
                        "Gaana Service"). This Privacy Policy forms part and
                        parcel of the Terms of Use for the Gaana Services.
                        Capitalized terms which have been used here but are
                        undefined shall have the same meaning as attributed to
                        them in the Terms of Use. As we update, improve and
                        expand the Gaana Services, this policy may change, so
                        please refer back to it periodically. By accessing the
                        website or otherwise using the Gaana Services, you
                        consent to collection, storage, and use of the personal
                        information you provide (including any changes thereto
                        as provided by you) for any of the services that we
                        offer. The Company respects the privacy of the users of
                        the Gaana Services and is committed to reasonably
                        protect it in all respects. The information about the
                        user as collected by the Company is: (a) information
                        supplied by users and (b) information automatically
                        tracked while navigation (collectively referred to as
                        Information ). INFORMATION SUPPLIED BY USERS To avail
                        certain services on the Gaana Services, users are
                        required to provide certain personally identifiable
                        information for the registration process which may
                        include:- a- your name, b- email address, c- sex, d-
                        age, e- PIN code , f- credit card or debit card details
                        g- medical records and history h- sexual orientation, i-
                        biometric information, j- password k- your occupation,
                        interests, and the like etc., and / or your occupation,
                        interests, and the like. The Information as supplied by
                        the users enables us to improve the Gaana Services and
                        provide you the most user-friendly experience. In some
                        cases/provision of certain service(s) or utility(ies),
                        we may require your contact address as well. All
                        required information is service dependent and the
                        Company may use the above said user Information to,
                        maintain, protect, and improve the Gaana Services
                        (including advertising on the Site) and for developing
                        new services. We may also use your email address or
                        other personally identifiable information to send
                        commercial or marketing messages without your consent
                        [with an option to subscribe / unsubscribe (where
                        feasible)]. We may, however, use your email address
                        without further consent for non-marketing or
                        administrative purposes (such as notifying you of major
                        changes, for customer service purposes, billing, etc.).
                        Any personally identifiable information provided by you
                        will not be considered as sensitive if it is freely
                        available and / or accessible in the public domain.
                        Further, any comments, messages, blogs, scribbles etc.
                        posted/uploaded/conveyed/communicated by users on the
                        public sections of the Site becomes published content
                        and is not considered personally identifiable
                        information subject to this Privacy Policy. In case you
                        choose to decline to submit personally identifiable
                        information on the Site, we may not be able to provide
                        certain services on the Site to you. We will make
                        reasonable efforts to notify you of the same at the time
                        of opening your account. In any case, we will not be
                        liable and or responsible for the denial of certain
                        services to you for lack of you providing the necessary
                        personal information. When you register with the Gaana
                        Services, we contact you from time to time about
                        updation of your personal information to provide the
                        users such features that we believe may benefit /
                        interest you. INFORMATION AUTOMATICALLY TRACKED WHILE
                        NAVIGATION Cookies To improve the responsiveness of the
                        Site for our users, we may use "cookies", or similar
                        electronic tools to collect information to assign each
                        visitor a unique, random number as a User Identification
                        (User ID) to understand the user's individual interests
                        using the identified computer. Unless you voluntarily
                        identify yourself (through registration, for example),
                        we will have no way of knowing who you are, even if we
                        assign a cookie to your computer. The only personal
                        information a cookie can contain is information you
                        supply. A cookie cannot read data off your hard drive.
                        Our advertisers may also assign their own cookies to
                        your browser (if you click on their ads), a process that
                        we do not control. Log File Information Our web servers
                        automatically collect limited information about your
                        computer's connection to the Internet, including your IP
                        address, when you visit our site. Your IP address is a
                        number that lets computers attached to the Internet know
                        where to send you data -- such as the web pages you
                        view. We automatically receive and log information from
                        your browser, including your IP address, your computer's
                        name, your operating system, browser type and version,
                        CPU speed, and connection speed. We may also collect log
                        information from your device, including your location,
                        IP address, your device’s name, device’s serial number
                        or unique identification number (e.g.. UDiD on your iOS
                        device), your device operating system, browser type and
                        version, CPU speed, and connection speed etc.. Clear
                        GIFs We may use "clear GIFs" (Web Beacons) to track the
                        online usage patterns of our users in a anonymous
                        manner, without personally identifying the user. We may
                        also use clear GIFs in HTML-based emails sent to our
                        users to track which emails are opened by recipients. We
                        use this information to inter-alia deliver our web pages
                        to you upon request, to tailor our Site to the interests
                        of our users, to measure traffic within our Site, to
                        improve the Site quality, functionality and
                        interactivity and let advertisers know the geographic
                        locations from where our visitors come. Information from
                        other Sources: We may receive information about you from
                        other sources, add it to our account information and
                        treat it in accordance with this policy. If you provide
                        information to the platform provider or other partner,
                        whom we provide services, your account information and
                        order information may be passed on to us. We may obtain
                        updated contact information from third parties in order
                        to correct our records and fulfil the Services or to
                        communicate with you Demographic and purchase
                        information: We may reference other sources of
                        demographic and other information in order to provide
                        you with more targeted communications and promotions. We
                        use Google Analytics, among others, to track the user
                        behaviour on our website. Google Analytics specifically
                        has been enabled to support display advertising to help
                        us gain an understanding of our users' Demographics and
                        Interests. The reports are anonymous and cannot be
                        associated with any individual personally identifiable
                        information that you may have shared with us. You can
                        opt-out of Google Analytics for Display Advertising and
                        customize Google Display Network ads using the Ads
                        Settings options provided by Google. LINKS TO THIRD
                        PARTY SITES / AD-SERVERS
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">Privacy Policy</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        Privacy Policy The Privacy Policy for Columbia's ishere
                        This Privacy Policy explains our policy regarding the
                        collection, use, disclosure and transfer of your
                        information by Gamma Gaana Ltd. and/or its
                        subsidiary(ies) and/or affiliate(s) (collectively
                        referred to asthe Company ), which operates the website
                        (“Site”), applications and other services including but
                        not limited to delivery of music and related content via
                        the site¸ any mobile or internet connected device or
                        otherwise (collectively the "Gaana Service"). This
                        Privacy Policy forms part and parcel of the Terms of Use
                        for the Gaana Services. Capitalized terms which have
                        been used here but are undefined shall have the same
                        meaning as attributed to them in the Terms of Use. As we
                        update, improve and expand the Gaana Services, this
                        policy may change, so please refer back to it
                        periodically. By accessing the website or otherwise
                        using the Gaana Services, you consent to collection,
                        storage, and use of the personal information you provide
                        (including any changes thereto as provided by you) for
                        any of the services that we offer. The Company respects
                        the privacy of the users of the Gaana Services and is
                        committed to reasonably protect it in all respects.
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">Partners</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        About Gaana Gaana.com is Gamma Gaana Ltd music
                        destination, providing free and unlimited access to
                        licensed music. The service has a vast content
                        repertoire of over 45 million songs across popular
                        genres like Bollywood, Regional and International music.
                        Aided by features like online radio and music
                        recommendation and social interactivity, Gaana.com is
                        all about listening, building your personal music
                        library, discovering and sharing your music. The site
                        became India's number 1 music destination within its
                        first three months of launch and has held that position
                        consistently ever since. Gamma Gaana Partners
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet" onClick={()=>handleSiteMap()} >Sitemap</p>
                  </Dialog.Trigger>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">FAQ</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        UPDATES / CHANGES The internet is an ever evolving
                        medium. We may alter our privacy policy from time to
                        time to incorporate necessary changes in technology,
                        applicable law or any other variant. In any case, we
                        reserve the right to change (at any point of time) the
                        terms of this Privacy Policy or the Terms of Use. Any
                        changes we make will be effective immediately on notice,
                        which we may give by posting the new policy on the Site.
                        Your use of the Gaana Services after such notice will be
                        deemed acceptance of such changes. We may also make
                        reasonable efforts to inform you via electronic mail. In
                        any case, you are advised to review this Privacy Policy
                        periodically on the Site to ensure that you are aware of
                        the latest version.
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>


              </div>
              <dir className="divide-line"></dir>

              <h3>Quick Links</h3>
              <div className="footer-content">
                <div className="row-1">
                  <div className="footer-row-content">
                    <h3>Soundscapes</h3>
                    <p>
                    <Link className="title" to={`/happy`} onClick={() => handleSongSelection("Happy Mood")}>
                      Upbeat tunes
                    </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        Thrilling tunes
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Melancholic tunes
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Love ballads
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        Electrifying melodies
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                        Mournful ballads
                      </Link>
                    </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Genres</h3>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                        Heart-wrenching melodies
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Devotional Songs
                      </Link>
                    </p>

                    <p>
                      <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                        Musical compositions
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        Enthusiastic beats
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Affectionate songs
                      </Link>
                    </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Musical traditions</h3>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Joyful melodies
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                        Sorrowful music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Heartfelt serenades
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Cheerful music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                        Track series
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        High-energy music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                        Album cuts
                      </Link>
                    </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Sound varieties</h3>
                    <p>
                      <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                        Soundtrack pieces
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Passionate music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Uplifting songs
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="row-2">
                  <div className="footer-row-content">
                    <h3>Energetic beats</h3>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Peppy music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                        Lively tempos
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Upbeat cadences
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Vibrant pulses
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                        Energetic percussion
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        Dynamic rhythms
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                        Pounding rhythms
                      </Link>
                    </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Rhythmic vitality</h3>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Enamored rhythms
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Heart-pounding tracks
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                        Euphoric rhythms
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        High-energy music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Pulsating life force
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                        Tender compositions
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        High-energy music
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                        Amorous melodies
                      </Link>
                    </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Lyrics</h3>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                        Sentimental tunes
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                        Jingle Bells Lyrics
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                        Vivacious drumming
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Memories Lyrics
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                        Pulsing life
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                        Dynamic heartthrobs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                        Energetic thumping
                      </Link>
                    </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Old Songs</h3>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Hindi Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old English Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Punjabi Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Telugu Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Tamil Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Bengali Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Bhojpuri Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Malayalam Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Kannada Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Marathi Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Gujarati Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Haryanvi Songs
                      </Link>
                    </p>
                    <p>
                      <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                        Old Urdu Songs
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <dir className="divide-line"></dir>
              <div className="copy-right">
                &copy; Gamma Gaana Ltd.2023, All rights Reserved ~ Raviprasaath
              </div>
            </div>
          </div>
        ) : (
          <div className="footer-mob-view">
            <h2 className="footer-tag">Bas Bajna Chahiye Gaana</h2>
            <p className="intro-tag">
              Gaana is the one-stop solution for all your music needs. Gaana
              offers you free, unlimited access to over 30 million Hindi Songs,
              Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.
            </p>
            <dir className="divide-line"></dir>
            <div className="social-media-icons">
              <SocialIcon
                network="facebook"
                className="social-icon"
                fgColor="white"
                bgColor="#3c5c9c"
                onClick={handleFacebookClick}
              />
              <SocialIcon
                network="twitter"
                className="social-icon"
                fgColor="white"
                bgColor="#00acee"
                onClick={handleTwitterClick}
              />
            </div>
            <dir className="divide-line"></dir>
            <div className="footer-terms-condition">
            <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">Terms of Use</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        The Privacy Policy for Columbia's ishere This Privacy
                        Policy explains our policy regarding the collection,
                        use, disclosure and transfer of your information by
                        Gamma Gaana Ltd. and/or its subsidiary(ies) and/or
                        affiliate(s) (collectively referred to as the Company ),
                        which operates the website (“Site”), applications and
                        other services including but not limited to delivery of
                        music and related content via the site¸ any mobile or
                        internet connected device or otherwise (collectively the
                        "Gaana Service"). This Privacy Policy forms part and
                        parcel of the Terms of Use for the Gaana Services.
                        Capitalized terms which have been used here but are
                        undefined shall have the same meaning as attributed to
                        them in the Terms of Use. As we update, improve and
                        expand the Gaana Services, this policy may change, so
                        please refer back to it periodically. By accessing the
                        website or otherwise using the Gaana Services, you
                        consent to collection, storage, and use of the personal
                        information you provide (including any changes thereto
                        as provided by you) for any of the services that we
                        offer. The Company respects the privacy of the users of
                        the Gaana Services and is committed to reasonably
                        protect it in all respects. The information about the
                        user as collected by the Company is: (a) information
                        supplied by users and (b) information automatically
                        tracked while navigation (collectively referred to as
                        Information ). INFORMATION SUPPLIED BY USERS To avail
                        certain services on the Gaana Services, users are
                        required to provide certain personally identifiable
                        information for the registration process which may
                        include:- a- your name, b- email address, c- sex, d-
                        age, e- PIN code , f- credit card or debit card details
                        g- medical records and history h- sexual orientation, i-
                        biometric information, j- password k- your occupation,
                        interests, and the like etc., and / or your occupation,
                        interests, and the like. The Information as supplied by
                        the users enables us to improve the Gaana Services and
                        provide you the most user-friendly experience. In some
                        cases/provision of certain service(s) or utility(ies),
                        we may require your contact address as well. All
                        required information is service dependent and the
                        Company may use the above said user Information to,
                        maintain, protect, and improve the Gaana Services
                        (including advertising on the Site) and for developing
                        new services. We may also use your email address or
                        other personally identifiable information to send
                        commercial or marketing messages without your consent
                        [with an option to subscribe / unsubscribe (where
                        feasible)]. We may, however, use your email address
                        without further consent for non-marketing or
                        administrative purposes (such as notifying you of major
                        changes, for customer service purposes, billing, etc.).
                        Any personally identifiable information provided by you
                        will not be considered as sensitive if it is freely
                        available and / or accessible in the public domain.
                        Further, any comments, messages, blogs, scribbles etc.
                        posted/uploaded/conveyed/communicated by users on the
                        public sections of the Site becomes published content
                        and is not considered personally identifiable
                        information subject to this Privacy Policy. In case you
                        choose to decline to submit personally identifiable
                        information on the Site, we may not be able to provide
                        certain services on the Site to you. We will make
                        reasonable efforts to notify you of the same at the time
                        of opening your account. In any case, we will not be
                        liable and or responsible for the denial of certain
                        services to you for lack of you providing the necessary
                        personal information. When you register with the Gaana
                        Services, we contact you from time to time about
                        updation of your personal information to provide the
                        users such features that we believe may benefit /
                        interest you. INFORMATION AUTOMATICALLY TRACKED WHILE
                        NAVIGATION Cookies To improve the responsiveness of the
                        Site for our users, we may use "cookies", or similar
                        electronic tools to collect information to assign each
                        visitor a unique, random number as a User Identification
                        (User ID) to understand the user's individual interests
                        using the identified computer. Unless you voluntarily
                        identify yourself (through registration, for example),
                        we will have no way of knowing who you are, even if we
                        assign a cookie to your computer. The only personal
                        information a cookie can contain is information you
                        supply. A cookie cannot read data off your hard drive.
                        Our advertisers may also assign their own cookies to
                        your browser (if you click on their ads), a process that
                        we do not control. Log File Information Our web servers
                        automatically collect limited information about your
                        computer's connection to the Internet, including your IP
                        address, when you visit our site. Your IP address is a
                        number that lets computers attached to the Internet know
                        where to send you data -- such as the web pages you
                        view. We automatically receive and log information from
                        your browser, including your IP address, your computer's
                        name, your operating system, browser type and version,
                        CPU speed, and connection speed. We may also collect log
                        information from your device, including your location,
                        IP address, your device’s name, device’s serial number
                        or unique identification number (e.g.. UDiD on your iOS
                        device), your device operating system, browser type and
                        version, CPU speed, and connection speed etc.. Clear
                        GIFs We may use "clear GIFs" (Web Beacons) to track the
                        online usage patterns of our users in a anonymous
                        manner, without personally identifying the user. We may
                        also use clear GIFs in HTML-based emails sent to our
                        users to track which emails are opened by recipients. We
                        use this information to inter-alia deliver our web pages
                        to you upon request, to tailor our Site to the interests
                        of our users, to measure traffic within our Site, to
                        improve the Site quality, functionality and
                        interactivity and let advertisers know the geographic
                        locations from where our visitors come. Information from
                        other Sources: We may receive information about you from
                        other sources, add it to our account information and
                        treat it in accordance with this policy. If you provide
                        information to the platform provider or other partner,
                        whom we provide services, your account information and
                        order information may be passed on to us. We may obtain
                        updated contact information from third parties in order
                        to correct our records and fulfil the Services or to
                        communicate with you Demographic and purchase
                        information: We may reference other sources of
                        demographic and other information in order to provide
                        you with more targeted communications and promotions. We
                        use Google Analytics, among others, to track the user
                        behaviour on our website. Google Analytics specifically
                        has been enabled to support display advertising to help
                        us gain an understanding of our users' Demographics and
                        Interests. The reports are anonymous and cannot be
                        associated with any individual personally identifiable
                        information that you may have shared with us. You can
                        opt-out of Google Analytics for Display Advertising and
                        customize Google Display Network ads using the Ads
                        Settings options provided by Google. LINKS TO THIRD
                        PARTY SITES / AD-SERVERS
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">Privacy Policy</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        Privacy Policy The Privacy Policy for Columbia's ishere
                        This Privacy Policy explains our policy regarding the
                        collection, use, disclosure and transfer of your
                        information by Gamma Gaana Ltd. and/or its
                        subsidiary(ies) and/or affiliate(s) (collectively
                        referred to asthe Company ), which operates the website
                        (“Site”), applications and other services including but
                        not limited to delivery of music and related content via
                        the site¸ any mobile or internet connected device or
                        otherwise (collectively the "Gaana Service"). This
                        Privacy Policy forms part and parcel of the Terms of Use
                        for the Gaana Services. Capitalized terms which have
                        been used here but are undefined shall have the same
                        meaning as attributed to them in the Terms of Use. As we
                        update, improve and expand the Gaana Services, this
                        policy may change, so please refer back to it
                        periodically. By accessing the website or otherwise
                        using the Gaana Services, you consent to collection,
                        storage, and use of the personal information you provide
                        (including any changes thereto as provided by you) for
                        any of the services that we offer. The Company respects
                        the privacy of the users of the Gaana Services and is
                        committed to reasonably protect it in all respects.
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">Partners</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        About Gaana Gaana.com is Gamma Gaana Ltd music
                        destination, providing free and unlimited access to
                        licensed music. The service has a vast content
                        repertoire of over 45 million songs across popular
                        genres like Bollywood, Regional and International music.
                        Aided by features like online radio and music
                        recommendation and social interactivity, Gaana.com is
                        all about listening, building your personal music
                        library, discovering and sharing your music. The site
                        became India's number 1 music destination within its
                        first three months of launch and has held that position
                        consistently ever since. Gamma Gaana Partners
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet" onClick={()=>handleSiteMap()} >Sitemap</p>
                  </Dialog.Trigger>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p className="Button violet">FAQ</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        UPDATES / CHANGES The internet is an ever evolving
                        medium. We may alter our privacy policy from time to
                        time to incorporate necessary changes in technology,
                        applicable law or any other variant. In any case, we
                        reserve the right to change (at any point of time) the
                        terms of this Privacy Policy or the Terms of Use. Any
                        changes we make will be effective immediately on notice,
                        which we may give by posting the new policy on the Site.
                        Your use of the Gaana Services after such notice will be
                        deemed acceptance of such changes. We may also make
                        reasonable efforts to inform you via electronic mail. In
                        any case, you are advised to review this Privacy Policy
                        periodically on the Site to ensure that you are aware of
                        the latest version.
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
            </div>
            <dir className="divide-line"></dir>

            <h3>Quick links</h3>

            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Soundscapes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Upbeat tunes
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    Thrilling tunes
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Melancholic tunes
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Love ballads
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    Electrifying melodies
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Mournful ballads
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Genres</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Heart-wrenching melodies
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Devotional Songs
                  </Link>
                </p>

                <p>
                  <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                    Musical compositions
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    Enthusiastic beats
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Affectionate songs
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Musical traditions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Joyful melodies
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Sorrowful music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Heartfelt serenades
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Cheerful music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                    Track series
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    High-energy music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                    Album cuts
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Sound varieties</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                    Soundtrack pieces
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Passionate music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Uplifting songs
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Energetic beats</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Peppy music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Lively tempos
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Upbeat cadences
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Vibrant pulses
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                    Energetic percussion
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    Dynamic rhythms
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                    Pounding rhythms
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Rhythmic vitality</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Enamored rhythms
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Heart-pounding tracks
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                    Euphoric rhythms
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    High-energy music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Pulsating life force
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                    Tender compositions
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    High-energy music
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/album`} onClick={()=>handleSongSelection("Album")}>
                    Amorous melodies
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Lyrics</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Sentimental tunes
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/happy`} onClick={()=>handleSongSelection("Happy Mood")}>
                    Jingle Bells Lyrics
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/allsongs`} onClick={()=>handleSongSelection("All Songs")} >
                    Vivacious drumming
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Memories Lyrics
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/romance`}  onClick={()=>handleSongSelection("Moods & Genres")} >
                    Pulsing life
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/sad`} onClick={()=>handleSongSelection("Moods & Genres")} > 
                    Dynamic heartthrobs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/exited`} onClick={()=>handleSongSelection("Exciting Harmony")} >
                    Energetic thumping
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Old Songs</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Hindi Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old English Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Punjabi Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Telugu Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Tamil Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Bengali Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Bhojpuri Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Malayalam Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Kannada Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Marathi Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Gujarati Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Haryanvi Songs
                  </Link>
                </p>
                <p>
                  <Link className="title" to={`/comingsoon`} onClick={()=>handleSongSelection("Moods & Genres")} >
                    Old Urdu Songs
                  </Link>
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        )}

        <div className="dummy-spacing"></div>
      </div>
    </>
  );
}

export default Footer;
