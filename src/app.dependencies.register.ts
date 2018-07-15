import {StyleService} from './core/styleService'
import {appInjector} from './core/appInjector';
import {appConfiguration} from './app.config';


import * as Guid from 'guid';

export function registerDependencies() {
    if (appInjector) {
        appInjector.registerSingleton("styleService", StyleService);
        if (appConfiguration.isTestMode) {
            appInjector.registerSingleton("mteService", mteServiceMock, true);
        }
        return Promise.resolve();
    }
    else {
        return Promise.reject("rejector has does not exsit or have some problems");
    }
}

class mteServiceMock {
    allTemplates = {
        fromLocalAirport: {
            bristol: {
                header: "Holidays from Bristol Airport",
                subHeader: `<p>Fly to an array of incredible destinations from Bristol airport this year. Unroll your beach mat and lie out under sunny skies in <a href="https://www.easyjet.com/en/holidays/spain/majorca/">Majorca</a> or the <a href="https://www.easyjet.com/en/holidays/portugal/algarve/">Algarve</a>. Or if you fancy throwing some shapes on the dancefloor head to <a href="https://www.easyjet.com/en/holidays/germany/berlin/berlin-city/">Berlin</a> and <a href="https://www.easyjet.com/en/holidays/poland/krakow/krakow-city/">Krakow </a>for nightlife you’ll never want to say goodbye to.</p>`,
                addtionalHtml: `<div class="col-xs-12">
                                                    <h3 class="promotion--headline">Today's Top Late Deals</h3>
                                                                            <div class="promotion--text">
                                    <!-- ### MODULE 4 ### -->
    <div class="teaser-promotionContainer">
        <div class="teaser teaser-sm teaser-promotions-sm adjustment">
            <div class="teaser--container">

      <!-- ### MAIN TITLE MODULE 4 ## -->
               <img src="http://theorangelibrary.com/uploads/DL1505_1280x600_Costa_del_Sol32.jpg" style="width: 100%"><br>
      <h5>Costa del Sol from Bristol</h5>

      <!-- ### 7 NIGHTS ## -->
            <p>7 nights flight &amp; hotelˇ</p>

            <!-- ### Link 1, 7 nights MODULE 4 ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2333&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-22&amp;rd=2018-08-29&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Wed 22nd Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £91pp
    </span></a></p>
      <!-- ### END Link 1, 7 nights MODULE 4 ### -->


            <!-- ### Link 2, 7 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2333&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-09-10&amp;rd=2018-09-17&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Mon 10th Sep
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £98pp
    </span></a></p>
      <!-- ### END Link 2, 7 nights MODULE  ### -->


            <!-- ### Link 3, 7 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2333&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-09-16&amp;rd=2018-09-23&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Sun 16th Sep
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £93pp
    </span></a></p>
      <!-- ### END Link 3, 7 nights MODULE  ### -->

            </div>
        </div>
    </div>
    <!-- ### END MODULE 4 ### -->
    <!-- ### MODULE 5 ### -->
    <div class="teaser-promotionContainer">
        <div class="teaser teaser-sm teaser-promotions-sm adjustment">
            <div class="teaser--container">

      <!-- ### MAIN TITLE MODULE 5 ## -->
               <img src="http://theorangelibrary.com/uploads/cala-agulla-alcudia.jpg" style="width: 100%"><br>
      <h5>Mallorca from Bristol</h5>

      <!-- ### 7 NIGHTS ## -->
            <p>7 nights flight &amp; hotelˇ</p>

            <!-- ### Link 1, 7 nights MODULE 5 ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2471&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-07&amp;rd=2018-08-14&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Tue 7th Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £97pp
    </span></a></p>
      <!-- ### END Link 1, 7 nights MODULE 5 ### -->


            <!-- ### Link 2, 7 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2471&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-14&amp;rd=2018-08-21&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Tue 14th Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £80pp
    </span></a></p>
      <!-- ### END Link 2, 7 nights MODULE  ### -->


            <!-- ### Link 3, 7 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2471&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-17&amp;rd=2018-08-24&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Fri 17th Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £100pp
    </span></a></p>
      <!-- ### END Link 3, 7 nights MODULE  ### -->

            </div>
        </div>
    </div>
    <!-- ### END MODULE 5 ### -->
    <!-- ### MODULE 6 ### -->
    <div class="teaser-promotionContainer">
        <div class="teaser teaser-sm teaser-promotions-sm adjustment">
            <div class="teaser--container">

      <!-- ### MAIN TITLE MODULE 6 ## -->
               <img src="http://theorangelibrary.com/uploads/playa-de-las-americas.jpg" style="width: 100%"><br>
      <h5>Tenerife from Bristol</h5>

      <!-- ### 7 NIGHTS ## -->
            <p>7 nights flight &amp; hotelˇ</p>

            <!-- ### Link 1, 7 nights MODULE 6 ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2662&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-03&amp;rd=2018-08-10&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Fri 3rd Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £100pp
    </span></a></p>
      <!-- ### END Link 1, 7 nights MODULE 6 ### -->


            <!-- ### Link 2, 7 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2662&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-09-11&amp;rd=2018-09-18&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Tue 11th Sep
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £99pp
    </span></a></p>
      <!-- ### END Link 2, 7 nights MODULE  ### -->


            <!-- ### Link 3, 7 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2662&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-09-23&amp;rd=2018-09-30&amp;dur=7&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Sun 23rd Sep
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £39pp
    </span></a></p>
      <!-- ### END Link 3, 7 nights MODULE  ### -->

            </div>
        </div>
    </div>
    <!-- ### END MODULE 6 ### -->
    <!-- ### MODULE 43 ### -->
    <div class="teaser-promotionContainer">
        <div class="teaser teaser-sm teaser-promotions-sm adjustment">
            <div class="teaser--container">

      <!-- ### MAIN TITLE MODULE 43 ## -->
               <img src="https://www.easyjet.com/en/holidays/shared/images/guides/netherlands/amsterdam/amsterdam-city.jpg" style="width: 100%"><br>
      <h5>Amsterdam from Bristol</h5>

      <!-- ### 3 NIGHTS ## -->
            <p>3 nights flight &amp; hotelˇ</p>

            <!-- ### Link 1, 3 nights MODULE 43 ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2018&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-03&amp;rd=2018-08-06&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Fri 3rd Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £76pp
    </span></a></p>
      <!-- ### END Link 1, 3 nights MODULE 43 ### -->


            <!-- ### Link 2, 3 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2018&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-05&amp;rd=2018-08-08&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Sun 5th Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £43pp
    </span></a></p>
      <!-- ### END Link 2, 3 nights MODULE  ### -->


            <!-- ### Link 3, 3 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2018&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-10&amp;rd=2018-08-13&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Fri 10th Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £64pp
    </span></a></p>
      <!-- ### END Link 3, 3 nights MODULE  ### -->

            </div>
        </div>
    </div>
    <!-- ### END MODULE 43 ### -->
    <!-- ### MODULE 44 ### -->
    <div class="teaser-promotionContainer">
        <div class="teaser teaser-sm teaser-promotions-sm adjustment">
            <div class="teaser--container">

      <!-- ### MAIN TITLE MODULE 44 ## -->
               <img src="https://www.easyjet.com/en/holidays/shared/images/guides/spain/barcelona.jpg" style="width: 100%"><br>
      <h5>Barcelona from Bristol</h5>

      <!-- ### 3 NIGHTS ## -->
            <p>3 nights flight &amp; hotelˇ</p>

            <!-- ### Link 1, 3 nights MODULE 44 ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2214&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-02&amp;rd=2018-08-05&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Thu 2nd Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £86pp
    </span></a></p>
      <!-- ### END Link 1, 3 nights MODULE 44 ### -->


            <!-- ### Link 2, 3 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2214&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-25&amp;rd=2018-08-28&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Sat 25th Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £96pp
    </span></a></p>
      <!-- ### END Link 2, 3 nights MODULE  ### -->


            <!-- ### Link 3, 3 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=2214&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-09-12&amp;rd=2018-09-15&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Wed 12th Sep
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £85pp
    </span></a></p>
      <!-- ### END Link 3, 3 nights MODULE  ### -->

            </div>
        </div>
    </div>
    <!-- ### END MODULE 44 ### -->
    <!-- ### MODULE 45 ### -->
    <div class="teaser-promotionContainer">
        <div class="teaser teaser-sm teaser-promotions-sm adjustment">
            <div class="teaser--container">

      <!-- ### MAIN TITLE MODULE 45 ## -->
               <img src="http://theorangelibrary.com/uploads/tuscany.jpg" style="width: 100%"><br>
      <h5>Tuscany from Bristol</h5>

      <!-- ### 3 NIGHTS ## -->
            <p>3 nights flight &amp; hotelˇ</p>

            <!-- ### Link 1, 3 nights MODULE 45 ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=5083&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-07-20&amp;rd=2018-07-23&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Fri 20th Jul
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £70pp
    </span></a></p>
      <!-- ### END Link 1, 3 nights MODULE 45 ### -->


            <!-- ### Link 2, 3 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=5083&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-08-03&amp;rd=2018-08-06&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Fri 3rd Aug
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £101pp
    </span></a></p>
      <!-- ### END Link 2, 3 nights MODULE  ### -->


            <!-- ### Link 3, 3 nights MODULE  ### -->
    <p style="font-size: 13px;">✈ 
       <a href="https://www.easyjet.com/en/holidays/mixedresultlist/?request_is_search_widget=true&amp;board_codes=GT06-AO%2CGT06-SC%2CGT06-BB%2CGT06-HB+GT06-HBP%2CGT06-FB+GT06-FBP%2CGT06-AI+GT06-AIP+GT06-AIU+GT06-AIR&amp;destinations=5083&amp;departure_airports=BRS&amp;min_recommendation=-1&amp;price=-1&amp;dd=2018-09-06&amp;rd=2018-09-09&amp;dur=3&amp;erd=0&amp;edd=0&amp;per_page=10&amp;sort=qualifier7ASC&amp;page=0&amp;category=3&amp;rating=1&amp;rooms_count=1&amp;rooms%5B%5D=2&amp;alternative_departures=&amp;lang=en&amp;currency=GBP&amp;_locale=en_GB" onclick="dataLayer.push({'event': 'Late Deals Click'},);" "="">
    <!-- change this content -->Thu 6th Sep
    <span style="color: black; font-size: 14px; padding-left: 5px">
    <!-- change this content -->Save up to £68pp
    </span></a></p>
      <!-- ### END Link 3, 3 nights MODULE  ### -->

            </div>
        </div>
    </div>
    <!-- ### END MODULE 45 ### -->


                            </div>
                                            </div>`
            }
        }
    };

    createNewTemplateInstance(templateName) {
        if (this.allTemplates[templateName]) {
            this.allTemplates[templateName] = {
                header: `<h1>default hedaer :)</h1>`,
                subHedaer: `<p>bla bla bla bla bla bla bla bla bla bla 
                               bla bla bla bla bla bla bla bla bla bla bla bla bla 
                               bla bla bla bla bla bla bla </p>`,
                addtionalHtml: null
            }
        }

        return null;
    }

    getTemplate(templateId) {
        const [templateName, templateInstance] = templateId.split('-');
        return this.allTemplates[templateName] && this.allTemplates[templateName][templateInstance];
    }
}






