import header from "./components/header.js";
import myBanner from "./components/myBanner.js";
import aside from "./components/aside.js";
import mainCarrousel from "./components/mainCarrousel.js";

import history from "./components/history.js";
import awards from "./components/awards.js";

import footer from "./components/footer.js";

header.listarCharacters();
header.listarTitle();

myBanner.showBannerImage();
myBanner.showBannerInfo();

aside.showAside();

mainCarrousel.showCarrousel();
mainCarrousel.showImages();

history.showHistory();
awards.showAwards();

footer.showFooter();