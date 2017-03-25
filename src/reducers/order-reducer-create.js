import dateformat from 'dateformat';

export function createOrder(state, action) {
    let tour = action.tour;
    let startDate = action.startDate;

    if (!startDate) startDate = new Date();
    let dur = tour.totalDayCount;
    let schedule = tour.scheduleList;
    let endDate = new Date(+startDate)
    endDate.setDate(endDate.getDate() + dur);

    let order = {}
    let trains = [];
    let dests = [];
    let days = schedule;
    let flights = getFlights(schedule, startDate);
    let hotels = getHotels(schedule, startDate);
    days.forEach((actions, dayOffset) => {
        actions.forEach(action=> {
            let aType = action.type;
            let actionDate = new Date(startDate.getTime());
            actionDate.setDate(actionDate.getDate() + dayOffset);

            switch(aType) {
                case 'train':
                    let trainData = getTrain(action, startDate, actionDate, dayOffset);
                    trains.push(trainData);
                    break;
                case 'viewspot':
                    let destData = getDest(action, startDate, actionDate, dayOffset);
                    dests.push(destData);
                    break;
            }
        });
    });

    order.id = +new Date();
    order.flight = flights;
    order.train = trains;
    order.hotel = hotels;
    order.destinations = dests;
    order.totalPrice = "10000";
    order.passengers = ['test'];
    order.orderTitle = tour.title;
    order.duration = dur;
    order.travelBeginTime = dateformat(startDate, 'yyyy-mm-dd HH:MM:ss');
    order.travelEndTime = dateformat(endDate, 'yyyy-mm-dd HH:MM:ss');

    console.log(order);
    return order;
}

function getFlights(days, startDate) {
    let flights = {};
    days.forEach((actions, dayOffset) => {
        let actionDate = new Date(startDate.getTime());
        actionDate.setDate(actionDate.getDate() + dayOffset);

        actions.forEach(action => {
            if (action.type != 'flight') return;

            let flightKey = action.from + '|' + action.to;
            if (!flights[flightKey]) {
                flights[flightKey] = {
                    "id": (new Date).getTime(),
                    "type": "flight",
                    "flightNo": "fx" + Math.floor(Math.random() * 100),
                    "from": action.from,
                    "to": action.to,
                    "departure": actionDate,
                    "arrive": null,
                    "days": 0,
                    "departureTerminal": action.from + "国际机场",
                    "arrivalTerminal": action.to + "国际机场"
                };
            } else {
                flights[flightKey].days++;
            }
        });
    });

    let rets = [];
    for (let flightKey in flights) {
        let flightTmp = flights[flightKey];
        let arriveTime = new Date(+flightTmp.departure);
        if (flightTmp.days > 0) {
            arriveTime.setDate(arriveTime.getDate() + flightTmp.days);
        } else {
            arriveTime.setHours(arriveTime.getHours() + 2);
        }
        flightTmp.arrive = arriveTime;
        rets.push(flightTmp);
    }

    return rets;
}

function getTrain(action, startDate, actionDate, dayOffset) {
    let depTime = new Date(actionDate.getTime());
    depTime.setHours(14);

    let arrTime = new Date(depTime.getTime());
    arrTime.setHours(arrTime.getHours() + 1);

    let ret = {
            "id": (new Date()).getTime(),
            "type": "train",
            "trainNo": "D2" + Math.floor(Math.random() * 100),
            "from": action.from,
            "to": action.to,
            "departure": depTime,
            "arrive": arrTime,
            "departureTerminal": action.from + '火车站',
            "arrivalTerminal": action.to + '火车站'
        };

    return ret;
}

function getHotels(days, startDate) {
    let hotels = {};
    days.forEach((actions, dayOffset) => {
        let actionDate = new Date(startDate.getTime());
        actionDate.setDate(actionDate.getDate() + dayOffset);
        actionDate.setHours(14);

        actions.forEach(action => {
            if (action.type != 'hotel') return;

            let hotelName = action.name;
            if (!hotels[hotelName]) {
                hotels[hotelName] = {
                    "id": (new Date()).getTime,
                    "type": "hotel",
                    "hotel": hotelName,
                    "city": action.location,
                    "address": action.location,
                    "stayDays": 1,
                    "checkIn": actionDate,
                    "checkOut": null
                };
            } else {
                hotels[hotelName].stayDays++;
            }
        });
    });

    let rets = [];
    for (let hotelName in hotels) {
        let hotelTmp = hotels[hotelName];
        let coDate = new Date(+hotelTmp.checkIn);
        coDate.setDate(coDate.getDate() + hotelTmp.stayDays);
        coDate.setHours(10);
        hotelTmp.checkOut = coDate;
        rets.push(hotelTmp);
    }

    rets.sort(function (hotel1, hotel2) {
        return hotel1.checkIn - hotel2.checkIn;
    });

    return rets;
}

function getDest(action, startDate, actionDate, dayOffset) {
    let ret = {
            "id": (new Date()).getTime(),
            "type": "dest",
            "city": action.location,
            "name": action.place,
            "address": action.location,
            "date": dateformat(actionDate, 'yyyy-mm-dd')
        };

    return ret;
}