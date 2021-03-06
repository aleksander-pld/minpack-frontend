@import url("https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");
html {
  max-height: 100%;
  height: 100%;
}

body {
  position: relative;
  overflow-x: hidden;
  height: 100%;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

::selection {
  color: #fff;
  background-color: #82FAD2;
}

::-moz-selection {
  color: #fff;
  background-color: #82FAD2;
}

.main_slider_sections {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99;
}
.main_slider_sections .mainSliderOverlay {
  position: absolute;
  left: auto;
  right: 0;
  z-index: 99;
}
.main_slider_sections .hometopButton {
  display: block;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 999;
}
.main_slider_sections .hometopButton .homepageTopButton {
  padding: 4px 20px;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 5px;
  border: solid 1px #1E1E1E;
  background-color: #FFFFFF;
  color: #1E1E1E;
}
.main_slider_sections .hometopButton .homepageTopButton:hover {
  text-decoration: none;
}
.main_slider_sections .homeSliderContent {
  position: relative;
  z-index: 9999;
  text-align: center;
  margin-top: -150px;
  margin-left: 150px;
}
@media (max-width: 1366px) {
  .main_slider_sections .homeSliderContent {
    margin-left: 0;
  }
}
@media (max-width: 767px) {
  .main_slider_sections .homeSliderContent {
    margin-top: 0px;
  }
}
.main_slider_sections .homeSliderContent img {
  width: 100%;
  max-width: 250px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .main_slider_sections .homeSliderContent img {
    max-width: 200px;
  }
}
.main_slider_sections .homeSliderContent p {
  font-size: 22px;
  width: 100%;
  max-width: 550px;
  margin-bottom: 60px;
}
@media (max-width: 575px) {
  .main_slider_sections .homeSliderContent p {
    max-width: 100%;
    padding: 0 20px;
    font-size: 18px;
  }
}
.main_slider_sections .homeSliderContent a {
  width: fit-content;
  padding: 8px 50px;
  background-color: #1E1E1E;
  color: #FFFFFF;
  font-size: 20px;
  border-radius: 8px;
}
.main_slider_sections .homeSliderContent a:hover {
  text-decoration: none;
}

.NoInvestmentSection {
  position: relative;
  background-color: #1E1E1E;
  padding: 100px 0;
}
@media (max-width: 767px) {
  .NoInvestmentSection {
    padding: 200px 0 40px 0;
  }
}
.NoInvestmentSection .NoInvestmentContent {
  position: relative;
  color: #FFFFFF;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
@media (max-width: 991px) {
  .NoInvestmentSection .NoInvestmentContent {
    margin-bottom: 50px;
    padding-bottom: 50px;
  }
}
.NoInvestmentSection .NoInvestmentContent::before {
  content: "";
  position: absolute;
  left: auto;
  right: -20px;
  background-color: #84C7AC;
  width: 2px;
  height: 100%;
  top: 0;
}
@media (max-width: 991px) {
  .NoInvestmentSection .NoInvestmentContent::before {
    bottom: 0;
    width: 60%;
    height: 2px;
    left: 0;
    right: 0;
    top: auto;
    margin: auto;
  }
}
.NoInvestmentSection .NoInvestmentContent .noInvestment_img {
  width: 44px;
  height: 44px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-color: #FFFFFF;
}
.NoInvestmentSection .NoInvestmentContent p {
  font-size: 25px;
  margin: 0;
  line-height: 35px;
}
@media (max-width: 767px) {
  .NoInvestmentSection .NoInvestmentContent p {
    margin: 0 0 30px 0;
    font-size: 20px;
  }
}
.NoInvestmentSection .NoInvestmentContent.lastNoborder::before {
  display: none;
}

.howItWorkSection {
  position: relative;
  padding: 120px 0;
}
.howItWorkSection .commoneHeading {
  position: relative;
  text-align: center;
  font-family: "Poppins", sans-serif;
}
.howItWorkSection .commoneHeading h2 {
  font-size: 40px;
  text-transform: uppercase;
  color: #1E1E1E;
  margin: 0 0 80px 0;
  font-weight: 600;
}
@media (max-width: 991px) {
  .howItWorkSection .commoneHeading h2 {
    font-size: 35px;
  }
}
@media (max-width: 767px) {
  .howItWorkSection .commoneHeading h2 {
    font-size: 25px;
  }
}
.howItWorkSection .howItWorkscount {
  text-align: center;
  position: relative;
}
.howItWorkSection .howItWorkscount::before {
  content: "";
  position: absolute;
  left: auto;
  right: 30px;
  height: 100%;
  width: 100%;
  top: 0;
  background-image: url("../images/HowItWrokBorder.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
@media (max-width: 767px) {
  .howItWorkSection .howItWorkscount::before {
    display: none;
  }
}
@media (max-width: 767px) {
  .howItWorkSection .howItWorkscount {
    margin-bottom: 40px;
  }
}
.howItWorkSection .howItWorkscount h3 {
  font-size: 120px;
  color: #82FAD2;
  font-weight: normal;
  font-family: "Open Sans", sans-serif;
}
@media (max-width: 1024px) {
  .howItWorkSection .howItWorkscount h3 {
    font-size: 60px;
  }
}
.howItWorkSection .howItWorkscount p {
  font-size: 24px;
  margin: 0;
  color: #1E1E1E;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
@media (max-width: 1024px) {
  .howItWorkSection .howItWorkscount p {
    font-size: 18px;
  }
}
@media (max-width: 767px) {
  .howItWorkSection .howItWorkscount p {
    font-size: 16px;
  }
}
.howItWorkSection .howItWorkscount.lastNoborder::before {
  display: none;
}

.HomeFAQSection {
  position: relative;
  padding: 40px 0 80px 0;
}
.HomeFAQSection .commoneHeading {
  position: relative;
  margin-bottom: 40px;
  text-align: center;
}
.HomeFAQSection .commoneHeading h2 {
  font-size: 45px;
  color: #82FAD2;
  font-family: "Poppins", sans-serif;
  margin: 0;
  font-weight: 500;
}
@media (max-width: 991px) {
  .HomeFAQSection .commoneHeading h2 {
    font-size: 30px;
  }
}
.HomeFAQSection .faqQuestions {
  font-family: "Poppins", sans-serif;
  position: relative;
  margin-bottom: 30px;
  width: 100%;
  max-width: 90%;
}
@media (max-width: 991px) {
  .HomeFAQSection .faqQuestions {
    max-width: 100%;
  }
}
.HomeFAQSection .faqQuestions h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1E1E1E;
  font-weight: bold;
}
@media (max-width: 991px) {
  .HomeFAQSection .faqQuestions h3 {
    font-size: 18px;
  }
}
.HomeFAQSection .faqQuestions p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #8095AB;
  text-align: justify;
}
@media (max-width: 991px) {
  .HomeFAQSection .faqQuestions p {
    font-size: 14px;
  }
}

footer {
  position: relative;
  padding: 30px 0;
  background-color: #1E1E1E;
}
footer .footercontents {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
}
footer .footercontents p {
  margin: 0;
  font-size: 16px;
  color: #FFFFFF;
}
@media (max-width: 991px) {
  footer .footercontents p {
    font-size: 10px;
  }
}
footer .footercontents ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}
footer .footercontents ul li {
  margin-right: 40px;
}
@media (max-width: 991px) {
  footer .footercontents ul li {
    margin-right: 15px;
  }
}
footer .footercontents ul li:last-child {
  margin-right: 0;
}
footer .footercontents ul li a {
  color: #FFFFFF;
  transition: all 0.5s ease;
  font-size: 18px;
}
@media (max-width: 991px) {
  footer .footercontents ul li a {
    font-size: 10px;
  }
}
footer .footercontents ul li a:hover {
  transition: all 0.5s ease;
  color: #82FAD2;
  text-decoration: none;
}

.adminLayoutSection {
  position: relative;
  width: 100%;
  height: calc(100% - 97px);
  display: flex;
  align-items: center;
}
.adminLayoutSection .adminLeftside {
  width: 100%;
  max-width: 350px;
  height: 100%;
  background-color: #F1F1F1;
  position: relative;
}
@media (max-width: 1200px) {
  .adminLayoutSection .adminLeftside {
    display: none;
  }
}
.adminLayoutSection .adminLeftside .logoSections {
  position: relative;
  padding: 60px 0 0 40px;
}
.adminLayoutSection .adminLeftside .logoSections img {
  width: 100%;
  max-width: 160px;
}
.adminLayoutSection .adminLeftside .leftsideMenus {
  position: relative;
  padding: 40px 0 0 40px;
  font-family: "Poppins", sans-serif;
}
.adminLayoutSection .adminLeftside .leftsideMenus h3 {
  font-size: 26px;
  font-weight: 500;
  color: #1E1E1E;
  margin-bottom: 20px;
}
.adminLayoutSection .adminLeftside .leftsideMenus ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.adminLayoutSection .adminLeftside .leftsideMenus ul li {
  margin-bottom: 25px;
}
.adminLayoutSection .adminLeftside .leftsideMenus ul li:last-child {
  margin-bottom: 0;
}
.adminLayoutSection .adminLeftside .leftsideMenus ul li a {
  display: flex;
  align-items: center;
  color: #1E1E1E;
  cursor: pointer;
  transition: all 0.5s ease;
}
.adminLayoutSection .adminLeftside .leftsideMenus ul li a:hover {
  transition: all 0.5s ease;
  color: #82FAD2;
  text-decoration: none;
}
.adminLayoutSection .adminLeftside .leftsideMenus ul li a img {
  width: 100%;
  max-width: 25px;
  margin-right: 15px;
}
.adminLayoutSection .adminRightSide {
  width: 100%;
  height: 100%;
  max-width: calc(100% - 350px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
@media (max-width: 1200px) {
  .adminLayoutSection .adminRightSide {
    max-width: 100%;
    margin-left: 0 !important;
  }
}
.adminLayoutSection .adminRightSide .responsiveHeader {
  display: none;
}
@media (max-width: 1200px) {
  .adminLayoutSection .adminRightSide .responsiveHeader {
    display: block;
    margin-bottom: 60px;
  }
  .adminLayoutSection .adminRightSide .responsiveHeader .navbar .navbar-brand img {
    width: 150px;
  }
  .adminLayoutSection .adminRightSide .responsiveHeader .navbar .navbar-toggler:focus {
    box-shadow: none;
    outline: none;
  }
  .adminLayoutSection .adminRightSide .responsiveHeader .navbar .collapse ul h3 {
    font-size: 20px;
    font-weight: bold;
    color: #1E1E1E;
  }
  .adminLayoutSection .adminRightSide .responsiveHeader .navbar .collapse ul li a img {
    width: 100%;
    max-width: 25px;
    margin-right: 15px;
  }
}
.adminLayoutSection .adminRightSide .ApproveNFT {
  position: relative;
  width: 100%;
  max-width: 710px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.adminLayoutSection .adminRightSide .ApproveNFT h1 {
  font-size: 44px;
  font-family: "Poppins", sans-serif;
  color: #1E1E1E;
  margin-bottom: 50px;
  font-weight: bold;
}
@media (max-width: 991px) {
  .adminLayoutSection .adminRightSide .ApproveNFT h1 {
    font-size: 35px;
  }
}
.adminLayoutSection .adminRightSide .ApproveNFT select {
  background-color: #E3FFF1;
  padding: 0 20px;
  height: 60px;
  border-radius: 10px;
  width: 80%;
  font-style: italic;
  border: none;
  font-size: 18px;
  color: #4d4d4d;
  margin: 0 auto 50px auto;
}
.adminLayoutSection .adminRightSide .ApproveNFT select:focus {
  box-shadow: none;
  outline: none;
}
.adminLayoutSection .adminRightSide .ApproveNFT a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
  height: 60px;
  background-color: #82FAD2;
  color: #000000;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  border-radius: 7px;
}
.adminLayoutSection .adminRightSide .ApproveNFT a:hover {
  text-decoration: none;
  cursor: pointer;
}

.submmitingNFTSections {
  display: flex;
  align-items: center;
  flex-direction: column;
}
@media (max-width: 991px) {
  .submmitingNFTSections {
    padding: 20px;
    text-align: center;
  }
}
.submmitingNFTSections h1 {
  font-size: 40px;
  font-weight: bold;
}
@media (max-width: 991px) {
  .submmitingNFTSections h1 {
    font-size: 25px;
  }
}
.submmitingNFTSections p {
  font-size: 22px;
  color: #1E1E1E;
  font-weight: 600;
  margin-bottom: 40px;
}
@media (max-width: 991px) {
  .submmitingNFTSections p {
    font-size: 16px;
  }
}
.submmitingNFTSections .ViewYourDashboard {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  border-radius: 20px;
  text-align: center;
  border: solid 2px #1E1E1E;
  color: #1E1E1E;
  font-size: 20px;
  transition: all 0.5s ease;
  margin-bottom: 40px;
}
.submmitingNFTSections .ViewYourDashboard:hover {
  text-decoration: none;
  transition: all 0.5s ease;
  background-color: #82FAD2;
  border: 2px solid #82FAD2;
  color: #FFFFFF;
}
@media (max-width: 991px) {
  .submmitingNFTSections .ViewYourDashboard {
    padding: 10px 25px;
    width: fit-content;
    font-size: 16px;
  }
}
.submmitingNFTSections .UploadAnotherNFT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  background-color: #82FAD2;
  border-radius: 20px;
  text-align: center;
  border: solid 2px #82FAD2;
  color: #FFFFFF;
  font-size: 18px;
  transition: all 0.5s ease;
}
.submmitingNFTSections .UploadAnotherNFT:hover {
  text-decoration: none;
  transition: all 0.5s ease;
  border: solid 2px #1E1E1E;
  background-color: transparent;
  color: #1E1E1E;
}
@media (max-width: 991px) {
  .submmitingNFTSections .UploadAnotherNFT {
    padding: 10px 25px;
    width: fit-content;
    font-size: 16px;
  }
}

.adminLayoutSection.CreatingNFTMain {
  height: auto;
}
.adminLayoutSection.CreatingNFTMain .adminLeftside {
  position: fixed;
  top: 0;
  left: 0;
}

.adminRightSide.CreateNFTSections {
  display: block;
  padding: 60px 20px 0 20px;
  height: 100%;
  width: 100%;
  min-height: calc(100vh - 88px);
  margin-left: 350px;
}
@media (max-width: 1200px) {
  .adminRightSide.CreateNFTSections {
    padding: 0px 20px 0 20px;
  }
}
.adminRightSide.CreateNFTSections h1 {
  font-size: 35px;
  text-align: center;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 60px;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }
}
.adminRightSide.CreateNFTSections form {
  width: 100%;
  max-width: 710px;
  margin: 0 auto 150px;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections form {
    margin: 0 auto 50px;
  }
}
.adminRightSide.CreateNFTSections form .form-group {
  position: relative;
}
.adminRightSide.CreateNFTSections form .form-group label {
  font-size: 18px;
  background-color: #E3FFF1;
  position: absolute;
  top: 2px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 2px;
  width: 240px;
  border-radius: 20px 0 0 20px;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections form .form-group label {
    position: relative;
    width: 100%;
    border-radius: 20px;
    font-size: 16px;
  }
}
.adminRightSide.CreateNFTSections form .form-group input,
.adminRightSide.CreateNFTSections form .form-group select {
  border: solid 2px #1E1E1E;
  height: 60px;
  font-size: 22px;
  border-radius: 20px;
  margin-bottom: 30px;
}
.adminRightSide.CreateNFTSections form .form-group input:focus,
.adminRightSide.CreateNFTSections form .form-group select:focus {
  box-shadow: none;
  outline: none;
}
.adminRightSide.CreateNFTSections form .form-group select {
  background-color: #E3FFF1;
}
.adminRightSide.CreateNFTSections form .form-group input {
  padding-left: 250px;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections form .form-group input {
    padding-left: 20px;
    font-size: 18px;
  }
}
.adminRightSide.CreateNFTSections form .form-group span {
  position: absolute;
  width: 80px;
  height: 56px;
  background-color: #E3FFF1;
  left: auto;
  right: 2px;
  top: 2px;
  font-size: 18px;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections form .form-group span {
    top: 67px;
    font-size: 16px;
  }
}
.adminRightSide.CreateNFTSections form.dashboardPage .form-group label {
  background-color: #1E1E1E;
  color: #FFFFFF;
  top: 1px;
  height: 57px;
  left: 0;
}
.adminRightSide.CreateNFTSections form.dashboardPage .form-group span {
  width: 110px;
}
.adminRightSide.CreateNFTSections .customTableSection {
  position: relative;
  width: 100%;
  max-width: 950px;
  margin: 40px auto 80px;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent {
  display: flex;
  align-items: center;
  border-bottom: solid 2px #DBEDE5;
  height: 80px;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections .customTableSection .tableContent {
    height: auto;
    padding: 15px 10px;
    flex-wrap: wrap;
  }
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent:last-child {
  border-bottom: none;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .SnoSection {
  width: 150px;
  text-align: left;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections .customTableSection .tableContent .SnoSection {
    width: 40%;
  }
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .SnoSection p {
  margin: 0;
  font-size: 24px;
  font-weight: normal;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .SnoSection .SnoSectionContent {
  font-size: 16px;
  padding-left: 5px;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .itemSections {
  width: 300px;
  text-align: left;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections .customTableSection .tableContent .itemSections {
    width: 60%;
  }
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .itemSections p {
  margin: 0;
  font-size: 24px;
  font-weight: normal;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .customTableSection .tableContent .itemSections p {
    font-size: 20px;
  }
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .itemSections .itemSectionsContent {
  font-size: 16px;
  padding-left: 5px;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons {
  width: calc(100% - 450px);
  text-align: right;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons {
    width: 100%;
    justify-content: flex-start;
    margin-top: 20px;
  }
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons a {
  margin: 0;
  padding: 0;
  border: solid 2px #1E1E1E;
  width: 180px;
  height: 40px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 20px;
  font-size: 18px;
  transition: all 0.5s ease;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons a:hover {
  text-decoration: none;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons .ViewStatusButtons {
  color: #1E1E1E;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons .ViewStatusButtons:hover {
  background-color: #1E1E1E;
  transition: all 0.5s ease;
  color: whitesmoke;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons .CancelOfferButton {
  border: solid 2px #FF4C4C;
  color: #FF4C4C;
}
.adminRightSide.CreateNFTSections .customTableSection .tableContent .optionsButtons .CancelOfferButton:hover {
  transition: all 0.5s ease;
  background-color: #FF4C4C;
  color: #FFFFFF;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections .customTableSection .tableContent .mobileDisplay {
    display: none;
  }
}
.adminRightSide.CreateNFTSections .uploadNewNFTbutotn {
  text-align: center;
  margin-bottom: 80px;
}
.adminRightSide.CreateNFTSections .uploadNewNFTbutotn a {
  background-color: #82FAD2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 60px;
  font-size: 18px;
  border-radius: 15px;
  font-weight: 600;
  color: #1E1E1E;
  font-weight: 600;
  margin: 0 auto;
}
.adminRightSide.CreateNFTSections .uploadNewNFTbutotn a:hover {
  text-decoration: none;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types {
  position: relative;
  width: 100%;
  max-width: 950px;
  margin: 0 auto 80px;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types h2 {
  text-align: center;
  font-size: 25px;
  font-weight: normal;
  color: #1E1E1E;
  margin-bottom: 60px;
  position: relative;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types h2::before {
  content: "";
  position: absolute;
  left: 0;
  right: auto;
  width: 40%;
  height: 2px;
  background-color: #DBEDE5;
  bottom: 45%;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types h2::after {
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 40%;
  height: 2px;
  background-color: #DBEDE5;
  bottom: 45%;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul li {
  margin-bottom: 25px;
  width: 25%;
  text-align: left;
}
@media (max-width: 991px) {
  .adminRightSide.CreateNFTSections .CreatingNFT_Types ul li {
    width: 30%;
  }
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatingNFT_Types ul li {
    width: 45%;
  }
}
@media (max-width: 480px) {
  .adminRightSide.CreateNFTSections .CreatingNFT_Types ul li {
    width: 100%;
  }
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul li input[type=checkbox] {
  display: none;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul li input[type=checkbox] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: #1E1E1E;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul li input[type=checkbox] + label:last-child {
  margin-bottom: 0;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul li input[type=checkbox] + label:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #82FAD2;
  position: absolute;
  border-radius: 4px;
  left: 0;
  top: 5px;
  -webkit-transition: all 0.12s, border-color 0.08s;
  transition: all 0.12s, border-color 0.08s;
}
.adminRightSide.CreateNFTSections .CreatingNFT_Types ul li input[type=checkbox]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.adminRightSide.CreateNFTSections .creatingNFT_Description {
  position: relative;
  width: 100%;
  max-width: 950px;
  margin: 40px auto 40px;
}
.adminRightSide.CreateNFTSections .creatingNFT_Description h2 {
  text-align: center;
  font-size: 25px;
  font-weight: normal;
  color: #1E1E1E;
  margin-bottom: 100px;
  position: relative;
}
.adminRightSide.CreateNFTSections .creatingNFT_Description h2::before {
  content: "";
  position: absolute;
  left: 0;
  right: auto;
  width: 38%;
  height: 2px;
  background-color: #DBEDE5;
  bottom: 45%;
}
.adminRightSide.CreateNFTSections .creatingNFT_Description h2::after {
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 38%;
  height: 2px;
  background-color: #DBEDE5;
  bottom: 45%;
}
.adminRightSide.CreateNFTSections .creatingNFT_Description textarea {
  text-align: left;
  width: 100%;
  max-width: 700px;
  height: 242px;
  background-color: #E3FFF1;
  border-radius: 20px;
  font-size: 20px;
  color: #1E1E1E;
  margin: 0 auto;
  resize: none;
}
.adminRightSide.CreateNFTSections .creatingNFT_Description textarea::placeholder {
  font-style: italic;
  font-weight: normal;
}
.adminRightSide.CreateNFTSections .creatingNFT_Description textarea:focus {
  outline: none;
  box-shadow: none;
}
.adminRightSide.CreateNFTSections .Description_termofService {
  position: relative;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
}
.adminRightSide.CreateNFTSections .creatingNFTUpload {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 180px;
  height: 60px;
  border-radius: 20px;
  font-size: 22px;
  color: #1E1E1E;
  background-color: #82FAD2;
  margin-top: 40px;
  font-weight: 500;
}
.adminRightSide.CreateNFTSections .creatingNFTUpload:hover {
  text-decoration: none;
}
.adminRightSide.CreateNFTSections .galleryFilterSection {
  position: relative;
  width: 100%;
  margin: 60px auto 0;
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection {
    flex-direction: column;
    align-items: inherit;
  }
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection span {
  font-size: 18px;
  color: #1E1E1E;
  margin-right: 50px;
}
@media (max-width: 1540px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection span {
    margin-right: 20px;
  }
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection span {
    font-size: 16px;
    font-weight: 600;
  }
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: calc(100% - 170px);
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1200px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul {
    justify-content: inherit;
    width: auto;
  }
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li {
  position: relative;
  margin-right: 30px;
}
@media (max-width: 1540px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li {
    margin-right: 10px;
  }
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li:last-child {
  margin-right: 0;
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li a {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid transparent;
  padding: 4px 15px;
  border-radius: 15px;
  transition: all 0.5s ease;
  cursor: pointer;
  color: #1E1E1E;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li a {
    font-size: 14px;
    padding: 4px 8px;
  }
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li a:hover {
  transition: all 0.5s ease;
  text-decoration: none;
  border-color: #82FAD2;
  color: #82FAD2;
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection ul li a.active {
  border-color: #82FAD2;
  color: #82FAD2;
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection.prcieFilterSection {
  padding-left: 50px;
  position: relative;
}
@media (max-width: 1200px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection.prcieFilterSection {
    padding-left: 0;
    margin-top: 40px;
  }
}
.adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection.prcieFilterSection::before {
  content: "";
  position: absolute;
  left: 0;
  right: auto;
  width: 2px;
  height: 50px;
  background-color: #DBEDE5;
}
@media (max-width: 1200px) {
  .adminRightSide.CreateNFTSections .galleryFilterSection .NFTFilterSection.prcieFilterSection::before {
    display: none;
  }
}
.adminRightSide.CreateNFTSections .NFTCardSections {
  position: relative;
  width: 100%;
  max-width: 1050px;
  margin: 80px auto 0;
  text-align: center;
}
.adminRightSide.CreateNFTSections .NFTCardSections .NFTCard {
  margin-bottom: 50px;
  position: relative;
}
.adminRightSide.CreateNFTSections .NFTCardSections .NFTCard .NFTuserCard {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto 20px;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections .NFTCardSections .NFTCard .NFTuserCard {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 400px) {
  .adminRightSide.CreateNFTSections .NFTCardSections .NFTCard .NFTuserCard {
    width: 100px;
    height: 100px;
  }
}
.adminRightSide.CreateNFTSections .NFTCardSections .NFTCard .NFTuserCard img {
  width: 100%;
  height: 100%;
}
.adminRightSide.CreateNFTSections .NFTCardSections h2 {
  font-size: 24px;
  font-weight: 400;
  color: #1E1E1E;
  margin: 0 0 10px 0;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections .NFTCardSections h2 {
    font-size: 18px;
  }
}
.adminRightSide.CreateNFTSections .NFTCardSections p {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}
@media (max-width: 575px) {
  .adminRightSide.CreateNFTSections .NFTCardSections p {
    font-size: 16px;
  }
}
.adminRightSide.CreateNFTSections .NFTNameSection {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard {
  display: flex;
  align-items: center;
  position: relative;
}
@media (max-width: 480px) {
  .adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard {
    flex-direction: column;
  }
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_img {
  width: 200px;
  height: 180px;
  background-color: #F4F4F4;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 40px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_img {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 480px) {
  .adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_img {
    margin-bottom: 30px;
    margin-right: 0;
  }
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_img img {
  width: 100%;
  height: 100%;
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName {
  position: relative;
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName h2 {
  font-size: 30px;
  font-weight: 600;
  color: #1E1E1E;
  margin: 0 0 10px 0;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName h2 {
    font-size: 20px;
  }
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName span {
  font-size: 20px;
  color: #1E1E1E;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName span {
    font-size: 18px;
  }
}
.adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName p {
  font-size: 30px;
  color: #46D9A8;
  font-weight: 500;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTNameSection .NFTNameCard .NFTNameCard_userName p {
    font-size: 22px;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions {
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 120px auto 0;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTDescriptions {
    margin: 60px auto 0;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions h2 {
  font-size: 25px;
  color: #1E1E1E;
  font-weight: normal;
  position: relative;
  margin-bottom: 50px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTDescriptions h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions h2::before {
  content: "";
  position: absolute;
  left: 0;
  right: auto;
  width: 35%;
  height: 2px;
  bottom: 45%;
  background-color: #DBEDE5;
}
@media (max-width: 480px) {
  .adminRightSide.CreateNFTSections .NFTDescriptions h2::before {
    display: none;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions h2::after {
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 35%;
  height: 2px;
  bottom: 45%;
  background-color: #DBEDE5;
}
@media (max-width: 480px) {
  .adminRightSide.CreateNFTSections .NFTDescriptions h2::after {
    display: none;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions p {
  width: 100%;
  max-width: 750px;
  margin: 0 auto 40px;
  font-size: 20px;
  color: #1E1E1E;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTDescriptions p {
    max-width: 100%;
    text-align: left;
    padding: 0 20px;
    font-size: 18px;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions a {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0;
  width: 280px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #82FAD2;
  color: #1E1E1E;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .NFTDescriptions a {
    font-size: 18px;
    width: fit-content;
    padding: 10px 30px;
  }
}
.adminRightSide.CreateNFTSections .NFTDescriptions a:hover {
  text-decoration: none;
}
.adminRightSide.CreateNFTSections .NFTDescriptions a:focus {
  box-shadow: none;
  outline: none;
}
.adminRightSide.CreateNFTSections .CreatesharingLink {
  position: relative;
  border-top: solid 2px #FF4C4C;
  margin-top: 120px;
  padding-top: 10px;
  margin-bottom: 120px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink {
    margin-bottom: 60px;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink h4 {
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  color: #1E1E1E;
  margin-bottom: 40px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink h4 {
    font-size: 16px;
    padding: 0 12px;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul {
  list-style: none;
  padding: 0;
  margin: 0 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink ul {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li {
  margin-bottom: 20px;
  position: relative;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink ul li {
    margin-right: 0 !important;
    margin-bottom: 50px;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li input {
  border: 2px #1E1E1E solid;
  height: 50px;
  padding: 0 20px;
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li input:focus {
  box-shadow: none;
  outline: none;
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:first-child {
  margin-right: 80px;
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:first-child input {
  width: 260px;
  border-radius: 20px;
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:first-child::before {
  content: "+";
  position: absolute;
  left: auto;
  right: -40px;
  top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #1E1E1E;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink ul li:first-child::before {
    right: 0;
    left: 44%;
    margin: auto;
    bottom: 0;
    top: 52px;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:nth-child(2) {
  margin-right: 50px;
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:nth-child(2) input {
  width: 200px;
  border-radius: 15px;
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:nth-child(2)::before {
  content: "=";
  position: absolute;
  left: auto;
  right: -30px;
  top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #1E1E1E;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink ul li:nth-child(2)::before {
    right: 0;
    left: 44%;
    margin: auto;
    bottom: 0;
    top: 52px;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink ul li:last-child input {
  width: 150px;
  border-radius: 20px;
}
.adminRightSide.CreateNFTSections .CreatesharingLink a {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0;
  width: 380px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #82FAD2;
  color: #1E1E1E;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .CreatesharingLink a {
    padding: 10px 30px;
    width: fit-content;
    font-size: 18px;
  }
}
.adminRightSide.CreateNFTSections .CreatesharingLink a:hover {
  text-decoration: none;
}
.adminRightSide.CreateNFTSections .CreatesharingLink a:focus {
  box-shadow: none;
  outline: none;
}
.adminRightSide.CreateNFTSections .link-ready {
  position: relative;
  margin-top: 120px;
  border-top: solid 2px #FF4C4C;
  padding-top: 10px;
  width: 100%;
}
.adminRightSide.CreateNFTSections .link-ready h4 {
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  color: #1E1E1E;
  margin-bottom: 60px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .link-ready h4 {
    font-size: 16px;
  }
}
.adminRightSide.CreateNFTSections .link-ready h3 {
  font-size: 25px;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 40px;
  text-align: center;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .link-ready h3 {
    font-size: 20px;
  }
}
.adminRightSide.CreateNFTSections .link-ready form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
}
.adminRightSide.CreateNFTSections .link-ready form input {
  width: calc(100% - 130px);
  height: 55px;
  border: 2px solid transparent;
  background-color: #E3FFF1;
  border-radius: 15px;
  padding: 0 20px;
  font-size: 20px;
  margin-right: -20px;
  transition: all 0.5s ease;
}
.adminRightSide.CreateNFTSections .link-ready form input:focus {
  box-shadow: none;
  outline: none;
  border: solid 2px #1E1E1E;
  transition: all 0.5s ease;
}
.adminRightSide.CreateNFTSections .link-ready form button {
  background-color: #1E1E1E;
  width: 120px;
  color: #E3FFF1;
  border: none;
  height: 65px;
  text-transform: uppercase;
  border-radius: 15px;
  cursor: pointer;
}
.adminRightSide.CreateNFTSections .link-ready form button:focus {
  box-shadow: none;
  outline: one;
}
.adminRightSide.CreateNFTSections .influencerDashboard {
  position: relative;
}
.adminRightSide.CreateNFTSections .influencerDashboard h1 {
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 60px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .influencerDashboard h1 {
    font-size: 22px;
  }
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .influencerDashboard .dashboardPage .form-group input {
    font-size: 18px;
    padding-left: 20px;
  }
}
.adminRightSide.CreateNFTSections .influencerDashboard .dashboardPage .form-group label {
  background-color: #82FAD2;
  left: 2px;
  height: 56px;
  top: 2px;
  color: #1E1E1E;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .influencerDashboard .dashboardPage .form-group label {
    position: relative;
    width: 100%;
    border-radius: 15px;
    margin-bottom: 3px;
    font-size: 16px;
  }
}
.adminRightSide.CreateNFTSections .influencerDashboard .dashboardPage .form-group span {
  background-color: #1E1E1E;
  color: #FFFFFF;
  top: 1px;
  height: 58px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .influencerDashboard .dashboardPage .form-group span {
    position: absolute;
    top: 60px;
    font-size: 16px;
  }
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection {
  position: relative;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection h2 {
  font-size: 22px;
  text-transform: uppercase;
  color: #46D9A8;
  opacity: 0.8;
  position: relative;
  padding-left: 15px;
  margin-bottom: 40px;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection h2::before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0;
  width: 2px;
  background-color: #46D9A8;
  height: 100%;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection .tableContent:last-child {
  border-bottom: solid 2px #DBEDE5;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection .tableContent .optionsButtons .ViewStatusButtons {
  width: 225px;
  border-color: #82FAD2;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection .tableContent .optionsButtons .ViewStatusButtons:hover {
  background-color: #82FAD2;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table {
  width: 100%;
}
@media (max-width: 640px) {
  .adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table {
    display: block;
    overflow-x: auto;
  }
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr:first-child th {
  border-top: none;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr th {
  font-size: 24px;
  text-transform: uppercase;
  color: #1E1E1E;
  font-weight: normal;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr th {
    font-size: 20px;
  }
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr th:last-child {
  text-align: right;
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr td {
  font-size: 18px;
  vertical-align: middle;
  padding: 25px 15px;
}
@media (max-width: 767px) {
  .adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr td {
    font-size: 14px;
  }
}
.adminRightSide.CreateNFTSections .influencerDashboard .customTableSection table.table tr td:last-child {
  text-align: right;
}
.adminRightSide.CreateNFTSections .influencerDashboard .loadMoreButton {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
}
.adminRightSide.CreateNFTSections .influencerDashboard .loadMoreButton a {
  border: 1px solid #82FAD2;
  background-color: transparent;
  color: #82FAD2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 6px 20px;
  border-radius: 10px;
}
.adminRightSide.CreateNFTSections .influencerDashboard .loadMoreButton a:hover {
  text-decoration: none;
  cursor: pointer;
}

.ArtistSection {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 991px) {
  .ArtistSection {
    flex-direction: column;
  }
}
.ArtistSection .iAmArtis {
  position: relative;
  width: 100%;
  max-width: 50%;
  height: 100%;
  background-color: #E3FFF1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
@media (max-width: 991px) {
  .ArtistSection .iAmArtis {
    max-width: 100%;
    height: 50%;
  }
}
.ArtistSection .iAmArtis .iAmArtis_overlay {
  position: absolute;
  left: 0;
  right: auto;
  top: 0;
}
.ArtistSection .iAmArtis .iAmArtis_overlay img {
  width: 100%;
  max-width: 70%;
}
.ArtistSection .iAmArtis h1 {
  font-size: 45px;
  line-height: 60px;
  margin-bottom: 45px;
}
.ArtistSection .iAmArtis h1 span {
  font-weight: bold;
  color: #1E1E1E;
}
@media (max-width: 991px) {
  .ArtistSection .iAmArtis h1 {
    font-size: 40px;
  }
  .ArtistSection .iAmArtis h1 .removeBrTag {
    display: none;
  }
}
@media (max-width: 991px) and (max-width: 767px) {
  .ArtistSection .iAmArtis h1 .removeBrTag {
    display: block;
  }
}
@media (max-width: 767px) {
  .ArtistSection .iAmArtis h1 {
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 30px;
  }
}
.ArtistSection .iAmArtis button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 60px;
  font-size: 20px;
  background-color: #1E1E1E;
  color: #FFFFFF;
  border-radius: 20px;
  margin: 0 auto;
}
// .ArtistSection .iAmArtis a:hover {
//   text-decoration: none;
// }
.ArtistSection .iAmInfluencer {
  position: relative;
  width: 100%;
  max-width: 50%;
  height: 100%;
  background-color: #1E1E1E;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
@media (max-width: 991px) {
  .ArtistSection .iAmInfluencer {
    max-width: 100%;
    height: 50%;
  }
}
.ArtistSection .iAmInfluencer .iAmInfluencer_overlay {
  position: absolute;
  left: auto;
  right: 0;
  bottom: 0;
}
.ArtistSection .iAmInfluencer .iAmInfluencer_overlay img {
  width: 100%;
  max-width: 100%;
}
.ArtistSection .iAmInfluencer h1 {
  font-size: 45px;
  line-height: 60px;
  margin-bottom: 45px;
  color: #FFFFFF;
}
.ArtistSection .iAmInfluencer h1 span {
  font-weight: bold;
  color: #FFFFFF;
}
@media (max-width: 991px) {
  .ArtistSection .iAmInfluencer h1 {
    font-size: 40px;
  }
  .ArtistSection .iAmInfluencer h1 .removeBrTag {
    display: none;
  }
}
@media (max-width: 991px) and (max-width: 767px) {
  .ArtistSection .iAmInfluencer h1 .removeBrTag {
    display: block;
  }
}
@media (max-width: 767px) {
  .ArtistSection .iAmInfluencer h1 {
    font-size: 35px;
    line-height: 50px;
    margin-bottom: 30px;
  }
}
.ArtistSection .iAmInfluencer button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 60px;
  font-size: 22px;
  background-color: #82FAD2;
  color: #FFFFFF;
  border-radius: 20px;
  margin: 0 auto;
}
.ArtistSection .iAmInfluencer a:hover {
  text-decoration: none;
}

.buyWithMetamask {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
@media (max-width: 991px) {
  .buyWithMetamask {
    max-width: 100%;
  }
}
.buyWithMetamask .bgbuyWithMetamask {
  width: 100%;
  height: 600px;
  margin: auto;
  background-image: url("../images/thankBackground.png");
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 991px) {
  .buyWithMetamask .bgbuyWithMetamask {
    background-image: url("../images/thankBackground_mobile.png");
    height: 100%;
    width: 100%;
  }
}
.buyWithMetamask .bgbuyWithMetamask .topNFTNameBox {
  background-color: #FFFFFF;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: 350px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
}
@media (max-width: 991px) {
  .buyWithMetamask .bgbuyWithMetamask .topNFTNameBox {
    margin-top: 20px;
  }
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .topNFTNameBox {
    width: 80%;
  }
}
.buyWithMetamask .bgbuyWithMetamask .topNFTNameBox h2 {
  font-size: 22px;
  font-weight: normal;
  color: #1E1E1E;
  margin: 0 0 5px 0;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .topNFTNameBox h2 {
    font-size: 18px;
  }
}
.buyWithMetamask .bgbuyWithMetamask .topNFTNameBox span {
  font-size: 18px;
  font-weight: normal;
  color: #1E1E1E;
  display: block;
  margin: 0 0 10px 0;
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .topNFTNameBox span {
    font-size: 16px;
  }
}
.buyWithMetamask .bgbuyWithMetamask .topNFTNameBox p {
  font-size: 25px;
  color: #46D9A8;
  margin: 0;
  font-weight: normal;
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .topNFTNameBox p {
    font-size: 22px;
  }
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions {
  position: relative;
  width: 1005;
  max-width: 700px;
  margin: 80px auto 0;
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions {
    margin: 40px auto 0;
  }
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2 {
  font-size: 22px;
  font-weight: normal;
  color: #1E1E1E;
  position: relative;
  margin-bottom: 40px;
}
@media (max-width: 991px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2 {
    font-size: 20px;
  }
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2 {
    font-size: 18px;
  }
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2::before {
  content: "";
  position: absolute;
  left: 0;
  right: auto;
  width: 36%;
  bottom: 40%;
  height: 2px;
  background-color: #FFFFFF;
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2::before {
    display: none;
  }
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2::after {
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  width: 36%;
  bottom: 40%;
  height: 2px;
  background-color: #FFFFFF;
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions h2::after {
    display: none;
  }
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions p {
  font-size: 18px;
  color: #1E1E1E;
}
@media (max-width: 991px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions p {
    font-size: 16px;
  }
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask .buyDescriptions p {
    padding: 0 10px;
  }
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions button {
  border: none;
  background-color: #1E1E1E;
  padding: 10px 30px;
  color: #FFFFFF;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 20px;
  text-transform: uppercase;
  cursor: pointer;
}
.buyWithMetamask .bgbuyWithMetamask .buyDescriptions button:focus {
  box-shadow: none;
  outline: none;
}

.buyWithMetamask .bgbuyWithMetamask.thanksSections {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.buyWithMetamask .bgbuyWithMetamask.thanksSections img {
  margin-bottom: 40px;
}
.buyWithMetamask .bgbuyWithMetamask.thanksSections h1 {
  font-size: 30px;
  text-align: center;
  color: #1E1E1E;
  margin: 0 0 10px 0;
  font-weight: 600;
}
@media (max-width: 991px) {
  .buyWithMetamask .bgbuyWithMetamask.thanksSections h1 {
    font-size: 25px;
  }
}
@media (max-width: 767px) {
  .buyWithMetamask .bgbuyWithMetamask.thanksSections h1 {
    font-size: 18px;
    padding: 0 15px;
  }
}
.buyWithMetamask .bgbuyWithMetamask.thanksSections p {
  text-align: center;
  font-size: 20px;
  color: #1E1E1E;
}
@media (max-width: 991px) {
  .buyWithMetamask .bgbuyWithMetamask.thanksSections p {
    font-size: 14px;
  }
}

/*# sourceMappingURL=style.cc.map */
