// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [{title: "Пицца", count: "2"}], order: {adress: {street, house, entrance, floor, flat}, sum}, client: {name, phone}}; 
    data.order.adress.street = "ул. Ленина";
    let street = data.order.adress.street;
    data.order.adress.house = "дом 2";
    let house = data.order.adress.house;
    data.order.adress.entrance = "4 подъезд";
    let entrance = data.order.adress.entrance;
    data.order.adress.floor = "5 этаж";
    let floor = data.order.adress.floor;
    data.order.adress.flat = "кв 53";
    let flat = data.order.adress.flat;
    let address;
    adress = street + ' ' + house + ' ' + entrance + ' ' + floor + ' ' + flat;
    data.client.phone = "+7(987)65-43-210";
    let phone = data.client.phone;
    data.client.name = 'Иван';
    let name = data.client.name;
    data.client = name + ' ' + phone;
    let sum;
    data.order.sum = sum;
    data.order = address, sum;

    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.order.address = address;
    data.order.sum = name + phone + address + goods + sum;

    

    let jsonData = JSON.stringify(data);

    return jsonData;
}
