import './polyfills.server.mjs';
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-TUQAKRBG.mjs";
import {
  CommonModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J4UFSZJR.mjs";
import {
  __publicField
} from "./chunk-CU4POASJ.mjs";

// src/app/blogs-open/blogs-open.component.ts
var _c0 = (a0) => ({ "arabic-text": a0 });
var _BlogsOpenComponent = class _BlogsOpenComponent {
  constructor(translateService) {
    __publicField(this, "translateService");
    __publicField(this, "lang");
    this.translateService = translateService;
    this.lang = this.translateService.currentLang || "en";
    this.translateService.onLangChange.subscribe(() => {
      this.lang = this.translateService.currentLang || "en";
    });
  }
};
__publicField(_BlogsOpenComponent, "\u0275fac", function BlogsOpenComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlogsOpenComponent)(\u0275\u0275directiveInject(TranslateService));
});
__publicField(_BlogsOpenComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsOpenComponent, selectors: [["app-blogs-open"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 155, vars: 150, consts: [[1, "section-1", "center", "flex-column"], [1, "text-align-center", "hero-title"], [1, "section-2", "flex-column", "page-container", 3, "ngClass"], [1, "gray-text-color"], [1, "primary-text-color"], [1, "primary-text-color", "margin-top50"], [1, "margin-top30"], [1, "mid-page"], ["src", "../../assets/images/blogs-mid-Page.png", "alt", "", 1, "width-100"], [1, "margin-top30", "primary-text-color"], [2, "font-size", "1.5rem"], [1, "center", "gap-30", "margin-top50"], ["src", "../../assets/images/blog-img1.png", "alt", "", 1, "width-50"], ["src", "../../assets/images/blog-img2.png", "alt", "", 1, "width-50"], [1, "margin-top30", "gray-text-color"], [1, "gray-text-color", "margin-bottom50"]], template: function BlogsOpenComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "br");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "section", 2)(8, "p", 3);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 4);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 3);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h1", 5);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h1", 6);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 3);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h1", 6);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 3);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h1", 6);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 3);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h1", 6);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 3);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "figure", 7);
    \u0275\u0275element(45, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h1", 9);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h1", 6);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 3);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "h1", 6);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 3);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "h1");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 3);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h1", 5);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "figcaption")(71, "b", 10);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 3);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "b", 10);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 3);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "b", 10);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 3);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "b", 10);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 3);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "h1", 5);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "p", 3);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "h1", 5);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "h1", 6);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "p", 3);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "h1", 6);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p", 3);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "h1", 6);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "p", 3);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "h1", 6);
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "p", 3);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "h1", 6);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p", 3);
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "h1", 6);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "p", 3);
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "figure", 11);
    \u0275\u0275element(141, "img", 12)(142, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "h1", 5);
    \u0275\u0275text(144);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "p", 14);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "h1", 5);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "p", 15);
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 50, "shared.BestCleaningCompanyInQatar"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 52, "shared.FindReliableProfessionalCleaningServices"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(148, _c0, ctx.lang === "ar"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 54, "paragraph.KeepingACleanAndOrganizedSpace"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("1. ", \u0275\u0275pipeBind1(13, 56, "shared.IntroductionWhyChooseProfessionalCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 58, "paragraph.MaintainingACleanEnvironment"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("2. ", \u0275\u0275pipeBind1(19, 60, "shared.KeyQualitiesOfTheBestCleaningCompany"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(22, 62, "shared.TrainedAndSkilledCleaningStaff"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 64, "paragraph.AleadingCleaningCompanyEmploysTrained"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(28, 66, "shared.UseOfEcoFriendlyCleaningProducts"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 68, "paragraph.EcoFriendlyCleaningHasBecome"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(34, 70, "shared.FlexibleSchedulingAndCustomization"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 72, "paragraph.TheBestCleaningCompaniesOfferFlexible"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(40, 74, "shared.TransparentAndAffordablePricing"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 76, "paragraph.PricingTransparencyIsCrucialWhenChoosing"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("3. ", \u0275\u0275pipeBind1(48, 78, "shared.TypesOfCleaningServicesAvailableInQatar"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(51, 80, "shared.ResidentialCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 82, "paragraph.ResidentialCleaningServicesCoverEveryCorner"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(57, 84, "shared.CommercialAndOfficeCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 86, "paragraph.BusinessesInQatarRelyOnProfessionalCleaning"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind1(63, 88, "shared.EventAndHospitalityCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 90, "paragraph.ForEventsAndGatherings"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("4. ", \u0275\u0275pipeBind1(69, 92, "shared.BenefitsOfHiringProfessionalCleaningCompany"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(". ", \u0275\u0275pipeBind1(73, 94, "shared.Time-Saving:"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 96, "paragraph.ProfessionalCleaningAllowsYouToFocus"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(". ", \u0275\u0275pipeBind1(79, 98, "shared.ImprovedHealthAndHygiene"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 100, "paragraph.ExpertCleaningReducesAllergens"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(". ", \u0275\u0275pipeBind1(85, 102, "shared.EnhancedAppearance"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(88, 104, "paragraph.RegularCleaningImprovesTheAesthetic"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(". ", \u0275\u0275pipeBind1(91, 106, "shared.ExtendedPropertyLife"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(94, 108, "paragraph.ProperMaintenanceOfSurfaces"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("5. ", \u0275\u0275pipeBind1(97, 110, "shared.HowToChooseTheBestCleaningCompanyQatar"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 112, "paragraph.WhenSelectingACleaningCompany"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("6. ", \u0275\u0275pipeBind1(103, 114, "shared.FAQsAboutTheBestCleaningCompanyQatar"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q1. ", \u0275\u0275pipeBind1(106, 116, "shared.WhatShouldIExpectFromProfessionalCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 118, "paragraph.ExpectThorough"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q2. ", \u0275\u0275pipeBind1(112, 120, "shared.HowOftenShouldIScheduleCleaningServices"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(115, 122, "paragraph.TheFrequencyDependsOnTheSpace"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q3. ", \u0275\u0275pipeBind1(118, 124, "shared.AreEcoFriendlyCleaningProductsEffective"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 126, "paragraph.YesEcoFriendlyProducts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q4. ", \u0275\u0275pipeBind1(124, 128, "shared.HowCanIEnsureACleaningCompanyIsReputable"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(127, 130, "paragraph.CheckForOnlineReviews"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q5. ", \u0275\u0275pipeBind1(130, 132, "shared.CanIRequestSpecificCleaningTasks"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 134, "paragraph.AbsolutelyManyCompanies"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q6. ", \u0275\u0275pipeBind1(136, 136, "shared.WhatAreTheCostsOfHiringTheBestCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(139, 138, "paragraph.CostsVaryBased"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("7. ", \u0275\u0275pipeBind1(145, 140, "shared.Conclusion"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(148, 142, "paragraph.SelectingTheBestCleaningCompanyInQatar"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("8. ", \u0275\u0275pipeBind1(151, 144, "shared.CarlaMaidQatarTrustedPartnerForComprehensiveCleaning"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(154, 146, "paragraph.AtCarlaMaidWeAreDedicatedToElevating"), " ");
  }
}, dependencies: [TranslateModule, TranslatePipe, CommonModule, NgClass], styles: ['\n\n.section-1[_ngcontent-%COMP%] {\n  background-image: url("./media/blogs-open-header.png");\n  object-fit: cover;\n  background-size: cover;\n  height: 50vh;\n}\n.section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\np[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\np[lang=ar][_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nh1.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nb[_ngcontent-%COMP%] {\n  color: #0f0f0f;\n}\n.page-container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-inline: auto;\n}\n.section-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.section-2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.section-2.arabic-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.section-2.arabic-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.section-2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  p[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  section.section-2.flex-column.page-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 425px) {\n  .section-1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n}\n/*# sourceMappingURL=blogs-open.component.css.map */'] }));
var BlogsOpenComponent = _BlogsOpenComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsOpenComponent, { className: "BlogsOpenComponent" });
})();
export {
  BlogsOpenComponent
};
//# sourceMappingURL=chunk-R2RGNSJR.mjs.map
