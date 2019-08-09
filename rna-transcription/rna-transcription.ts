type StringMap = { [s: string]: string };

const DNA_TO_RNA_MAP: StringMap = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
};

function validDna(dnaList: Array<string>): boolean {
	return dnaList.every(dna => !!DNA_TO_RNA_MAP[dna]);
}
class Transcriptor {
	toRna(dnaStrand: string): string {
		const dnaStrandList = dnaStrand.split('');
		const isValidDna = validDna(dnaStrandList);
		if (isValidDna === false) {
			throw Error('Invalid input DNA.');
		}
		return dnaStrandList.map(dna => DNA_TO_RNA_MAP[dna]).join('');
	}
}

export default Transcriptor;
