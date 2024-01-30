export const roundPrice = ({ item, order }: any) => {
    if (["amount", "total"].includes(order)) {
        return Math.abs(item?.[order]).toFixed(3);
    }
    return Math.abs(item?.[order]);
};

export const widthCal = ({ item, orderBook }: any) => {
    return (item?.total / orderBook[orderBook.length - 1].total) * 100;
};

export const addTotal = ({ orderBook }: any) => {
    let total = 0
    const abc = orderBook?.map((item: any) => {
        total += item.amount
        return { ...item, total: Math.abs(total) };
    });
    return abc;
}