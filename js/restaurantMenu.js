$(document).ready(function() {
    //Variables
    var selectedStarter = {
        dish: "(None)",
        price: 0
    };
    var selectedMain = {
        dish: "(None)",
        price: 0
    };
    var selectedDessert = {
        dish: "(None)",
        price: 0
    };
    
    var starter = {
        firstDish: "Salad",
        firstDishPrice: 15,
        secondDish: "Soup",
        secondDishPrice: 7,
        thirdDish: "Fish rolls",
        thirdDishPrice: 12
    };

    var main = {
        firstDish: "Steak",
        firstDishPrice: 17,
        secondDish: "Salmon",
        secondDishPrice: 12,
        thirdDish: "Rissotto",
        thirdDishPrice: 9
    };

    var dessert = {
        firstDish: "Sorbet",
        firstDishPrice: 4,
        secondDish: "Fruit salad",
        secondDishPrice: 6,
        thirdDish: "Apple pie",
        thirdDishPrice: 5
    };

    function total() {
        return selectedStarter.price + selectedMain.price + selectedDessert.price;
    }

    function selectedStarterFnc(dish, price) {
        selectedStarter.price = price;
        selectedStarter.dish = dish;
        $("#total").html(total());
        return dish + "(" + price + ")";
    }

    function selectedMainFnc(dish, price) {
        selectedMain.price = price;
        selectedMain.dish = dish;
        $("#total").html(total());
        return dish + "(" + price + ")";
    }

    function selectedDessertFnc(dish, price) {
        selectedDessert.price = price;
        selectedDessert.dish = dish;
        $("#total").html(total());
        return dish + "(" + price + ")";
    }

    // Instantiating HTML Button Elements
    // Starter Elements
    document.getElementById("btStarter1").value =
        starter.firstDish + ": " + starter.firstDishPrice;

    document.getElementById("btStarter2").value =
        starter.secondDish + ": " + starter.secondDishPrice;

    document.getElementById("btStarter3").value =
        starter.thirdDish + ": " + starter.thirdDishPrice;

    // Main Elements
    document.getElementById("btMain1").value =
        main.firstDish + ": " + main.firstDishPrice;

    document.getElementById("btMain2").value =
        main.secondDish + ": " + main.secondDishPrice;

    document.getElementById("btMain3").value =
        main.thirdDish + ": " + main.thirdDishPrice;

    // Dessert Elements
    document.getElementById("btDessert1").value =
        dessert.firstDish + ": " + dessert.firstDishPrice;

    document.getElementById("btDessert2").value =
        dessert.secondDish + ": " + dessert.secondDishPrice;

    document.getElementById("btDessert3").value =
        dessert.thirdDish + ": " + dessert.thirdDishPrice;

    // Your Order: Elements
    document.getElementById("selectedStarter").innerHTML =
        selectedStarter.dish + " (" + selectedStarter.price + ")";

    document.getElementById("selectedMain").innerHTML =
        selectedMain.dish + " (" + selectedMain.price + ")";

    document.getElementById("selectedDessert").innerHTML =
        selectedDessert.dish + " (" + selectedDessert.price + ")";

    // Functions (JQuery)
    // Main menu onClicks handler
    $("#btMenu").click(function() {
        $("#liMainMenu").toggle("slow");
    });

    $("#btStarter").click(function() {
        $("#liStarter").toggle("slow", function() {
            if ($(this).css("display") == "none") {
                $("#btStarter").css("background-color", "black");
            } else {
                $("#btStarter").css("background-color", "blue");
            }
        });
    });

    $("#btMain").click(function() {
        $("#liMain").toggle("slow", function() {
            if ($(this).css("display") == "none") {
                $("#btMain").css("background-color", "black");
            } else {
                $("#btMain").css("background-color", "blue");
            }
        });
    });

    $("#btDessert").click(function() {
        $("#liDessert").toggle("slow", function() {
            if ($(this).css("display") == "none") {
                $("#btDessert").css("background-color", "black");
            } else {
                $("#btDessert").css("background-color", "blue");
            }
        });
    });

    // Starter onClicks
    $("#btStarter1").click(function() {
        $("#liStarter").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedStarter").html(selectedStarterFnc(starter.firstDish, starter.firstDishPrice));
    });

    $("#btStarter2").click(function() {
        $("#liStarter").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedStarter").html(selectedStarterFnc(starter.secondDish, starter.secondDishPrice));
    });

    $("#btStarter3").click(function() {
        $("#liStarter").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedStarter").html(selectedStarterFnc(starter.thirdDish, starter.thirdDishPrice));
    });

    // Main onClicks
    $("#btMain1").click(function() {
        $("#liMain").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedMain").html(selectedMainFnc(main.firstDish, main.firstDishPrice));
    });

    $("#btMain2").click(function() {
        $("#liMain").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedMain").html(selectedMainFnc(main.secondDish, main.secondDishPrice));
    });

    $("#btMain3").click(function() {
        $("#liMain").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedMain").html(selectedMainFnc(main.thirdDish, main.thirdDishPrice));
    });

    // Dessert onClicks
    $("#btDessert1").click(function() {
        $("#liDessert").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedDessert").html(selectedDessertFnc(dessert.firstDish, dessert.firstDishPrice));
    });

    $("#btDessert2").click(function() {
        $("#liDessert").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedDessert").html(selectedDessertFnc(dessert.secondDish, dessert.secondDishPrice));
    });

    $("#btDessert3").click(function() {
        $("#liDessert").children("li").children("input").css("background-color", "red");
        $(this).css("background-color", "green");
        $("#selectedDessert").html(selectedDessertFnc(dessert.thirdDish, dessert.thirdDishPrice));
    });
});

// build Dish class
function Dish(name, price) {
    // not shown - you should validate proper data types and values
    // for name(string) and price(int or float, positive value, etc.)
    this.name = name;
    this.price = price;
    // in future you might add other properties here (ingredients, picture URL's, etc.)
}

// add methods to the Dish prototype to expose dish behavior
Dish.prototype = {
    // not currently used
};

// build Menu class to store menu information
function Menu() {
    this.categories = [];
    this.menuTree = {};
}

// add methods to the Menu prototype to expose menu behavior
Menu.prototype = {
    addCategory: function addCategory(category) {
        // not shown - you should validate proper data type
        // for category(string)
        // add category to menu tree
        this.menuTree[category] = [];
        // add category to list of categories on Menu
        this.categories.push(category);
        // return the object for method chaining
        return this;
    },
    addDish: function addDish(dish, category) {
        if (dish instaceof Dish === false) {
            console.log('Need to pass a Dish object.');
            return null;
        }

        // if category was not passed, use last category added
        if (category === undefined) {
            var lastCatArray = this.categories.slice(-1);
            category = lastCatArray[0];
        }
        this.menuTree[category].push(dish);
        return this;
    }
}

// build object to define an orderable Meal
// we will later use this class when rendering the menu selection
// this simple example assumes that the meas consists of one item from
// each menu category
function Meal(menu) {
    // not shown - validate valid menu object is passed
    // set menu object in this class
    this.menu = menu;
    // object to store current menu selections
    this.menuSelections = {};
    // build out "slots" to hold menu selections
    this.menu.categories.forEach(function(value, index) {
        this.menuSelections[value] = null;
    });
}

// add methods to Meal
Meal.prototype = {
    selectCourseOption: function(course, dish) {
        // not shown - validate course and dish parameters
        this.menuSelections[course] = dish;
        return this;
    },
    getMealCost: function() {
        var totalCost = 0;
        for (course in this.menuSelections) {
            totalCost += this.menuSelections[course].price;
        }
        return totalCost;
    }
}

// create class to render HTML view necessary for meal selection
function MealSelectionHTMLFactory(meal, config) {
    // not shown - validate valid Meal object passed
    this.meal = meal;
    // extend/override default config if if anything passed
    // not currently used
    this.config = $.extend(this.config, config);
}

MealSelectionHTMLFactory.prototype = {
        // store some base config for rendering
        // we apply this at prototype level,
        // as we want to apply to all instances of this class
        this.config = {
            // Not used currently. It could be good idea to put things
            // such as default DOM element id and class names into this
            // config such that they are not hard coded into the jQuery
            // DOM element generation code in this class.
        },
        renderMenuDOM(targetSelector) {
            // local variable to use as handle to menu tree
            var menuTree = this.meal.menu.menuTree;

            // start building elements for DOM inserting
            // you may ultimately weant to consider some sort of
            // templating engine, rather than building DOM elements this way

            // create wrapper div to contain this whole thing 
            var $menuDOM = $('div');
            // main button
            $menuDOM.append(
                '<input type="button" class="button" id="btMenu" value="Menu">'
            );
            // start with menu shell
            $menuDOM.append(
                '<ul id="liMainMenu" class="ul">'
            );
            // get handle for main menu
            $mainMenu = $menuDom.find('#liMainMenu');

            // create shell for order table
            var $orderTable = $(
                '<table id="orderTable" class="table">'
            );
            $orderTable.append('<th>Your Order:</th>');


            // iterate through courses updating navigation, selection form
            // and order summary table
            for (course in this.menuSelections) {
                // update main menu
                $mainMenu.append(
                    '<li>' +
                    '<input type="button" class="button courseToggle" value="' +
                    course + '"></li>'
                );

                // add course menu
                // note that I am applying courseMenu class to this item
                var $courseMenu = $(
                    '<ul class="ul courseMenu ' + course + '">'
                );

                // iterate dish options for this course adding them to menu
                for (var i = 0; i < menuTree[course].length; i++)) {
                var localDish = menuTree[course][i];
                // note we capture current course and index position of dish
                // into data-* properties
                var $dish = $.(
                    '<li>' +
                    '<input type="button" class="button dishToggle" value="' +
                    localDish.name + '" data-course=" + course + '
                    " ' + 
                    data - index = "' + i + '" > < /li>'
                );
                $courseMenu.append($dish);
            }

            // add this course menu to menu DOM 
            $menuDOM.append($courseMenu);

            // update order table
            var $tableRow = $.('<tr class="orderTableRow ' + course + '">');
            $tableRow.append('<td>' + course + ' :</td>');
            $tableRow.append('<td class="selectedDish">');
            $orderTable.append($tableRow);
        }

        // add total area to order table
        $orderTable.append(
            '<tr><td>Total :</td><td id="mealTotal">0</td>'
        );

        // now add elements to DOM at target selector
        $(targetSelector).append($menuDom);
        $(targetSelector).append($orderTable);
    },
    addEventHandlers: function() {
        // local variable for access meal
        var mealLocal = this.meal;
        // local variable to use as handle to menu tree
        var menuTree = mealLocal.menu.menuTree;

        // main button behavior toggle
        $("#btMenu").click(function() {
            // togle button class
            $(this).toggleClass('active');
            // show/hide menu
            $("#liMainMenu").toggle("slow");
        });

        // course menu toggles
        $('.courseToggle').click(function() {
            var clickedCourse = $(this).attr("value");
            // change button class
            $(this).toggleClass('active');
            // show/hide menu
            $('.courseMenu.' + clickedCourse).toggle('slow');
        });

        // dish selection toggles
        $('.dishToggle').click(function() {
                    // get jQuery collection for all dishes of this same course
                    var $allDishesForCourse = $(this)
                        .closest('.courseMenu')
                        .find('.dishToggle');
                    // toggle all dishes into notSelected state
                    $allDishesForCourse.addClass('notSelected');

                    // put selected class in selected state
                    $(this).removeClass('notSelected');
                    $(this).addClass('selected');

                    // update meal object to reflected selected item
                    // first get data from clicked element so we can locate
                    // the dish object in menu tree
                    var selectedDishCourse = $(this).data('course');
                    var selectedDishIndex = parseInt($(this).data('index'));

                    // get dish object
                    var selectedDish = menuTree[selectedDishCourse][selectedDishIndex];

                    // set dish object to meal
                    mealLocal.selectCourseOption(selectedDishCourse, selectedDish);

                    // now update the order table
                    // first course selection
                    $('.orderTableRow.' + selectedDishCourse + ' .selectedDish)
                        .html(selectedDish.name);
                        // thence total price
                        $('#mealTotal').html(mealLocal.getMealCost());
                    });
            },
            renderMenu: function(targetSelector) {
                this.renderMenuDOM(targetSelector);
                this.addEventHandlers();
            }
    }