export default function (coordSys) {
    var rect = coordSys.getRect();
    var rangeInfo = coordSys.getRangeInfo();

    return {
        coordSys: {
            type: 'calendar',
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            cellWidth: coordSys.getCellWidth(),
            cellHeight: coordSys.getCellHeight(),
            rangeInfo: {
                start: rangeInfo.start,
                end: rangeInfo.end,
                weeks: rangeInfo.weeks,
                dayCount: rangeInfo.allDay
            }
        },
        api: {
            coord: function (data, clamp) {
                return coordSys.dataToPoint(data, clamp);
            }
        }
    };
}
