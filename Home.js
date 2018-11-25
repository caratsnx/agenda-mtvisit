/*
 * JS for Home generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return 'd4849e18-8700-4ed2-b6e2-0496353af5f1';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "Nov30",
    "location": "Nov30.html"
}, {
    "name": "Dec3",
    "location": "Dec3.html"
}, {
    "name": "Account",
    "location": "Account.html"
}, {
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "Products",
    "location": "Products.html"
}];

function Home_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar_6': 'Home_mobilenavbar_6',
        'home_item': 'Home_home_item',
        'products_item': 'Home_products_item',
        'account_item': 'Home_account_item',
        'mobilenavbaritem_11': 'Home_mobilenavbaritem_11',
        'mobilenavbaritem_58': 'Home_mobilenavbaritem_58',
        'mobileworkarea_10_24_215': 'Home_mobileworkarea_10_24_215',
        'mobilecollapsblock_14_25_216': 'Home_mobilecollapsblock_14_25_216',
        'mobilecollapsblockheader_15_26_217': 'Home_mobilecollapsblockheader_15_26_217',
        'mobilecollapsblockcontent_16_27_218': 'Home_mobilecollapsblockcontent_16_27_218',
        'mobilecollapsblock_34_45_59_219': 'Home_mobilecollapsblock_34_45_59_219',
        'mobilecollapsblockheader_35_46_60_220': 'Home_mobilecollapsblockheader_35_46_60_220',
        'mobilecollapsblockcontent_36_47_61_221': 'Home_mobilecollapsblockcontent_36_47_61_221',
        'mobilegrid_37_48_62_222': 'Home_mobilegrid_37_48_62_222',
        'mobilegridcell_38_49_63_223': 'Home_mobilegridcell_38_49_63_223',
        'mobilelabel_42_50_64_224': 'Home_mobilelabel_42_50_64_224',
        'mobilegridcell_39_51_65_225': 'Home_mobilegridcell_39_51_65_225',
        'mobilelabel_55_66_226': 'Home_mobilelabel_55_66_226',
        'mobilegridcell_40_52_67_227': 'Home_mobilegridcell_40_52_67_227',
        'mobilelabel_43_53_68_228': 'Home_mobilelabel_43_53_68_228',
        'mobilegridcell_41_54_69_229': 'Home_mobilegridcell_41_54_69_229',
        'mobilelabel_56_70_230': 'Home_mobilelabel_56_70_230',
        'mobilecollapsblock_34_45_72_231': 'Home_mobilecollapsblock_34_45_72_231',
        'mobilecollapsblockheader_35_46_73_232': 'Home_mobilecollapsblockheader_35_46_73_232',
        'mobilecollapsblockcontent_36_47_74_233': 'Home_mobilecollapsblockcontent_36_47_74_233',
        'mobilegrid_37_48_75_234': 'Home_mobilegrid_37_48_75_234',
        'mobilegridcell_38_49_76_235': 'Home_mobilegridcell_38_49_76_235',
        'mobilelabel_42_50_77_236': 'Home_mobilelabel_42_50_77_236',
        'mobilegridcell_39_51_78_237': 'Home_mobilegridcell_39_51_78_237',
        'mobilelabel_55_79_238': 'Home_mobilelabel_55_79_238',
        'mobilegridcell_40_52_80_239': 'Home_mobilegridcell_40_52_80_239',
        'mobilelabel_43_53_81_240': 'Home_mobilelabel_43_53_81_240',
        'mobilegridcell_41_54_82_241': 'Home_mobilegridcell_41_54_82_241',
        'mobilelabel_56_83_242': 'Home_mobilelabel_56_83_242',
        'mobilecollapsblock_34_45_85_243': 'Home_mobilecollapsblock_34_45_85_243',
        'mobilecollapsblockheader_35_46_86_244': 'Home_mobilecollapsblockheader_35_46_86_244',
        'mobilecollapsblockcontent_36_47_87_245': 'Home_mobilecollapsblockcontent_36_47_87_245',
        'mobilegrid_37_48_88_246': 'Home_mobilegrid_37_48_88_246',
        'mobilegridcell_38_49_89_247': 'Home_mobilegridcell_38_49_89_247',
        'mobilelabel_42_50_90_248': 'Home_mobilelabel_42_50_90_248',
        'mobilegridcell_39_51_91_249': 'Home_mobilegridcell_39_51_91_249',
        'mobilelabel_55_92_250': 'Home_mobilelabel_55_92_250',
        'mobilegridcell_40_52_93_251': 'Home_mobilegridcell_40_52_93_251',
        'mobilelabel_43_53_94_252': 'Home_mobilelabel_43_53_94_252',
        'mobilegridcell_41_54_95_253': 'Home_mobilegridcell_41_54_95_253',
        'mobilelabel_56_96_254': 'Home_mobilelabel_56_96_254',
        'mobilecollapsblock_34_340': 'Home_mobilecollapsblock_34_340',
        'mobilecollapsblockheader_35_341': 'Home_mobilecollapsblockheader_35_341',
        'mobilecollapsblockcontent_36_342': 'Home_mobilecollapsblockcontent_36_342',
        'mobilegrid_37_343': 'Home_mobilegrid_37_343',
        'mobilegridcell_38_344': 'Home_mobilegridcell_38_344',
        'mobilelabel_42_345': 'Home_mobilelabel_42_345',
        'mobilegridcell_39_346': 'Home_mobilegridcell_39_346',
        'mobilelabel_350': 'Home_mobilelabel_350',
        'mobilegridcell_40_347': 'Home_mobilegridcell_40_347',
        'mobilelabel_43_348': 'Home_mobilelabel_43_348',
        'mobilegridcell_41_349': 'Home_mobilegridcell_41_349',
        'mobilelabel_351': 'Home_mobilelabel_351',
        'mobilecollapsblock_34_45_111_255': 'Home_mobilecollapsblock_34_45_111_255',
        'mobilecollapsblockheader_35_46_112_256': 'Home_mobilecollapsblockheader_35_46_112_256',
        'mobilecollapsblockcontent_36_47_113_257': 'Home_mobilecollapsblockcontent_36_47_113_257',
        'mobilecollapsblock_34_45_124_258': 'Home_mobilecollapsblock_34_45_124_258',
        'mobilecollapsblockheader_35_46_125_259': 'Home_mobilecollapsblockheader_35_46_125_259',
        'mobilecollapsblockcontent_36_47_126_260': 'Home_mobilecollapsblockcontent_36_47_126_260',
        'mobilegrid_37_48_127_261': 'Home_mobilegrid_37_48_127_261',
        'mobilegridcell_38_49_128_262': 'Home_mobilegridcell_38_49_128_262',
        'mobilelabel_42_50_129_263': 'Home_mobilelabel_42_50_129_263',
        'mobilegridcell_39_51_130_264': 'Home_mobilegridcell_39_51_130_264',
        'mobilelabel_55_131_265': 'Home_mobilelabel_55_131_265',
        'mobilegridcell_40_52_132_266': 'Home_mobilegridcell_40_52_132_266',
        'mobilelabel_43_53_133_267': 'Home_mobilelabel_43_53_133_267',
        'mobilegridcell_41_54_134_268': 'Home_mobilegridcell_41_54_134_268',
        'mobilelabel_56_135_269': 'Home_mobilelabel_56_135_269',
        'mobilecollapsblock_17_28_270': 'Home_mobilecollapsblock_17_28_270',
        'mobilecollapsblockheader_18_29_271': 'Home_mobilecollapsblockheader_18_29_271',
        'mobilecollapsblockcontent_19_30_272': 'Home_mobilecollapsblockcontent_19_30_272',
        'mobilecollapsblock_34_45_137_273': 'Home_mobilecollapsblock_34_45_137_273',
        'mobilecollapsblockheader_35_46_138_274': 'Home_mobilecollapsblockheader_35_46_138_274',
        'mobilecollapsblockcontent_36_47_139_275': 'Home_mobilecollapsblockcontent_36_47_139_275',
        'mobilegrid_37_48_140_276': 'Home_mobilegrid_37_48_140_276',
        'mobilegridcell_38_49_141_277': 'Home_mobilegridcell_38_49_141_277',
        'mobilelabel_42_50_142_278': 'Home_mobilelabel_42_50_142_278',
        'mobilegridcell_39_51_143_279': 'Home_mobilegridcell_39_51_143_279',
        'mobilelabel_55_144_280': 'Home_mobilelabel_55_144_280',
        'mobilegridcell_40_52_145_281': 'Home_mobilegridcell_40_52_145_281',
        'mobilelabel_43_53_146_282': 'Home_mobilelabel_43_53_146_282',
        'mobilegridcell_41_54_147_283': 'Home_mobilegridcell_41_54_147_283',
        'mobilelabel_56_148_284': 'Home_mobilelabel_56_148_284',
        'mobilecollapsblock_34_45_150_285': 'Home_mobilecollapsblock_34_45_150_285',
        'mobilecollapsblockheader_35_46_151_286': 'Home_mobilecollapsblockheader_35_46_151_286',
        'mobilecollapsblockcontent_36_47_152_287': 'Home_mobilecollapsblockcontent_36_47_152_287',
        'mobilegrid_37_48_153_288': 'Home_mobilegrid_37_48_153_288',
        'mobilegridcell_38_49_154_289': 'Home_mobilegridcell_38_49_154_289',
        'mobilelabel_42_50_155_290': 'Home_mobilelabel_42_50_155_290',
        'mobilegridcell_39_51_156_291': 'Home_mobilegridcell_39_51_156_291',
        'mobilelabel_55_157_292': 'Home_mobilelabel_55_157_292',
        'mobilegridcell_40_52_158_293': 'Home_mobilegridcell_40_52_158_293',
        'mobilelabel_43_53_159_294': 'Home_mobilelabel_43_53_159_294',
        'mobilegridcell_41_54_160_295': 'Home_mobilegridcell_41_54_160_295',
        'mobilelabel_56_161_296': 'Home_mobilelabel_56_161_296',
        'mobilecollapsblock_34_45_163_297': 'Home_mobilecollapsblock_34_45_163_297',
        'mobilecollapsblockheader_35_46_164_298': 'Home_mobilecollapsblockheader_35_46_164_298',
        'mobilecollapsblockcontent_36_47_165_299': 'Home_mobilecollapsblockcontent_36_47_165_299',
        'mobilecollapsblock_34_45_176_300': 'Home_mobilecollapsblock_34_45_176_300',
        'mobilecollapsblockheader_35_46_177_301': 'Home_mobilecollapsblockheader_35_46_177_301',
        'mobilecollapsblockcontent_36_47_178_302': 'Home_mobilecollapsblockcontent_36_47_178_302',
        'mobilegrid_37_48_179_303': 'Home_mobilegrid_37_48_179_303',
        'mobilegridcell_38_49_180_304': 'Home_mobilegridcell_38_49_180_304',
        'mobilelabel_42_50_181_305': 'Home_mobilelabel_42_50_181_305',
        'mobilegridcell_39_51_182_306': 'Home_mobilegridcell_39_51_182_306',
        'mobilelabel_55_183_307': 'Home_mobilelabel_55_183_307',
        'mobilegridcell_40_52_184_308': 'Home_mobilegridcell_40_52_184_308',
        'mobilelabel_43_53_185_309': 'Home_mobilelabel_43_53_185_309',
        'mobilegridcell_41_54_186_310': 'Home_mobilegridcell_41_54_186_310',
        'mobilelabel_56_187_311': 'Home_mobilelabel_56_187_311',
        'mobilecollapsblock_20_31_312': 'Home_mobilecollapsblock_20_31_312',
        'mobilecollapsblockheader_21_32_313': 'Home_mobilecollapsblockheader_21_32_313',
        'mobilecollapsblockcontent_22_33_314': 'Home_mobilecollapsblockcontent_22_33_314',
        'mobilecollapsblock_34_45_189_315': 'Home_mobilecollapsblock_34_45_189_315',
        'mobilecollapsblockheader_35_46_190_316': 'Home_mobilecollapsblockheader_35_46_190_316',
        'mobilecollapsblockcontent_36_47_191_317': 'Home_mobilecollapsblockcontent_36_47_191_317',
        'mobilegrid_37_48_192_318': 'Home_mobilegrid_37_48_192_318',
        'mobilegridcell_38_49_193_319': 'Home_mobilegridcell_38_49_193_319',
        'mobilelabel_42_50_194_320': 'Home_mobilelabel_42_50_194_320',
        'mobilegridcell_39_51_195_321': 'Home_mobilegridcell_39_51_195_321',
        'mobilelabel_55_196_322': 'Home_mobilelabel_55_196_322',
        'mobilegridcell_40_52_197_323': 'Home_mobilegridcell_40_52_197_323',
        'mobilelabel_43_53_198_324': 'Home_mobilelabel_43_53_198_324',
        'mobilegridcell_41_54_199_325': 'Home_mobilegridcell_41_54_199_325',
        'mobilelabel_56_200_326': 'Home_mobilelabel_56_200_326',
        'mobilecollapsblock_34_45_202_327': 'Home_mobilecollapsblock_34_45_202_327',
        'mobilecollapsblockheader_35_46_203_328': 'Home_mobilecollapsblockheader_35_46_203_328',
        'mobilecollapsblockcontent_36_47_204_329': 'Home_mobilecollapsblockcontent_36_47_204_329',
        'mobilegrid_37_48_205_330': 'Home_mobilegrid_37_48_205_330',
        'mobilegridcell_38_49_206_331': 'Home_mobilegridcell_38_49_206_331',
        'mobilelabel_42_50_207_332': 'Home_mobilelabel_42_50_207_332',
        'mobilegridcell_39_51_208_333': 'Home_mobilegridcell_39_51_208_333',
        'mobilelabel_55_209_334': 'Home_mobilelabel_55_209_334',
        'mobilegridcell_40_52_210_335': 'Home_mobilegridcell_40_52_210_335',
        'mobilelabel_43_53_211_336': 'Home_mobilelabel_43_53_211_336',
        'mobilegridcell_41_54_212_337': 'Home_mobilegridcell_41_54_212_337',
        'mobilelabel_56_213_338': 'Home_mobilelabel_56_213_338'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'Home';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Home_onLoad = function() {
        Home_elementsExtraJS();
        Home_deviceEvents();
        Home_windowEvents();
        Home_elementsEvents();
    };
    // screen window events
    function Home_windowEvents() {
        $('#Home').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function Home_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Home_elementsExtraJS() {
        // screen (Home) extra code
        /* mobilecollapsblock_14_25_216 */
        $("#Home_mobilecollapsblock_14_25_216 .ui-collapsible-heading-toggle").attr("tabindex", "1");
        /* mobilecollapsblock_34_45_59_219 */
        $("#Home_mobilecollapsblock_34_45_59_219 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_72_231 */
        $("#Home_mobilecollapsblock_34_45_72_231 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_85_243 */
        $("#Home_mobilecollapsblock_34_45_85_243 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_340 */
        $("#Home_mobilecollapsblock_34_340 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_111_255 */
        $("#Home_mobilecollapsblock_34_45_111_255 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_124_258 */
        $("#Home_mobilecollapsblock_34_45_124_258 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_17_28_270 */
        $("#Home_mobilecollapsblock_17_28_270 .ui-collapsible-heading-toggle").attr("tabindex", "2");
        /* mobilecollapsblock_34_45_137_273 */
        $("#Home_mobilecollapsblock_34_45_137_273 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_150_285 */
        $("#Home_mobilecollapsblock_34_45_150_285 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_163_297 */
        $("#Home_mobilecollapsblock_34_45_163_297 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_176_300 */
        $("#Home_mobilecollapsblock_34_45_176_300 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_20_31_312 */
        $("#Home_mobilecollapsblock_20_31_312 .ui-collapsible-heading-toggle").attr("tabindex", "3");
        /* mobilecollapsblock_34_45_189_315 */
        $("#Home_mobilecollapsblock_34_45_189_315 .ui-collapsible-heading-toggle").attr("tabindex", "4");
        /* mobilecollapsblock_34_45_202_327 */
        $("#Home_mobilecollapsblock_34_45_202_327 .ui-collapsible-heading-toggle").attr("tabindex", "4");
    };
    // screen elements handler
    function Home_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
        $(document).off("click", '#Home_mobileheader1 [name="home_item"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });
                }
            },
        }, '#Home_mobileheader1 [name="home_item"]');
        $(document).off("click", '#Home_mobileheader1 [name="products_item"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Products', {
                        reverse: false
                    });
                }
            },
        }, '#Home_mobileheader1 [name="products_item"]');
        $(document).off("click", '#Home_mobileheader1 [name="account_item"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Account', {
                        reverse: false
                    });
                }
            },
        }, '#Home_mobileheader1 [name="account_item"]');
    };
    $(document).off("pagebeforeshow", "#Home").on("pagebeforeshow", "#Home", function(event, ui) {
        Apperyio.CurrentScreen = "Home";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Home_onLoad();
};
$(document).off("pagecreate", "#Home").on("pagecreate", "#Home", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Home_js();
});