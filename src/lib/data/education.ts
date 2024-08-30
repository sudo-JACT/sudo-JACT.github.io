import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'IT expert',
		description: '',
		location: 'Italy',
		logo: Assets.Mattei,
		name: '',
		organization: 'I.I.S.S. Enrico Mattei',
		period: { from: new Date(2019, 9, 14), to: new Date(2024, 7, 2) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English (B2 level)', 'Telecommunications', 'Rest Paradigm', 'Blockchains Technology', 'PHP', 'SQL', 'HTML', 'CSS', 'JS']
	},

	/*{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}*/
];

export const title = 'Education';
