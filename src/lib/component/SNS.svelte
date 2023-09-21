<script>
	import FaEnvelop from './Icons/FaEnvelop.svelte';
	import FaGithub from './Icons/FaGithub.svelte';
	import FaLinkedIn from './Icons/FaLinkedIn.svelte';
	import FaXTwitter from './Icons/FaXTwitter.svelte';
	import IconQiita from './Icons/IconQiita.svelte';
</script>

<ul class="flex gap-x-4">
	<li>
		<a href="mailto:mori.nto@outlook.jp"
			><FaEnvelop className="fill-divider hover:fill-white h-6" /></a
		>
	</li>
	<li>
		<a href="https://github.com/morimorig3" target="_blank" rel="noopener noreferrer"
			><FaGithub className="fill-divider hover:fill-white h-6" /></a
		>
	</li>
	<li>
		<a href="https://twitter.com/morimorig3" target="_blank" rel="noopener noreferrer"
			><FaXTwitter className="fill-divider hover:fill-white h-6" /></a
		>
	</li>
	<li>
		<a
			href="https://www.linkedin.com/in/naoto-morishita-2b286a203?trk=contact-info"
			target="_blank"
			rel="noopener noreferrer"><FaLinkedIn className=" fill-divider hover:fill-white h-6" /></a
		>
	</li>
	<li>
		<a href="https://qiita.com/morimorig3" target="_blank" rel="noopener noreferrer"
			><IconQiita className="fill-divider hover:fill-white h-6" /></a
		>
	</li>
</ul>
