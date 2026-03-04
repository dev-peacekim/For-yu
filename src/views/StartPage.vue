<template>
	<div class="start-page">
		<audio ref="bgm" :src="bgmSrc" loop preload="auto"></audio>
		<div class="overlay">
			<h1 class="title">
				<span class="char" style="--i:0">F</span>
				<span class="char" style="--i:1">o</span>
				<span class="char" style="--i:2">r</span>
				<span class="char" style="--i:3">&nbsp;</span>
				<span class="char" style="--i:4">y</span>
				<span class="char" style="--i:5">u</span>
			</h1>

			<p class="start-text" @click="start">
				<span class="char start" style="--i:0">시</span>
				<span class="char start" style="--i:1">작</span>
				<span class="char start" style="--i:2">하</span>
				<span class="char start" style="--i:3">기</span>
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import bgmSrc from "@/assets/audio/cocktail_paradise.mp3"

const bgm = ref(null)
let fadeTimer = null
let started = false

const fadeIn = (targetVolume = 0.25, durationMs = 2500) => {
	const audio = bgm.value
	if (!audio) return

	// 시작 볼륨 0에서 목표 볼륨까지
	audio.volume = 0

	const stepMs = 50
	const steps = Math.max(1, Math.floor(durationMs / stepMs))
	const delta = targetVolume / steps
	let v = 0

	clearInterval(fadeTimer)
	fadeTimer = setInterval(() => {
		v = Math.min(targetVolume, v + delta)
		audio.volume = v
		if (v >= targetVolume) clearInterval(fadeTimer)
	}, stepMs)
}

const tryPlay = async () => {
	const audio = bgm.value
	if (!audio) return

	// 자동재생 정책 때문에 실패할 수 있음
	try {
		await audio.play()
		fadeIn(0.25, 2500) // ✅ 작은 볼륨 + 천천히
		started = true
	} catch (e) {
		// 자동재생 차단이면 클릭 때 시작
	}
}

// 1) 로드 시 자동재생 “시도”
onMounted(() => {
	tryPlay()
})

// 2) 어디든 첫 클릭하면 무조건 재생되게 (1회만)
const startBgmOnce = async () => {
	if (started) return
	await tryPlay()
}

const start = async () => {
	// "시작하기" 누르면 음악도 확실히 켜지게
	await startBgmOnce()

	console.log("시작 페이지 이동")
	// router.push('/story')
}
</script>

<style scoped>
.start-page {
	position: fixed;
	inset: 0;

	background-image: url("@/assets/images/start/background.png");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-color: #111;
}

/* 내용 영역 */
.overlay {
	text-align: center;
	color: white;
}

/* 메인 문구 */
.title {
	font-size: 150px;
	margin-bottom: 25px;
	line-height: 1.4;
	text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
	font-family: "Fitzgerald";
}

/* 시작하기 텍스트 */
.start-text {
	font-size: 24px;
	cursor: pointer;
	transition: all 0.25s ease;
	text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
	font-family: "Pretendard";
	font-weight: 700;
}

/* 마우스 올리면 */
.start-text:hover {
	opacity: 1;
	transform: scale(1.05);
	text-decoration: underline;
}

.char {
	opacity: 0;
	filter: blur(6px);
	animation: dissolve 0.45s ease forwards;
	animation-delay: calc(var(--i) * 0.07s);
}

.start {
	animation-delay: calc(1.2s + var(--i) * 0.07s);
}

@keyframes dissolve {
	from {
		opacity: 0;
		filter: blur(6px);
		transform: translateY(10px);
	}

	to {
		opacity: 1;
		filter: blur(0);
		transform: translateY(0);
	}
}

</style>