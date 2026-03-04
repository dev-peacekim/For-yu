<template>
	<div class="start-page">
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
import { inject } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const playBgm = inject("playBgm") // App.vue에서 제공한 함수

const start = async () => {
	if (playBgm) await playBgm()
	//router.push("/story") // 다음 페이지
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
	transform: translateY(180px);
}

/* 메인 문구 */
.title {
	font-size: 150px;
	margin-bottom: 10px;
	line-height: 1.4;
	text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
	font-family: "Fitzgerald";
}

/* 시작하기 텍스트 */
.start-text {
	display: inline-block;
	/* 핵심 */

	font-size: 24px;
	cursor: pointer;

	padding: 10px 22px;
	border-radius: 12px;

	background: rgba(255, 255, 255, 0.12);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);

	border: 1px solid rgba(255, 255, 255, 0.25);

	color: white;
	font-family: "Pretendard";
	font-weight: 700;

	text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);

	transition: all 0.25s ease;
}

/* 마우스 올리면 */
.start-text:hover {
	background: rgba(255, 255, 255, 0.2);
	transform: translateY(-2px) scale(1.05);
	box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}

.char {
	opacity: 0;
	filter: blur(6px);
	animation: dissolve 0.45s ease forwards;
	animation-delay: calc(var(--i) * 0.07s);
}

.start {
	animation-delay: calc(0.5s + var(--i) * 0.07s);
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