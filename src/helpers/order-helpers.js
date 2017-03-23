import format from 'dateformat';

export function getRoute(order) {
    let items = getAllTransportItems(order).concat(order.hotel);

    parseItemTimes(items);
    items.sort((r1, r2)=>{
        let startTime1 = r1.departure || r1.checkIn;
        let startTime2 = r2.departure || r2.checkIn;

        return startTime1.getTime() - startTime2.getTime();
    });

    return items;
}

export function getDetailGroupOfDate(order) {
    let items = getAllTransportItems(order);
    let ret = {};
    appendDestsToGroup(order.destinations, ret);
    appendTransportsToGroup(items, ret);
    appendHotelsToGroup(order.hotel, ret);
    sortDetailsCityInfos(ret);

    return ret;
}

function appendHotelsToGroup(items, ret) {
    items.map(item => appendHotelToGroup(item, ret));
}

function appendHotelToGroup(item, ret) {
    let startDate = new Date(item.checkIn);
    let endDate = new Date(item.checkOut);
    let itemClonedData = _.cloneDeep(item);
    itemClonedData.name = itemClonedData.hotel;

    pushItemToAllDays(itemClonedData, startDate, endDate, ret, item => item.city);
    
}

function appendTransportsToGroup(items, ret) {
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (!item) continue;
        appendTransportToGroup(item, ret);
    }
}

/**
 * the transport item will be added to the records of each day
 *
 * @param  {[type]} item [description]
 * @param  {[type]} ret  [description]
 * @return {[type]}      [description]
 */
function appendTransportToGroup(item, ret) {
    let startDate = new Date(item.departure);
    let endDate = new Date(item.arrive);
    let diff = getDurationDays(startDate, endDate);
    let clonedData = _.cloneDeep(item);
    clonedData.name = `go from ${item.from} to ${item.to}`;
    let cityGetter = (item, startDate, endDate, curDate) => {
        if (startDate.getFullYear() === curDate.getFullYear()
            && startDate.getMonth() === curDate.getMonth()
            && startDate.getDate() === curDate.getDate()) {
            return item.from;
        } else {
            return item.to;
        }
    }

    pushItemToAllDays(clonedData, startDate, endDate, ret, cityGetter);
}

function pushItemToAllDays(item, startDate, endDate, ret, cityGetter) {
    let diff = getDurationDays(startDate, endDate);

    for (let i = 0; i <= diff; i++) {
        let tmpDate = new Date(startDate.getTime() + i * oneDayMillseconds);
        let tmpDateStr = format(tmpDate, 'yyyy-mm-dd');

        let record = getOrCreateRecord(tmpDateStr, ret);
        let city = cityGetter(item, startDate, endDate, tmpDate);

        pushDetailToList(record, item);
        pushCityInfos(record, city, startDate, endDate, item);
        pushDetailToCityGroup(record, city, item, startDate, endDate, tmpDateStr);
    }
}

function getDurationDays(startDate, endDate) {
    let startDateClone = new Date(startDate.getTime());
    let endDateClone = new Date(endDate.getTime());

    clearTimeToZero(startDateClone);
    clearTimeToZero(endDateClone);

    let durTime = (endDateClone.getTime() - startDateClone.getTime());
    
    let durDay;

    if (durTime > 0) {
        durDay = durTime / oneDayMillseconds;
    } else {
        durDay = 0;
    }

    return durDay;
}

function clearTimeToZero(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
}

function setTimeToEnd(date) {
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    date.setMilliseconds(59);
}

function appendDestsToGroup(dests, ret) {
    for (let i = 0; i < dests.length; i++) {
        let dest = dests[i];
        if (!dest) continue;
        appendDestToGroup(dest, ret);
    }
}

function appendDestToGroup(dest, ret) {
    let date = new Date(dest.date);
    let dateStr = format(date, 'yyyy-mm-dd');

    let record = getOrCreateRecord(dateStr, ret);
    pushDetailToList(record, dest);
    pushCityInfos(record, dest.city, date, date, dest);
    pushDetailToCityGroup(record, dest.city, dest, date, date, dateStr);
}

function pushCityInfos(record, city, startDate, endDate, item) {
    if (!record.cities[city]) {
        return record.cities[city] = {start: startDate, end: endDate, city: city, item: item};
    }

    var curCityInfo = record.cities[city];
    if (curCityInfo.start > startDate) {
        curCityInfo.start = startDate;
    }

    if (curCityInfo.end < endDate) {
        curCityInfo.end = endDate;
    }
}

function pushDetailToCityGroup(record, city, item, startDate, endDate, curDateStr) {
    let cityGroup = getOrCreateCityGroup(record, city);
    let data = {item: item, start: startDate, end: endDate};
    let hasAdded = false;
    let todayStart = getZeroClockDate(curDateStr);
    let todayEnd = getEndClockDate(curDateStr);
    for (let i = 0; i < cityGroup.length; i++) {
        let tmp = cityGroup[i];

        if (compareByStartAndEndTime(data, tmp, todayStart, todayEnd) <= 0) {
            cityGroup.splice(i, 0, data);
            hasAdded = true;
            break;
        }
    }

    if (!hasAdded) {
        cityGroup.push(data);
    }
}

function pushDetailToList(record, item) {
    record.details.push(item);
}

function getOrCreateCityGroup(record, city) {
    if (!record.cityGroup[city]) {
        record.cityGroup[city] = [];
    }

    return record.cityGroup[city];
}

function getOrCreateRecord(dateStr, ret) {
    if (!ret[dateStr]) {
        genRetDateRecord(dateStr, ret);
    }

    return ret[dateStr];
}

function genRetDateRecord(dateStr, ret) {
    ret[dateStr] = {details: [], cityGroup: {}, cities: {}};
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

function getAllTransportItems(order) {
    var items = [].concat(order.flight, order.train);

    return items;
}

function sortDetailsCityInfos(record) {
    for (let dateStr in record) {
        let todayStart = getZeroClockDate(dateStr);
        let todayEnd = getEndClockDate(dateStr);
        sortDetailsCityInfo(record[dateStr], todayStart, todayEnd);
    }
}

function getZeroClockDate(dateStr) {
    return new Date(dateStr + " 00:00:00:000");
}

function getEndClockDate(dateStr) {
    let date = new Date(dateStr + " 23:59:59:999");
    return date;
}

function sortDetailsCityInfo(record, todayStart, todayEnd) {
    var cities = _.values(record.cities);
    cities.sort((city1, city2) => {
        return compareByStartAndEndTime(city1, city2, todayStart, todayEnd);
    });

    record.sortedCities = cities;
}

/**
 * 进行比较
 *
 * @param  {[type]} e1         [description]
 * @param  {[type]} e2         [description]
 * @param  {[type]} todayStart [description]
 * @param  {[type]} todayEnd   [description]
 * @return {[type]}            [description]
 */
function compareByStartAndEndTime(e1, e2, todayStart, todayEnd) {
    // end after today
    if (e1.end > todayEnd) {
        if (e2.end > todayEnd) {
            // it's a wrong situation
            return e1.end > e2.end ? 1 : -1;
        } else {
            return 1;
        }
    } else if(e2.end > todayEnd) {
        return -1;
    }

    // compare by start date
    // start before today
    if (e1.start < todayStart) {
        if (e2.start < todayStart) {
            // it's a wrong situation
            return e1.start <= e2.start ? -1 : 1;
        } else {
            return -1;
        }
    } else if (e2.start < todayStart) {
        return 1;
    }

    // all of actions was in today
    return e1.start > e2.start ? 1 : -1;
}

const oneDayMillseconds = 24 * 3600 * 1000;