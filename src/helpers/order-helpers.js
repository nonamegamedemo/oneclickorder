export function getRoute(order) {
    var items = getAllItems(order);

    parseItemTimes(items);
    items.sort((r1, r2)=>{
        var startTime1 = r1.departure || r1.checkIn;
        var startTime2 = r2.departure || r2.checkIn;

        return startTime1.getTime() - startTime2.getTime();
    });

    return items;
}

function parseItemTimes(items) {
    let timePropKeys = ['departure', 'arrive', 'checkIn', 'checkOut'];
    items.map(item=>{
        timePropKeys.map(key=>{
            if (item[key]) {
                item[key] = new Date(item[key]);
            }
        })
    });
}

function getAllItems(order) {
    var items = [].concat(order.flight, order.train, order.hotel);

    return items;
}