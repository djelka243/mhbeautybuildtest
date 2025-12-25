'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b28a322d0e27091e37c5bf626e422a8e",
"version.json": "1849aae0babe16a02172d542e1459bc5",
"splash/img/light-2x.png": "5cf9cb8cb4c3435c0c2daefa84836ba4",
"splash/img/dark-4x.png": "208741532f49138fbb3617fd5d856586",
"splash/img/light-3x.png": "70f399c6e08678670b418efd10dfc50f",
"splash/img/dark-3x.png": "70f399c6e08678670b418efd10dfc50f",
"splash/img/light-4x.png": "208741532f49138fbb3617fd5d856586",
"splash/img/dark-2x.png": "5cf9cb8cb4c3435c0c2daefa84836ba4",
"splash/img/dark-1x.png": "b41cdbe9ad377ec6f2ec914d62865b43",
"splash/img/light-1x.png": "b41cdbe9ad377ec6f2ec914d62865b43",
"index.html": "eb7f1674823017d213e7101c23454215",
"/": "eb7f1674823017d213e7101c23454215",
"main.dart.js": "367ec7b8906517ee086b2628aeafade5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "a1d8521ee14685e492e1445ff79be8db",
"icons/Icon-192.png": "8f624678e0dc9d4e7c36b0636ef08b57",
"icons/Icon-maskable-192.png": "8f624678e0dc9d4e7c36b0636ef08b57",
"icons/Icon-maskable-512.png": "51eb72dead53f014b6959192aad28d4d",
"icons/Icon-512.png": "51eb72dead53f014b6959192aad28d4d",
"manifest.json": "6c495e70435817cb2a4929dba0e70ec5",
"docker-compose.yml": "a9c0144a6ba934ee8df84c6529ed7e97",
".git/config": "bd2a73d6ac70ac72942c4087deb0a486",
".git/objects/92/2d3f90cb5961041c239f6c5a35407822f05c6b": "de7c1f4e967918a5353fb1472e7a7843",
".git/objects/0c/f78883fea2ea4462cbfe0ccfbfbaed17755b2e": "741a3754c80f34f87c824ff72499057b",
".git/objects/50/956ddba0b65bc675adf0dc9a2b23851e865187": "8af2857f30263c2c7ba6286b061e1bbe",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/e397e1575bf71996d42bb3b69dcbc34510d7d0": "107e2570bc3967b2d9bc05f4885b6b87",
".git/objects/6a/e4e00275ab315d1503ecb6a788c508a8114ec9": "7f0c6517dbde7908b87ef95e9322128a",
".git/objects/6a/aabb218c241da78db656a0129c391ad4aca36b": "cc73e2adbec3a64e250a04aa1cc5cf7f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/da58a1d3b7ce2844a4d1c9811e9dd78e834901": "6f058d467f0861ecb9f21264803730b9",
".git/objects/d8/98f6b782b1fb1bb4acf3a4376a86e249419f8b": "aa7fa4ffbfd588779ae4b0ff52964571",
".git/objects/f4/e1e449c0f053c6a0260ef301945e97ebee5ea3": "d06bfb164e960bc994e13ca77399fe45",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/18/d354656c9cd6ff98180a8fbf191c8c7d4d2400": "ab8add177d5491b387822f0f8656bb92",
".git/objects/4b/7b9d8fe55cf7a6ea2f3545e2e85afa4d9995a5": "753a464a79edff58585778a35fbc39b8",
".git/objects/7d/e526ef8106a2bb89e7a339eab8ced7fc4927fe": "d4b4e9a90fb7df89d0a03bf33a8115fa",
".git/objects/1f/04bcd9dd03a2f89af82163e7ab1d82f6182541": "597ff552a909edb7e260429f83e65e83",
".git/objects/80/7c720e5e34a32411b147148fbcaf99a4f9f6a7": "a33156be6173e1eb22771760ab2bf094",
".git/objects/1a/55c63cc3ce4745a001d9f01ab896901693a86b": "35a49d6adcbd4c1cca536480d1c158c2",
".git/objects/28/bc37fc2072cc9846132ec1a8849952c955d48b": "26a47d3735f3556f0d64cc19cbc94f57",
".git/objects/7b/d791b288a16b5860a5b7929f32eeca4b49a939": "e544b3e896a92468fc40efee2d594f49",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7d0bd0a4ef6caf70ef68bc029cca9241144d55": "8b13ff3fb86b32f5fa3f1614b78f1aa1",
".git/objects/86/d320d0664461e7cc3f177af9491779e998b6a8": "45be4ac6d115c1c8ae88a10cf47b4359",
".git/objects/72/dce6591c5b8e8d90fe99b7447970a3c35a814b": "a38a3c491c5a82637fe0a5893d32402e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5c/443a45ef7aafaeddc850b8121b1c3e0d20de28": "d92cd539eee0484ce5550702fd9f4e25",
".git/objects/09/005dddbb52b6afb105f01a3bb34813722d01a3": "9ace2fb26bd24c9947c0167238329908",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3a/624dbc007df39cde5cc8308c3664d9aa29535b": "eca69cec18c7aa5fa9290a09994586d0",
".git/objects/3f/a92eae9350f6f6fe1ed7584be8c5dff2f72684": "c16490c483bf7a51ef9b3d10e6dda774",
".git/objects/30/29d465b027ce47bc875bd20074e19fcd6bdfd9": "e691bd3a40f4843ae7f79bac75698345",
".git/objects/5b/2df44b190d71fc45dcd6b068c67c8b2c0da655": "7e6a1b191737172dfba672e9f7647b0b",
".git/objects/97/d8204299c96f830762c79fc27e7d1f161a7b21": "5c56018da96f420f19cea8f6d7fcc974",
".git/objects/97/5a503429525d4740951cae9261fc0c568a3e68": "958dd58b2f312afe0dd19224373167a0",
".git/objects/0f/49655bab5de430fd6916123c2e219f06bf5450": "3eb647230bb2604783bddbb861f720d3",
".git/objects/64/9bd9475535f6ed483c20c936277f9a2e395ba5": "d48ac2e121a93394f1e5fe314a83683c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/f9f1fa907d0f96d424e108956a10cfc81dde73": "bf0cff7c4ae1a125982bedbff7fc46fa",
".git/objects/a0/d3865a1dc5c0eddae25cb39e133ea098931bac": "0cd7e4790c20ae7c953846b140f160af",
".git/objects/af/68065e6a63748716e75862d49097a9acce2cf6": "27d98ec018958d4f3cdfe0df839ea522",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/1abcf5f11d3d1ea4d56b3a3c502a43d778002c": "66d0f6744fef12645a957cc94efb07be",
".git/objects/b0/83adf031694dfb366be7edbeed4277a80f2eb3": "9742f2139376ab530a34c8cc5ccb8dba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/c15d1d53f2987c9d09ab923d7d859dc378258a": "30cae46da91c16ce5b15e697421cf1c6",
".git/objects/c2/9d568a8c74c6a25445209cccf3393bebd04bce": "9995142ed912cd25b3c1132d937a4a15",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/022471d4e70d24fac2c062b510492f17ee0b1e": "9117eb7f5c613a334a87dcac6e88f4d1",
".git/objects/cb/0b3aef7bb54dc26fb544a5bb570a1f9cb75004": "4c5675b7320244aefda7133050832ba3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/71d08c92d1d219b334d066cba70de23396cdd7": "df626366093e939d0d74ab0014b2b204",
".git/objects/77/40b9b2f4f56b42921091f6465549ca01bf5165": "715fe681aa42e4c33812e60fb915e530",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1d/85b6e126414dc132ca6cc77905d655b2daceda": "3e9a563190a7a91a2f2b38982e414b84",
".git/objects/82/e06e819901d95c5c51ab58d8076be25c7b58a4": "317aae5ff53e8c3f5bfd14cece743e0e",
".git/objects/82/f1c95fe62c5a61dd54b71bfd31f58bc2381a38": "9bc0ca94043cd2b22e05d20de583ca08",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7f/3a8ad501fdcb5c5aec648a935298242d616f5b": "f35fae690e180c343a618bb0ca6504d2",
".git/objects/7a/6da1a38250690c457efab87741c488c08df794": "93489f40eebb1e9037d5914ad180659d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "262d0f49825eb8eb031672611b7451b4",
".git/logs/refs/heads/main": "4598114edf090c7f4251bec338fd0e47",
".git/logs/refs/remotes/origin/main": "6b5d041d3cb64ac9691279aa7b4d9fa5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "700d1269db529f75ea3a8c729b1e77d1",
".git/refs/remotes/origin/main": "700d1269db529f75ea3a8c729b1e77d1",
".git/index": "21107c1a8de2f318c38f454ee8685413",
".git/COMMIT_EDITMSG": "7be51cbe024aadc5b5acf3af33f52091",
"assets/AssetManifest.json": "1fa7a7211bc2a024fff62947fa52e505",
"assets/NOTICES": "5ddbafc2c1598d75f7907d8fbe5bc782",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7da513b3cdc6b2e50af97913f426b2d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "aba5d8a9b7121eaa9f2f7a57e493e9ce",
"assets/fonts/MaterialIcons-Regular.otf": "53f544d10f5f9bea4936c27304b843e3",
"assets/assets/images/logo.png": "6c676a44708e8324f0ea3021cb418a8b",
"assets/assets/images/4.jpg": "7984d76fa4f37f9e068369201fcaa8c6",
"assets/assets/images/2.png": "728bcb6e5b7fa6f4c14a3032bf1675fb",
"assets/assets/images/3.png": "4ab60bf7602961908712994d7b9d6446",
"assets/assets/images/1.png": "9b7267742cf3041c51a7b803559a7f39",
"assets/assets/offline2W.json": "591f3698bfee70773c51df477d94624f",
"assets/assets/eng.png": "a7e48ec15a4a58f21a1a78c23bc767e5",
"assets/assets/offline2B.json": "d7a9608dd2c766cdc72697852054a4e0",
"assets/assets/france.png": "4425e41c54acd7a97ae92357dc9f1a3a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
