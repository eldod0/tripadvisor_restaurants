export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

			export const server_loads = [];

			export const dictionary = {
	"": [~2],
	"about": [3],
	"register": [~4],
	"restaurant": [~5],
	"resultats": [~6],
	"submit_restaurant": [~7],
	"sverdle": [~8],
	"sverdle/how-to-play": [9]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};