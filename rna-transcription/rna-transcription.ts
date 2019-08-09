type StringMap = { [s: string]: string };

const DNA_TO_RNA_MAP: StringMap = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
};

const validDna = (dna: string): boolean => !!DNA_TO_RNA_MAP[dna];

class Transcriptor {
	toRna(dnaStrand: string): string {
		return dnaStrand.split('').reduce((acc, dna) => {
			if (!validDna(dna)) throw Error('Invalid input DNA.');
			acc += DNA_TO_RNA_MAP[dna];
			return acc;
		}, '');
	}
}

export default Transcriptor;
