class Words {
    private buildWordList(phrase: string) {
        return phrase.trim().split(/\s+/).map( word => word.toLowerCase());
    }

    private countOccInList(element: string, list: []) {
        return list.filter(listItem => listItem === element).length;
    }

    public count(phrase: string = "") {
        const wordList = this.buildWordList(phrase)

        return wordList.reduce((acc, curr) => {
            const count = this.countOccInList(curr, wordList);
            if count {
                acc.set(curr, count);
            }
            return acc;
        }, new Map());
    }
}

export default Words;
