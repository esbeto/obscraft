<script>
	import Image from '../Image.svelte';
	import Welcome from '../Welcome.svelte';
</script>

<svelte:head>
	<title
		>Liquid Feast: Exploring the roles of ceramics, textiles and food in the ritual of eating |
		Berenice Hernández, Olga Olivares, Steph Orozco</title
	>
</svelte:head>

<main>
	<section id="intro">
		<h3>
			<span>Berenice Hernández</span>
      <span>Olga Olivares</span>
			<span>Steph Orozco&ensp;</span>
		</h3>
		<h1>LIQUID FEAST</h1>
		<h2>Exploring the roles of ceramics, textiles and food in the ritual of eating</h2>
		<div class="bg">
			<Image height="1008" width="756" src="intro-bg-small.jpg" alt="LIQUID FEAST" />
		</div>
	</section>

	<section id="welcome">
		<Welcome />
	</section>

	<hr />

	<section class="info">
		<h1>About the Artists</h1>
		<div class="bg">
			<Image src="artists-1.jpg" />
		</div>
		<div class="content">
			<p>
				<span
					>OBS! is a multidisciplinary collective interested in craft as a powerful medium to
					inspire and drive change in today’s industrialized society. OBS! believe in the universal
					language of making and want to open the doors for people to connect and reflect on craft
					through non-traditional perspectives.</span
				><br />
				<br />
				<span
					><strong
						><a href="https://hernandezberenice.com/" target="_blank">Berenice Hernández</a>
					</strong>works with sculptures, video, photography and performance. In her work she
					focuses on the importance of spaces, their foundations and the potential power they have
					over our society and the individual. Berenice holds a BFA in ceramics from the
					<a href="https://khio.no/" target="_blank">Oslo National Academy of the Arts</a> and a MFA
					in ceramics from <a href="https://www.konstfack.se/" target="_blank">Konstfack</a>.</span
				>
			</p>

			<p>
				<br />
				<span
					><strong><a href="http://www.olgaolivares.com" target="_blank">Olga Olivares</a></strong>
					has a fashion &amp; textile background, specialized in concept and innovative solutions with
					a multidisciplinary approach. The use of organic materials and a mix of contemporary &amp;
					traditional processes is a constant theme in her practice. Olga holds a Bachelor degree in
					In Textile &amp; Fashion Design from
					<a href="https://www3.centro.edu.mx/" target="_blank">CENTRO</a>
					and a MA of Fine Arts in Design from
					<a href="https://www.konstfack.se/" target="_blank">Konstfack</a>.<br />
					<br />
					<strong><a href="https://stephorozco.mx/" target="_blank">Steph Orozco</a></strong> is an unusual
					thinker, garment maker, and fashion developer. She Understands fashion as an artistic discipline
					and constant experimentation. Searcher for quality through every aspect of the garment, the
					textile process, the materials, the silhouette, and the social context. Having, as a result,
					unexpected controlled creations.</span
				>
			</p>
		</div>
	</section>

	<hr />
  <h1>see you soon!</h1>
	<h2>
		<a
			href="https://billetto.se/en/e/liquid-feast-at-kaolin-stockholm-craft-week-2022-tickets-704633"
			target="_blank"
			>BOOK NOW
		</a>
	</h2>
	<h2 style="text-align: right">
    Contact us:
		<a
			href="mailto:hej.obscraft@gmail.com"
			target="_blank"
			>hej.obscraft@gmail.com
		</a>
	</h2>
	<p />
</main>

<style>
	main {
		/* background-image: linear-gradient(to bottom right, #6968201f, #b9010108); */
		padding: 4vh 4vw;
		max-width: 1800px;
		margin: 0 auto;
	}

	#intro {
		min-height: 90vh;
	}

	section {
		font-size: 1.2rem;
	}

	#intro h3 {
		font-family: Montserrat;
		font-size: 1.2rem;
		font-weight: 800;
		margin: 1rem 0 0.8rem;
		text-shadow: 0 2px 0px rgba(226, 196, 5, 0.3);
	}

  @media screen and (max-width: 1129px) {
    #intro h3 span {
      display: block;
    }
  }

  @media screen and (min-width: 700px) {
    #intro h3 {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 1130px) {
    #intro h3 span {
      white-space: nowrap;
    }

    #intro h3 span:not(:last-child):after {
      content: " ·"
    }
  }

	#intro h2 {
		font-size: 2rem;
    margin-top: 0.2em;
		line-height: 0.9;
	}

  @media screen and (min-width: 700px) {
    #intro h2 {
      font-size: 4rem;
    }
  }

	#intro h1 {
		-webkit-background-clip: text;
		background-clip: text;
		background-image: url("/bg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		color: rgba(0, 0, 0, 0.2);
		display: inline-block;
		font-size: clamp(4rem, 25vw, 16rem);
		line-height: 1;
		transition: color ease 200ms;
		white-space: nowrap;
	}

	#intro h1:hover {
		color: rgba(0, 0, 0, 0.7);
	}

	.bg {
		--img-margin: 1.5rem 0 2rem auto;
		--img-max-width: 100%;
	}

  @media screen and (min-width: 1024px) {
    .bg {
      --img-max-height: 80vw;
    }
  }

	#welcome {
		background-color: white;
		max-width: 600px;
		position: relative;
		z-index: 2;
	}

	@media screen and (min-width: 1024px) {
		#welcome {
			margin-top: -50vh;
      padding: 2rem 2rem 1rem 0;
		}
	}

	section.info {
		position: relative;
		padding: 4rem 0 4rem 4rem;
		margin: 0;
	}

	@media screen and (min-width: 1200px) {
		section.info {
			display: grid;
			gap: 4vw;
			grid-template-columns: 1fr 1fr;
		}
	}

	section.info .content {
		max-width: 600px;
	}

	section.info h1 {
		display: block;
		left: 0;
		margin: 0;
		position: absolute;
		top: 4rem;
		transition: transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
		transform-origin: top left;
		transform: rotate(-90deg) translateX(-100%) scale(1.2);
		z-index: -1;
	}
</style>
