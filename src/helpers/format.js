export const renderModifier = (value) => {
    if (value > 0) {
        return `+${value}`;
    } else if (value < 0) {
        return `${value}`;
    } else {
        return "-";
    }
    return value;
}