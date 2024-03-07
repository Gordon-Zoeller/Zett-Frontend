export const minus = (id, values, setValues) => {
    const valuesUpdated = values.filter(value => value !== id);
    setValues(valuesUpdated);
};