<script>
	import FaEnvelop from './Icons/FaEnvelop.svelte';
	import FaGithub from './Icons/FaGithub.svelte';
	import FaLinkedIn from './Icons/FaLinkedIn.svelte';
	import FaXTwitter from './Icons/FaXTwitter.svelte';
	import IconQiita from './Icons/IconQiita.svelte';
</script>

<ul class="flex gap-x-4">
	<li>
		<a href="mailto:mori.nto@outlook.jp" aria-label="メールリンク"
			><FaEnvelop
				className="fill-divider hover:fill-white h-6 dark:fill-lightBody dark:hover:fill-divider"
			/></a
		>
	</li>
	<li>
		<a
			href="https://github.com/morimorig3"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHubリンク"
			><FaGithub
				className="fill-divider hover:fill-white h-6 dark:fill-lightBody dark:hover:fill-divider"
			/></a
		>
	</li>
	<li>
		<a
			href="https://twitter.com/morimorig3"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Xリンク"
			><FaXTwitter
				className="fill-divider hover:fill-white h-6 dark:fill-lightBody dark:hover:fill-divider"
			/></a
		>
	</li>
	<li>
		<a
			href="https://www.linkedin.com/in/naoto-morishita-2b286a203"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedInリンク"
			><FaLinkedIn
				className="fill-divider hover:fill-white h-6 dark:fill-lightBody dark:hover:fill-divider"
			/></a
		>
	</li>
	<li>
		<a
			href="https://qiita.com/morimorig3"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Qiitaリンク"
			><IconQiita
				className="fill-divider hover:fill-white h-6 dark:fill-lightBody dark:hover:fill-divider"
			/></a
		>
	</li>
</ul>
