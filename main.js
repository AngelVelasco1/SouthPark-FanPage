import header from "./components/header.js";
import myBanner from "./components/myBanner.js";
import aside from "./components/aside.js";
import mainCarrousel from "./components/mainCarrousel.js";

import history from "./components/history.js";
import awards from "./components/awards.js";

import footer from "./components/footer.js";

header.showHeader();


myBanner.showBanner();
myBanner.showImage();

aside.showAside();

mainCarrousel.showCarrousel();

history.showHistory();
awards.showAwards();

footer.showFooter();