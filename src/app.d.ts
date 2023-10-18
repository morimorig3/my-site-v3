// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:clickOutside'?: CompositionEventHandler<T>;
			'on:swipe'?: (
				event: CustomEvent<{
					direction: 'top' | 'right' | 'bottom' | 'left';
					target: EventTarget;
				}>
			) => void;
		}
	}
}

export {};
