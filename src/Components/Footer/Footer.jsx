import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Footer() {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth > 960);
    };
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

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
                />
                <SocialIcon
                  network="twitter"
                  className="social-icon"
                  fgColor="white"
                  bgColor="#00acee"
                />
              </div>
              <dir className="divide-line"></dir>
              <div className="footer-terms-condition">
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Partners</p>
                <p>Sitemap</p>
                <p>FAQ</p>
              </div>
              <dir className="divide-line"></dir>

              <h3>Quick Links</h3>
              <div className="footer-content">
                <div className="row-1">
                  <div className="footer-row-content">
                    <h3>Albums</h3>
                    <p>English</p>
                    <p>Hindi</p>
                    <p>Telugu</p>
                    <p>Punjabi</p>
                    <p>Tamil</p>
                    <p>Kannada</p>
                    <p>Bhojpuri</p>
                    <p>Malayalam</p>
                    <p>Marathi</p>
                    <p>Bengali</p>
                    <p>Gujarati</p>
                    <p>Haryanvi</p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Genres</h3>
                    <p>Bollywood Songs </p>
                    <p>Devotional Songs </p>
                    <p>Ghazals </p>
                    <p>Bhajan </p>
                    <p>Patriotic Songs </p>
                    <p>Kids Songs </p>
                    <p>Rock Songs </p>
                    <p>Disco Songs </p>
                    <p>Sufi Songs </p>
                    <p>Love Songs </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Artist</h3>
                    <p> Arijit Singh </p>
                    <p> Neha Kakkar </p>
                    <p> Honey Singh </p>
                    <p> Atif Aslam </p>
                    <p> A R Rahman </p>
                    <p> Lata Mangeshkar </p>
                    <p> Kishore Kumar </p>
                    <p> Armaan Malik </p>
                    <p> Sunidhi Chauhan </p>
                    <p> Nusrat Fateh Ali Khan </p>
                    <p> Mohammed Rafi </p>
                    <p> Guru Randhawa </p>
                    <p> Justin Bieber </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>New Release</h3>
                    <p> English Songs </p>
                    <p> Hindi Songs </p>
                    <p> Punjabi Songs </p>
                    <p> Tamil Songs </p>
                    <p> Telugu Songs </p>
                    <p> Kannada Songs </p>
                    <p> Bhojpuri Songs </p>
                    <p> Malayalam Songs </p>
                    <p> Marathi Songs </p>
                    <p> Bengali Songs </p>
                    <p> Odia Songs </p>
                    <p> Urdu Songs </p>
                    <p> Rajasthani Songs </p>
                    <p> Assamese Songs </p>
                    <p> Haryanvi Songs </p>
                  </div>
                </div>
                <div className="row-2">
                  <div className="footer-row-content">
                    <h3>Tending Songs</h3>
                    <p> Vibe Song </p>
                    <p> Hanuman Chalisa </p>
                    <p> Mast Maula </p>
                    <p> Dil Galti Kar Baitha Hai </p>
                    <p> Party All Night </p>
                    <p> Manike Mage Hithe Tamil </p>
                    <p> Raataan Lambiyan </p>
                    <p> Ik Mili Mainu Apsraa </p>
                    <p> Baarish Ki Jaaye </p>
                    <p> Phoonk Le </p>
                    <p> Koi Sehri Babu </p>
                    <p> Jugnu </p>
                    <p> Mainu Nai Pehchaandi </p>
                    <p> Manike Mage Hithe </p>
                    <p> Dance Meri Rani </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Trending Albums</h3>
                    <p> Happy Birthday Songs </p>
                    <p> Sad Songs </p>
                    <p> PK Songs </p>
                    <p> Jersey </p>
                    <p> Bunty Aur Babli 2 </p>
                    <p> Chandigarh Kare Aashiqui </p>
                    <p> Pushpa The Rise </p>
                    <p> Uppena </p>
                    <p> Enemy Tamil </p>
                    <p> Shershaah </p>
                    <p> Jai Bhim </p>
                    <p> Sooryavanshi </p>
                    <p> Dhamaka </p>
                    <p> Gaming Music </p>
                    <p> Atrangi Re </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Lyrics</h3>
                    <p> Shiva Tandava Lyrics </p>
                    <p> Jingle Bells Lyrics </p>
                    <p> Dynamite Lyrics </p>
                    <p> Memories Lyrics </p>
                    <p> Gayatri Mantra </p>
                    <p> Lag Ja Gale Lyrics </p>
                    <p> Perfect Lyrics </p>
                    <p> Hanuman Chalisa Lyrics </p>
                    <p> Jana Gana Mana Lyrics </p>
                    <p> Ganesh Aarti Lyrics </p>
                    <p> Laxmi Ji Aarti Lyrics </p>
                    <p> Jai Laxmi Mata Aarti </p>
                  </div>
                  <div className="footer-row-content">
                    <h3>Old Songs</h3>
                    <p> Old Hindi Songs </p>
                    <p> Old English Songs </p>
                    <p> Old Punjabi Songs </p>
                    <p> Old Telugu Songs </p>
                    <p> Old Tamil Songs </p>
                    <p> Old Bhojpuri Songs </p>
                    <p> Old Bengali Songs </p>
                    <p> Old Malayalam Songs </p>
                    <p> Old Kannada Songs </p>
                    <p> Old Marathi Songs </p>
                    <p> Old Gujarati Songs </p>
                    <p> Old Haryanvi Songs </p>
                    <p> Old Urdu Songs </p>
                    <p> Old Assamese Songs </p>
                    <p> Old Rajasthani Songs </p>
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
              />
              <SocialIcon
                network="twitter"
                className="social-icon"
                fgColor="white"
                bgColor="#00acee"
              />
            </div>
            <dir className="divide-line"></dir>
            <div className="footer-terms-condition">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Partners</p>
              <p>Sitemap</p>
              <p>FAQ</p>
            </div>
            <dir className="divide-line"></dir>

            <h3>Quick links</h3>

            <Accordion className="accordion" >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Albums</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p> English </p>
                <p> Hindi </p>
                <p> Telugu </p>
                <p> Punjabi </p>
                <p> Tamil </p>
                <p> Kannada </p>
                <p> Bhojpuri </p>
                <p> Malayalam </p>
                <p> Marathi </p>
                <p> Bengali </p>
                <p> Gujarati Songs </p>
                <p> Haryanvi </p>
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
                <p>Bollywood Songs </p>
                <p>Devotional Songs </p>
                <p>Ghazals </p>
                <p>Bhajan </p>
                <p>Patriotic Songs </p>
                <p>Kids Songs </p>
                <p>Rock Songs </p>
                <p>Disco Songs </p>
                <p>Sufi Songs </p>
                <p>Love Songs </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Artists</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p> Arijit Singh </p>
                <p> Neha Kakkar </p>
                <p> Honey Singh </p>
                <p> Atif Aslam </p>
                <p> A R Rahman </p>
                <p> Lata Mangeshkar </p>
                <p> Kishore Kumar </p>
                <p> Armaan Malik </p>
                <p> Sunidhi Chauhan </p>
                <p> Nusrat Fateh Ali Khan </p>
                <p> Mohammed Rafi </p>
                <p> Guru Randhawa </p>
                <p> Justin Bieber </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>New Release</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p> English Songs </p>
                <p> Hindi Songs </p>
                <p> Punjabi Songs </p>
                <p> Tamil Songs </p>
                <p> Telugu Songs </p>
                <p> Kannada Songs </p>
                <p> Bhojpuri Songs </p>
                <p> Malayalam Songs </p>
                <p> Marathi Songs </p>
                <p> Bengali Songs </p>
                <p> Odia Songs </p>
                <p> Urdu Songs </p>
                <p> Rajasthani Songs </p>
                <p> Assamese Songs </p>
                <p> Haryanvi Songs </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Trending Songs</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p> Vibe Song </p>
                <p> Hanuman Chalisa </p>
                <p> Mast Maula </p>
                <p> Dil Galti Kar Baitha Hai </p>
                <p> Party All Night </p>
                <p> Manike Mage Hithe Tamil </p>
                <p> Raataan Lambiyan </p>
                <p> Ik Mili Mainu Apsraa </p>
                <p> Baarish Ki Jaaye </p>
                <p> Phoonk Le </p>
                <p> Koi Sehri Babu </p>
                <p> Jugnu </p>
                <p> Mainu Nai Pehchaandi </p>
                <p> Manike Mage Hithe </p>
                <p> Dance Meri Rani </p>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Trending Albums</Typography>
              </AccordionSummary>
              <AccordionDetails>
                    <p> Happy Birthday Songs </p>
                    <p> Sad Songs </p>
                    <p> PK Songs </p>
                    <p> Jersey </p>
                    <p> Bunty Aur Babli 2 </p>
                    <p> Chandigarh Kare Aashiqui </p>
                    <p> Pushpa The Rise </p>
                    <p> Uppena </p>
                    <p> Enemy Tamil </p>
                    <p> Shershaah </p>
                    <p> Jai Bhim </p>
                    <p> Sooryavanshi </p>
                    <p> Dhamaka </p>
                    <p> Gaming Music </p>
                    <p> Atrangi Re </p>
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
                <p> Shiva Tandava Lyrics </p>
                <p> Jingle Bells Lyrics </p>
                <p> Dynamite Lyrics </p>
                <p> Memories Lyrics </p>
                <p> Gayatri Mantra </p>
                <p> Lag Ja Gale Lyrics </p>
                <p> Perfect Lyrics </p>
                <p> Hanuman Chalisa Lyrics </p>
                <p> Jana Gana Mana Lyrics </p>
                <p> Ganesh Aarti Lyrics </p>
                <p> Laxmi Ji Aarti Lyrics </p>
                <p> Jai Laxmi Mata Aarti </p>
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
                <p> Old Hindi Songs </p>
                <p> Old English Songs </p>
                <p> Old Punjabi Songs </p>
                <p> Old Telugu Songs </p>
                <p> Old Tamil Songs </p>
                <p> Old Bhojpuri Songs </p>
                <p> Old Bengali Songs </p>
                <p> Old Malayalam Songs </p>
                <p> Old Kannada Songs </p>
                <p> Old Marathi Songs </p>
                <p> Old Gujarati Songs </p>
                <p> Old Haryanvi Songs </p>
                <p> Old Urdu Songs </p>
                <p> Old Assamese Songs </p>
                <p> Old Rajasthani Songs </p>
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
