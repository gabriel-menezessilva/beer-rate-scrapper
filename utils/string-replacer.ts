export const cleanString = (text: string | undefined | null) => {
    
    if (!text || !text.match(/\,|%|Cerveja|Pilsen/)) {
        return text;
    }
    if (text.match(/\,/)) {
        text = text.replace(/\,/g, '.');
    }
    if (text.match(/%/)) {
        text = text.replace(/\%/g, '');
    }
    if (text.match('Cerveja')) {
        text = text.replace('Cerveja ', '');
    }
    if (text.match('Pilsen')) {
        text = text.replace('Pilsen ', '');
    }

    return text;
}
