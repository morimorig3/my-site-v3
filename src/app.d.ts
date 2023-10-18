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
			'on:pan'?: (event: CustomEvent<{ x: number; y: number; target: EventTarget & T }>) => void;
			'on:panup'?: (event: CustomEvent<{ event: PointerEvent; pointersCount: number }>) => void;
		}
	}
}

export {};
