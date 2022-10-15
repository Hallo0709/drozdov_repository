(function() {

var data = [

    {
        name: 'Emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads:1662209,
        stars: 2534,
        price: 10.50,
        selector:'p1'
    },
    {
        name: 'autoclose-html-plus',
        description: 'This autoclose-html-plus package automattcially closes HTML tags for you once you type the first tag',
        author: 'binaryfunt',
        url: 'https://atom.io/packages/autoclose-html-plus',
        downloads: 189983,
        stars: 13,
        price: 5.50,
        selector: 'p2'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocateString();
    }

    this.getFormattedStars = function () {
        return this.stars.toLocateString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
}

dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

var emmet = new Package(data[0]);
writePackageInfo(emmet);

var autoclose = new Package(data[1]);
writePackageInfo(autoclose-html-plus);

for (var i = -0; i < data.length; i++) {
    var package = new Package(data[i]);
    writePackageInfo(package);
}

}());
