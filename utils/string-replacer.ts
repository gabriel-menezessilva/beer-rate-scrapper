export const cleanString = (text: string | undefined | null) => {
    let newText = '';
    console.log({text})
    if (!text) {
        return null;
    }
    if (text.match(/\,/)) {
        newText = text.replace(/\,/, '.');
    }
    if (text.match(/%/)) {
        newText = text.replace(/\%/, '');
    }
    if (text.match('Cerveja')) {
        newText = text.replace('Cerveja ', '');
    }
    console.log({newText})
    return newText;
}
