$(document).ready(function() {
    
});

function onItemSearch() {
    const itemName = $("#itemSearchInput").val();
    itemSearch(itemName)
};

function itemSearch(itemName) {
    $.ajax({
        type: "GET",
        url: "api/find-item/" + itemName,
        dataType: "json",
        success: function (result, status, xhr) {
            console.log(result)
            renderItems(result)
        },
    })
}

function renderItems(items) {
    var template = Handlebars.compile($("#itemListTemplate").html());
    var rendered = template(items)
    var itemList = $("#itemList")
    itemList.empty()
    itemList.append(rendered)
}

function onItemAdd() {
    const itemName = $("#itemAddInput").val();
    itemAdd(itemName)
};

function itemAdd(itemName) {
    const request = {
        "item_name": itemName
    }
    $.ajax({
        type: "POST",
        url: "api/items",
        dataType: "json",
        data: request,
        success: function (result, status, xhr) {
            renderAddItemResult(result)
        }
    })
}

function renderAddItemResult(result) {
    var itemResult = $("#addItemResult")
    itemResult.empty()
    itemResult.append("Successfully added item")
}

function onLogin() {
    const user = $("#username").val();
    const pass = $("#password").val();
    login(user, pass)
}

function login(username, pass) {
    const request = {
        "user_name": username,
        "password": pass,
    }
    $.ajax({
        type: "POST",
        url: "api/login",
        dataType: "json",
        data: request,
        success: function (result, status, xhr) {
            renderAddItemResult(result)
            window.location.replace("/items.html")
        }
    })
}

function logout() {
    $.ajax({
        type: "GET",
        url: "api/logout",
        dataType: "json",
        success: function (result, status, xhr) {
            console.log(result)
            window.location.replace("/index.html")
        }
    })
}

function createAccount() {
    const user = $("#createUsername").val();
    const pass = $("#createPassword").val();
    const island = $("#createIslandCode").val();
    newAccount(user, pass, island)
}

function newAccount(user, pass, island) {
    const request = {
        "user_name": user,
        "password": pass,
        "island_code": island,
    }
    $.ajax({
        type: "POST",
        url: "api/user",
        dataType: "json",
        data: request,
        success: function (result, status, xhr) {
            renderAddItemResult(result)
        }
    })
}

function showCreate() {
    $('#loginForm').addClass('hidden')
    $('#createAccount').removeClass('hidden')
    $('#loginButton').removeClass('hidden')
    $('#createAccountButton').addClass('hidden')
}

function showLogin() {
    $('.showLoginElements').removeClass('hidden')
    $('.showCreateElements').addClass('hidden')
}

function showItemSearch() {
    $('.showSearchElements').removeClass('hidden')
    $('.showAddItemElements').addClass('hidden')
}

function showAddItem() {
    $('.showSearchElements').addClass('hidden')
    $('.showAddItemElements').removeClass('hidden')
}