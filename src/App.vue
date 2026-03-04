<script setup>
import { RouterView } from "vue-router"
import { ref, provide } from "vue"
import bgmSrc from "@/assets/audio/cocktail_paradise.mp3"

const bgm = ref(null)

const playBgm = async () => {
  if (!bgm.value) return
  bgm.value.volume = 0.25
  try {
    await bgm.value.play()
  } catch (e) {
    // 자동재생 정책 때문에 실패할 수 있음 (Start 클릭이면 보통 성공)
  }
}

provide("playBgm", playBgm)
</script>

<template>
  <audio ref="bgm" :src="bgmSrc" loop preload="auto"></audio>
  <RouterView />
</template>

<style scoped>
</style>