/* jshint esversion:6 */

var names = [
'Tarrant, Brenton Harrison',
'Lahouaiej-Bouhlel, Mohamed Salmene',
'Breivik, Anders Behring',
'Mateen, Omar Mir Seddique',
'Masharipov, Abdulkadir',
'Yacoubi, Seifeddine Rezgui',
'Ibragimov, Ahmed',
'Farooq, Ashraf Ali Mohammed',
'Morral Roca, Mateu',
'Goldstein, Baruch Kappel',
'Abbas al-Baqir Abbas',
'Fieschi, Giuseppe Marco',
'Kurbanjan Hemit',
'Abdurahman Azat',
'Farook, Syed Rizwan',
'Malik, Tashfeen',
'Lardanchet, Jean-Pierre',
'Friedli, André',
'Amri, Anis Ben Othman',
'Kouachi, Saïd',
'Kouachi, Chérif',
'Bowers, Robert Gregory',
'Kulikbayev, Ruslan Alpysbayuly',
'Tha\'ir Kayid Hamad',
'Sarkissian, Zohra',
'Zhou Lanpu',
'Essex, Mark James Robert',
'Roof, Dylann Storm',
'Strydom, Barend Hendrik',
'Punchi Banda Kandegedera',
'Wang Xiwen',
'Popper, Ami',
'Merah, Mohammed',
'Smith, Roland James',
'Kariyev, Maksat Kokshkinbaevich',
'Omar Rub',
'Yousef Rub',
'Abdul Salaam Sadek Hassouneh',
'Ferguson, Colin',
'Bissonnette, Alexandre',
'Melod Najah',
'Uday Abu Jamal',
'Ghassan Muhammad Abu Jamal',
'Page, Wade Michael',
'Shadi Sa\'id as-Su’ayida',
'Da\'oud al-Haj',
'Tsarnaev, Dzhokhar Anzorovich',
'Tsarnaev, Tamerlan Anzorovich',
'Talal Khantourah',
'Masood, Khalid',
'Ansari, Aftab',
'Nasir, Jamiluddin',
'Ahmed Jassim Ibrahim',
'Coulibaly, Amedy',
'Johnson, Micah Xavier',
'Chekatt, Chérif',
'Shuja al-Dosari',
'Elosegi, José Javier Zabaleta',
'Irujo, Juan María Tapia',
'Lakdim, Redouane',
'Natan-Zada, Eden',
'Nel, Johan',
'Khalid al-Mahmara',
'Muhammad Ahmad Moussa Mahmara',
'Stone, Michael',
'Ibrahim Mohammed Hasuna',
'Lortie, Denis',
'Ibrahim al-Akri',
'Dear, Robert Lewis',
'Marwen Hasan',
'Hesham Mohammed Rajeh',
'Raed Muhammed al-Rifi',
'Hatem Shweikeh',
'Princip, Gavrilo',
'Čabrinović, Nedeljko',
'Saeed Ibrahim Ramadan',
'Smith, Benjamin Nathaniel',
];


var make_default_config = function(namelist) {
    var o = {
	    run_info: {
		    count: 5,
		    startTimeout: 1000,
		    timeMultiplier: 1.8,
		    maxTimeout: 12000
	    },
        actions: {},
    };

    namelist.forEach((name) => {
        var bycomma = name.split(/,\s/);
        var sur = null; 
        var therest = [];
        if (bycomma.length == 2) {
            sur = bycomma[0];
            therest = bycomma[1].split(' ');
        } else {
            byspace = name.split(' ');
            sur = byspace.slice(-1)[0];
            therest = byspace.slice(0,-1);
        }


        var first = null;
        var middles = [];
        if (therest.length > 1) {
            first = therest[0];
            middles = therest.slice(1);
        } else if (therest.length) {
            first = therest[0];
            middles = [];
        }

        var re_chunks = [];

        if (false) {
            console.log('first',first);
            console.log('middles',middles);
            console.log('sur',sur);
            console.log('therest',therest);
            console.log('----');
        }

        if (first) {
            re_chunks.push(["((",first,'|',first.toUpperCase(),')\\s)'].join(''));
        }
        if (middles.length) {
            middles.forEach((middle) => {
                re_chunks.push(["((",middle,'|',middle.toUpperCase(),')\\s)?'].join(''));
            });
        }
        if (sur) {
            re_chunks.push(["(",sur,'|',sur.toUpperCase(),')(?!\\w)'].join(''));
        }

        var action = {
            default_enabled: true,
            match_style: "background-color: black; color: black",
			monikers: ["XXXXXXX"],
            find_regex: [re_chunks.join(''), 'g'],
        };
        o.actions[sur] = action;
    });
    
    return o;
};

var default_config = make_default_config(names);

// console.log(JSON.stringify(default_config,null,2));

var defaults = {
    // classname for all insult styles
    insult_classname: 'blackedout',

    // run on any page or just whitelist
    site_filter: 'use_whitelist',

    // use the mutation approach or timer approach
    track_mutations: false,

    // should we try to replace images?
    replace_images: false,
    //
    // some pages never to run on
    user_blacklist: "mail.google.com mail.yahoo.com",

    // some pages to run on
    user_whitelist: [
	    "www.foxnews.com", "cnn.com", "www.bbc.com/news",
	    "www.bbc.co.uk/news", "www.theguardian.com",
	    "www.theguardian.co.uk", "nytimes.com", "facebook.com",
	    "washingtonpost.com", "salon.com", "slate.com", "buzzfeed.com",
	    "vox.com", "huffingtonpost.com", "wsj.com", "economist.com",
	    "latimes.com", "dallasnews.com", "usatoday.com", "denverpost.com",
	    "insidedenver.com", "philly.com", "chron.com", "detroitnews.com",
	    "freep.com", "boston.com", "newsday.com", "startribune.com",
	    "nypost.com", "ajc.com", "nj.com", "sfgate.com",
	    "sfchronicle.com", "azcentral.com", "chicagotribune.com",
	    "cleveland.com", "oregonlive.com", "tampatribune.com",
	    "signonsandiego.com", "mercurynews.com", "contracostatimes.com",
	    "insidebayarea.com", "feedly.com", "reddit.com",
	    "drudgereport.com", "theblaze.com", "breitbart.com","ijreview.com",
	    "newsmax.com", "wnd.com", "dailycaller.com", "washingtontimes.com",
	    "nationalreview.com", "townhall.com", "freerepublic.com",
	    "pjmedia.com", "hotair.com", "cnsnews.com",
	    "westernjournalism.com", "washingtonexaminer.com", "tpnn.com",
	    "newsbusters.org", "twitchy.com", "news.google.com",
	    "npr.org", "cnbc.com", "reuters.com"
    ].join(' '),
};
