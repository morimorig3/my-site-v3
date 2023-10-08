<script lang="ts">
	import WorkCard from '$lib/component/WorkCard.svelte';
</script>

<div class="l-container py-6 tablet:py-8 laptop:py-10">
	<div class="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-y-6">
		<WorkCard
			href="/works/1901-coder"
			title="コーダー"
			term="Jan. 2019 ~ Sep. 2019（9ヶ月）"
			src="/works_remote_01.jpg"
		/>
		<WorkCard
			href="/works/1901-coder"
			title="Webエンジニア"
			term="Apr. 2020 ~ Mar. 2022（2年）"
			src="/works_web-engineer_01.jpg"
		/>
		<WorkCard
			href="/works/1901-coder"
			title="フロントエンドエンジニア"
			term="Apr. 2022 ~（1年6ヶ月）"
			src="/works_front-end_01.jpg"
		/>
	</div>
</div>
