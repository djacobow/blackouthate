
var default_config = {
	"run_info": {
		"count": 5,
		"startTimeout": 1000,
		"timeMultiplier": 1.8,
		"maxTimeout": 12000
	},
	"actions": {
		"tarrant": {
            "match_style": "background-color: black; color: black",
			"monikers": ["XXXXXXX"],
            "find_regex": ["((Brenton|BRENTON)\\s)?((Harrison|HARRISON)\\s)?(Tarrant|TARRANT)(?!\\w)", "g"],
		}
	},
};


var defaults = {
    // classname for all insult styles
    insult_cssname: 'span.blackedout',
    insult_classname: 'blackedout',

    // run on any page or just whitelist
    site_filter: 'use_whitelist',

    // use the mutation approach or timer approach
    track_mutations: false,

    // some pages never to run on
    user_blacklist: "mail.google.com mail.yahoo.com",

    // some pages to run on
    user_whitelist: [
        "www.foxnews.com", "cnn.com", "www.bbc.com/news",
        "www.bbc.co.uk/news", "www.theguardian.com", "www.theguardian.co.uk",
        "nytimes.com", "facebook.com", "washingtonpost.com", "salon.com",
        "slate.com", "buzzfeed.com", "vox.com", "huffingtonpost.com",
        "wsj.com", "economist.com", "latimes.com", "dallasnews.com",
        "usatoday.com", "denverpost.com", "insidedenver.com", "philly.com",
        "chron.com", "detroitnews.com", "freep.com", "boston.com",
        "newsday.com", "startribune.com", "nypost.com", "ajc.com", "nj.com",
        "sfgate.com", "sfchronicle.com", "azcentral.com", "chicagotribune.com",
        "cleveland.com", "oregonlive.com", "tampatribune.com",
        "signonsandiego.com", "mercurynews.com", "contracostatimes.com",
        "insidebayarea.com", "feedly.com", "reddit.com",
        "drudgereport.com", "theblaze.com", "breitbart.com","ijreview.com",
        "newsmax.com", "wnd.com", "dailycaller.com", "washingtontimes.com",
        "nationalreview.com", "townhall.com", "freerepublic.com",
        "pjmedia.com", "hotair.com", "cnsnews.com", "westernjournalism.com",
        "washingtonexaminer.com", "tpnn.com", "newsbusters.org",
        "twitchy.com", "news.google.com", "npr.org", "cnbc.com", "reuters.com"
    ].join(' '),
};
