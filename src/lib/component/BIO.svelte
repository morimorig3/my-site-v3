<script>
	import FaLinkedIn from './Icons/FaLinkedIn.svelte';
	import FaSquareGithub from './Icons/FaSquareGithub.svelte';
	import FaSquareXTwitter from './Icons/FaSquareXTwitter.svelte';
	import IconQiita from './Icons/IconQiita.svelte';
	import ProfileIcon from './ProfileIcon.svelte';
</script>

<div class="grid gap-y-2 justify-items-center tablet:justify-items-end">
	<div class="grid justify-items-center tablet:justify-items-end">
		<a href="/about">
			<ProfileIcon />
		</a>
		<p class="text-label">morimorig3</p>
		<a
			class="text-label text-body font-semibold u-underline-animation py-1"
			href="mailto:mori.nto@outlook.jp">mori.nto@outlook.jp</a
		>
	</div>
	<ul class="flex gap-x-2">
		<li>
			<a href="https://github.com/morimorig3" target="_blank" rel="noopener noreferrer"
				><FaSquareGithub className="fill-slate-800 h-8" /></a
			>
		</li>
		<li>
			<a href="https://twitter.com/morimorig3" target="_blank" rel="noopener noreferrer"
				><FaSquareXTwitter className="fill-slate-800 h-8" /></a
			>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/naoto-morishita-2b286a203?trk=contact-info"
				target="_blank"
				rel="noopener noreferrer"><FaLinkedIn className=" fill-slate-800 h-8" /></a
			>
		</li>
		<li>
			<a href="https://qiita.com/morimorig3" target="_blank" rel="noopener noreferrer"
				><IconQiita className="fill-slate-800 h-8" /></a
			>
		</li>
	</ul>
</div>
