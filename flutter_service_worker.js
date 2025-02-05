'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"index.html": "c8488c014d8acb62dc7397b0dd53ab37",
"/": "c8488c014d8acb62dc7397b0dd53ab37",
"manifest.json": "2c2088609fff733c143d2dd123328b9e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "bcab1a171a6a7ff261766c727def2ed6",
"version.json": "32c94db6aadb26d4431500e42771ad09",
"flutter_bootstrap.js": "c8318925b29a6bf9dc87d6f7d567d7ac",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/Macondo/Macondo-Regular.ttf": "cea32bd04bb9981d8dd78e509ac1cccd",
"assets/fonts/NotoSans/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/fonts/NotoSans/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/fonts/NotoSans/NotoSans-SemiBold.ttf": "dfad8b708bc7b6911ed49a6f35680b10",
"assets/fonts/NotoSans/NotoSans-Thin.ttf": "1cf299dc471a137219ca9570173f53a1",
"assets/fonts/NotoSans/NotoSans-Black.ttf": "45e579d4c5952595df0d5b0dfe75d53e",
"assets/fonts/NotoSans/NotoSans-ExtraLight.ttf": "457f3e71429cfa0fb7fc7e79d2505389",
"assets/fonts/NotoSans/NotoSans-Light.ttf": "9f45a3e1e6aa474995ba423d6137e5c7",
"assets/fonts/NotoSans/NotoSans-ExtraBold.ttf": "d46a62701edeada8a839b0be13da8406",
"assets/fonts/NotoSans/NotoSans-Medium.ttf": "09dc02dbe8133545806d275a2fec2ca7",
"assets/fonts/Noto_Sans_JP/NotoSansJP-Black.ttf": "c7cf13f6288ece850a978a0cfa764cd4",
"assets/fonts/Noto_Sans_JP/NotoSansJP-Light.ttf": "b248483f59d25fca6fb75ba8196f7037",
"assets/fonts/Noto_Sans_JP/NotoSansJP-Bold.ttf": "1bdb5bf9e923e1bc6418342bcf6fb3e0",
"assets/fonts/Noto_Sans_JP/NotoSansJP-Medium.ttf": "7aa0d1123977dab52b1e01f61f0a9a7f",
"assets/fonts/Noto_Sans_JP/NotoSansJP-Thin.ttf": "9b3a9c37f57376f4572cc30aa6506367",
"assets/fonts/Noto_Sans_JP/NotoSansJP-Regular.ttf": "dd4fa7df965b4d3227bf42b9a77da3e0",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf": "b59ac7cf449e57469daf2480fafbddf4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf": "5dac92efb94655ca5331df2505f3428a",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf": "de132efeffa48aef0bf5bdfe1c4602f4",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf": "89816c0e22baa4f81a196a1c3b61bf46",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf": "913f146b0200b19b17eb4de8b4427a9c",
"assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf": "aef8424b7c9ece17f01cbc8618e4723b",
"assets/fonts/GodoRounded/godoRounded-R.ttf": "c4a61e69569e01a5fffaa79cbfbf265e",
"assets/fonts/MaterialIcons-Regular.otf": "f77c04e54cb810effb9482ba2f614ed0",
"assets/fonts/Jua/Jua-Regular.ttf": "f32585404eaefb4f771d6ec0d0492682",
"assets/fonts/Nanum_Pen_Script/NanumPenScript-Regular.ttf": "6238324b9cfd31534885a47e8b07231e",
"assets/fonts/Nanum_Gothic/NanumGothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/fonts/Nanum_Gothic/NanumGothic-ExtraBold.ttf": "4b1b824d86d866cb8245accebe324b62",
"assets/fonts/Nanum_Gothic/NanumGothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Regular.ttf": "afce7d51531785bfad8c666d6ee2a9b7",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-ExtraBold.ttf": "a2dcb7090ec61a328c2d518342cdc568",
"assets/fonts/Nanum_Myeongjo/NanumMyeongjo-Bold.ttf": "9eaa2e637c6efe5b4e37b7626e65b47c",
"assets/AssetManifest.bin": "2c4187bc1c362fb13c2f4dd917c2755c",
"assets/FontManifest.json": "7cfd0276a000a48119c92f5524b79e60",
"assets/AssetManifest.json": "24998be90d3c374bf5db528bd6e5261f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "3fcd39a2cc14722068654bb59cd2a132",
"assets/AssetManifest.bin.json": "696e7943ddf1da4a7ebc2945f382c1a2",
"assets/packages/flutter_weather_bg_null_safety/images/sun.webp": "f4a3e24a77f84b97ac15f8c5b846eed1",
"assets/packages/flutter_weather_bg_null_safety/images/lightning1.webp": "c267264ed06f875fa86b841e4e70064a",
"assets/packages/flutter_weather_bg_null_safety/images/lightning4.webp": "a175b2bc15e4df4bab37d5ccc43c14a0",
"assets/packages/flutter_weather_bg_null_safety/images/cloud.webp": "849a0a8f321c14b3af35ede9808a17b5",
"assets/packages/flutter_weather_bg_null_safety/images/lightning0.webp": "8d28c99840abf552a78cade97a4cad22",
"assets/packages/flutter_weather_bg_null_safety/images/lightning2.webp": "f48a914f5b0560942aed70b7ea9efbf3",
"assets/packages/flutter_weather_bg_null_safety/images/lightning3.webp": "29797eeedec55c06efd7f167a74ec6ad",
"assets/packages/flutter_weather_bg_null_safety/images/snow.webp": "d5ce493b018954f7eefb569fe185df05",
"assets/packages/flutter_weather_bg_null_safety/images/rain.webp": "be14922d4d3c0caa92982861045a678a",
"assets/packages/my_syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/my_syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/my_syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/my_syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/weather_icons/lib/fonts/weathericons-regular-webfont.ttf": "b488ac89ad51a3869cb44f6c47f648a4",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/creta_common/assets/lang/creta_lang_en.json": "57ae4cc79a38d0d84046b74638fc1d0a",
"assets/packages/creta_common/assets/lang/creta_lang_jp.json": "134ca0f867a0e4a84f49f2b9f3a4b431",
"assets/packages/creta_common/assets/lang/creta_lang_kr.json": "a60baa898f45771730993fb23f7625f9",
"assets/packages/giphy_get/assets/img/GIPHY_dark.png": "13139c9681ad6a03a0f4a45030aee388",
"assets/packages/giphy_get/assets/img/poweredby_light.png": "439da1ed3ca70fb090eb98698485c21e",
"assets/packages/giphy_get/assets/img/GIPHY_light.png": "7c7ed0e459349435c6694a720236d5f4",
"assets/packages/giphy_get/assets/img/poweredby_dark.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/assets/medSize_music_app.png": "ed3cdca4079ecd547314445ddc643c26",
"assets/assets/landing_page_banner.mp4": "b301e723bfe6e89334c032502309b0f8",
"assets/assets/delete_frame.svg": "d67f01a11018305a3ee4e98a944a05c6",
"assets/assets/creta_default.png": "cf1eb68da282f005cc5cbf8a6c3d9d8c",
"assets/assets/underConstruction.gif": "45bbcf7832e2ba44aa5a0f84f2278526",
"assets/assets/money-exchange.png": "3361f75c46fa013a14cfd10f794ccabb",
"assets/assets/music-tiny.png": "3a35ed3296e2260a53ab377a4723f36d",
"assets/assets/giphy_official_logo.png": "e4fe68503ab5d004deb31e43636a0a7c",
"assets/assets/delete_content.svg": "f1958da0b63de6e70f78414664b93022",
"assets/assets/youtube.png": "c647da897d59668d1c5d18751e7de2aa",
"assets/assets/music-visual-med.png": "fc002d163aa615ef64ec89802146c6b1",
"assets/assets/lang/creta_lang_mypage_jp.json": "1468fa5ed2f6066bf821e28f7e144d2d",
"assets/assets/lang/creta_lang_device_jp.json": "153dfeee2f9b5f113036e643722f6a6c",
"assets/assets/lang/creta_lang_studio_kr.json": "1ea9424c15ed56e040c4f0e4e13fa5f3",
"assets/assets/lang/creta_lang_device_en.json": "6bd59746b4b54f98e0e53ca5d83d77a5",
"assets/assets/lang/creta_lang_commu_jp.json": "7bbb049c8160e96d63abb93909d97868",
"assets/assets/lang/creta_lang_commu_kr.json": "2de3c6b10b4231efbba46fc4cc800e2b",
"assets/assets/lang/creta_lang_mypage_en.json": "88f04d67bfca53f102e9040253ee066c",
"assets/assets/lang/creta_lang_mypage_kr.json": "f7b0271d8fa9a56bad96cf0bf3ef1e16",
"assets/assets/lang/creta_lang_device_kr.json": "d2313b452fdc1671fd83451f99de5a99",
"assets/assets/lang/creta_lang_commu_en.json": "fdd46e07d45d7ebe84a62f8176c64eff",
"assets/assets/lang/creta_lang_studio_jp.json": "02f4983ea6214546e85c60cc41057979",
"assets/assets/lang/creta_lang_studio_en.json": "00e41296f7fe647db7038ae861e9f03e",
"assets/assets/close.png": "7c504957628b72ecd0ab93a0e48dc8dd",
"assets/assets/tipImage-1-4.png": "eabb8c3ac2bfa97e7db7f12af542d258",
"assets/assets/nextPage.png": "c3f0c62f482c31867254a256200e192d",
"assets/assets/expiredTime.png": "c5abb04c6a0ced486b1941c4e6521229",
"assets/assets/tipImage-1-2.png": "006a497f79eaf60cb8f893de92e0bf6e",
"assets/assets/no_image_available.png": "4e615f268f9dd3d9929d5ce398630d24",
"assets/assets/creta_logo_only_white.png": "ea4ed073abe54ae00d48b1e8e1e0baa2",
"assets/assets/miniSize_music_app.png": "0e562cfdefe9ae8260d14a42684e52f9",
"assets/assets/ai_tip_image.png": "79fd67c4c189a542e9cd505923daf593",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588_B_color.png": "99397f3088b6dc775eda6b7a2d1dd7de",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "39ed5e7ce397ceecdec6021342795243",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588_A_black.png": "8ca6420e02df22e6a675099508db716c",
"assets/assets/weather_sticker/%25EB%2588%2588_A_white.png": "6a5389325e741f827e7bd7a08e911c2f",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25BC_A_white.png": "571e82b20e7011e0cb4f5c0b999ad22a",
"assets/assets/weather_sticker/%25EC%2595%2588%25EA%25B0%259C_A_white.png": "5aaa59807b090a3f6c97664c1d9f590f",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "aee37d9938f113992ebc8147ecae2980",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "2b89a1eb043b9fbe0cf65db1cf49f8bb",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "3cd1223a0a3f6f0c559ee5e3d7259104",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590_A_black.png": "fb3c31daede792c62d6d285bed745b47",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_white.png": "533f82bbc37f714dfefb5f67fb1e5a7c",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C_A_white.png": "d96448cf69123d0d61baf801aba1ce51",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588_A_white.png": "bde3eca76f5dabae52016706ae60a8b9",
"assets/assets/weather_sticker/%25ED%2599%25A9%25EC%2582%25AC_A_black.png": "f0c6e1ec9aacb411034f245495e18c28",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588_B_color.png": "197a8f23914a0666e1886bed072060b4",
"assets/assets/weather_sticker/%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "03e021bc0752197cf06dc58d1dddff67",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0_A_white.png": "7650e17fed1362d9f1907dd236296057",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0_A_black.png": "5c8f0ff12d6854f855531256b6abead8",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2598%25EA%25B8%25B0_A_black.png": "48fe825919d923d52643e72c399456aa",
"assets/assets/weather_sticker/%25EB%25A7%2591%25EC%259D%258C_A_white.png": "556865e5499f66c32c7c00cbff754167",
"assets/assets/weather_sticker/%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "8ab15ae2e14d04a0fdc98cefa8e6a7ce",
"assets/assets/weather_sticker/%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "a18c2e18d057f707de2a2b39a076aa02",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "d753cc8837cb9562a3d93349b59dd37e",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_B_color.png": "b652dced811a45c259f1896fb7b164c4",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0_A_black.png": "09f6f12d3e42b91cac62b56f293feeeb",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584_A_black.png": "034aed9fce59e249f55907e7b26c49bd",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C_B_color.png": "a8a76eb1421d1032cb678664912445c6",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590_A_white.png": "bddec9970c878adff77a20dc01a8af26",
"assets/assets/weather_sticker/%25EB%25B9%2584_B_color.png": "557910aefaa54e3a48f167fcc7fa6684",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2598%25EA%25B8%25B0_A_white.png": "ce7e60c59d66cc676421df4c1edd0364",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590_B_color.png": "61a372ec15b09561670919d8315d9621",
"assets/assets/weather_sticker/%25EC%2595%2588%25EA%25B0%259C_B_color.png": "656556341392427b15c3b408d81e0949",
"assets/assets/weather_sticker/%25EC%2595%2588%25EA%25B0%259C_A_black.png": "92d4fcc74b0e52d3943b5977ba75c4d1",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588_A_black.png": "704ae41d259d0d66c48e9eb789584c1c",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_B_color.png": "842cf4bf99aef08e1c385fb341340e94",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588_A_black.png": "dd90523e3845e981e3b13692e252fb4b",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0_A_white.png": "0a2f46d1d3cee5f9641b3c355cb7f2c4",
"assets/assets/weather_sticker/%25EB%25B9%2584_A_black.png": "b71a545f1a1dd3ccb3190f321e9183eb",
"assets/assets/weather_sticker/%25EB%25B9%2584_A_white.png": "e8527b0bf5b739eacf6a071e586beca2",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584_A_white.png": "bbd9ca79c7dfdd6b94523372afa743b1",
"assets/assets/weather_sticker/%25ED%2599%25A9%25EC%2582%25AC_A_white.png": "9145ce1219074e1a35d5c7a7ccbf38ee",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "4fd89d82cdd2795324dce2391773e344",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_black.png": "ce94929fd5eefe79ebb24681850a1b46",
"assets/assets/weather_sticker/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "51ae55b9564d05df7346c28db23d1ffe",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2598%25EA%25B8%25B0_B_color.png": "866646b6f43c24313f554f35a647af2f",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25BC_B_color.png": "186b2e53b2713974af432570e8e8700a",
"assets/assets/weather_sticker/%25EB%2588%2588_B_color.png": "2b166983b15ef59d71476b1a69e12ce2",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C_A_black.png": "9e7348ec9f5e6cc22b728d9972f18605",
"assets/assets/weather_sticker/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588_A_white.png": "8980eaba7dcca91803d4bed2e718e7c8",
"assets/assets/weather_sticker/%25ED%2599%25A9%25EC%2582%25AC_B_color.png": "c7072f8b4fb4b0a8398883cbb7c110ec",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "7e28d32e2cb56202e8ab1dce3097cf27",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_white.png": "67f79393f90a50eece90f5a13e167c97",
"assets/assets/weather_sticker/weather_icon_vector/%25EC%2595%2588%25EA%25B0%259C.svg": "3a9c3cb25b499b5a29bb7aff2e54d9e0",
"assets/assets/weather_sticker/weather_icon_vector/%25EC%2586%258C%25EB%2582%2599%25EB%2588%2588.svg": "193f3cf5633d8a58a7f7941ccff27995",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%25B9%2584.svg": "a80357ea43b6892584893e73eebf4921",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588.svg": "8faf0250128a2f7a085df5d42b79c84d",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584.svg": "42adf42cfdcc21054a37a046851cd58b",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%25A7%2591%25EC%259D%258C.svg": "caceb5a633a1fdb891482657f2993fb2",
"assets/assets/weather_sticker/weather_icon_vector/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588.svg": "a7c7eaaeb15ddf4e622ecf6570ef57ba",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0.svg": "15dbb95fec8363cb1d03df6073427654",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%2588%2588.svg": "766a0349d76d49ee5caa94a9cf0a5e1a",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A7%2590.svg": "3db5fb44d4d91bc4afd2606bfc339438",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A6%25BC.svg": "25341288ad79c193254d9ce7335b5bb3",
"assets/assets/weather_sticker/weather_icon_vector/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC.svg": "eaa60484045f82509fe7a1462e28b8ae",
"assets/assets/weather_sticker/weather_icon_vector/%25EA%25B5%25AC%25EB%25A6%2584%25EB%25A7%258E%25EC%259D%258C.svg": "4b45294807155a52203dc9c49852b93a",
"assets/assets/weather_sticker/weather_icon_vector/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC.svg": "d29dc8ce6eb85a964731440ba3afd702",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "14b5caf187a8ab6269939cb390f7ed26",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%25B9%2584_B_color.png": "e3cc4b444cda85c66692b99cbe13b2c6",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25BC_A_black.png": "edd8b8c5803557f3f904757b703e783a",
"assets/assets/weather_sticker/%25EB%25A7%2591%25EC%259D%258C_B_color.png": "9f35d886ec2ad83f477064fada05a3cf",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2587%258C%25EC%259A%25B0_B_color.png": "39615e38f20bfe2c2bda3f6803a6d3d2",
"assets/assets/weather_sticker/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC_B_color.png": "7a3dfb17bb1d3792ca7aa013a038b907",
"assets/assets/weather_sticker/%25EA%25B5%25AC%25EB%25A6%2584%25EC%25A1%25B0%25EA%25B8%2588_A_white.png": "56f39d5c9cf56d75a3a3694fa205cff6",
"assets/assets/weather_sticker/%25EB%2588%2588%25ED%259B%2584%25EA%25B0%25AC_A_white.png": "a340a70310770ae21e5f91f877d8147a",
"assets/assets/weather_sticker/%25EB%2587%258C%25EC%259A%25B0_B_color.png": "6be4b6ed37ced83e21ffa336e8581da0",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A0%25A4%25EC%25A0%25B8%25EB%2588%2588_B_color.png": "bcee3cc460078ed7b2633bb9d418d32d",
"assets/assets/weather_sticker/%25EB%2588%2588_A_black.png": "9c461ab2640949beb155ddf88d6e883d",
"assets/assets/weather_sticker/%25EB%25A7%2591%25EC%259D%258C_A_black.png": "d43a291b593b382ad27a63b0bab72c70",
"assets/assets/weather_sticker/%25ED%259D%2590%25EB%25A6%25B0%25ED%259B%2584%25EA%25B0%25AC_A_black.png": "eae9f05df9e6d9b2a8554cc220569074",
"assets/assets/weather_sticker/%25EC%25A7%2584%25EB%2588%2588%25EA%25B9%25A8%25EB%25B9%2584_A_black.png": "c2f96c74525cd0e4f9289f59261feda5",
"assets/assets/delete.svg": "290daba2785fb1146c928c8b3d3a7762",
"assets/assets/creta-digital-art.png": "83bda569ea3be2963ccf76775a95f5d5",
"assets/assets/google_map_thumbnail.png": "6689eb0847c91729f997d38e1f60e99f",
"assets/assets/tipImage-2-3.png": "5aea6da297886bdb6e8633854645fa9f",
"assets/assets/audio/canone.mp3": "612aaebc9bee5a51e35d0801a9ce338f",
"assets/assets/tipImage-1-1.png": "fe0ec67588b071f5b7980c4d88c2efd7",
"assets/assets/word_BG.jpg": "2252e6116841144504665a55df7fb766",
"assets/assets/cardInsert.jpg": "c1dac7a3f0e02a7c99bea423a8d684aa",
"assets/assets/tipImage-2-4.png": "7ad6eed05d40d74e2d4ca544ad87b963",
"assets/assets/music-big.png": "f3f4914a2fa8203e27ab3aae2555b41e",
"assets/assets/creta-printmaking.png": "f82315d66f95eec8c60a08e967dfe925",
"assets/assets/creta-popart.png": "7d12a7faf31326e9250b79c8767254aa",
"assets/assets/music-visualizer.gif": "293e950ca3eecf8dd851cf9a3b4f2a4f",
"assets/assets/creta-watercolor.png": "7aceb96c30dc503ac48240d9b7e5fedf",
"assets/assets/tipImage-2-2.png": "9983ccb385d7ddf1ae5740768fe8b4bd",
"assets/assets/creta_logo_blue.png": "bafadae9d8eddb17987e77ba49c0d13b",
"assets/assets/landing_page/image/guide_4.png": "8a39f26798a928307607f361b43ac13b",
"assets/assets/landing_page/image/text_effect_4.png": "1f171d7610dd5277d35f630318e736a2",
"assets/assets/landing_page/image/arrow_1.png": "db9fff61674c0fd91e38b81ed38f0dac",
"assets/assets/landing_page/image/guide_2.png": "77bfbd8dc6ac99b0d180a98e91976378",
"assets/assets/landing_page/image/creta_animation_logo2.png": "57db1db4c75c15fa4dc8e46498a8a16e",
"assets/assets/landing_page/image/text_effect_1_big.png": "c4672a6ebf7fa27bd7ea8f0042beb48c",
"assets/assets/landing_page/image/creta_animation_logo.png": "3e966207a8fbc57072fe480cda785842",
"assets/assets/landing_page/image/text_effect_1.png": "9e4be30c6be2450f8aac3e6f5ffb722e",
"assets/assets/landing_page/image/text_effect_2.png": "c763236076ed499513feccb4d868139a",
"assets/assets/landing_page/image/guide_1.png": "a8192d8c6c2b7ea3f23f28ac15573ffe",
"assets/assets/landing_page/image/promotion_1.png": "df844de8868ecdc460d76a962b3fb9b0",
"assets/assets/landing_page/image/promotion_2.png": "b74da2fc09be8fbd0e3e42795068858b",
"assets/assets/landing_page/image/text_effect_2_eng.png": "637522da498b51dc2baed667c1fdf4b2",
"assets/assets/landing_page/image/arrow_3.png": "874b1cc1263e1f7116268cb25a01ffa4",
"assets/assets/landing_page/image/guide_3.png": "350896d2888ed3c779140f04e87eb322",
"assets/assets/landing_page/image/promotion_4.png": "5e634750297befd5742859ccf84b1246",
"assets/assets/landing_page/image/text_effect_3.png": "8631caf55874758b982d55f55d158b80",
"assets/assets/landing_page/image/promotion_3.png": "fd70c55b5a5f976efeee499360ed245a",
"assets/assets/landing_page/image/banner/banner_bottom8.png": "272ca990a6b6317f85ff75709c515524",
"assets/assets/landing_page/image/banner/banner_bottom6.png": "2f0f68a714570c21a31265b83e331d1d",
"assets/assets/landing_page/image/banner/banner_top4.png": "9b39e25eb4924675a973f68327704836",
"assets/assets/landing_page/image/banner/banner_top8.png": "2f304d9d3000c9a25bd115424f09d58c",
"assets/assets/landing_page/image/banner/banner_bottom11.png": "db3c8649d8e232d93cda4e2df0c3b81a",
"assets/assets/landing_page/image/banner/banner_bottom3.png": "6890fce9bfba93a810de6e2ce51123c1",
"assets/assets/landing_page/image/banner/banner_bottom10.png": "de6e8a67784ab81edbdcd781fa06ef39",
"assets/assets/landing_page/image/banner/banner_top11.png": "c95da6bfe157f146d99d46dab333241e",
"assets/assets/landing_page/image/banner/banner_top7.png": "ba8b43bfce2d8d92f101c9be639f18ee",
"assets/assets/landing_page/image/banner/banner_bottom5.png": "5ff4dae4f087145afbf2547f60d5ae39",
"assets/assets/landing_page/image/banner/banner_top6.png": "c6998703f00cfa87c62575561823f84d",
"assets/assets/landing_page/image/banner/banner_bottom4.png": "a3fb853497c5d9c80d7f62bd10eb7e20",
"assets/assets/landing_page/image/banner/banner_top3.png": "413e3447ca722ad062dce9f0e1693b93",
"assets/assets/landing_page/image/banner/banner_top1.png": "eaca652e85e44cb5534eca8f35986ba0",
"assets/assets/landing_page/image/banner/banner_top9.png": "d63face19ec8f3ddab8a1d2a5959e95a",
"assets/assets/landing_page/image/banner/banner_bottom2.png": "3a45f762dcef4ba915cb27feba7a8a43",
"assets/assets/landing_page/image/banner/banner_top10.png": "4d1202fdc7166fc68038dd60a50b90e6",
"assets/assets/landing_page/image/banner/banner_bottom7.png": "43bfd49f01178a8ad700e32b71951feb",
"assets/assets/landing_page/image/banner/banner_bottom12.png": "00aa1b934e696988d1011b8ac2f83caf",
"assets/assets/landing_page/image/banner/banner_bottom1.png": "6d9f035f0c5a27fc6d032725b7b79447",
"assets/assets/landing_page/image/banner/banner_top2.png": "2ec9dce79c891ad9283879bc1615dbd9",
"assets/assets/landing_page/image/banner/banner_top5.png": "c788333884e98c8796afb20c9fcf5669",
"assets/assets/landing_page/image/banner/banner_bottom9.png": "ef9301b6f49a741ff2cefff27734f1e1",
"assets/assets/landing_page/image/arrow_2.png": "35d1cc4ef4d9fbab7aa239d901ec260f",
"assets/assets/landing_page/video/signage_animation.mp4": "9c899acdbd3c8e021ae532aab11d0099",
"assets/assets/landing_page/video/quick_start_animation.mp4": "334ede4a20c15b729b1bde648883632e",
"assets/assets/landing_page/video/community_animation.mp4": "246fad328b0a14ced5490051307afb9e",
"assets/assets/landing_page/video/presentation_animation.mp4": "87069423be95d9a64a984760e6d2fb0f",
"assets/assets/timeline_samples/deliveryHoriz_timeline.png": "85c4ee935ed067850a818acfd638d4fa",
"assets/assets/timeline_samples/football_timeline.png": "da52f447fd3d6c607fd8b0fd0605fa17",
"assets/assets/timeline_samples/showcase_timeline.png": "68cff3b5821c0ab6276f126bc143eac8",
"assets/assets/timeline_samples/success_timeline.png": "f8bd2e3e9083f9500d7ec3be1f29cbff",
"assets/assets/timeline_samples/monthHoriz_timeline.png": "f3429a94606006f19c009a15c123d7cc",
"assets/assets/timeline_samples/appHoriz_timeline.png": "2faff4f6621b6f2bdfd3dd43eab93135",
"assets/assets/timeline_samples/timeline_thumbnail.jpeg": "72d6787dbcc75638209e72db0dab4326",
"assets/assets/timeline_samples/activity_timeline.png": "c42cb377f4c13820bb7f87dbea14b045",
"assets/assets/timeline_samples/weather_timeline.png": "0ca829652edc0d4abd7eb0132dd243c1",
"assets/assets/timeline_samples/delivery_timeline.png": "323382ba6c7ab2e379d616b8c35b9a88",
"assets/assets/smallSize_music_app.png": "918b32144e26ff55e11eaa9aabe4dd57",
"assets/assets/Artboard12.png": "655c617ccccee30943e0f8607ec6af5e",
"assets/assets/creta-sketch.png": "b9b7da2f7c1156c1673ab753d53fb918",
"assets/assets/grid.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/assets/creta-orientalpainting.png": "74332d0ead5fcb395e52c1d5c8f7b81a",
"assets/assets/google__g__logo.svg": "ea735e62c31af39012853c932d74375a",
"assets/assets/hycop_config.json": "ec3bf137aa43c4ed39748ce109c53307",
"assets/assets/tipImage-2-1.png": "b17e6a723043acab6c4cc0675c1ba1f6",
"assets/assets/logo_en.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/assets/social/kakaotalk.png": "29cfc3f569f9f81265f02aa1051e370a",
"assets/assets/social/youtube.png": "483aff5036fe78e3a7361ed739f9c63c",
"assets/assets/social/tiktok.png": "a504231881a185b1a463744abdd43d0f",
"assets/assets/social/kakaostory.png": "b063a980de47834fef8594ff1a250b19",
"assets/assets/social/line.png": "f1214c1d71725bffd39f3f924924c7d9",
"assets/assets/social/twitter.png": "6a17dedb51322e31156edf50ae85a254",
"assets/assets/social/instagram.png": "d65ff3d06682717ce3fd0badb0f8347a",
"assets/assets/social/reddit.png": "338024f972e6f39cd60d867c822483eb",
"assets/assets/social/linkedin.png": "ab00f6fd1950939f067d6e309b82767b",
"assets/assets/social/pinterest.png": "fa9e7d9fba1c59a98109b3758631617f",
"assets/assets/social/facebook.png": "a8c672ecb67d3f99ae0852f586ac3e22",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/escalator.png": "c5e925068f94e4a70c571214b52e97db",
"assets/assets/icons/signage.png": "951f0b9ad9e2ad1c560817b3e47d6c51",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/presentation.png": "3dd685914c0a3b5836b1ebdd5a41a2f9",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/etc.png": "648cd670bda11686277add32acb4c5a8",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/board.png": "e8c501a54e890892742f2ba1c1f3de7d",
"assets/assets/icons/barricade.png": "2d1e4104e3bcfa74d78f4d131a78b600",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/cdu.png": "4fba737e5b438cfc052aaa570151c7c8",
"assets/assets/creta-drawing.png": "9be6ecdc86b6240b23d97bdae7d6505a",
"assets/assets/icon.png": "cc9b97397cc141085df80ea3d8e054af",
"assets/assets/webView.png": "b17ccbcd1683c2a3b67f79ccff7b789a",
"assets/assets/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/assets/bigSize_music_app.png": "faa423266392e103a263df543e4f724b",
"assets/assets/creta-outlinedrawing.png": "9a6f7953d9260f91c7c6ef1a079a921a",
"assets/assets/music-visual-small.png": "acde009ee2812e8558df19cca2ca9074",
"assets/assets/bgd.png": "2ba4ce62fad06d5ad2259bd5ea27a4b1",
"assets/assets/music-med.png": "b3185c64d2bb66db0f5989c745b53bed",
"assets/assets/music-visual-big.png": "7b7600d90cd42b7a27f2321e04997ff4",
"assets/assets/no_image.png": "05434b1b716ba721f3015a2393b9fe80",
"assets/assets/creta-crayon.png": "8b1a33d2be10dec9a95ff7bd76057a2f",
"assets/assets/creta-photo.png": "484dae169f5f9d46acc241b380853e26",
"assets/assets/creta-oilpainting.png": "efa3012c06d044af70dae8d29abc57c4",
"assets/assets/tipImage-1-3.png": "e87acefb77b521ee366b127cb94ade72",
"assets/assets/music-small.png": "d597b7a7e30c56cdb762daf209e2fdf0",
"assets/assets/creta-illustration.png": "cdd42fa516bcd3647e12b7d7df3cefc3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
