<script setup lang="ts">
import { GoodsDetail } from '@/api/goods/response.ts'
import { Ref } from 'vue'
import { iconUrl } from '@/api/goods'
import { UserType } from '@/api/global/enum.ts'

const props = defineProps<{
  goodsDetail: Ref<GoodsDetail>
  goodsId: number
}>()

const goodsImage = props.goodsDetail.hasIcon
  ? iconUrl({ goodsId: props.goodsId })
  : ''
</script>

<template>
  <div
    class="w-full bg-white rounded-xl shadow-xl"
    :style="{
      borderStyle: 'solid',
      borderWidth: 'thick',
      borderColor:
        goodsDetail.publisherType === UserType.STUDENT ? 'blue' : 'red'
    }"
  >
    <div class="goods-picture" v-if="goodsImage != ''">
      <nut-image class="w-full" :src="goodsImage" />
    </div>
    <div class="goods-info px-2 pt-1">
      <div class="goods-name">
        <nut-ellipsis :line-height="20" :content="goodsDetail.name" :rows="2" />
      </div>
      <div class="goods-price px-2 pb-1">
        <nut-price class="!text-red-500" :price="goodsDetail.price / 100" />
      </div>
    </div>
  </div>
</template>