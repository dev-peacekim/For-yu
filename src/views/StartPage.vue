<template>
	<div class="start-page">
		<div class="overlay">
			<h1 class="title">
				우리의 시작은<br />
				작은 분식집에서였습니다
			</h1>

			<div class="buttons">
				<button class="start-btn">시작</button>
				<button class="cancel-btn">취소</button>
			</div>
		</div>
	</div>
</template>


<script setup>
const moveButton = (e) => {
	e.target.style.position = "absolute"
	e.target.style.left = Math.random() * 80 + "vw"
	e.target.style.top = Math.random() * 80 + "vh"
}
</script>


<style scoped>
.start-page {
	width: 100%;
	height: 100%;

	background-image: url('@/assets/images/start/background.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	display: flex;
	justify-content: center;
	align-items: center;
}

/* 살짝 어둡게 깔아서 글씨 잘보이게 */
.overlay {
	text-align: center;
	color: white;
	backdrop-filter: brightness(0.85);
}

.title {
	font-size: 42px;
	margin-bottom: 40px;
	line-height: 1.4;
}

.buttons {
	display: flex;
	gap: 20px;
	justify-content: center;
}

button {
	padding: 12px 28px;
	font-size: 18px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
}

.start-btn {
	background: #ff7b7b;
	color: white;
}

.cancel-btn {
	background: #ddd;
}
</style>