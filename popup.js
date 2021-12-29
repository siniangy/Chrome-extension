(function () {

    var getPrice = () => {
        $.get("https://chain.so/api/v2/get_price/BTC", function (response) {
            console.log(response)
            var price = '--'
            for (var item of response.data.prices) {
                if (item.price_base === "USD" && item.exchange === "bitfinex") {
                    price = item.price
                    break;
                }
            }
            document.getElementById('test').innerHTML = `当前比特币在bitfinex的实时价格是${price}USD`
        });
    }
    getPrice()
})()