export const formatUnf = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '');

    const part1 = numbersOnly.slice(0, 3);
    const part2 = numbersOnly.slice(3, 6);
    const part3 = numbersOnly.slice(6, 9);
    const part4 = numbersOnly.slice(9, 11);

    let formatted = part1;
    if (part2) formatted += `-${part2}`;
    if (part3) formatted += `-${part3}`;
    if (part4) formatted += `-${part4}`;

    return formatted;
};