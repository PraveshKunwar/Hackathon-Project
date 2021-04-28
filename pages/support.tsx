import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, useColorMode } from "@chakra-ui/react";
import { NextPage } from "next";
import Div from "../styled-components/Div";
import Header from "../styled-components/Header";
import Paragraph from "../styled-components/Paragraph";
import Colors from "../util/colors";

const Support: NextPage = () => {
  const { colorMode } = useColorMode();
  return (
    <div className="support">
      <Header
        color={colorMode === "light" ? Colors.red_main : Colors.slate}
        fontSize="25px"
        margin="3rem"
        fontFamily="Inter"
      >
        Here are some ways you can help out during these tough times, or even
        get help.
      </Header>

      <div>
        <Paragraph
          color={colorMode === "light" ? Colors.lighter_navy : Colors.pink_main}
        >
          <Link
            href="https://vaccinefinder.org/search/"
            isExternal
            color="teal.500"
          >
            Need to find a vaccination site near you? Click here.{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
      </div>
      <br></br>
      <br></br>
      <div>
        {" "}
        <Paragraph
          color={colorMode === "light" ? Colors.lighter_navy : Colors.pink_main}
        >
          <Link
            href="https://my.care.org/site/Donation2;jsessionid=00000000.app358b?df_id=29830&29830.donation=form1&mfc_pref=T&NONCE_TOKEN=C8F7E655D17E788A5A3C10857545E0A4&_ga=2.114169351.1498515540.1619443633-1230773304.1614981765&_gac=1.19257674.1617136842.Cj0KCQjwmIuDBhDXARIsAFITC_6K4Lytd_nrp8Cx_LBbhyIMgKd-MVFfLDZbeafL_4G6ffOoy8ZIHLUaAoqNEALw_wcB"
            isExternal
            color="teal.500"
          >
            India has recently been struck by a deadly second wave of corona
            virus. 2 million have been diagnosed in the past two weeks. Want to
            help? Click here to get started.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
      </div>
      <br></br>
      <br></br>
      <div>
        <Paragraph
          color={colorMode === "light" ? Colors.lighter_navy : Colors.pink_main}
        >
          <Link
            href="https://www.unicefusa.org/?form=HealthEmergency&utm_content=corona3responsive&ms=cpc_dig_2020_Emergencies_20200402_google_corona3responsive_delve&initialms=cpc_dig_2020_Emergencies_20200402_google_corona3responsive_delve&gclid=CjwKCAjwj6SEBhAOEiwAvFRuKN2KCmHff7CbesYnHiZVnsDHV2pffPrKS0rtd7AHs7wzYA4lmK-JLBoCOFgQAvD_BwE"
            isExternal
            color="teal.500"
          >
            Donate on UNICEF.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
      </div>
      <br></br>
      <div>
        <Paragraph
          color={colorMode === "light" ? Colors.lighter_navy : Colors.pink_main}
        >
          <Link
            href="https://donate.covid19responsefund.org"
            isExternal
            color="teal.500"
          >
            You can donate here with the official World Health Organization.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
      </div>
      <br></br>
      <br></br>
      <div>
        <Paragraph
          color={colorMode === "light" ? Colors.lighter_navy : Colors.pink_main}
        >
          <Link
            href="https://www.fda.gov/emergency-preparedness-and-response/coronavirus-disease-2019-covid-19/donate-covid-19-plasma"
            isExternal
            color="teal.500"
          >
            Just recovered from COVID-19? Willing to donate your plasma to help
            patients currently fighting the infection? Click here to help.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
      </div>
      <br></br>
      <br></br>
      <div>
        <Paragraph
          color={colorMode === "light" ? Colors.lighter_navy : Colors.pink_main}
        >
          <Link
            href="https://secure.feedingamerica.org/site/Donation2?28371.donation=form1&df_id=28371&mfc_pref=T&s_onsite_promo=covid_lp&s_src=W214ORGSC&s_referrer=google&s_channel=google&s_subsrc=https%3A%2F%2Fwww.feedingamerica.org%2Ftake-action%2Fcoronavirus"
            isExternal
            color="teal.500"
          >
            During these times, millions of people have struggled to put food on
            their plate. Donate here to get more food and funds for local food
            banks around the US.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Paragraph>
      </div>
      <br></br>
      <Div
        width="350px"
        height="250"
        margin="2rem"
        shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <div>
          <Header
            color={colorMode === "light" ? Colors.lighter_navy : Colors.slate}
            fontFamily="Inter"
            fontSize="18px
            "
          >
            <b>💙 Lets make the world a better place. 💙</b>
          </Header>
          <br></br>
          <Paragraph
            color={
              colorMode === "light" ? Colors.lighter_navy : Colors.pink_main
            }
          >
            Thank you for checking out our support page. We hope you donate, or
            get the help you need! Stay safe!
          </Paragraph>
        </div>
      </Div>
    </div>
  );
};

export default Support;
