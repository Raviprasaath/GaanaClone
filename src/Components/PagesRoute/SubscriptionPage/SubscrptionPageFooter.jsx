import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SubscrptionPageFooter() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
        <div className="accordion-section">
            <h2>FAQ's</h2>   
            <div>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} >
                <AccordionSummary className="accordion-header" expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                    <Typography >
                        <span className="accordion-header-level-1">
                            What is GaanaPlus?
                        </span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                    <Typography >
                        <span className="accordion-section-content">
                            GaanaPlus is the Premium version of Gaana which allows you to enjoy the premium benefits like Streaming Ads Free Music, Unlimited Downloads, Live Events, Exclusive content, and much more!
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} >
                <AccordionSummary className="accordion-header" expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                    <Typography >
                        <span className="accordion-header-level-1">
                            Refund Policy
                        </span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                    <Typography >
                        <span className="accordion-section-content">
                            We would like to inform you that subscription purchases/renewals are not refundable. Once you cancel the renewal, you can still enjoy your subscription benefits for the rest of your billing cycle. Please refer to the terms: https://gaana.com/terms_and_conditions.html For every renewal, we send an intimation over email or number so that you can cancel the renewal before the deduction happens.
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} >
                <AccordionSummary className="accordion-header" expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" >
                    <Typography >
                        <span className="accordion-header-level-1">
                            Cancel Subscription
                        </span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-content">
                    <Typography >
                        <span className="accordion-section-content">
                            You can switch off auto-renewal anytime while you are on an active subscription. Simply log in to the Gaana app, go to settings, select Profile, then navigate to the subscription page and toggle off auto-renewal. Alternatively, you can visit http://www.gaana.com/myzone on the Gaana website. Please note that steps may vary slightly based on updates to the Gaana app and website.
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            </div>
        </div>
    </>
  );
}

export default SubscrptionPageFooter;
