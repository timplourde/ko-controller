
var ListView = function(params) {
    console.log("ctor ListView", params);
    this.name = "LIST";
    this.items = [123,456,789];
    this.dispose = function() {
        console.log("disposing list");
    }
};

var DetailsView = function(params) {
    console.log("ctor DetailsView", params);
    this.name = "DETAILS: ITEM #" + params.itemId;
    this.dispose = function() {
        console.log("disposing details");
    }
};

var MyApp = function() {
    this.controller = new KnockoutController({
        transitionDelayMs: 300,
        views: [{
            name: "list",
            componentConfig: {
                viewModel: ListView,
                template: {element: "list-view"}
            },
            routes: ["/items"]
        },{
            name: "details",
            componentConfig: {
                viewModel: DetailsView,
                template: {element: "details-view"}
            },
            routes: ["/items/:itemId"]
        },
        {
            name: "404",
            componentConfig: {
                template: {element: "not-found"}
            }
        }
        ],
        defaultView: {
            name: "list",
            params: {}
        }
    });
};

var app = new MyApp();
ko.applyBindings(app);