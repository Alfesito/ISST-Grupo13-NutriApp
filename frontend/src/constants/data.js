const API = {
    API_connection : true,
    // API para buscar comida
    // Doc: https://developer.edamam.com/food-database-api-docs
    // Example of URL GET from API:
    // https://api.edamam.com/api/food-database/v2/parser?app_id=2253522c&app_key=aef082754d2538e4b1e24ff04ddc4adb&ingr=50g%20rice&nutrition-type=cooking
    ID_search : "2253522c",
    KEY_search : "aef082754d2538e4b1e24ff04ddc4adb",
    URL_search : "https://api.edamam.com/api/food-database/v2/parser",

    // API para las recertas
    // Doc: https://developer.edamam.com/edamam-docs-recipe-api
    // Example of URL GET from API:
    // https://api.edamam.com/api/recipes/v2?type=public&q=rice&app_id=d37da41f&app_key=1f068730881ead6d9950d93dd720ab2c&diet=balanced&health=alcohol-free&cuisineType=British
    ID_recipe : "d37da41f",
    KEY_recipe : "1f068730881ead6d9950d93dd720ab2c",
    URL_recipe : "https://api.edamam.com/api/recipes/v2",
}
export default API;