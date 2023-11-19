<script lang="ts">
	import type { ContactFormSchemaType } from '$lib/schemas/types';

	export let contactForm: ContactFormSchemaType;
</script>

<div class="dark:text-lightBody flex flex-col gap-y-4">
	<div>
		<p class="text-label">名前</p>
		<p class="text-body-sm">{contactForm.name}</p>
	</div>
	<div>
		<p class="text-label">メールアドレス</p>
		<p class="text-body-sm">{contactForm.email}</p>
	</div>
	<div>
		<p class="text-label">本文</p>
		<p class="text-body-sm whitespace-pre-wrap">
			{contactForm.message}
		</p>
	</div>
</div>
